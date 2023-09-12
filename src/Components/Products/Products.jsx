import React from 'react'
import { connect } from "react-redux";
import { addItem } from '../../Store/Cart';

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

        {props.productAdd.products.map((product,idx)=>{
        if(product.cateAssociation === props.activeChange.activeCategory){
          console.log("product",product )
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
        <Card.Text>
        price: {product.price}
        </Card.Text>
        <Card.Text>
        quantity: {product.count}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" onClick={()=>props.addItem(product)}>ADD TO CART</Card.Link>
        <Card.Link href="#" >VIEW DETAILS</Card.Link>
      </Card.Body>
    </Card>
     </Col>
     </Row>
    </Container>
            )
        }
    })} 
                </div>

    </div>
    
  )
}

const mapStateToProps = (state) => ({ 
    activeChange: state.activateReducer,
    productAdd: state.productReducer
    
})

const mapDispatchToProps = {addItem}; 

export default connect(mapStateToProps,mapDispatchToProps)(Products);