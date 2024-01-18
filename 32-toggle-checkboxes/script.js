const toggles = document.querySelectorAll('.toggle');
const goodToggle = document.getElementById('good');
const cheapToggle = document.getElementById('cheap');
const fastToggle = document.getElementById('fast');

toggles.forEach(toggle => {
  toggle.addEventListener('change', event => {
    doTheTrick(event.target);
  });
});

function doTheTrick(theClickedOne) {
  if (goodToggle.checked && cheapToggle.checked && fastToggle.checked) {
    if (goodToggle === theClickedOne) {
      fastToggle.checked = false;
    }

    if (cheapToggle === theClickedOne) {
      goodToggle.checked = false;
    }

    if (fast === theClickedOne) {
      cheapToggle.checked = false;
    }
  }
}
