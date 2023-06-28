import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import paws from '../img/paws.webp';

export default function Navigation() {
  return (
    <Navbar className='nav-bar'>
    <Container>
      <Navbar.Brand> <img src={paws} alt="Paws of a dog"/></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="./components/Adopt">Adopt</Nav.Link>
        <Nav.Link href="#">About us</Nav.Link>
        <Nav.Link href="#">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  
  
  )
}