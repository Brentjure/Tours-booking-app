const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trum: true,
      unique: true,
      required: [true, 'A tour must have a name!'],
      minleghth: [10, 'A tour must have 10 characters or more!'],
      maxlength: [40, 'A tour must have 40 characters or less!'],
    },
    slug: {
      type: String,
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have duration!'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size!'],
    },
    difficulty: {
      type: String,
      trim: true,
      emun: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty must be either easy, medium or difficult!',
      },
    },
    averageRatings: {
      type: Number,
      default: 4.5,
      min: [1.0, 'Rating must be greater than or equal to 1'],
      max: [5.0, 'Ratings must be less than or equal to 5'],
      set: (value) => Math.round(value * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: ['A tour must have a price!'],
    },
    discountPrice: {
      type: Number,
      validate: function (value) {
        return value < this.price;
      },
      message: `Discount price should be below regular price`,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a summary!'],
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description!'],
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover photo!'],
    },
    images: {
      type: [String],
      required: [true, 'A our must have a photo gallary!'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
    startLocation: {
      type: {
        type: String,
        default: 'Point',
        enum: 'Point',
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: 'Point',
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    guides: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
