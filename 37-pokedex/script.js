const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5D4',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: '#EAEDA1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normaL: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

const fetchPokemonsAsync = async () => {
  for(let i = 1; i <= pokemonCount; i++) {
    await getPokemonAsync(i);
  }
};

const getPokemonAsync = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);
};

const createPokemonCard = pokemon => {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.classList.add('pokemon');

  const pokemonId = pokemon.id.toString().padStart(3, '0');
  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokemonTypes = pokemon.types.map(type => type.type.name);
  const type = mainTypes.find(type => pokemonTypes.indexOf(type) > -1);
  const color = colors[type];

  pokemonDiv.style.backgroundColor = color;

  const pokemonInnerHtml = `
  <div class="img-container">
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png" alt="${pokemon.name}">
  </div>
  <div class="info">
    <div class="poke-number">#${pokemonId}</div>
    <h3 class="poke-name">${pokemonName}</h3>
    <small class="poke-type">Type: <span>${type}</span></small>
  </div>
  `;

  pokemonDiv.innerHTML = pokemonInnerHtml;
  pokeContainer.appendChild(pokemonDiv);
};

const pokemonIdString = id => {
  return id < 10 ? `00${id}` : id < 100 ? `0${id}` : id.toString();
};

fetchPokemonsAsync();
