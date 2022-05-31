const Ride = require('./../models/rideModel');

exports.getLoginForm = (req, res) => {
  res.status(200).render('register_login');
};

exports.getSignupForm = (req, res) => {
  res.status(200).render('register_login');
};

exports.getUserDashboard = async (req, res) => {
  res.status(200).render('user_dashboard', {
    title: 'User Dashboard',
    user: res.locals.user,
  });
};

exports.getAdminDashboard = async (req, res) => {
  const rides = await Ride.find();

  if (!rides) {
    return next(new AppError('No rides found', 404));
  }

  res.status(200).render('admin_dashboard', {
    title: 'Admin Dashboard',
    rides,
    user: res.locals.user,
  });
};
