const router = require('express').Router();

router.get('/', (req, res) => {
  
  res.render('homepage', {
    blog_title: 'The Tech Blog'
  });
});

module.exports = router;
