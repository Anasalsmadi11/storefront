import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <div >
            <Navbar className='navbar'  bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
            <Nav.Link style={{color:"white"}} href="#pricing">CART ({props.cart.productsCart.length})</Nav.Link>
        </Container>
      </Navbar>
      </div>
    
  )
}
const mapStateToProps = (state) => ({ 
  cart: state.cart
})
export default connect(mapStateToProps)(Header)