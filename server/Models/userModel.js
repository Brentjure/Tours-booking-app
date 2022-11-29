const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  emai: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Please provide your email'],
    validator: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
    required: [true, 'Please provide your password.'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Password are not the same!',
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin', 'lead-guide', 'guide'],
    },
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
