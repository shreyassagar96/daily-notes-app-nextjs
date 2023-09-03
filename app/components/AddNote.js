import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleNoteSave = (e) => {
    e.preventDefault();
    addNote(noteText);
    toast.success("Note Saved Successfully")
    setNoteText("");
  };

  const HandleDisable = () => {
    toast.error("Please Enter Your Note");
  };

  return (
    <div className="note new">
      <textarea
        value={noteText}
        onChange={handleChange}
        rows="8"
        cols="10"
        placeholder="Enter your note..."
      ></textarea>
      <div className="note-footer">
        {charLimit === noteText.length ? (
          <small className="text-red-600 text-sm">{charLimit - noteText.length} remaning</small>
        ) : (
          <small className="text-sm">{charLimit - noteText.length} remaning</small>
        )}
        {noteText.length === 0 ? (
          <button onClick={HandleDisable} className="save disabled">
            Save Note
          </button>
        ) : (
          <button onClick={handleNoteSave} className="save">
            Save Note
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default AddNote;
