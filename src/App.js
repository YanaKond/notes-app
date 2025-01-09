import React, {useState, useEffect} from "react";
import Note from './Note';
import './index.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const newNoteObj = {
        id: Date.now(),
        text: newNote,
        createdAt: new Date().toLocaleString(),
        completed: false,
      };
      setNotes([...notes, newNoteObj]);
      setNewNote('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <div className="App">
      <h1>Мои заметки</h1>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Введите текст заметки"
        />
        <button onClick={handleAddNote}>Добавить заметку</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onToggle={toggleNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;