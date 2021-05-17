const router = require('express').Router();

router.get('/', (req, res) => {
  
  res.render('login', {
    page_title: 'Login',
    blog_title: 'My Account'
  });
});

module.exports = router;