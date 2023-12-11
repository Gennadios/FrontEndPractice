const header = document.getElementById('card-header');
const title = document.getElementById('title');
const text = document.getElementById('text');
const profileImg = document.getElementById('profile-img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

const loadData = () => {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Laptop">';
  title.innerHTML = 'Card Title';
  text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, molestias?';
  profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profile picture">';
  authorName.innerHTML = 'Bill Gates';
  date.innerHTML = '10 Dec, 2023';

  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
};

setTimeout(loadData, 2500);
