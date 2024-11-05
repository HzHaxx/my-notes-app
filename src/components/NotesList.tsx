import React from "react";
import Note from "./Note";

export interface TypeNote {
    id: number;
    title: string;
    content: string;
}

interface NotesListProps {
    notes: TypeNote[];
    onDeleteNote: (id: number) => void;
    onEditNote: (note: TypeNote) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onDeleteNote, onEditNote }) => {

    return (
        <div className="notes-list">
            {notes.map(note => (
                <Note
                    key={note.id}
                    note={note}
                    onDelete={() => onDeleteNote(note.id)}
                    onEdit={() => onEditNote(note)}
                />
            ))}
        </div>
    );
}

export default NotesList;