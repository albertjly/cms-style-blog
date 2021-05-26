const router = require('express').Router();

router.get('/edit', (req, res) => {
    res.render('edit-post', {
        page_title: 'Edit Post',
        blog_title: 'My Post',
        logged_in: req.session.logged_in
    });
});

router.get('/new', (req, res) => {
    res.render('new-post', {
        page_title: 'New Post',
        blog_title: 'My Post'
    });
});

module.exports = router;