import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useSelector , useDispatch } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from "../../slices/userslice";

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const state = useSelector((state) => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    let handleScroll = () => {
      if(window.scrollY >= 100){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  return (
    <Navbar className={`${scrolled ? "scrolled" : ""} navbar-container`}  expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="brand"  style={{fontFamily : "Oswald"}}>Travello</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={"/"} className="mx-3" >Home</Nav.Link>
          <Nav.Link as={Link} to={"/allreviews"} className="mx-3">All Reviews</Nav.Link>
         {state.user &&  <Nav.Link  className="mx-3" >My Reviews</Nav.Link>}
         {state.user &&  <Nav.Link as={Link} className="mx-3" >Post A Review</Nav.Link>}
          {/*  */}
         {!state.user &&  <Nav.Link as={Link} to={"/user/login"} className="mx-3" >Login</Nav.Link>   }
         {state.user &&  <Nav.Link onClick={()=> dispatch(logout())} className="mx-3" >Logout</Nav.Link>   }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavbarComp;
{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}