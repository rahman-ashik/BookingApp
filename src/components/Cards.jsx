import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="card-section">
      <Container className="container">
        <h2 className="text-center p-5 Card-txt">
          Get the best deal according to your needs.
        </h2>
        <Row className="d-flex flex-container justify-content-around align-items-center align-self-center align-content-center m-2 text-white">
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1475088092121-b7d3cd6e1482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <Card.ImgOverlay>
                <Card.Title>Transportation</Card.Title>
                <Card.Text>Buy bus and plane tickets fast.</Card.Text>
                <Button variant="dark">Get my tickets</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              />
              <Card.ImgOverlay>
                <Card.Title>Hotels</Card.Title>
                <Card.Text>Find a place to stay or spend the night.</Card.Text>
                <Button variant="dark">Find my hotel</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <Card.ImgOverlay>
                <Card.Title>Packages</Card.Title>
                <Card.Text>
                  Buy package of transportation and accommodation.
                </Card.Text>
                <Button variant="dark">See packages</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
