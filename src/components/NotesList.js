import React from 'react'

const NotesList = ({notes, deleteNote}) => {
  return (
      <div className='list-continer'>
        <ul>
           {
             notes.map(note => <li key={note.id}>
               <p>{note.title}<span className='close' onClick={() => deleteNote(note.id)}>{'x'}</span></p>
               <span>{note.body}</span>
               </li>)
           }
        </ul>
      </div>
  )
}

export default React.memo(NotesList)
