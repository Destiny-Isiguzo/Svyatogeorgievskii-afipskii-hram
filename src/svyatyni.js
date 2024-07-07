// Constants
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1000; // Scroll Y position to show scroll up button

const main = document.querySelector('.main');
const preloader = document.querySelector('.preloader');
const scrollUpBtn = document.querySelector('.scrollup-btn'); 


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