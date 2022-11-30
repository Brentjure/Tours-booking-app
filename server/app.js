const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users');
// app.use('/api/v1/reviews');
// app.use('/api/v1/bookings');

module.exports = app;
