// Constants
const HEADER_ACTIVE_SCROLL_Y = 40;
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1500;


// Cache DOM elements
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const navMenu = document.getElementById('nav-menu-container');
const navMenuOverlay = document.getElementById('nav-menu-container-overlay');
const navBtns = document.querySelectorAll('#open-nav-btn, #close-nav-btn');
const preloader = document.getElementById('preloader');
const scrollUpBtn = document.getElementById('scrollup-btn');
const scrollY = window.scrollY;
const scheduleCards = document.querySelectorAll('.schedule-card');
const date = new Date();
const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
const year = document.getElementById('year');


// Extracted functions

function addFadeOutClass(element) {
  element.classList.add('fade-out');
}

function showHeaderAndMain() {
  header.style.opacity = '1';
  main.style.opacity = '1';
}

function toggleNavMenu() {
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
  // document.getElementById('header').classList.toggle('header-active', scrollY > HEADER_ACTIVE_SCROLL_Y);
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
  addFadeOutClass(preloader);
  showHeaderAndMain();
})

window.addEventListener('scroll', handleScroll);
document.getElementById('scrollup-btn').addEventListener('click', scrollToTop);


// scheduleCards.forEach((card) => {
//   const dayElement = card.querySelector('.schedule-card-day');

//   if (dayElement.innerText === dayOfWeek) {
//     card.classList.add('schedule-card-active');
//   }
// });


// Scroll reveal animation
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1500,
  delay: 500,
});

sr.reveal(`.schedule-card`, {
  interval: 110
})


// Footer year
year.innerText = new Date().getFullYear();