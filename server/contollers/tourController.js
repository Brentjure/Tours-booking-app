const Tour = require('../Models/tourModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.createTour = catchAsync(async (req, res, next) => {
  await Tour.create(req.body);

  res.status(200).json({
    status: 'success',
  });
});

exports.getAllTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const tours = await features.query;

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.tourId);
  console.log(tour);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});
