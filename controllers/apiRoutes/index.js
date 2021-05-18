const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const contentRoutes = require('./content-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/contents', contentRoutes);

module.exports = router;