// Constants
const HEADER_ACTIVE_SCROLL_Y = 40; // Scroll Y position to activate header
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1500; // Scroll Y position to show scroll up button

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
const tabBtnContainer = document.querySelector('.tab-btn-container'); 
const tabContentContainer = document.querySelector('.tab-content-container'); 
const tabBtns = tabBtnContainer.querySelectorAll('.tab-btn'); 
const tabContents = tabContentContainer.querySelectorAll('.tab-content');
const scheduleCurrentDayTimeElement = document.getElementById('schedule-current-day-time'); 
const year = document.getElementById('year');


// Extracted functions

/**
 * Add fade-out class to an element
 */
function addFadeOutClass(element) {
  element.classList.add('fade-out');
}

/**
 * Show header and main elements after load
 */
function showHeaderAndMain() {
  header.style.opacity = '1';
  main.style.opacity = '1';
}

/**
 * Toggle navigation menu
 */
function toggleNavMenu() {
  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
      navMenuOverlay.classList.toggle('nav-overlay-show');
    });
  });

  navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      navMenu.classList.remove('show-menu');
      navMenuOverlay.classList.remove('nav-overlay-show');
    }
  });
}

/**
 * Handle scroll event
 */
function handleScroll() {
  document.getElementById('header').classList.toggle('header-active', scrollY > HEADER_ACTIVE_SCROLL_Y);
  document.getElementById('scrollup-btn').classList.toggle('scrollup-btn-show', scrollY > SCROLL_UP_BTN_SHOW_SCROLL_Y);
}

/**
 * Scroll to top of the page
 */
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
});

window.addEventListener('scroll', handleScroll);
document.getElementById('scrollup-btn').addEventListener('click', scrollToTop);

// Add event listeners to the tab buttons
tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all buttons and contents
    tabBtns.forEach((btn) => btn.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    // Add active class to the current button and content
    btn.classList.add('active');
    tabContents[index].classList.add('active');
  });
});

// Highlight schedule card for current day
scheduleCards.forEach((card) => {
  const dayElement = card.querySelector('.schedule-card-day');

  if (dayElement.innerText.toLowerCase() === dayOfWeek.toLowerCase()) {
    card.classList.add('schedule-card-active');
  }
});

// Update schedule current day time every second
setInterval(() => {
  const now = new Date();
  scheduleCurrentDayTimeElement.textContent = now.toLocaleTimeString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}, 1000);

// Update footer year
year.innerText = new Date().getFullYear();