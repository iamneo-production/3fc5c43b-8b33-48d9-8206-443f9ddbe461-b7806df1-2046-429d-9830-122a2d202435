import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from './Header';
import adc2 from '../images/Air2.jpg';
import adc1 from '../images/Air1.avif';
import adc3 from '../images/Air3.avif';
import '../components/styles/Flightlist.css'
const PromotionalCard = ({ imgSrc, title, text }) => (
  <Col md={4} className='d-flex justify-content-center'>
    <Card className='cardd' style={{ border: 'none' }}>
      <Card.Img className='cardImg' variant="top" src={imgSrc}/>
      <Card.Body className='card-bod'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={()=>window.location.href="/flightlist/seats"}>Book a seat</Button>
      </Card.Body>
    </Card>
  </Col>
);

const FlightList = () => {
  // Flight data remains the same
};

const Home = () => (
  <div>
    <Header />
    <Container className='mt-4 pt-3 px-0' style={{ backgroundColor: '#F5F5F5' }}>
      <Row>
        <PromotionalCard
          imgSrc={adc1}
          title="Express Airlines"
          text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
        />
        <PromotionalCard
          imgSrc={adc2}
          title="Air India"
          text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
        />
        <PromotionalCard
          imgSrc={adc3}
          title="Singapore Airlines"
          text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
        />
      </Row>
    </Container>
    <FlightList />
  </div>
);

export default Home;
