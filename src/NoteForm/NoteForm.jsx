import "./NoteForm.css";

export default function NoteForm({ setGetNotes , getNotes }) {

    function handleSubmit(event) {
        event.preventDefault();
        const title = event.target[0].value;
        const content = event.target[1].value;
        const newNote = { title, content };
        setGetNotes([...getNotes, newNote]);
        event.target.reset();
    }
    return(
        <div className="note-form-container">
            <form className="note-form" onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder="note title" required />
                <textarea placeholder="note content" required></textarea>
                <button type="submit">save note</button>
            </form>
        </div>
    )
}