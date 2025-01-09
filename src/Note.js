import React from 'react';

function Note({ note, onDelete, onToggle }) {
    return (
        <div className={`note ${note.completed ? 'completed' : ''}`}>
            <div className='note-content'>
                <span className='note-status'>{note.completed && '✔️'}</span>
                <p style={{ textDecoration: note.completed ? 'line-through' : 'none'}}>
                    {note.text}
                </p>
            </div>
            <small>Создано: {note.createdAt}</small>
            <div className='note-actions'>
                <button onClick={() => onDelete(note.id)}>Удалить</button>
                <button onClick={() => onToggle(note.id)}>
                    {note.completed ? 'Отметить как не выполненную' : 'Отметить как выполненную'}
                </button>
            </div>
        </div>
    );
}

export default Note;