import React, { Component } from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";

class Searchlay extends Component {
  render() {
    return (
      <Container>
        <h2>Find Hotels and Transportation for a well-spent weekend.</h2>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="You destination"
            aria-label="Your destination"
            aria-describedby="basic-addon2"
          />
          <Button variant="dark" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Container>
    );
  }
}

export default Searchlay;
