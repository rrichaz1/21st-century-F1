import './Navigation.css';

import { Link } from "react-router-dom";
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Navigation = () => {
    return (    
          <Navbar expand="lg" bg="dark" data-bs-theme="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand>
              <Image src={logo} rounded width="30" height="30" className="d-inline-block align-top"/>
              21st Century F1
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li" >        
                    <Nav.Link as={Link} to="/" className={"text-white nav-effect"}>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link as={Link} eventKey="link-1" to="/standings" className={"text-white nav-effect"}>Standings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link as={Link} eventKey="link-2" to="/results" className={"text-white nav-effect"}>GP Results</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          );
};
 
export default Navigation;