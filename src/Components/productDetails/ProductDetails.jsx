import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from '../../assets/photo.jpg'
import { addItem } from '../../Store/Cart';

function ProductDetails(props) {
const {itemId}= useParams()

  return (
    <div>
      {props.productAdd.products.map((product,idx)=>{
        if(product.id == itemId){
          return(
      
            <Card style={{ width: '25rem', height:"fit",margin:"auto" }}>
            <Card.Img variant="top" src={photo}  />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              
              <Card.Text>Price: {product.price}</Card.Text>
             
             {product.count > 0 ? 
              <Card.Text>quantity: {product.count}</Card.Text> : "empty"

              }
              {
              product.count > 0 ?
              <Button onClick={()=>props.addItem(product)} style={{ width: '20rem', margin:"auto" }} variant="primary">Buy</Button>
              : 
              <Button  style={{ width: '20rem', margin:"auto" }} variant="primary">Empty</Button>

              }
 
            </Card.Body>
          </Card>
              )
        }
      })}

      <h2 style={{marginTop:"20px"}}>Related Items</h2>
      <span>suggestion 1</span>
      <span>suggestion 2</span>
      <span>suggestion 3</span>
    </div>
  )
}


const mapStateToProps = (state) => ({ 
  productAdd: state.dataFromApi
  
})

const mapDispatchToProps = {addItem}; 

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);