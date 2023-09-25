import React from 'react';
import { Card, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const handleSignup=()=>{
    window.location.href="/login";
  }
  const timeOut = () => {
    toast.success('Sign up successful!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(()=>{
        handleSignup();
      },3000);
      
  };
  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }}>
        <Card.Body style={{ border: 'none' }}>
          <Card.Title className="text-center">Sign Up</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>

            <Row className="mx-3 mb-3">
              <Col className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="I agree to the terms and conditions" />
              </Col>
            </Row>

            <Button variant="danger" onClick={timeOut} className="mb-4 w-100">Sign Up</Button>

            <div className="text-center">
              <p>Already a member? <Button onClick={()=>window.location.href="/login"} style={{color:'red',backgroundColor:'white',border:'none',marginBottom:'5px'}}>Sign in</Button></p>
              <p>or sign up with:</p>

              <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-facebook fa-face"></i>
                </Button>

                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-twitter fa-twit"></i>
                </Button>

                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-google fa-goog"></i>
                </Button>

                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-github fa-gith"></i>
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
