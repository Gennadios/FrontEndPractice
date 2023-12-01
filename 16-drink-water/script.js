const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

const highlightCups = index => {
  if (smallCups[index].classList.contains('full') 
    && (index === smallCups.length - 1 || !smallCups[index].nextElementSibling.classList.contains('full'))) {
      index -= 1;
  }

  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
};