const router = require('express').Router();
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
    Content.findAll({
        attributes: { exclude: ['user_id', 'post_id'] },
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Post,
                attributes: ['title']
            }
        ]
    })
        .then(dbContentData => res.json(dbContentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects => {content_text: "This is the content", user_id: 1, post_id: 2}
    Content.create({
        content_text: req.body.content_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbContentData => res.json(dbContentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Content.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbContentData => {
            if (!dbContentData) {
                res.status(404).json({ message: 'No Content found with this id!' });
                return;
            }
            res.json(dbContentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;