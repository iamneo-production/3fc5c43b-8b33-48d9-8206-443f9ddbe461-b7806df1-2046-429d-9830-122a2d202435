import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    // Redirect to home page
    window.location.href = '/home';
  };

  const timeOut = () => {
    // Check user details in local storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if the stored details match the input fields
    if (
      storedEmail === formData.email &&
      storedPassword === formData.password
    ) {
      // Successful login
      toast.success('Sign in successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(()=>{
        handleLogin();
      },3000);
      
    } else {
      // Invalid login
      console.log(storedEmail+" "+storedPassword);
      toast.error('Invalid login credentials', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    timeOut();
  };

  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }}>
        <CardContent style={{ border: 'none' }}>
          <Typography variant="h5" component="div" className="text-center">
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email address"
              fullWidth
              type="email"
              placeholder="Enter email"
              variant="outlined"
              margin="normal"
              className="mb-3"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              fullWidth
              type="password"
              placeholder="Password"
              variant="outlined"
              margin="normal"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Grid container justifyContent="space-between" alignItems="center" className="mb-4">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href="!#" style={{ textDecoration: 'none', color: 'red' }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="error"
              type="submit"
              className="mb-4"
              fullWidth
            >
              Sign in
            </Button>
            <div className="text-center">
              <Typography>Not a member?</Typography>
              <Button
                onClick={() => (window.location.href = '/signup')}
                style={{
                  textDecoration: 'none',
                  color: 'red',
                  backgroundColor: 'white',
                  border: 'none',
                  marginBottom: '5px',
                }}
              >
                Register
              </Button>
              <Typography>or sign up with:</Typography>

              <div className="d-flex justify-content-between mx-auto" style={{ width: '50%' }}>
                <IconButton variant="outlined" className="log-hov m-1">
                  <FacebookIcon style={{ color: 'GrayText' }} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <TwitterIcon style={{ color: 'GrayText' }} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <GoogleIcon style={{ color: 'GrayText' }} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <GitHubIcon style={{ color: 'GrayText' }} />
                </IconButton>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progressTheme="light"
      />
    </div>
  );
}

export default Login;
