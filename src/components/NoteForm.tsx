import React, { useEffect, useState } from "react";

interface NoteFormProps {
    onSave: (id: number | null, title: string, content: string) => void;
    editingNote: {id: number; title: string; content: string} | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave, editingNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editingNote) {
          setTitle(editingNote.title);
          setContent(editingNote.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [editingNote]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
         if (title.trim() === '' || content.trim() === '') {
            alert('Both fields are required');
            return;
         }
        onSave(editingNote ? editingNote.id : null, title, content);
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

            <button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</button>
        </form>
    );
}

export default NoteForm;