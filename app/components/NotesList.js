import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((currNote) => (
        <Note
          id={currNote.id}
          text={currNote.text}
          date={currNote.date}
          deleteNote={deleteNote}
        />
      ))}
      <AddNote addNote={addNote} />
    </div>
  );
};

export default NotesList;
