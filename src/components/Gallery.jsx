import React from "react";
// import Location from "../pack-location";
import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import "../styles/Gallery.css";

const Gallery = ({ name, country, city, totalDays, price, rating }) => {
  return (
    <div>
      <Container>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1539452146933-466b959d1019?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {totalDays}, {country}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Place: {city}, {country}
            </ListGroupItem>
            <ListGroupItem>Rating: {rating}</ListGroupItem>
            <ListGroupItem>Price: {price}$</ListGroupItem>
          </ListGroup>
          <Card.Body className="d-inline-flex ">
            <Card.Link href="#">
              <Button>Buy Now</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button>Add To Cart</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Gallery;
