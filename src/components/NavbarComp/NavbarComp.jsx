import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
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
          <Nav.Link className="mx-3" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-3" href="#allreview">All Reviews</Nav.Link>
          <Nav.Link className="mx-3" href="#review">My Reviews</Nav.Link>
          <Nav.Link className="mx-3" href="#post">Post A Review</Nav.Link>
          <Nav.Link className="mx-3" href="#about">About</Nav.Link>  
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