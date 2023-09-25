import React from 'react';
import { Container, Row, Col, Carousel, Card, Button, Alert } from 'react-bootstrap';

import Adcontent from './Adcontent';
import biggy from '../images/biggy.png'
import lock from '../images/lock.png'
import clock from '../images/clock.png'
import '../App.css'
import Adtext from './Adtext';
import Payboost from './Payboost';
import Header from './Header';
import Footer from './Footer';
import Adcards from './Adcards';
import Carousels from './Carousels';
function HomePage() {
  return (
    <div>
      <Header/>

       {/* Carousel Section */}
      <Carousels/>

    <Container>
      
      {/* Adcontent */}
      
      <Adcontent/>

      {/* Advertisement Section */}
      <Row className="my-4">
        <Col md={4} className='d-flex justify-content-center'>
          <Card style={{border:'none'}}>
            <Card.Img variant="top" src={biggy} alt="Ad Image" />
            <Card.Body className='adcard'>
              <Card.Title>Special Offer</Card.Title>
              <Card.Text>
                Save on your next flight! Book now and enjoy exclusive discounts.
              </Card.Text>
              <Button style={{backgroundColor:'red',border:'none',fontWeight:'bold'}}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
          <Card style={{border:'none'}}>
            <Card.Img variant="top" src={lock} alt="Ad Image" />
            <Card.Body className='adcard'>
              <Card.Title>Travel Insurance</Card.Title>
              <Card.Text>
                Protect your trip with our travel insurance plans. Peace of mind for your journey.
              </Card.Text>
              <Button style={{backgroundColor:'red',border:'none',fontWeight:'bold'}}>Get Insurance</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
          <Card style={{border:'none'}}>
            <Card.Img variant="top" src={clock} alt="Ad Image" />
            <Card.Body className='adcard'>
              <Card.Title>Rent a Car</Card.Title>
              <Card.Text>
                Explore your destination with ease. Rent a car at your arrival airport.
              </Card.Text>
              <Button style={{backgroundColor:'red',border:'none',fontWeight:'bold'}}>Rent Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Contents */}

      <Row>
         <Col>
           <Adtext/>
         </Col>
      </Row>
      
      {/* Payments */}
      
      <Row>
        <Col>
           <Payboost/>
        </Col>
      </Row>
      
       <Adcards/>

      {/* Footer Section */}
    </Container>
    <Footer/>
    </div>
  );
}

export default HomePage;
