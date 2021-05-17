const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('new-post', {
        page_title: 'New Post',
        blog_title: 'My Post'
    });
});

module.exports = router;