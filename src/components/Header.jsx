import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@mui/material/colors';
// Typography
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Button, // Import Button component
} from '@material-ui/core';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import hicon from '../images/NavLogo.png';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none', // Hide the hamburger menu on large screens
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  drawerPaper: {
    width: 250,
  },
  navLinks: {
    [theme.breakpoints.down('md')]: {
      display: 'none', // Hide the buttons on medium and smaller screens
    },
  },
  button: {
    marginRight: theme.spacing(2),
    color: 'black',
    fontWeight: 'bold',
  },
}));

function Header() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    'Book',
    'My Booking',
    'Check in',
    'Reservation',
    'Destination & onboard',
    'Help',
    'Flying club',
    'Deals',
    'Join',
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuOpenIcon sx={{ color: pink[500] }}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img
              src={hicon}
              width="100"
              height="70"
              className="d-inline-block align-top"
              alt="Your Logo"
            />
          </Typography>
          <div className={classes.navLinks}>
            <Button className={classes.button} href="/home">
              Home
            </Button>
            <Button className={classes.button} href="/search">
              Book
            </Button>
            <Button className={classes.button} href="/mybooking">
              My Booking
            </Button>
            <Button className={classes.button} href="#home">
              Check in
            </Button>
            <Button className={classes.button} href="/search">
              Reservation
            </Button>
            <Button className={classes.button} href="#home">
              Destination & onboard
            </Button>
            <Button className={classes.button} href="#link">
              Join
            </Button>
            <Button className={classes.button} onClick={navigateToLogin}>
              Log in
            </Button>
          </div>
          {mobileOpen && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuOpenIcon sx={{ color: pink[500] }}/>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menuItems.map((text, index) => (
                  <MenuItem key={text} onClick={handleMenuClose}>
                    {text}
                  </MenuItem>
                ))}
                <MenuItem onClick={navigateToLogin}>Log in</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                handleDrawerToggle();
                navigateToLogin();
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {
              handleDrawerToggle();
              navigateToLogin();
            }}
          >
            <ListItemText primary="Log in" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
