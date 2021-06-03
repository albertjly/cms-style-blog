const router = require('express').Router();
const withAuth = require('../../utils/auth.js');

router.get('/', withAuth, (req, res) => {
    res.render('edit-post', {
        page_title: 'Edit Post',
        blog_title: 'My Post',
        logged_in: req.session.logged_in
    });
});



module.exports = router;