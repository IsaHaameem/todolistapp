// Select elements
const notepad = document.getElementById('notepad');
const saveNotesBtn = document.getElementById('save-notes');
const clearNotesBtn = document.getElementById('clear-notes');

// Load saved notes from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notepad.value = savedNotes;
    }
});

// Save notes to localStorage
saveNotesBtn.addEventListener('click', () => {
    const notes = notepad.value;
    localStorage.setItem('notes', notes);
    alert('Notes saved successfully!');
});

// Clear notes from textarea and localStorage
clearNotesBtn.addEventListener('click', () => {
    notepad.value = '';
    localStorage.removeItem('notes');
    alert('Notes cleared successfully!');
});
