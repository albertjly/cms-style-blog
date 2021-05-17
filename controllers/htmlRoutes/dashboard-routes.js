const router = require('express').Router();

const posts = [
  {
    title: 'Object Oriented Programming',
    date: new Date(),
    post: false,
    content: 'Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.'
  },
  {
    title: 'Department of Motor Vehicle',
    date: new Date(),
    post: false,
    content: 'Objectf gsf gsdf gsdfg se ds sdf gert'
  }
]

router.get('/', (req, res) => {
  const postData = {
    dashboardPosts: posts
  };
  
  res.render('dashboard', postData);
});

module.exports = router;