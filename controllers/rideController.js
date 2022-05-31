const Ride = require('../models/rideModel');
const catchAsyncError = require('./../utils/CatchAsync');
const AppError = require('./../utils/AppError');

// Getting all users from DB ----------> Tested (Working)
exports.getAllRides = catchAsyncError(async (req, res, next) => {
  const rideData = await Ride.find();

  if (!rideData) {
    return next(new AppError('No rides found.', 404));
  }

  res.status(200).json({
    status: 'success',
    results: rideData.length,
    data: {
      data: rideData,
    },
  });
});

// Creating a new user ----------> Tested (Working)
exports.createRide = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user._id;

  const newRide = await Ride.create(req.body);

  if (!newRide) {
    return next(new AppError('Error creating new ride. Please try again!'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: newRide,
    },
  });
});

// Getting A single user ----------> Tested (Working)
exports.getRide = catchAsyncError(async (req, res, next) => {
  const searchedRide = await Ride.findOne({ _id: req.params.id });

  if (!searchedRide) {
    return next(new AppError('Ride not found.', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: searchedRide,
    },
  });
});
