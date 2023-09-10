import React from 'react'
import { connect } from "react-redux";

// ++++++++++++++++++++++++++++++++++
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col ,Image } from 'react-bootstrap';
import photo from '../../assets/photo.jpg'
// ++++++++++++++++++++++++++++++++++


function Products(props) {
  return (
    <div>
       
        <h2>{props.activeChange.activeCategory}</h2>
        
        <div  style={{display:"flex"}}>
        {props.activeChange.products.map((product,idx)=>{
        if(product.cateAssociation === props.activeChange.activeCategory){

            return(
        <Container className='container'>
        <Row>
         <Col key={idx} xs={12} sm={6} md={4} lg={3}>
               
        <Card style={{ width: '18rem' }}>
      
      <Image src={photo} thumbnail />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
     </Col>
     </Row>
    </Container>
            )
        }
    })} 
                </div>
        {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
    </div>
    
  )
}

const mapStateToProps = (state) => ({ 
    activeChange: state.activateReducer
    
})


export default connect(mapStateToProps)(Products);