import React, { useState } from "react";

interface NoteFormProps {
    onSave: (title: string, content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
         if (title.trim() === '' || content.trim() === '') {
            alert('Both fields are required');
            return;
         }
        onSave(title, content);
        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="content"
            ></textarea>

            <button type="submit">Save Note</button>
        </form>
    )
}

export default NoteForm;