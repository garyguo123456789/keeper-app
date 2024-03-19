import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import Area from "./Area";
// import "../../public/styles.css";

function App() {
  const [notesArray, setNotesArray] = useState(notes);

  function addNote(newNote) {
    setNotesArray((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function removeNote(id) {
    setNotesArray((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Area onAdd={addNote} />
      {notesArray.map((notesEntry, index) => (
        <Note
          // key={index}
          id={index}
          title={notesEntry.title}
          content={notesEntry.content}
          onDelete={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
