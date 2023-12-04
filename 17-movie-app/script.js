const API_KEY = 'PASTE_YOUR_API_KEY_HERE';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getClassByRating = vote => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};

const showMovies = movies => {
  main.innerHTML = '';

  movies.forEach(movie => {
    const { title, poster_path, vote_average , overview } = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRating(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        ${overview}
      </div>
    `;

    main.appendChild(movieElement);
  });
};

const getMovies = async url => {
  const response = await fetch(url);
  const jsonData = await response.json();

  showMovies(jsonData.results);
};

// Get initial movies.
getMovies(API_URL);

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    const urlToFetch = SEARCH_URL + searchTerm;
    getMovies(urlToFetch);

    // Reset search bar value.
    search.value = 0;
  } else {
    window.location.reload();
  }
});
