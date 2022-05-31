const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  fromPlace: {
    type: String,
    required: ['true', 'Please enter the place from where ride was started.'],
    trim: true,
  },
  fromDate: {
    type: Date,
    required: ['true', 'Please enter the date from when ride was started.'],
  },
  toPlace: {
    type: String,
    required: ['true', 'Please enter the place where the ride was ended.'],
    trim: true,
  },
  toDate: {
    type: Date,
    required: ['true', 'Please enter the date when the ride was started.'],
  },
  distance: {
    type: Number,
    required: ['true', 'Please enter the total distance travelled.'],
  },
  rate: {
    type: Number,
    required: ['true', 'Please enter the fuel rate (per litre).'],
  },
  quantity: {
    type: Number,
    required: ['true', 'Please enter the fuel quantity (litre).'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Ride must belong to a User'],
  },
});

// Query Middleware
rideSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo mobile',
  });

  next();
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
