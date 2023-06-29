import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import paws from '../img/paws.webp';
import { Link } from 'react-router-dom';
export default function Navigation() {
 
  return (
      <Navbar className='nav-bar'>
        <Container>
          <Navbar.Brand> <img src={paws} alt="Paws of a dog"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/adopt" >Adopt</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}