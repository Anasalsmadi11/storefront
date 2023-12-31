import React from 'react'
import { connect } from "react-redux";
import { addItem } from '../../Store/Cart';
import { getData } from '../../Store/actions';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
// ++++++++++++++++++++++++++++++++++
import Card from 'react-bootstrap/Card';
import { Container, Row, Col ,Image } from 'react-bootstrap';
import photo from '../../assets/photo.jpg'
// ++++++++++++++++++++++++++++++++++


function Products(props) {
 
  useEffect(()=>{
    props.getData()
  },[])

  return (
    <div>
       
        <h2>{props.activeChange.activeCategory}</h2>
        
        <div className='itemscss'>

        {props.productAdd.products.map((product,idx)=>{
        if(product.cateAssociation === props.activeChange.activeCategory){
         if(product.count > 0){

         
          // console.log("product",product )
            return(
        <Container  md={4}   key={idx} >
        <Row >
         <Col  >
               
        <Card className='container1' >
      
      <Image src={photo} thumbnail />
      <Card.Body >
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
        <Card.Link onClick={()=>props.addItem(product)}>ADD TO CART</Card.Link>
        {/* <Card.Link href={`/details/${product.id}`} >VIEW DETAILS</Card.Link> */}
      <Card.Link as={Link} to={`/details/${product.id}`}>VIEW DETAILS</Card.Link>

      </Card.Body>
    </Card>
     </Col>
     </Row>
    </Container>
            )
        }
      }
    })} 
                </div>

    </div>
    
  )
}

const mapStateToProps = (state) => ({ 
    activeChange: state.activateReducer,
    productAdd: state.dataFromApi
    
})

const mapDispatchToProps = {addItem,getData}; 

export default connect(mapStateToProps,mapDispatchToProps)(Products);