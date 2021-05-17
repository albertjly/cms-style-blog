const router = require('express').Router();

router.get('/', (req, res) => {
  
  res.render('signin', {
    page_title: 'Sign In',
    blog_title: 'My Account'
  });
});

module.exports = router;