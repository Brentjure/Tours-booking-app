const express = require('express');
const userController = require('../contollers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUsers);

module.exports = router;
