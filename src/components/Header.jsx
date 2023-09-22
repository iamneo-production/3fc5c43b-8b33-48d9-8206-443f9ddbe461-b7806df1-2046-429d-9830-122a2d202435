import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import {Router as useNavigate} from 'react-router-dom';
export default function Header() {
  // const navigate = useNavigate();

  // const naviagtetologin = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/Login');
  // };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'white',color:'black'}} position="static">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* NeoAirlines */}
          </Typography>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">View Flights</Button>
          <Button color="inherit">Contact</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
