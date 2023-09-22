import React, { useState } from 'react';
import { Container,Card,Alert,Row,ColForm, Button  } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import '../App.css'
function Signup() {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    // Replace '/login' with the actual route to your login page
    navigate('/login');
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='con'>
    <Container fluid>
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user me-3" style={{ fontSize: '1.5rem' }} />
                <Form.Control type='text' placeholder='Your Name' className='w-100' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-3" style={{ fontSize: '1.5rem' }} />
                <Form.Control type='email' placeholder='Your Email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }} />
                <Form.Control type='password' placeholder='Password' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key me-3" style={{ fontSize: '1.5rem' }} />
                <Form.Control type='password' placeholder='Repeat your password' />
              </div>

              <div className='mb-4'>
                <Form.Check type='checkbox' label='Subscribe to our newsletter' />
              </div>

              <Button className='mb-4' size='lg'>Register</Button>

              <Alert variant="info" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
                If you have an account, please 
              </Alert>
            </Col>

            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>


        
      </div> 
    
  );
}

export default Signup;
