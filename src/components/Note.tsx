import React from 'react';

interface NoteProps {
    title: string;
    content: string;

    onDelete: () => void
}

const Note: React.FC<NoteProps> = ({ title, content, onDelete }) => {

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>

            <button className='btnDelete' onClick={() => onDelete()}>Delete</button>
        </div>
    )
}

export default Note;