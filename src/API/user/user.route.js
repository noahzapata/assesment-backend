const router = require('express').Router();
const userController = require('./user.controller');

router.route('/signUp').post(userController.signUp);
router.route('/signin').post(userController.signIn);

module.exports = router;
