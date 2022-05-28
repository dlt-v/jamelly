import React from "react";
import { motion } from "framer-motion";
import {useState} from "react";
import uuid from "react-uuid";

function NotebookPage() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    }
    setNotes([newNote,...notes]);
  }
  const onDeleteNote = (deleteId) => {
    setNotes(notes.filter((note)=>note.id !== deleteId));
  }
  const [activeNote, setActiveNote]=useState(false);


  const getActiveNote = () => {
    return notes.find((note)=> note.id ===activeNote);
  };
const onEditField = (key,value)=>{
  onUpdateNote({
    ...activeNote,
    [key]: value,
    lastModified: Date.now(),
  })
}
const onUpdateNote = (updatedNote)=>{
  const updatedNotesArray = notes.map((note)=>{if(note.id===activeNote){return updatedNote;}
return note;})
setNotes(updatedNotesArray)
};





  return (
    <div
      className="NotebookMain"
    >
      <div id="Sidebar">
        <div id="Sidebar-Header"><h1>Notes</h1><button onClick={onAddNote}>ADD</button></div>
        <div id="All-Notes-Sidebar"> {notes.map((note)=>(<div className={`Note-Sidebar ${note.id === activeNote && "active"}`} onClick={()=>setActiveNote(note.id)}><div id="Note-Title"><strong>{note.title}</strong>
        <button onClick={()=>onDeleteNote(note.id)}>DELETE</button></div>
        <p>{note.body && note.body.substr(0,100)+"..."}</p><small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("pl-PL",{
          hour:"2-digit", minute: "2-digit",})}</small></div>))}
         
        </div>
      </div>
      
      
        <div id="NotebookSpace">
          <div id="NoteEdit"><input type="text" id="title" placeholder="Note Title" value={activeNote.title} onChange={(e)=> onEditField("title",e.target.value)} autoFocus />
          <textarea id="body" placeholder="Lorem Ipsum..." value={activeNote.body} onChange={(e)=> onEditField("body",e.target.value)}/>
          </div>
        </div>
    </div>
  );
}

export default NotebookPage;
