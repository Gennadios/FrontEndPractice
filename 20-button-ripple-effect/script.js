const rippleButtons = document.querySelectorAll('.ripple-btn');

rippleButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    const viewportX = event.clientX;
    const viewportY = event.clientY;

    const btnTop = event.target.offsetTop;
    const btnLeft = event.target.offsetLeft;

    const xInside = viewportX - btnLeft;
    const yInside = viewportY - btnTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});