import { useState } from 'react';
// Components
import NoteForm from './components/NoteForm';
import NotesList, { TypeNote } from './components/NotesList';

function App() {
  const [notes, setNotes] = useState<TypeNote[]>([]);
  const [editingNote, setEditingNote] = useState<TypeNote | null>(null)

  const addNote = (title: string, content: string) => {
    const newNote = {
      id: Date.now(),
      title,
      content
    };
  
    setNotes([...notes, newNote]);
  };

  const startEditingNote = (note: Note) => {
    setEditingNote(note);
  }

  const updateNote = (id: number, title: string, content: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, title, content } : note
    ));
    setEditingNote(null); // Limpia la nota en edición
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <NoteForm 
        onSave={editingNote ? updateNote : addNote}
        editingNote={editingNote}
      />
      <NotesList 
        notes={notes} 
        onDeleteNote={deleteNote}
        onEditNote={startEditingNote}
      />
    </div>
  );
}

export default App;
