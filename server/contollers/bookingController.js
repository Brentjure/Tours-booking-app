const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const factory = require('./handlerFactory');
const Booking = require('../Models/bookingModel');
const Tour = require('../Models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.createBooking = factory.createOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.getBooking = factory.getOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currentlly bookied tour
  const tour = await Tour.findById(req.params.tourId);

  // 2)  create cheout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [
          `${req.protocal}://${req.get('host')}/images/tour/${tour.imageCover}`,
        ],
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
  });

  // 3) send session as a response
  res.status(200).json({
    status: 'success',
    session,
  });
});
