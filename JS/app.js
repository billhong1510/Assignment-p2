const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

const notes = document.querySelector('#notes');
const editor = document.querySelector('#editor');

for (let i = 0; i < window.localStorage.length; i++) {
    const newNote = document.createElement('option');
    newNote.innerText = window.localStorage.key(i);
    notes.appendChild(newNote);
}
changeNote();


function newNote() {
    const note = prompt('Name of note?');
    window.localStorage.setItem(note, '');

    const noteElem = document.createElement('option');
    noteElem.innerText = note;
    notes.insertBefore(noteElem, notes.firstChild);

    notes.value = note;
    changeNote();
}

function changeNote() {
    editor.value = window.localStorage.getItem(notes.value);
}

function saveNote() {
    window.localStorage.setItem(notes.value, editor.value);
}

function deleteNote() {
    const note = notes.value;
    window.localStorage.removeItem(note);
    editor.value = '';
    for (let i = 0; i < notes.length; i++) {
        const option = notes[i];
        if (option.value === note) {
            notes.removeChild(option);
        }
    }
}
