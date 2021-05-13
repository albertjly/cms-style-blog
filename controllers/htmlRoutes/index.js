const router = require('express').Router();
const homeRoute = require('./home-routes');
const dashboardRoute = require('./dashboard-routes');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);


module.exports = router;