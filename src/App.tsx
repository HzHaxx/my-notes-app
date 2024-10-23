import { useState } from 'react';
// Components
import NoteForm from './components/NoteForm';
import NotesList, { Note } from './components/NotesList';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

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
      <NoteForm onSave={addNote} />
      <NotesList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
