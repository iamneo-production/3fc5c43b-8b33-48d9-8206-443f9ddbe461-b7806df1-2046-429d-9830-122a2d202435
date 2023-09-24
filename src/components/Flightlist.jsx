import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FlightList = () => {
  const flights = [
    {
      id: 1,
      airline: 'Airline 1',
      departure: 'City A',
      arrival: 'City B',
      departureTime: '08:00 AM',
      arrivalTime: '10:00 AM',
      duration: '2h 0m',
      price: '$200',
    },
    {
      id: 2,
      airline: 'Airline 2',
      departure: 'City B',
      arrival: 'City C',
      departureTime: '11:00 AM',
      arrivalTime: '01:00 PM',
      duration: '2h 0m',
      price: '$250',
    },
    {
      id: 3,
      airline: 'Airline 3',
      departure: 'City A',
      arrival: 'City C',
      departureTime: '02:00 PM',
      arrivalTime: '04:00 PM',
      duration: '2h 0m',
      price: '$180',
    },
  ];

  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <Card key={flight.id} className="mb-3">
          <Card.Body>
            <Card.Title>{flight.airline}</Card.Title>
            <Card.Text>
              <div>Departure: {flight.departure}</div>
              <div>Arrival: {flight.arrival}</div>
              <div>Departure Time: {flight.departureTime}</div>
              <div>Arrival Time: {flight.arrivalTime}</div>
              <div>Duration: {flight.duration}</div>
              <div>Price: {flight.price}</div>
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FlightList;
