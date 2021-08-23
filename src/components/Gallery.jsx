import React from "react";
// import Location from "../pack-location";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../styles/Gallery.css";

const Gallery = ({ name, country, city, start, end, price, rating, img }) => {
  return (
    <div>
      <Card className="card mt-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            From {start} to {end}, {country}
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
    </div>
  );
};

export default Gallery;
