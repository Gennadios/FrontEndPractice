const tagsContainer = document.getElementById('tags');
const textarea = document.querySelector('.textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value);
});

function createTags(input) {
  const tags = input.split('\n')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tagsContainer.innerHTML = '';

  tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
}