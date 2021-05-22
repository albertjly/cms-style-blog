const router = require('express').Router();
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'created_at']
            },
            {
                model: Content,
                attributes: ['id', 'content_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: { id: req.params.id },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'created_at']
            },
            {
                model: Content,
                attributes: ['id', 'content_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            res.status(400).json({ error: 'Not Found' });
        }

        const isAuthorized = user.checkPassword(req.body.password);

        if (!isAuthorized) {
            res.status(400).json({ error: 'Not Found' });
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.email = user.email;
            req.session.logged_in = true;
            console.log(user);
            res.json(user);
        })
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;