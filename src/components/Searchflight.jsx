import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Headbar from './Header';

function Searchflight() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would integrate flight data API here and handle the search logic
    console.log('Searching for flights...');
    console.log('Origin:', origin);
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
  };

  const labelStyle = {
    fontWeight: 'bold',
    // Add any other styles you need here
  };

  return (
    <div>
        <Headbar/>
        <Container fluid className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center">
        <Col>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center mb-4">Flight Reservation</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="origin">
                <Form.Label style={labelStyle}>Origin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="destination">
                <Form.Label style={labelStyle}>Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="departureDate">
                <Form.Label style={labelStyle}>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="returnDate">
                <Form.Label style={labelStyle}>Return Date</Form.Label>
                <Form.Control
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Button onClick={()=>window.location.href="/search/flightlist"} className='mt-3' variant="primary" type="submit" block>
                Search Flights
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
}

export default Searchflight;
