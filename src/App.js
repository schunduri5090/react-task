import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { ToastProvider } from 'react-toast-notifications'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Login from './components/Login'
import Notes from './continers/notes'

const App = () =>  {
  return (
    <Router>
      <Header />
      <Container>
      <Row>
      <ToastProvider autoDismiss
        autoDismissTimeout={6000}
        placement="top-center">
       <Route exact path='/' component={Login} />
      </ToastProvider>
       <Route exact path='/note' component={Notes} />
      </Row>
   </Container>
    </Router>
  )
}

export default App;
