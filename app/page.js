"use client";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { toast, Toaster } from "react-hot-toast";

import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Add Your First Note",
      date: "15/03/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedLocalNotes = JSON.parse(localStorage.getItem("notes-app-data"));

    if (savedLocalNotes) {
      setNotes(savedLocalNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    toast.success("Note Deleted Successfully");
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().toLocaleString().includes(searchText)
          )}
          addNote={addNote}
          deleteNote={deleteNote}
        />
        <Toaster />
      </div>
    </div>
  );
};

export default home;
