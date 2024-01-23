const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>

      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea ${text ? 'hidden' : ''}></textarea>
  `;

  const editButton = note.querySelector('.edit');
  const deleteButton = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked.parse(text);

  deleteButton.addEventListener('click', () => {
    note.remove();
  });

  editButton.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', event => {
    const { value } = event.target;

    main.innerHTML = marked.parse(value);
  })

  document.body.appendChild(note);
}