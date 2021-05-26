const router = require('express').Router();
const moment = require('moment');
const sequelize = require('../../config/connection');
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: { exclude: ['user_id'] },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ],
    order: [['createdAt', 'DESC']]
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => {
        return post.get({ plain: true });
      });
      console.log(posts);

      res.render('dashboard', {
        page_title: 'Dashboard',
        blog_title: 'My dashboard',
        dashboardPosts: posts,
        logged_in: req.session.logged_in
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;