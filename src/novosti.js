// Constants
const SCROLL_UP_BTN_SHOW_SCROLL_Y = 1000; // Scroll Y position to show scroll up button

const main = document.querySelector('.main');
const preloader = document.querySelector('.preloader');
const scrollUpBtn = document.querySelector('.scrollup-btn'); 
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNavPrev = document.querySelector('.carousel-prev');
const carouselNavNext = document.querySelector('.carousel-next');
const carouselPaginationItems = document.querySelectorAll('.carousel-pagination-item');
const newsSingleContentWordCount = document.querySelector('.news-single-content-word-count');
const newsSingleContentTexts = document.querySelectorAll('.news-single-content-text');
const newsSingleContentReadTime = document.querySelectorAll('.news-single-content-read-time');


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



let currentIndex = 0;
const carouselItemCount = carouselItems.length;

carouselNavPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItemCount) % carouselItemCount;
  updateCarousel();
});

carouselNavNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItemCount;
  updateCarousel();
});

carouselPaginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});



function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('carouselItemActive');
    if (index === currentIndex) {
      item.classList.add('carouselItemActive');
    }
  });

  carouselPaginationItems.forEach((item, index) => {
    item.classList.remove('carouselPaginationItemActive');
    if (index === currentIndex) {
      item.classList.add('carouselPaginationItemActive');
    }
  });

  carouselInner.style.transform = `translateX(${currentIndex * -100}%)`;
}


/**
 * Get all words from news single content texts and update word count
*/
function updateWordCount() {
  let totalWords = 0;

  newsSingleContentTexts.forEach((text) => {
    const words = text.textContent.trim().split(/\s+/);
    totalWords += words.length;
  });

  newsSingleContentWordCount.textContent = ` ${totalWords} слов`;
}

// Call the function to update the word count
updateWordCount();


/**
 * Calculate reading time based on average reading speed
*/
function calculateReadingTime() {
  const averageReadingSpeed = 100; // words per minute
  let totalWords = 0;

  newsSingleContentTexts.forEach((text) => {
    const words = text.textContent.trim().split(/\s+/);
    totalWords += words.length;
  });

  const minutes = totalWords / averageReadingSpeed;
  const seconds = Math.round(minutes * 60);

  const hours = Math.floor(seconds / 3600);
  const minutesRemaining = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;

  const timeString = [
    hours ? `${hours} ч.` : '',
    minutesRemaining ? `${minutesRemaining} мин.` : '',
    secondsRemaining ? `${secondsRemaining} сек.` : '',
  ].filter(Boolean).join(' ');

  newsSingleContentReadTime.forEach((element) => {
    element.textContent = `${timeString} на чтение`;
  });
}

// Call the function to calculate and update reading time
calculateReadingTime();