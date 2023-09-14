
import React from 'react'
import { connect } from "react-redux";
import CloseButton from 'react-bootstrap/CloseButton';
import {removeItem} from '../../Store/Cart';
function SimpleCart (props) {
  return (
    <div className='cartItems' >{props.cart.productsCart.map((item)=>{
      // {console.log("cart",props.cart.productsCart)}
      return(
 
        <span className='cartItem'>
          {item.name}  <CloseButton onClick={()=>props.removeItem(item)}/>
        </span>

         

      )
    })}</div>
  )
}
const mapStateToProps = (state) => ({ 
  cart: state.cart
})
const mapDispatchToProps = {removeItem}; 
export default  connect(mapStateToProps,mapDispatchToProps)(SimpleCart); 