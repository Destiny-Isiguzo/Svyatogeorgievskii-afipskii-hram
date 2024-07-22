// Constants
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1000; // Scroll Y position to show scroll up button

const main = document.querySelector('.main');
const preloader = document.querySelector('.preloader');
const scrollUpBtn = document.querySelector('.scrollup-btn'); 
const carouselContainer = document.querySelector('.carousel-container');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const paginationItems = document.querySelectorAll('.carousel-pagination-item');
const tabBtnContainer = document.querySelector('.tab-btn-container'); 
const tabContentContainer = document.querySelector('.tab-content-container'); 
const tabBtns = tabBtnContainer.querySelectorAll('.tab-btn'); 
const tabContents = tabContentContainer.querySelectorAll('.tab-content');


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
   main.style.opacity = '1';
}

/**
 * Handle scroll event
 */
function handleScroll() {
   const scrollY = window.scrollY; 
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
});
 
window.addEventListener('scroll', handleScroll);
scrollUpBtn.addEventListener('click', scrollToTop);


/**
 * Carousel
*/

// Set the current slide index
// let currentSlide = 0;

// // Set the auto-play interval
// const autoPlayInterval = setInterval(() => {
//   currentSlide = (currentSlide + 1) % carouselItems.length;
//   updateCarousel();
// }, 7000);

// // Update the carousel when the navigation buttons are clicked
// document.querySelector('.carousel-prev').addEventListener('click', () => {
//   currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
//   updateCarousel();
// });

// document.querySelector('.carousel-next').addEventListener('click', () => {
//   currentSlide = (currentSlide + 1) % carouselItems.length;
//   updateCarousel();
// });

// // Update the carousel when a pagination item is clicked
// paginationItems.forEach((item, index) => {
//    item.addEventListener('click', () => {
//       currentSlide = index;
//       updateCarousel();
//    });
// });

// // Update the carousel function
// function updateCarousel() {
//   // Update the carousel inner wrapper transform
//   carouselInner.style.transform = `translateX(${currentSlide * -100}%)`;

//   // Update the pagination active state
//    paginationItems.forEach((item, index) => {
//       item.classList.toggle('carousel-pagination-item-active', index === currentSlide);
//    });
// }

// // Initialize the carousel
// updateCarousel();


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