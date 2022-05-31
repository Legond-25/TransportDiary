'use strict';

// Login Signup Animation
const signupRenderBtn = document.querySelector('.signUp');
const loginRenderBtn = document.querySelector('.logIn');
const signupSidebar = document.querySelector('.signup');
const loginSidebar = document.querySelector('.login');
signupRenderBtn.addEventListener('click', () => {
  signupSidebar.style.marginLeft = '0px';
  loginSidebar.style.marginLeft = '550px';
  signupSidebar.classList.toggle('hidden');
  loginSidebar.classList.toggle('hidden');
});
loginRenderBtn.addEventListener('click', () => {
  signupSidebar.style.marginLeft = '-400px';
  loginSidebar.style.marginLeft = '0px';
  signupSidebar.classList.toggle('hidden');
  loginSidebar.classList.toggle('hidden');
});
