import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#F2F2F2', color: 'black' }}>
      <Container>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Payment Methods</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <i className="fa fa-cc-visa fa-2x me-3"></i>
              <i className="fa fa-cc-mastercard fa-2x me-3"></i>
              <i className="fa fa-cc-paypal fa-2x me-3"></i>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} style={{ fontWeight: '500' }}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>
              7th cross street CA<br />
              City, Country<br />
              Phone: (+91) 900-386-7705
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#!" className="text-dark me-3">
                <i className="fa fa-facebook-f fa-lg"></i>
              </a>
              <a href="#!" className="text-dark me-3">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a href="#!" className="text-dark me-3">
                <i className="fa fa-instagram fa-lg"></i>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Typography
        variant="body2"
        align="center"
        style={{ backgroundColor: '#F2F2F2', padding: '1rem' }}
      >
        &copy; {new Date().getFullYear()} Neoairline. All Rights Reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
