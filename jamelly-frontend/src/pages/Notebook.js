import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import uuid from "react-uuid";

import Sidebar from "../components/Notebook-Sidebar";
import Main from "../components/Notebook-Main";
import { useEffect } from "react";



function NotebookPage({user, token}) {
  const [notes, setNotes] = useState([])

  let fetchSnippets = async () => {
    let notesfromapi = {}
    
    let response = await fetch("http://localhost:8000/notesnippets/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`
      }
    }).then(response => response.json())
    .then(data => {
    notesfromapi = data})
    .catch((error) => console.log(error));

    setNotes(notesfromapi)
  }



  // var notesfromApi = await fetchSnippets()
  

  // notesfromApi.forEach(note => [note, ...notes])

  
  const [activeNote, setActiveNote] = useState(false);

   useEffect(() => {
    fetchSnippets()

    

  //    localStorage.setItem("notes", JSON.stringify(notes));
  //  }, [notes])
  })

  

  const onAddNote = async () => {
    // const newNote = {
    //   id: uuid(),
    //   title: "Untitled Note",
    //   body: "",
    //   date: Date.now(),
    // };

    const newNote = await fetch("http://localhost:8000/notesnippets/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`
    },

    body: JSON.stringify({
      title: "Untitled Note",
      content: "",
    }),
  });

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
   //setNotes(notes.filter((note) => note.id !== idToDelete));
//--------------------------------
   fetch(`http://127.0.0.1:8000/notesnippets/${idToDelete}/`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`
        }
      });
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
    // return notes.find(({ id }) => id === activeNote);
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
