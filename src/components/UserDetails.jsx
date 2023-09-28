import React, { useState } from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, Box, Button, TextField } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const UserDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userName = localStorage.getItem('name');
  const recentBookings = JSON.parse(localStorage.getItem('recentBookings')) || [];
  const userEmail = localStorage.getItem('userEmail');

  const [editedUser, setEditedUser] = useState({
    name: userName,
    age: storedUser.age,
    email: userEmail,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    // Handle the update logic here, e.g., save the edited user data
    // to your data source (e.g., API or database) and update the UI accordingly
    setIsEditing(false);

    // You can update the local storage with the edited user data if needed
    localStorage.setItem('name', editedUser.name);
    localStorage.setItem('userEmail', editedUser.email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '15px', marginBottom: '30px' }}>
        <Paper sx={{ width: '60rem', margin: 'auto', padding: '16px' }}>
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>
          {!isEditing ? (
            <Box>
              <Typography variant="subtitle1">Email: {editedUser.email}</Typography>
              <Typography variant="subtitle1">Name: {editedUser.name}</Typography>
              <Typography variant="subtitle1">Age: {editedUser.age}</Typography>
              <Typography variant="subtitle1">Recent</Typography>
            </Box>
          ) : (
            <Box>
              <TextField
                name="email"
                label="Email"
                value={editedUser.email}
                fullWidth
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                name="name"
                label="Name"
                value={editedUser.name}
                fullWidth
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                name="age"
                label="Age"
                value={editedUser.age}
                fullWidth
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
            </Box>
          )}
          <Box mt={2}>
            {isEditing ? (
              <Button variant="contained" color="primary" onClick={handleUpdateClick}>
                Update
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleEditClick}>
                Edit
              </Button>
            )}
            <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
              Recent Bookings
            </Typography>
            <List>
              {recentBookings.map((booking, index) => (
                <ListItem key={index}>
                  <ListItemText primary={booking} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default UserDetails;
