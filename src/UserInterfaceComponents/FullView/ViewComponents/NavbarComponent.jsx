import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ltts</Navbar.Brand>
        <Nav className="me-auto">
          {/* Use Link to navigate to routes */}
          <Nav.Link as={Link} to="/my-react-app">Home</Nav.Link>
          <Nav.Link as={Link} to="/wishlist">WishList</Nav.Link>
          <Nav.Link href="#pricing">Recycle Bin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
