import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbargomycode() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Nos formations</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">En ligne</Nav.Link>
            <Nav.Link href="#home">Choisir vos horaires</Nav.Link>
            <NavDropdown title="Nos hakerspaces" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Béja</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sousse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lac1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">El manzeh</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Partenaires</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">+216 39 143 900</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbargomycode; 