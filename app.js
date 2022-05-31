// Requiring Modules
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Requiring files
const userRouter = require('./routes/userRoutes');
const rideRouter = require('./routes/rideRoutes');
const viewRouter = require('./routes/viewRoutes');

const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

// Setting up app
const app = express();

// Setting view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Dotenv config path
dotenv.config({ path: './.env' });

// Implement cors
app.use(cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Using BodyParser to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Using cookieParser
app.use(cookieParser());

// API Routes
app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/rides', rideRouter);

// Not defined Routes
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Can't find the requested url ${req.originalUrl} on this server!`,
      404
    )
  );
});

// Global error handling
app.use(globalErrorHandler);

// Exporting app
module.exports = app;
