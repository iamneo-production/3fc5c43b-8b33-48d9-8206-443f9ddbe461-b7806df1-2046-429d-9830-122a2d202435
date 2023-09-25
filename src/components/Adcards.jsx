import React from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import adc1 from '../images/Adc1.avif'
import adc2 from '../images/Adc2.jpeg'
import adc3 from '../images/Adc3.jpeg'
import '../components/styles/Adcards.css'
export default function Adcards() {
  return (
    <div>
        <Container className='mb-4 pt-3 px-0' style={{backgroundColor:'#F5F5F5'}}>
            <Row>
                <Col md={4} className='d-flex justify-content-center'>
                   <Card className='cardd' style={{border:'none'}}>
                    <Card.Img className='card-img' variant="top" src={adc1} />
                        <Card.Body className='card-bod'>
                            <Card.Title>Join flying club</Card.Title>
                            <Card.Text >
                            It's free! And you can start earning from your very first flight with us or any of our airline partners.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='d-flex justify-content-center'>
                   <Card className='cardd' style={{border:'none'}}>
                    <Card.Img className='card-img' variant="top" src={adc2} />
                        <Card.Body className='card-bod'>
                            <Card.Title>Earn free tickets</Card.Title>
                            <Card.Text>
                            It's free! And you can start earning from your very first flight with us or any of our airline partners.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='d-flex justify-content-center'>
                   <Card className='cardd' style={{border:'none'}}>
                    <Card.Img className='card-img' variant="top" src={adc3} />
                        <Card.Body className='card-bod'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            It's free! And you can start earning from your very first flight with us or any of our airline partners.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className='d-flex justify-content-center mb-3'>
                   <Button style={{backgroundColor:'red',border:'none',fontWeight:'bold'}}>To know more</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
