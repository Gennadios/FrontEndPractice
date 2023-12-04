const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlideIdx = 0;

const setBgToBody = () => {
  body.style.backgroundImage = slides[activeSlideIdx].style.backgroundImage;
};

setBgToBody();

const setActiveSlide = () => {
  slides.forEach(slide => slide.classList.remove('active'));

  slides[activeSlideIdx].classList.add('active');
};

rightBtn.addEventListener('click', () => {
  activeSlideIdx += 1;

  if (activeSlideIdx > slides.length - 1) {
    activeSlideIdx = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlideIdx -= 1;

  if (activeSlideIdx < 0) {
    activeSlideIdx = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});