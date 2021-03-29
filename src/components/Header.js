import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
   <Navbar.Brand>Navbar</Navbar.Brand>
   <Nav className="mr-auto">
     <Link to='/'>Login</Link>
     <Link to='/note'>Notes</Link>
   </Nav>
 </Navbar>
  )
}

export default Header
