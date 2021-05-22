const router = require('express').Router();
const { User, Post, Content } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    Post.findAll({
        attributes: { exclude: ['user_id'] },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['user_id'] },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // expects 
    // {
    //     title: 'Taskmaster goes public!', 
    //     user_id: 1
    // }
    Post.create({
        title: req.body.title,
        user_id: req.session.user_id
    })
        .then(dbPostData => {
            res.json(dbPostData);
            console.log(json(dbPostData));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router;