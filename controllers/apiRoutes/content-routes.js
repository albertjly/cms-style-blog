const router = require('express').Router();
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
    Content.findAll()
        .then(dbContentData => res.json(dbContentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;