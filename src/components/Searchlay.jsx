import React from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import "../styles/Searchlay.css";

const Searchlay = () => {
  return (
    <Container className="blur-search p-5 pb-5 mb-5">
      <h2>Find Hotels and Transportation for a well-spent weekend.</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="You destination"
          aria-label="Your destination"
          aria-describedby="basic-addon2"
        />
        <Button
          className="transform motion-safe:hover:scale-110"
          variant="dark"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Searchlay;
