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


/*
            // <nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-dark'>
            //   <div class="container">
                
            //         <img src={logo} width="30" height="30" class="d-inline-block align-top"
            //             alt="F1 Car Logo"/>
            //             <h4>21st Century F1</h4>
          
        
            //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            //         aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>


            //     <div class="collapse navbar-collapse" id="navbarCollapse">
            //     <ul className="nav navbar-nav mr-auto text-center">
            //         <li>
            //           <NavLink to="/" className={"nav-link nav-effect"}> Home</NavLink>
            //         </li>
            //         <li>
            //           <NavLink to="/standings" className={"nav-link text-white nav-effect"}>Standings</NavLink>
            //         </li>
            //         <li>
            //           <NavLink to="/results" className={"nav-link text-white nav-effect"}>GP Results</NavLink>
            //         </li>
            //       </ul>
            //     </div>
            //     </div>
            // </nav>
            */