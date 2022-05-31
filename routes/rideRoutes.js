const express = require('express');
const rideController = require('../controllers/rideController');
const authController = require('../controllers/authController');

// Setting Router
const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

// All routes below are only for admin
router.use(authController.restrictTo('driver'));

router
  .route('/')
  .get(rideController.getAllRides)
  .post(rideController.createRide);

router.route('/:id').get(rideController.getRide);

// Exporting Router
module.exports = router;
