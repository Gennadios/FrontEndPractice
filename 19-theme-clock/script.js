const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggleElement = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggleElement.addEventListener('click', event => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    event.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    event.target.innerHTML = 'Light mode';
  }
});

const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const clockHours = hours % 12;
  hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours, 0, 11, 0, 360)}deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

  timeElement.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

setTime();
setInterval(setTime, 1000);
