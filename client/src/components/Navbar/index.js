import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navb() {

return (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Google Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/saved">Save</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
)};

export default Navb;