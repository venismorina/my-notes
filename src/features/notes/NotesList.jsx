import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllNotes } from './notesSlice';
import { Link } from 'react-router-dom';

const NotesList = () => {
    const notes = useSelector(selectAllNotes);

    const renderNotes = [].concat(notes).reverse().map(note => (<article key={note.id}>
        <h3>{note?.title}</h3>
        <Link to={`note/${note?.id}`}><p>View Note</p></Link>
    </article>))

    return (
        <section>
            <h2>Notes</h2>
            <Link to={`note`}><p>Add Note</p></Link>
            <hr />
            <p>{renderNotes}</p>
        </section>
    )
}

export default NotesList