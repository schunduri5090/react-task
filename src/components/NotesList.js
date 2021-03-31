import React from 'react'

const NotesList = ({notes, deleteNote, setTitle, setBody, setEdit, setEditId}) => {
  const editNote = (id) => {
      const editNote = notes.filter(note => note.id === id)[0]
      const {title='', body=''} = editNote
      setTitle(title)
      setBody(body)
      setEdit(true)
      setEditId(id)
  }
  return (
      <div className='list-continer'>
        <ul>
           {
             notes.map(note => <li key={note.id}>
               <p onClick={()=> editNote(note.id)}>{note.title}<span className='close' onClick={() => deleteNote(note.id)}>{'x'}</span></p>
               <span>{note.body}</span>
               </li>)
           }
        </ul>
      </div>
  )
}

export default React.memo(NotesList)
