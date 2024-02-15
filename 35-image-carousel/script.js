const images = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const imgList = document.querySelectorAll('#images img');

let idx = 0;
const imgIntervalInMs = 3000;
const imgWidthRem = 31.25;

let interval = setInterval(run, imgIntervalInMs);

function run() {
  idx += 1;

  changeImage();
}

function changeImage() {
  if(idx > imgList.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgList.length - 1;
  }

  images.style.transform = `translateX(${-idx * imgWidthRem}rem)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, imgIntervalInMs);
}

leftBtn.addEventListener('click', () => {
  idx -= 1;

  changeImage();
  resetInterval();
});

rightBtn.addEventListener('click', () => {
  idx += 1;

  changeImage();
  resetInterval();
});
