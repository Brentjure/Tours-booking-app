const Tour = require('../Models/tourModel');

exports.createTour = async (req, res, next) => {
  try {
    await Tour.create(req.body);

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
      message: error.message,
    });
  }
};

exports.getAllTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
  next();
};

exports.getTour = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.tourId);
    console.log(tour);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
