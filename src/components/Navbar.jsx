import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/Navbar.css";

const navBar = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
      className="sticky-top navbar"
    >
      <Container>
        <Navbar.Brand href="#home">BookingApp</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="navbar-toggler-icon"
          className="navbar-toggler-icon"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Gallery.jsx">Packages</Nav.Link>
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
