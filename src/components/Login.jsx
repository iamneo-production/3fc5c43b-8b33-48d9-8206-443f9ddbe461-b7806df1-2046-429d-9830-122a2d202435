import React from 'react';
import { Card, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
function App() {
  const handleLogin=()=>{
    window.location.href="/home";
  }
  const timeOut = () => {
    toast.success('Sign in successful!', {
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
        handleLogin();
      },3000);
      
  };
  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      
      <Card style={{ width: '400px' }}>
        <Card.Body style={{border:'none'}}>
          <Card.Title className="text-center">Sign In</Card.Title>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Row className="mx-3 mb-4">
              <Col className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="!#" style={{textDecoration:'none',color:'red'}}>Forgot password?</a>
              </Col>
            </Row>

            <Button variant="danger" 
            
            onClick={timeOut} 
            className="mb-4 w-100">
              Sign in
            </Button>
            <div className="text-center">
              <p>Not a member? <Button onClick={()=>window.location.href="/signup"} style={{textDecoration:'none',color:'red',backgroundColor:'white',border:'none',marginBottom:'5px'}}>Register</Button></p>
              <p>or sign up with:</p>

              <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                <Button variant="outline-danger" className="log-hov m-1">
                 {/* <FontAwesomeIcon icon="coffee" size="lg" /> */}
                 <i className="fa fa-facebook fa-face"></i>
                 {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                </Button>

                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-twitter fa-twit" ></i>
                </Button>

                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-google fa-goog" ></i>
                </Button>

                <Button variant="outline-danger" className="log-hov m-1">
                  <i className="fa fa-github fa-gith" ></i>
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
