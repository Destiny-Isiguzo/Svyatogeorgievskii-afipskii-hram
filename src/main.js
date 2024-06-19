// Constants
const PRELOADER_FADE_OUT_DELAY = 1300;
const HEADER_MAIN_OPACITY_DELAY = 1200;
const HEADER_ACTIVE_SCROLL_Y = 40;
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1500;

// Extracted functions
function addFadeOutClass(element, delay) {
  setTimeout(() => {
    element.classList.add('fade-out');
  }, delay);
}

function showHeaderAndMain() {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  header.style.opacity = '1';
  main.style.opacity = '1';
}

function toggleNavMenu() {
  const navMenu = document.getElementById('nav-menu-container');
  const openNavBtn = document.getElementById('open-nav-btn');
  const closeNavBtn = document.getElementById('close-nav-btn');

  openNavBtn.addEventListener('click', () => navMenu.classList.add('show-menu'));
  closeNavBtn.addEventListener('click', () => navMenu.classList.remove('show-menu'));

  navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      navMenu.classList.remove('show-menu');
    }
  });
}

function handleScroll() {
  const header = document.getElementById('header');
  const scrollUpBtn = document.getElementById('scrollup-btn');
  const scrollY = window.scrollY;

  header.classList.toggle('header-active', scrollY > HEADER_ACTIVE_SCROLL_Y);
  scrollUpBtn.classList.toggle('scrollup-btn-show', scrollY > SCROLL_UP_BTN_SHOW_SCROLL_Y);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  addFadeOutClass(preloader, PRELOADER_FADE_OUT_DELAY);
  setTimeout(showHeaderAndMain, HEADER_MAIN_OPACITY_DELAY);
  toggleNavMenu();
});

window.addEventListener('scroll', handleScroll);
document.getElementById('scrollup-btn').addEventListener('click', scrollToTop);


// Footer year
const year = document.getElementById('year');
year.innerText = new Date().getFullYear();