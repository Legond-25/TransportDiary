import axios from 'axios';
import { showAlert } from './alerts.js';

export const signup = async (
  name,
  email,
  mobile,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        mobile,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'User Registration Successfull!');
      window.setTimeout(() => {
        location.assign('/userDashboard');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.data.user.role === 'admin' && res.data.status === 'success') {
      showAlert('success', 'Logged In Successfully!');
      window.setTimeout(() => {
        location.assign('/adminDashboard');
      }, 1500);
    } else if (
      res.data.data.user.role === 'driver' &&
      res.data.status === 'success'
    ) {
      showAlert('success', 'Logged In Successfully!');
      window.setTimeout(() => {
        location.assign('/userDashboard');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    showAlert('success', 'Logged Out Successfully! Thank You');

    window.setTimeout(() => {
      if (res.data.status === 'success') {
        location.reload(true); // To reload page from server set true
        location.assign('/login');
      }
    }, 1500);
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
