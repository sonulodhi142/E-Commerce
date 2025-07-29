import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" ><Navbar.Brand href="#home">Home </Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
            <Link to="/mens"><Nav.Link href="/mens">mens</Nav.Link></Link>
            <Link to='/womens'><Nav.Link href="/womens">womens</Nav.Link></Link>
            <Link to="/kids"><Nav.Link href="/kids">kids</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar;