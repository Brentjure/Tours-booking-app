const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
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
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'lead-guide', 'guide'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  active: {
    type: Boolean,
    select: false,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  passwardChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.index({ name: 'text' });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwardChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.passwordIsCorrect = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfterTokenCreated = async function (
  JWTTimestamp
) {
  if (this.passwardChangedAt) {
    const changedTimestamp = parseInt(
      this.passwardChangedAt.getTime() / 1000,
      10
    );
    console.log(JWTTimestamp, changedTimestamp);
    return JWTTimestamp < changedTimestamp;
  }

  // false means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
