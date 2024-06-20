// Constants
const HEADER_ACTIVE_SCROLL_Y = 40;
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1500;


// Extracted functions

function addFadeOutClass(element) {
  element.classList.toggle('fade-out', true);
}

function showHeaderAndMain() {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  header.style.opacity = '1';
  main.style.opacity = '1';
}

function toggleNavMenu() {
  const navMenu = document.getElementById('nav-menu-container');
  const navMenuOverlay = document.getElementById('nav-menu-container-overlay');
  const navBtns = document.querySelectorAll('#open-nav-btn, #close-nav-btn');

  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
      navMenuOverlay.classList.toggle('nav-overlay-show');
    });
  })

  navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      navMenu.classList.remove('show-menu');
      navMenuOverlay.classList.remove('nav-overlay-show');
    }
  })
}

function handleScroll() {
  const scrollY = window.scrollY;
  document.getElementById('header').classList.toggle('header-active', scrollY > HEADER_ACTIVE_SCROLL_Y);
  document.getElementById('scrollup-btn').classList.toggle('scrollup-btn-show', scrollY > SCROLL_UP_BTN_SHOW_SCROLL_Y);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  toggleNavMenu();
});

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  showHeaderAndMain();
  addFadeOutClass(preloader);
})

window.addEventListener('scroll', handleScroll);
document.getElementById('scrollup-btn').addEventListener('click', scrollToTop);


// Scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 500,
});

sr.reveal(`.hero-text-container`, {
  origin: 'left'
})

sr.reveal(`.hero-image`, {
  origin: 'right'
})


// Footer year
const year = document.getElementById('year');
year.innerText = new Date().getFullYear();