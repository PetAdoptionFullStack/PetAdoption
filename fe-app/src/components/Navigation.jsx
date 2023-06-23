import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar className='nav-bar'>
    <Container>
      <Navbar.Brand href="#home">Adopt a pet</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Adopt</Nav.Link>
        <Nav.Link href="#">About us</Nav.Link>
        <Nav.Link href="#">Login</Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  )
}