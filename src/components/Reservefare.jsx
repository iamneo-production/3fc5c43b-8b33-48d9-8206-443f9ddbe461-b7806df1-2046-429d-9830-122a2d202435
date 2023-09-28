import React, { useState,useEffect } from 'react';
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { Chair, Payment } from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/UserProfileSlice';
function FlightBookingApp() {
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    age: '',
    email:''
  });
  
  const [ticketType, setTicketType] = useState('adult');
  const [meal,setMeal] = useState('veg');
  const [chair,setChair]=useState('yes');

  // Dispatch
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile.user);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails({
      ...passengerDetails,
      [name]: value,
    });
  };
  
  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };
  const handleMealType=(e)=>{
    setMeal(e.target.value);
  }
  const handleChair=(e)=>{
    setChair(e.target.value);
  }
  const calculateTotalFare = () => {
    // Constants for ticket prices (replace with actual prices)
    const ticketPrices = {
      adult: 500,
      child: 250,
      senior: 450,
    };
    const mealsPrices={
        veg:5,
        nonVeg:6,
        both:10
    }
    const wheelChair={
        yes:3,
        no:0
    }
    // Calculate base fare based on ticket type
    const baseFare = ticketPrices[ticketType];
    const mealFare = mealsPrices[meal]
    const chairFare = wheelChair[chair]
    let sumAllfare = baseFare+mealFare+chairFare;
    let gst=sumAllfare*(0.2);
    sumAllfare=sumAllfare+gst;
    // Additional services or preferences can be factored in here
    // For example, meal options, seat selection, etc.

    // Calculate total fare
    return sumAllfare; // Replace with actual calculation
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalFare = calculateTotalFare();

    // In a real application, you would typically handle payment processing here
    // You can integrate with payment gateways like Stripe, PayPal, etc.
    // For this example, we'll just display the total fare.
    dispatch(updateUserProfile(passengerDetails));
    localStorage.setItem('userProfile', JSON.stringify(passengerDetails));
    alert(`Total Fare: $${totalFare}`);
    alert(`Details are storedInLocal:`);
  };


  // Show the userDetails

  // useEffect(() => {
  //   // Retrieve data from local storage when the component mounts
  //   const storedName = localStorage.getItem('name');
  //   const storedEmail = localStorage.getItem('email');
  //   console.log(storedName+" "+storedEmail);
  //   // If data exists in local storage, set it in the component state
    
  // }, []);


  return (
    <div>
      <Header />

      <Container>
        <Grid container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center" sx={{marginBottom:'20px'}}>
        <Paper 
         elevation={3} style={{ padding: '30px', marginTop: '20px',width:300 }}>
          <Typography variant="h4" gutterBottom>
            Flight 
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} >
              <Grid item xs={12}  
            >
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  name="name"
                  value={passengerDetails.name}
                  onChange={handleInputChange}
                  required
                  sx={{width:'100'}}
                />
              </Grid>
              <Grid item xs={12}  
            >
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  name="email"
                  value={passengerDetails.name}
                  onChange={handleInputChange}
                  required
                  sx={{width:'100'}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  fullWidth
                  variant="outlined"
                  type="number"
                  name="age"
                  value={passengerDetails.age}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Ticket Type</InputLabel>
                  <Select
                    value={ticketType}
                    onChange={handleTicketTypeChange}
                    label="Ticket Type"
                  >
                    <MenuItem value="adult">Adult</MenuItem>
                    <MenuItem value="child">Child</MenuItem>
                    <MenuItem value="senior">Senior</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Meals option</InputLabel>
                  <Select
                    value={meal}
                    onChange={handleMealType}
                    label="Ticket Type"
                  >
                    <MenuItem value="veg">Veg</MenuItem>
                    <MenuItem value="nonVeg">Non-veg</MenuItem>
                    <MenuItem value="both">Both veg and non-veg</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Wheel chair accessibility</InputLabel>
                  <Select
                    value={chair}
                    onChange={handleChair}
                    label="Wheel chair"
                  >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>

              {/* Add more form fields for additional services/preferences */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  startIcon={<Payment />}
                  onClick={()=>window.location.href="/reservefare/billing"}
                >
                  Proceed to Payment
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography variant="h5" style={{ marginTop: '20px' }}>
            Total Fare: ${calculateTotalFare()}
          </Typography>
        </Paper>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default FlightBookingApp;
