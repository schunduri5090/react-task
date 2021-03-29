import React, {useState, useCallback} from 'react'
import {Col} from 'react-bootstrap'
import NewNote from './NewNote'
import NotesList from './NotesList'

const Notes = ({addNote, deleteNote, notes}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])
  const onChangeBody = useCallback((e) => {
    setBody(e.target.value)
  }, [])
  const onSubmitNote = useCallback((e) => {
    e.preventDefault()
    const length = notes.length
    const note = {
      id: length + 1,
      title,
      body
    }
    addNote(note)
    setTitle('')
    setBody('')
  }, [title, body])
  const memozieDelete = useCallback((id) => {deleteNote(id)}, [notes])
  return (
    <>
      <Col md={12} className='title'>
        <h3>Notes</h3>
      </Col>
      <Col md={3}>
        <NotesList notes={notes} deleteNote={memozieDelete} />
      </Col>
      <Col md={9}>
      <NewNote title={title}
      body={body}
      onChangeTitle={onChangeTitle}
       onChangeBody={onChangeBody}
       onSubmitNote={onSubmitNote}
      />
      </Col>
    </>
  )
}

export default Notes
