import React from 'react'
import {Form, Button } from 'react-bootstrap'

const NewNote = ({title, body, onChangeTitle, onChangeBody, onSubmitNote}) => {
  return (
    <Form>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  value={title} onChange={onChangeTitle}/>
      </Form.Group>
      <Form.Group controlId="formBasicBody">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} value={body} onChange={onChangeBody}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmitNote} disabled={!(title && body)}>
        Save
      </Button>
    </Form>
  )
}

export default React.memo(NewNote)
