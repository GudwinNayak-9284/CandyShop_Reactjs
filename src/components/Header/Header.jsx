import React, { useContext } from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/candy-shop.png'
import { CandyContext } from '../../store/candy-context';
import './Header.css'

const Header = (props) => {
  const cartCtx=useContext(CandyContext)

 const numberOfCartItems=cartCtx.items.reduce((currNum,item)=>{
  return currNum+item.amount},0)


  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo} // Replace with your logo
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Candy Shop logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#new-arrivals">New Arrivals</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
        </Nav>
        <Button onClick={props.onShowCart}
        variant="dark" style={{width:'120px',height:'50px',display:'flex',
        justifyContent:'center',alignItems:'center'}}>
          <FaShoppingCart className='m-1'/> Cart<div className='m-2'>{numberOfCartItems}</div>
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header