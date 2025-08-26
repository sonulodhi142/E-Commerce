import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to='/women'><h1 style={{color: 'white'}}>Logo</h1></Link>
          
          <Navbar.Brand>Home </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/men">men</Nav.Link>
            <Nav.Link href="/women">women</Nav.Link>
            kid<Nav.Link href="/kid">kid</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar;