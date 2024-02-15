const container = document.getElementById('container');
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'lightblue',
  'blue',
  'purple',
];
const SQUARE_QUANTITY = 500;

for (let i = 0; i < SQUARE_QUANTITY; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => resetColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function resetColor(element) {
  element.style.background = '#1D1D1D';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
