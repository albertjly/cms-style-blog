const router = require('express').Router();
const homeRoute = require('./home-routes');
const dashboardRoute = require('./dashboard-routes');
const loginRoute = require('./login-routes');
const signinRoute = require('./signin-routes');
const editPostRoute = require('./edit-post-routes');
const newPostRoute = require('./new-post-routes');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/login', loginRoute);
router.use('/signin', signinRoute);
router.use('/edit-post', editPostRoute);
router.use('/new-post', newPostRoute);


module.exports = router;