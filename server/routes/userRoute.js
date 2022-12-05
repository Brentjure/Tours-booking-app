const express = require('express');
const userController = require('../contollers/userController');
const authController = require('../contollers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);

module.exports = router;
