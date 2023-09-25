import React, { useState } from 'react';
import { Container, Form, Button, Row, Col,Card } from 'react-bootstrap';
import './styles/Reservation.css'; // Import your custom CSS file
import Footer from './Footer';
import Header from './Header';
import Adcontent from './Adcontent';
import Carousels from './Carousels';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function Reservation() {
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    age: '',
    // Add more passenger details as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails({
      ...passengerDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, calculate fare, and guide through payment process
    console.log('Passenger Details:', passengerDetails);
    // Add your logic for calculating the fare and payment process here
  };
  const currencies = [
    {
      value: 'Booking',
      label: 'Adult',
    },
    {
      value: 'E',
      label: 'Children',
    },
    {
      value: 'E',
      label: 'Senior',
    }
  ];
  const [date, setDate] = useState(new Date());
  return (
    <div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25px' },
            }}
            noValidate
            autoComplete="off"
            ></Box>
        <Header/>
        <Container>
            <Row className='mb-4'>
            <p className='res-con'>Find your flight</p>
                <Col className='con-text d-flex justify-content-center'>
                    
                    <Card style={{ width: '60rem' }}>
                        <Card.Body>
                            <Card.Title className='res-tit'>Look up a booking</Card.Title>
                            <Card.Text className='res-tex'>
                            Enter your information to look up a trip. You can search by booking reference or eTicket number.
                            All fields are required
                            </Card.Text>
                            <p className='res-p'>Find your trip by</p>
                            <div>
                            <TextField
                            id="filled-select-currency-native"
                            select
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="filled"
                            sx={{marginRight:'10px'}}
                            >
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                            </TextField>
                            <TextField className='text-con' sx={{marginRight:'10px'}} gap={2} id="standard-basic" label="Departure" variant="standard" />
                            <TextField id="text-con" sx={{marginRight:'10px'}} label="Arrival" variant="standard"/>
                            <div className='d-flex justify-content-start mt-3'>
                               <Row>
                                 <Col>
                                 <Form.Control
                                  type="date"
                                  name="datepic"
                                  placeholder="DateRange"
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                 />
                                </Col>
                               </Row>
                            </div>
                       </div>
                       <div  style={{display:'flex',justifyContent:'center'}}>
                       <Button className='res-btn btn-danger'>Search</Button>
                       </div>
                       
                      </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
        <Row>
                <Col>
                   <Carousels/>
                </Col>
            </Row>
    </div>
  );
}

export default Reservation;
