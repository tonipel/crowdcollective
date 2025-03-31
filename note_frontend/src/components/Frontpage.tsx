import { useEffect, useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import noteService from "../services/notes";
import NoteForm from "./NoteForm";
import { NoteType } from "../types/note";


const Frontpage = () => {
  const [notes, setNotes] = useState<NoteType[]>([])

  useEffect(() => {
    noteService
      .getAll()
      .then(newNotes => {
        setNotes(newNotes)
      })
    }, [])

  const createNote = (newNote: {title: string; content: string;}) => {
    noteService
      .create(newNote)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }

  const deleteNote = (id: number) => {
    const notesCopy = notes.filter((obj) => {
      return obj['id'] !== id
    })

    setNotes(notesCopy)
    noteService.remove(id)
  }

  return (
    <div className="frontpage">
      <Header />
      <NoteForm createNote={createNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </div>
  )
}

export default Frontpage;
