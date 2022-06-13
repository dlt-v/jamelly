import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import uuid from "react-uuid";

import Sidebar from "../components/Notebook-Sidebar";
import Main from "../components/Notebook-Main";
import { useEffect } from "react";

function NotebookPage({user, token}) {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  )
//------------------------------
    // let notesFromApi
    // let response = fetch("http://127.0.0.1:8000/notesnippets/", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //     Accept: "application/json",
    //     Authorization: `Token ${token}`
    //   },
    // }).then(response => response.json()).then(data => {
    //   notesFromApi = data
    // })
    // .catch((error) => console.log(error));

    // setNotes(notesFromApi)
//--------------------------------
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
     localStorage.setItem("notes", JSON.stringify(notes));
   }, [notes])

  //--------------------------------
  // fetch("http://127.0.0.1:8000/notesnippets/", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Token ${token}`
  //   },

  //   body: JSON.stringify({
  //     id: note.id,
  //     content: note.body,
  //     created_at: note.lastModified,
  //     owner_id: token,
  //     title: note.title
  //     }),
  // }); 
//--------------------------------

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

  //   fetch("http://127.0.0.1:8000/notesnippets/", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Token ${token}`
  //   },

  //   body: JSON.stringify({
  //     id: newNote.id,
  //     content: newNote.body,
  //     created_at: newNote.lastModified,
  //     owner_id: token,
  //     title: newNote.title
  //     }),
  // }); 

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
   setNotes(notes.filter((note) => note.id !== idToDelete));
//--------------------------------
  //  fetch(`http://127.0.0.1:8000/notesnippets/${idToDelete}/`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json",
  //         Accept: "application/json",
  //         Authorization: `Token ${token}`
  //       }
  //     });
//--------------------------------
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <motion.div
      className="NotebookMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />

      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} token={token}/>
    </motion.div>
  );
}

export default NotebookPage;
