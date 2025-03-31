import { useState } from "react";
import noteService from "../services/notes";
import './note.css';
import { NoteType } from "../types/note";

interface NoteProps {
  note: NoteType;
  deleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ note, deleteNote }) => {

  const green = "#3fb225";
  const red = "#f87b05";
  const [buttonColor, setButtonColor] = useState(note.done ? green : red);
  const [isDone, setisDone] = useState(note.done);

  const handleDone = async (note: NoteType) => {
    const newNote = {...note, done: !isDone};
    const newColor = !isDone ? green : red;

    await noteService.update(newNote);

    setisDone(!isDone);
    setButtonColor(newColor);
  }

  return (
    <div className='note'>
      <h4>
        {note.title}
      </h4>
      <p>
        {note.content}
      </p>
      
      <button
        className="done-button"
        style={{ backgroundColor: buttonColor }}
        color={buttonColor}
        onClick={() => handleDone(note)}
      >
        Done
      </button>
      <button
        type="submit"
        className="delete-button"
        onClick={() => deleteNote(note.id)}
      >
          Delete
      </button>
    </div>
  )
}

export default Note;
