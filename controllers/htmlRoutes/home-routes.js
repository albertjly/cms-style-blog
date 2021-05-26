const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Content } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: { exclude: ['user_id'] },
    include: [
      {
        model: Content,
        attributes: ['content_text']
      },
      {
        model: User,
        attributes: ['username'],
      }
    ],
    limit: 3,
    order: [['createdAt', 'DESC']]
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => {
        return post.get({ plain: true });
      });
      console.log(posts);
      const contents = posts.map((content) => {
        return content.contents[0];
      });
      // console.log(contents);
      console.log(req.session.logged_in);

      res.render('homepage', {
        page_title: 'Home',
        blog_title: 'The Tech Blog',
        homePosts: posts,
        content: contents,
        logged_in: req.session.logged_in
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
