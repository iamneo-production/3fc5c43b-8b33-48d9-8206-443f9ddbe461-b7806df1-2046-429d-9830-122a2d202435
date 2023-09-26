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

export default function Login() {
  const handleLogin = () => {
    window.location.href = '/home';
    
  };

  const timeOut = () => {
    
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
    setTimeout(() => {
      handleLogin();
    }, 3000);
  };

  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }}>
        <CardContent style={{ border: 'none' }}>
          <Typography variant="h5" component="div" className="text-center">
            Sign In
          </Typography>
          <form>
            <TextField
              label="Email address"
              fullWidth
              type="email"
              placeholder="Enter email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Password"
              fullWidth
              type="password"
              placeholder="Password"
              variant="outlined"
              margin="normal"
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
              onClick={timeOut}
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
                  <FacebookIcon style={{color:'GrayText'}} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <TwitterIcon style={{color:'GrayText'}} />
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <GoogleIcon style={{color:'GrayText'}}/>
                </IconButton>

                <IconButton variant="outlined" className="log-hov m-1">
                  <GitHubIcon style={{color:'GrayText'}}/>
                </IconButton>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable progressTheme="light" />
    </div>
  );
}


