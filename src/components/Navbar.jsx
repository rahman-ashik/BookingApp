import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const navBar = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">BookingApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Packages</Nav.Link>
            <Nav.Link href="#pricing">Get Quote</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Settings</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navBar;
