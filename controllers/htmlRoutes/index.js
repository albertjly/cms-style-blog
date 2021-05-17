const router = require('express').Router();
const homeRoute = require('./home-routes');
const dashboardRoute = require('./dashboard-routes');
const loginRoute = require('./login-routes');
const signinRoute = require('./signin-routes');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/login', loginRoute);
router.use('/signin', signinRoute);


module.exports = router;