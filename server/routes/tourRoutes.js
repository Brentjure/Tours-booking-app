const express = require('express');
const tourController = require('../contollers/tourController');

const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router.route('/:tourId').get(tourController.getTour);

module.exports = router;
