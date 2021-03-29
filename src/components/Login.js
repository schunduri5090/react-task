import React, {useState} from 'react'
import validator from 'validator'
import {Form, Button, Col} from 'react-bootstrap'
import { useToasts } from 'react-toast-notifications'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValidate, setEmailValidate] = useState('')
  const { addToast } = useToasts()
  const onEmailHandler = (e) => {
    const email = e.target.value
    setEmail(email)
    if(validator.isEmail(email)) {
      setEmailValidate('')
    } else {
      setEmailValidate('Please enter valid email')
    }
  }
  const onPasswordHandler = (e) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    addToast(`${email} logged-in Successfully`, { appearance: 'success' })
  }
  const disableSubmit = (!emailValidate && email && password)
  return (
    <Col>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailHandler} />
        <Form.Text className="error-msg">{emailValidate}</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordHandler} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!disableSubmit} onClick={onSubmit}>
        Submit
      </Button>
    </Form>
    </Col>
  )
}

export default Login
