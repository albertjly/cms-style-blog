const router = require('express').Router();
const moment = require('moment');

const posts = [
  {
    post: true,
    title: 'Object Oriented Programming',
    date: moment().format("YYYY/MM/DD -- hh:mm:ss a"),
    content: 'Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects.'
  }
];

router.get('/', (req, res) => {
  const postsFilter = posts.filter(data => {
    if(data.post == true) return data; 
  });
  
  res.render('dashboard', {
    page_title: 'Dashboard',
    blog_title: 'My dashboard',
    dashboardPosts: postsFilter
  });
});

module.exports = router;