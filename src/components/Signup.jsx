import React from 'react';
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

function SignUp() {
  const handleSignup = () => {
    window.location.href = '/login';
  };

  const timeOut = () => {
    toast.success('Sign up successful!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setTimeout(() => {
      handleSignup();
    }, 3000);
  };

  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }}>
        <CardContent style={{ border: 'none' }}>
          <Typography variant="h5" component="div" className="text-center">
            Sign Up
          </Typography>
          <form>
            <TextField
              label="Name"
              fullWidth
              type="text"
              placeholder="Enter your name"
              variant="outlined"
              margin="normal"
              className="mb-3"
            />
            <TextField
              label="Email address"
              fullWidth
              type="email"
              placeholder="Enter email"
              variant="outlined"
              margin="normal"
              className="mb-3"
            />
            <TextField
              label="Password"
              fullWidth
              type="password"
              placeholder="Enter password"
              variant="outlined"
              margin="normal"
              className="mb-3"
            />
            <TextField
              label="Confirm Password"
              fullWidth
              type="password"
              placeholder="Confirm password"
              variant="outlined"
              margin="normal"
              className="mb-3"
            />

            <Grid container justifyContent="space-between" alignItems="center" className="mb-3">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I agree to the terms and conditions"
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="error"
              onClick={timeOut}
              className="mb-4 w-100"
            >
              Sign Up
            </Button>
            <div className="text-center">
              <Typography>Already a member?</Typography>
              <Button
                onClick={() => (window.location.href = '/login')}
                style={{
                  color: 'red',
                  backgroundColor: 'white',
                  border: 'none',
                  marginBottom: '5px',
                }}
              >
                Sign in
              </Button>
              <Typography>or sign up with:</Typography>

              <div className="d-flex justify-content-between mx-auto" style={{ width: '50%' }}>
                <IconButton variant="outlined" className="log-hov m-1">
                  <FacebookIcon style={{color:'GrayText'}} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <TwitterIcon style={{color:'GrayText'}} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <GoogleIcon style={{color:'GrayText'}} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <GitHubIcon style={{color:'GrayText'}} />
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

export default SignUp;
