const router = require('express').Router();
const moment = require('moment');
const sequelize = require('../../config/connection');
const { User, Post, Content } = require('../../models');
const withAuth = require('../../utils/auth.js');

router.get('/', withAuth, (req, res) => {
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
      // console.log(posts);

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

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'title'
    ],
    include: [
      {
        model: Content,
        attributes: ['content_text']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        // console.log(post);
        const content_text = post.contents.map(({ content_text }) => content_text).join('\n');
        const newPost = { ...post, content_text };
        // console.log(newPost);

        res.render('edit-post', {
          page_title: 'Edit Post',
          blog_title: 'My Post',
          post: newPost,
          logged_in: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;