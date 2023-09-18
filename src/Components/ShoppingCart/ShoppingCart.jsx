import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

function ShoppingCart(props) {
   const[total, setTotal] = useState(0)


  return (
    <div>

<Card style={{ width: '30rem', margin:"auto", minHeight:"500px"}}>
     
      <Card.Body className='cardd'>
        <Card.Title>Order summary</Card.Title>
        
        {props.cart.productsCart.map((product,idx)=>{
            return(
                <div key={idx}>
                    <span className='spann'>{product.name}</span> 
                    <span>{product.price} $</span> 
                </div>
            )
        })}

        { useEffect(() => {
            let cartTotal = 0;
            for (const product of props.cart.productsCart) {
                cartTotal += product.price;
            }
            setTotal(cartTotal);
  }, [props.cart.productsCart])}

        <Card.Text className='spann' style={{ fontWeight:'bold' ,marginTop:"25px" }}><span > Total:</span> <span>{total} $</span> </Card.Text>

    

    <form className='form'>
         <div className='div1'>
         <h4>Billing Address</h4>
        <input type="text" id="full-name" placeholder='Full name' />

        <input type="text" id="address" placeholder='address' />

        <input type="text" id="city" placeholder='city' />

        <input type="text" id="state" placeholder='state' />

        <input type="text" id="zip" placeholder='zip' />
            </div>   
   
   <div className='div2'>

        <h4>Payment Details</h4>

        <input type="text" id="credit-card" placeholder='credit card'/>

  
        <input type="date" id="expiration" placeholder="expiration" />



        <input type="text" id="cvv" placeholder="CVV" />

        {/* <button className='formbtn' type="submit">Submit</button> */}
    </div>
      </form>
      <Button style={{marginTop:"25px"}} variant="primary" type="button">Place your order</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => ({ 
    cart: state.cart

})

// const mapDispatchToProps = {addItem}; 

export default connect(mapStateToProps)(ShoppingCart);