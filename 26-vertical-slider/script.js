const container = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slightLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
  const sliderHeight = container.clientHeight;
  if (direction === 'up') {
    activeSlideIndex += 1;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight})px`;
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight})px`;
}