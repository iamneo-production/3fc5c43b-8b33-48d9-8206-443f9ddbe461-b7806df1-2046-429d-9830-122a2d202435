import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import Headbar from './Header';
import Footer from './Footer';

function SearchFlight() {
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

  return (
    <div>
      <Headbar />
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '70vh' }}>
          <Grid item xs={12} sm={8} md={6}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h4" align="center" gutterBottom>
                Flight Reservation
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Origin"
                  fullWidth
                  variant="outlined"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  label="Destination"
                  fullWidth
                  variant="outlined"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  label="Departure Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  placeholder="dd-mm-yyyy" // Add the placeholder
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }} // Ensure the label doesn't overlap with the placeholder
                />
                <TextField
                  label="Return Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }} // Ensure the label doesn't overlap with the placeholder
                />
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  style={{ marginTop: '16px' }}
                  fullWidth
                  onClick={()=> window.location.href="/search/flightlist"}
                >
                  Search Flights
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default SearchFlight;
