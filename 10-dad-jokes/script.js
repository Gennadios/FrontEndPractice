const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJokeAsync = async () => {
  const config = {
    headers: {
      'Accept': 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeElement.innerHTML = data.joke;
};

jokeBtn.addEventListener('click', generateJokeAsync);
generateJokeAsync();
