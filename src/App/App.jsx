import "./App.css";
import NoteForm from "../NoteForm/NoteForm";
import NoteCard from "../NoteCard/NoteCard";
import { useState } from "react";

export default function App() {
    const [getNotes, setGetNotes] = useState([]);
    return(
        <>
            <header>
                <h1>Note Taking App</h1>
            </header>
            <main>
                <section className="note-form-section">
                    <NoteForm getNotes={getNotes} setGetNotes={setGetNotes} />
                </section>
                <section className="note-cards-section">
                    <NoteCard getNotes={getNotes} setGetNotes={setGetNotes} />
                </section>
            </main>
        </>
    )
}