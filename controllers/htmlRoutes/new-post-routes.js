const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
    res.render('new-post', {
        page_title: 'New Post',
        blog_title: 'My Post'
    });
});

module.exports = router;