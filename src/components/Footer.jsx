import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="foot-con" style={{backgroundColor:'#F2F2F2',color:'black'}}>
      <Container>
        <Row className="py-4">
          <Col md={4} sm={12}>
            <h5>Payment Methods</h5>
            <div className="d-flex justify-content-center">
              <i className="fa fa-cc-visa fa-2x me-3"></i>
              <i className="fa fa-cc-mastercard fa-2x me-3"></i>
              <i className="fa fa-cc-paypal fa-2x me-3"></i>
            </div>
          </Col>
          <Col md={4} sm={12} style={{fontWeight:'500'}}>
            <h5>Contact Us</h5>
            <p>7th cross street CA<br />City, Country<br />Phone: (+91) 900-386-7705</p>
          </Col>
          <Col md={4} sm={12}>
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
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
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{backgroundColor:'#F2F2F2'}}>
        &copy; {new Date().getFullYear()} Neoairline. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
