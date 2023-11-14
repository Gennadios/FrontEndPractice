const sounds = ['bell', 'door', 'drums', 'keyboard', 'lighter', 'phone'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopOtherSounds();

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopOtherSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);

    audio.pause();
    audio.currentTime = 0;
  })
}
