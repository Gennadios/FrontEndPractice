const button = document.getElementById('button');
const toasts = document.querySelector('.toasts');

const notificationDurationMs = 2500;

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = [
  'info',
  'success',
  'error',
];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const createNotification = (message = null, type = null) => {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type ? type : getRandomElement(types));

  notification.innerText = message ? message : getRandomElement(messages);

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove()
  }, notificationDurationMs);
};


button.addEventListener('click', () => createNotification());
