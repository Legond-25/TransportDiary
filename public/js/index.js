import '@babel/polyfill';
import { login, logout, signup } from './login.js';
import { createRide } from './ride.js';

// DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const rideForm = document.querySelector('.ride--form');
const logOutBtn = document.querySelector('.logOutBtn');

// DELEGATION
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email_login').value;
    const password = document.getElementById('password_login').value;
    login(email, password);
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email_signup').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password_signup').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, mobile, password, passwordConfirm);
  });
}

if (rideForm) {
  rideForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fromPlace = document.getElementById('from_place').value;
    const fromDate = document.getElementById('from_date').value;
    const toPlace = document.getElementById('to_place').value;
    const toDate = document.getElementById('to_date').value;
    const distance = document.getElementById('distance').value;
    const rate = document.getElementById('rate').value;
    const quantity = document.getElementById('quantity').value;
    createRide(fromPlace, fromDate, toPlace, toDate, distance, rate, quantity);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}
