const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const updateBigCup = () => {
  const fullSmallCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullSmallCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullSmallCups / totalCups) * 20.5}rem`;
    percentage.innerText = `${fullSmallCups / totalCups * 100}%`;
  }

  if (fullSmallCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullSmallCups / 1000)}L`;
  }
};

updateBigCup();

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

  updateBigCup();
};
