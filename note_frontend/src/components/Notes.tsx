import Note from "./Note";
import './notes.css';
import { NoteType } from "../types/note";

interface NotesProps {
  notes: NoteType[];
  deleteNote: (id: number) => void;
}

const Notes: React.FC<NotesProps> = ({ notes, deleteNote }) => {

  return (
    <div className="notes-container">
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      )}
    </div>
  )
}

export default Notes;
