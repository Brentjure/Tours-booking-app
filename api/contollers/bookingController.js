const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const factory = require('./handlerFactory');
const Booking = require('../Models/bookingModel');
const Tour = require('../Models/tourModel');
const User = require('../Models/userModel');
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
    success_url: `http://127.0.0.1:3000/`,
    cancel_url: `http://127.0.0.1:3000/account/my-bookings`,
    // success_url: `${req.protocol}://${req.get('host')}/`,
    // cancel_url: `${req.protocol}://${req.get('host')}/tours/${tour.id}`,
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

const createBookingCheckout = async (session) => {
  const tour = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const price = session.display_items[0].amount / 100;
  await Booking.create({ tour, user, price });
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed')
    createBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
};
