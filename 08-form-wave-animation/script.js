const labels = document.querySelectorAll('.form-control label');
const transitionDelayMultiplier = 60;

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * transitionDelayMultiplier}ms">${letter}</span>`)
    .join('');
});