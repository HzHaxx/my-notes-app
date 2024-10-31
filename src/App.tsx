import { useState } from 'react';
// Components
import NoteForm from './components/NoteForm';
import NotesList, { Note } from './components/NotesList';
import { title } from 'process';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  const addNote = (title: string, content: string) => {
    const newNote = {
      id: Date.now(),
      title,
      content
    };
  
    setNotes([...notes, newNote]);
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
