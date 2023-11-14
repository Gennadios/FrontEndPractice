const sounds = ['bell', 'door', 'drums', 'keyboard', 'lighter', 'phone'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  document.getElementById('buttons').appendChild(btn);
})
