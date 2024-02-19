const contentImages = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent();
    hideAllItems();

    item.classList.add('active');
    contentImages[idx].classList.add('show');
  });
});

function hideAllContent() {
  contentImages.forEach(content => {
    content.classList.remove('show');
  });
}

function hideAllItems() {
  listItems.forEach(item => {
    item.classList.remove('active');
  });
}
