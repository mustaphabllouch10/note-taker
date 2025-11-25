import "./NoteCard.css";

export default function NoteCard({ getNotes }) {

    return(
        <>
            {getNotes.map((Note , index) => (
                <>
                    <div key={index} className="note-card">
                        <div className="upper-note-card">
                            <p>{Note.title}</p>
                        </div>
                        <div>
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                        <div>
                            <p>{Note.content}</p>
                        </div>
                    </div>
                </>
            ))}
        </>
        
    )
}