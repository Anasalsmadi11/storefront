import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div >
            <Navbar className='navbar'  bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>

            <Nav.Link  as={Link} to="/cart" style={{color:"white"}}>CART ({props.cart.productsCart.length})</Nav.Link> {/* as={Link} to="/cart" this makes it behave as a link */}
        </Container>
      </Navbar>
 

      
      
      </div>
    
  )
}
const mapStateToProps = (state) => ({ 
  cart: state.cart
})
export default connect(mapStateToProps)(Header)