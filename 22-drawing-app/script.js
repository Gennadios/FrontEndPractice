const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeElement = document.getElementById('brush-size');
const colorElement = document.getElementById('color');
const clearElement = document.getElementById('clear');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let brushSize = 15;
const minBrushSize = 5;
const maxBrushSize = 60;

let color = 'black';
let isMousePressed = false;
let x;
let y;

canvas.addEventListener('mousedown', event => {
  isMousePressed = true;

  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isMousePressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', event => {
  if (isMousePressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, brushSize, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = brushSize * 2;
  ctx.stroke();
}

const updateDisplayedBrushSize = () => {
  sizeElement.innerHTML = brushSize;
};

increaseBtn.addEventListener('click', () => {
  brushSize += 5;

  if (brushSize > maxBrushSize) {
    brushSize = maxBrushSize;
  }

  updateDisplayedBrushSize();
});

decreaseBtn.addEventListener('click', () => {
  brushSize -= 5;

  if (brushSize < minBrushSize) {
    brushSize = minBrushSize;
  }

  updateDisplayedBrushSize();
});

colorElement.addEventListener('change', event => color = event.target.value);

clearElement.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
