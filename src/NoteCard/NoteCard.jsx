import { useState } from "react";
import "./NoteCard.css";

export default function NoteCard({ getNotes, setGetNotes }) {

    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({ title: "", content: "" });

    function handleDelete(index) {
        setGetNotes(getNotes.filter((_, i) => i !== index));
    }

    function handleEdit(index) {
        setEditingIndex(index);
        setEditData(getNotes[index]); // load current values into input
    }

    function handleSave() {
        const updatedNotes = [...getNotes];
        updatedNotes[editingIndex] = editData;

        setGetNotes(updatedNotes);
        setEditingIndex(null); // leave edit mode
    }

    return (
        <>
            {getNotes.map((note, index) => (
                <div key={index} className="note-card">

                    {/* If this note is being edited */}
                    {editingIndex === index ? (
                        <>
                            <input
                                type="text"
                                value={editData.title}
                                onChange={(e) =>
                                    setEditData({ ...editData, title: e.target.value })
                                }
                            />

                            <textarea
                                value={editData.content}
                                onChange={(e) =>
                                    setEditData({ ...editData, content: e.target.value })
                                }
                            />

                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setEditingIndex(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <div className="upper-note-card">
                                <p>{note.title}</p>
                            </div>

                            <div>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>

                            <div>
                                <p>{note.content}</p>
                            </div>
                        </>
                    )}

                </div>
            ))}
        </>
    );
}
