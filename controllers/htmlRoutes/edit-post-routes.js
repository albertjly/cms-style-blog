const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('edit-post', {
        page_title: 'Edit Post',
        blog_title: 'My Post'
    });
});

module.exports = router;