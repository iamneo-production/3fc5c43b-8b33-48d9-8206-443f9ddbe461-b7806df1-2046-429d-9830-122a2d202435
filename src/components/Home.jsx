import React from 'react';
import { Container, Row, Col, Carousel, Card, Button, Alert } from 'react-bootstrap';
import ban1 from '../images/sleep.jpg'
import ban2 from '../images/banner1.jpg'
import ban3 from '../images/banner2.jpg'
function HomePage() {
  return (
    <Container fluid>
      {/* Carousel Section */}
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ban1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Book Your Flight</h3>
                <p>Find the best deals and book your next flight with ease.</p>
                <Button>Explore our cabins and seats</Button>
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ban2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Travel Insurance</h3>
                <p>Protect your trip with our comprehensive travel insurance plans.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ban3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Travel Insurance</h3>
                <p>Protect your trip with our comprehensive travel insurance plans.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Advertisement Section */}
      <Row className="my-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Ad Image" />
            <Card.Body>
              <Card.Title>Special Offer</Card.Title>
              <Card.Text>
                Save on your next flight! Book now and enjoy exclusive discounts.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Ad Image" />
            <Card.Body>
              <Card.Title>Travel Insurance</Card.Title>
              <Card.Text>
                Protect your trip with our travel insurance plans. Peace of mind for your journey.
              </Card.Text>
              <Button variant="primary">Get Insurance</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Ad Image" />
            <Card.Body>
              <Card.Title>Rent a Car</Card.Title>
              <Card.Text>
                Explore your destination with ease. Rent a car at your arrival airport.
              </Card.Text>
              <Button variant="primary">Rent Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer Section */}
      <Row>
        <Col>
          <Alert variant="secondary" className="text-center">
            &copy; {new Date().getFullYear()} Flight Booking. All rights reserved.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
