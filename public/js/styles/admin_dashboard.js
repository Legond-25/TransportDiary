// Nav-item Animation
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    const parent = link.parentNode;
    parent.childNodes[0].style.backgroundColor = '#ffb900';
  });

  link.addEventListener('mouseout', () => {
    const parent = link.parentNode;
    parent.childNodes[0].style.backgroundColor = '#495057';
  });
});
