const loveMe = document.querySelector('.love-me');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

const createHeart = event => {
  const heart = document.createElement('i');
  heart.classList.add('fas', 'fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const offsetLeft = event.target.offsetLeft;
  const offsetTop = event.target.offsetTop;

  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
};

loveMe.addEventListener('click', event => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if ((new Date().getTime() - clickTime) < 800) {
      createHeart(event);
      times.innerHTML = ++timesClicked;
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
