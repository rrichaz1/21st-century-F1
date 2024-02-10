import './Navigation.css';

// import { useState } from "react";
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Navigation = () => {
    return (    
          <Navbar expand="lg" bg="dark" data-bs-theme="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand href="/">
              <Image src={logo} rounded width="30" height="30" className="d-inline-block align-top"/>
              21st Century F1
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavItem>        
                    <NavLink href="/" className={"text-white nav-effect"}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/standings" className={"text-white nav-effect"}>Standings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/results" className={"text-white nav-effect"}>GP Results</NavLink>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          );
};
 
export default Navigation;