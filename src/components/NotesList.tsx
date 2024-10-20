import React from "react";
import Note from "./Note";

export interface Note {
    id: number;
    title: string;
    content: string;
}

interface NotesListProps {
    notes: Note[];
    onDeleteNote: (id: number) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onDeleteNote }) => {

    return (
        <div className="notes-list">
            {notes.map(note => (
                <Note
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    onDelete={() => onDeleteNote(note.id)}
                />
            ))}
        </div>
    )
}

export default NotesList;