import React, {useState, useCallback} from 'react'
import {Col} from 'react-bootstrap'
import NewNote from './NewNote'
import NotesList from './NotesList'

const Notes = ({addNote, deleteNote, notes, editNote}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState()
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])
  const onChangeBody = useCallback((e) => {
    setBody(e.target.value)
  }, [])
  const onSubmitNote = useCallback((e) => {
    e.preventDefault()
    const length = notes.length
    if (!edit) {
      const note = {
        id: length + 1,
        title,
        body
      }
      addNote(note)
    } else {
      const editedNote = {
        id: editId,
        title,
        body
      }
      editNote(editedNote)
    }
    setTitle('')
    setBody('')
    setEdit(false)
  }, [title, body])
  const memozieDelete = useCallback((id) => {deleteNote(id)}, [notes])
  return (
    <>
      <Col md={12} className='title'>
        <h3>Notes</h3>
      </Col>
      <Col md={3}>
        <NotesList notes={notes} deleteNote={memozieDelete}
        setTitle={setTitle} setBody={setBody}
        onChangeTitle={onChangeTitle} onChangeBody={onChangeBody} setEdit={setEdit} setEditId={setEditId}/>
      </Col>
      <Col md={9}>
      <NewNote title={title}
      body={body}
      onChangeTitle={onChangeTitle}
       onChangeBody={onChangeBody}
       onSubmitNote={onSubmitNote}
       edit={edit}
      />
      </Col>
    </>
  )
}

export default Notes
