const tagsContainer = document.getElementById('tags');
const textarea = document.querySelector('.textarea');

// How many times the tags will be highlighted
const times = 30;

// Highlight / unhighlight time in milliseconds
const flickerTimeInMs = 100;

textarea.focus();

textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = '';
    }, 10);

    randomSelect();
  }
});

const createTags = input => {
  const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tagsContainer.innerHTML = '';

  tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
};

const randomSelect = () => {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, flickerTimeInMs);
  }, flickerTimeInMs);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * flickerTimeInMs);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');

  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = tag => {
  tag.classList.add('highlight');
};

const unhighlightTag = tag => {
  tag.classList.remove('highlight');
}; 
