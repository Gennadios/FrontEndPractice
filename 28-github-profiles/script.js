const API_URL = 'https://api.github.com/users/';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', event => {
  event.preventDefault();

  const user = search.value;
  if (user) {
    getUserAsync(user);

    search.value = '';
  }
});

async function getUserAsync(userName) {
  try {
    const { data } = await axios.get(API_URL + userName);
    
    createUserCard(data);
    getUserReposAsync(userName);
  } catch(error) {
    if (error.response.status === 404) {
      createErrorCard(`There is no profile with the username '${userName}'.`);
    }
    console.log(error);
  }
}

async function getUserReposAsync(userName) {
  try {
    const { data } = await axios.get(API_URL + userName + '/repos');
    
    addReposToCard(data);
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

function createUserCard(userData) {
  const cardHtml = `
    <div class="card">
      <div>
        <img
          src="${userData.avatar_url}"
          alt="${userData.name}"
          class="avatar"
        />
      </div>
        <div class="user-info">
          <h2>${userData.name}</h2>
          <p>
            ${userData.bio ? userData.bio : '<em>The user\'s bio is empty.</em>'}
          </p>
        
          <ul>
            <li>${userData.followers} <strong>Followers</strong></li>
            <li>${userData.following} <strong>Following</strong></li>
            <li>${userData.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos"></div>
        </div>
    </div>
  `;

  main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposElement = document.getElementById('repos');

  repos
    .slice(0, 5)
    .forEach(repo => {
    const repoElement = document.createElement('a');
    repoElement.classList.add('repo');
    repoElement.href = repo.html_url;
    repoElement.target = '_blank';
    repoElement.innerText = repo.name;

    reposElement.appendChild(repoElement);
  });
}

function createErrorCard(message) {
  const cardHTML = `
  <div class="card">
    <h1>${message}</h1>
  </div>
  `;

  main.innerHTML = cardHTML;
}
