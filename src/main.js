document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.visibility = 'visible';

  // Add the fade-out class to the preloader
  setTimeout(() => {
    preloader.style.visibility = 'hidden';
  }, 1100);
})


// Toggle nav menu
const navMenu = document.getElementById('nav-menu-container');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');

if (openNavBtn && closeNavBtn) {
  openNavBtn.addEventListener('click', () => navMenu.classList.add('show-menu'));
  closeNavBtn.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

// Remove nav menu on link click
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});



// Header box-shadow on scroll
// Scroll up button
const header = document.getElementById('header');
const scrollUpBtn = document.getElementById('scrollup-btn');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  header.classList.toggle('header-shadow-active', scrollY > 50);
  scrollUpBtn.classList.toggle('scrollup-btn-show', scrollY > 2000);
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});