import './Navigation.css';

// import { useState } from "react";
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
    return (    

            <Navbar expand="lg" bg="dark" data-bs-theme="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand href="/">
              <Image src={logo} rounded width="30" height="30" class="d-inline-block align-top"/>21st Century F1
              </Navbar.Brand>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} /> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav"  />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavItem>        
                    <NavLink href="/" className={"nav-link text-white nav-effect"}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/standings" className={"nav-link text-white nav-effect"}>Standings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/results" className={"nav-link text-white nav-effect"}>GP Results</NavLink>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

             

          );
};
 
export default Navigation;