import React from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login button clicked');
    // After successful login, you can navigate to another page
    navigate('/Home'); // Replace '/dashboard' with the actual dashboard route
  };

  return (
    <Container fluid>
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-3" style={{ fontSize: '1.5rem' }} />
                <Form.Control type='email' placeholder='Your Email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }} />
                <Form.Control type='password' placeholder='Password' />
              </div>

              <Button onClick={handleLogin} className='mb-4' size='lg'>
                Login
              </Button>

              <Button variant="info">
              <span onClick={() => navigate('/Signup')} style={{ cursor: 'pointer' }}>Don't have an account?.Sign up</span> 
              </Button>
            </Col>

            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;
