// UserProfile.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Paper } from '@material-ui/core';
import { updateUserProfile } from '../redux/UserProfileSlice';

const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile.user);

  const [userData, setUserData] = useState(user || {});
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateUserProfile(userData));
    setIsEditing(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="p-3">
        <h2>User Profile</h2>
        <TextField
          label="Full Name"
          fullWidth
          value={userData.fullName || ''}
          onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
          disabled={!isEditing}
        />
        <TextField
          label="Email"
          fullWidth
          value={userData.email || ''}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          disabled={!isEditing}
        />
        <TextField
          label="Phone Number"
          fullWidth
          value={userData.phoneNumber || ''}
          onChange={(e) =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
          disabled={!isEditing}
        />
        {isEditing ? (
          <Button variant="contained" color="primary" onClick={handleSaveClick}>
            Save
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            Edit Profile
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default UserDetails;
