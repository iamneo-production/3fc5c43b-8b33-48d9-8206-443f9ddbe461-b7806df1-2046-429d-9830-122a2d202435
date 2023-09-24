import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import pay from '../images/payimg.png'

export default function Payboost() {
  return (
    <div>
    <Container className='mx-4'>
       <Row>
        <Col className='p-2'>
            <Image src={pay} alt="payments"/>
        </Col>
        <Col className='p-2'>
             <div className='text-sec' style={{textAlign:'left'}}>
                 <h3 className='tit-pay'>Boost your balance every day</h3>
                 <br/>
                 <p className='con-pay' style={{textAlign:'left'}}>
                 Every neoair Point you earn through Flying Club and neoair combines into a single balance
                 </p>
                 <br/>
                 <h3 className='tit-pay'>More ways to spend your points</h3>
                 <p className='con-pay'>
                 Starting at just 200 neoair Points choose from little treats, neo exclusives and VIP concerts.
                 </p>
                 <p className='con-pay'>
                    <a href='#' alt="red">
                    <span class="btn btn-secondary">Show me more about neoair</span>
                    </a>
                 </p>
             </div>
        </Col>
       </Row>
    </Container>
    </div>
  )
}
