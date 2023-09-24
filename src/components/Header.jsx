import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import hicon from '../images/neo.png'
function Headbar() {
  const styles={
    color: '#61126B',
    fontWeight:'560',
    marginLeft:'10px'
  }
  const navStyles={
      fontWeight:'480',
      color:'#61126B',
      marginLeft:'10px' 
  }
  const btlog={
    backgroundColor:'#BD1635',
    color:'white',
    marginLeft:'18px',
    fontWeight:'560',
    borderRadius:'7px',
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'6px',
    paddingBottom:'0px'
  }
  const navigateToLogin=()=>{
       window.location.href="/login";
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:'black'}}>
      <Container>
       
        <Navbar.Brand href="#home">
        <img src={hicon} 
        width="100"
        height="25"
        className="d-inline-block align-top"
        alt="Your Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav me-4 mx-4">
            <Nav.Link href="/search" style={styles}>Book</Nav.Link>
            <Nav.Link href="#link" style={styles}>My Booking</Nav.Link>
            <Nav.Link href="#home" style={styles}>Check in</Nav.Link>
            <Nav.Link href="#link" style={styles}>Flight status</Nav.Link>
            <Nav.Link href="#home" style={navStyles}>Destination & onboard</Nav.Link>
            <Nav.Link href="#link" style={navStyles}>Help</Nav.Link>
            <Nav.Link href="#link" style={navStyles}>Flying club</Nav.Link>  
            <Nav.Link href="#link" style={navStyles}>Deals</Nav.Link>
            <Nav.Link href="#link" style={styles} className='sep'>Join</Nav.Link> 
            <Nav.Link href="#link" style={btlog} onClick={navigateToLogin} >Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headbar;