const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const textBarElement = document.getElementById('text-bar');
const form = document.querySelector('.form');

let text = '';
let idx = 1;
let speed = 200 / speedElement.value;

const writeText = () => {
  text = text ? text : textElement.innerHTML;
  textElement.innerHTML = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
};

writeText();

form.addEventListener('submit', event => {
  event.preventDefault();
  text = textBarElement.value;
  textElement.innerHTML = text;
  textBarElement.value = '';
  idx = 1;
});

speedElement.addEventListener('input', event => speed = 300 / event.target.value);
