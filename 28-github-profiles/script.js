const API_URL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUserAsync(userName) {
  try {
    const { data } = await axios.get(API_URL + userName);
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const user = search.value;
  if (user) {
    getUserAsync(user);

    search.value = '';
  }
});
