import React from 'react';
import { TypeNote } from './NotesList';

interface NoteProps {
    note: TypeNote;

    onDelete: () => void;
    onEdit: () => void;
}

const Note: React.FC<NoteProps> = ({ note, onDelete, onEdit }) => {

    return (
        <div className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>

            <button className='btnDelete' onClick={onEdit}>Edit</button>
            <button className='btnDelete' onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Note;