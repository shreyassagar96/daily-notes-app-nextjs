import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <AiTwotoneDelete
          className="delete-icon"
          size="1.3rem"
          onClick={()=> {deleteNote(id)}}
        />
      </div>
    </div>
  );
};

export default Note;
