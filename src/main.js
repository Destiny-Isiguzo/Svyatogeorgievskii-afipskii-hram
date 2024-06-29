// Constants
const HEADER_ACTIVE_SCROLL_Y = 40; // Scroll Y position to activate header
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 2000; // Scroll Y position to show scroll up button

// Cache DOM elements
const header = document.querySelector('.header');
const main = document.querySelector('.main'); 
const navMenu = document.querySelector('.nav-menu-container');
const navMenuOverlay = document.querySelector('.nav-menu-container-overlay'); 
const navBtns = document.querySelectorAll('.open-nav-btn, .close-nav-btn'); 
const preloader = document.querySelector('.preloader'); 
const scrollUpBtn = document.querySelector('.scrollup-btn'); 
const scheduleCards = document.querySelectorAll('.schedule-card');
const date = new Date(); 
const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
const tabBtnContainer = document.querySelector('.tab-btn-container'); 
const tabContentContainer = document.querySelector('.tab-content-container'); 
const tabBtns = tabBtnContainer.querySelectorAll('.tab-btn'); 
const tabContents = tabContentContainer.querySelectorAll('.tab-content');
const newsCards = document.querySelectorAll('.news-card');
const newsCardBtns = document.querySelectorAll('.news-card-btn');
const newsCardViewsNums = document.querySelectorAll('.news-card-views-num');
const newsCardViewsContainers = document.querySelectorAll('.news-card-views-container');
const scheduleCurrentDayTimeElement = document.getElementById('schedule-current-day-time'); 
const year = document.querySelector('.year');


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
  const scrollY = window.scrollY; 
  header.classList.toggle('header-active', scrollY > HEADER_ACTIVE_SCROLL_Y);
  scrollUpBtn.classList.toggle('scrollup-btn-show', scrollY > SCROLL_UP_BTN_SHOW_SCROLL_Y);
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
window.addEventListener('load', () => {
  addFadeOutClass(preloader);
  showHeaderAndMain();
  toggleNavMenu();
});

window.addEventListener('scroll', handleScroll);
scrollUpBtn.addEventListener('click', scrollToTop);

// Add event listeners to the tab buttons
tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all buttons and contents
    tabBtns.forEach((btn) => btn.classList.remove('tabBtnActive'));
    tabContents.forEach((content) => content.classList.remove('tabContentActive'));

    // Add active class to the current button and content
    btn.classList.add('tabBtnActive');
    tabContents[index].classList.add('tabContentActive');
  });
});

// Shortening dynamic long texts using ellipsis
document.querySelectorAll('.news-card-text').forEach((element) => {
  let text = element.textContent;
  const maxLength = 100;
  if (text.length > maxLength) {
    element.textContent = text.substring(0, maxLength) + '...';
  }
});

// // Get initial click counts from local storage
// const clickCounts = JSON.parse(localStorage.getItem('clickCounts')) || {};

// // Add event listeners to each button
// newsCardBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const href = e.target.getAttribute('href');
//     if (!clickCounts[href]) {
//       clickCounts[href] = 0;
//     }
//     if (!localStorage.getItem(`clicked_${href}`)) {
//       clickCounts[href]++;
//       localStorage.setItem(`clicked_${href}`, true);
//     }
//     localStorage.setItem('clickCounts', JSON.stringify(clickCounts));
//     updateViewCounts(href);
//   });
// });

// // Function to update the view counts
// function updateViewCounts(href) {
//   newsCards.forEach((card) => {
//     const cardHref = card.querySelector('.news-card-btn').getAttribute('href');

//     if (cardHref === href) {
//       const viewsNum = card.querySelector('.news-card-views-num');
//       viewsNum.textContent = clickCounts[href];
//       const viewsContainer = card.querySelector('.news-card-views-container');
//       viewsContainer.style.display = 'flex'; // keep it visible
//     }
//   });
// }

// // Initialize view counts on page load
// newsCards.forEach((card) => {
//   const cardHref = card.querySelector('.news-card-btn').getAttribute('href');
//   const viewsNum = card.querySelector('.news-card-views-num');
//   viewsNum.textContent = clickCounts[cardHref];
//   const viewsContainer = card.querySelector('.news-card-views-container');
//   if (clickCounts[cardHref] > 0) {
//     viewsContainer.style.display = 'flex'; // show if count is greater than 0
//   }
// });



// Highlight schedule card for current day
scheduleCards.forEach((card) => {
  const dayElement = card.querySelector('.schedule-card-day');

  if (dayElement.innerText.toLowerCase() === 'sunday' && dayOfWeek.toLowerCase() === 'sunday') {
    card.classList.add('schedule-card-active');
  }
});

// Update schedule current day time every second
setInterval(() => {
  const now = new Date();
  scheduleCurrentDayTimeElement.textContent = now.toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}, 1000);

// Update footer year
year.innerText = new Date().getFullYear();