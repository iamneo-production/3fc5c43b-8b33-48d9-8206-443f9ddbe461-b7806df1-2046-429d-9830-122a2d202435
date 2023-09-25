import React from 'react'
import {Row,Col,Carousel,Button} from 'react-bootstrap'
import ban1 from '../images/sleep.jpg'
import ban2 from '../images/banner1.jpg'
import ban3 from '../images/banner2.jpg'
export default function Carousels() {
  return (
    <div>
        <Row className='mt-2'>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ban1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Book Your Flight</h3>
                <p>Find the best deals and book your next flight with ease.</p>
                <Button style={{backgroundColor:'red',border:'none',fontWeight:'bold'}}>Explore our cabins and seats</Button>
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ban2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Travel Insurance</h3>
                <p style={{fontSize:'20px'}}>Protect your trip with our comprehensive travel insurance plans.</p>
                <Button style={{backgroundColor:'red',border:'none',fontWeight:'bold'}}>Explore more <i className="fa fa-rightarrow-r fa-lg"></i></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ban3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Take a trip</h3>
                <p>Explore Antigua's 365 beaches from 20,000 points^</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}
