import { useState } from 'react';
import './noteform.css';

interface NoteFormProps {
  createNote: (note: { title: string; content: string }) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ createNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault()
    createNote({
      title: title,
      content: content,
    })

    setTitle('')
    setContent('')
  }

  return (
    <div>
      <h2 className='create-form-header'>
        Create a new note
      </h2>

      <form className="create-form" onSubmit={handleCreate}>
        <div className="create-input-group">
          <label>Title</label>
          <input
            className="title"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div className="create-input-group">
          <label>Content</label>
          <textarea
            className="content"
            value={content}
            onChange={({ target }) => setContent(target.value)} />
        </div>
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  )
}

export default NoteForm;