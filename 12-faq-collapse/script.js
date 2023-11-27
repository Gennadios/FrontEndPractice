const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});
