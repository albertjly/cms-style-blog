const router = require('express').Router();
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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