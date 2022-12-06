const express = require('express');
const userController = require('../contollers/userController');
const authController = require('../contollers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);
router.patch('/updatePassword', authController.updatePassword);

router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);

module.exports = router;
