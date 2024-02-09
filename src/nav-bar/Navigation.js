import './Navigation.css';
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import logo from './logo.png';

const Navigation = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    return (    

            <nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-dark'>
              <div class="container">
                
                    <img src={logo} width="30" height="30" class="d-inline-block align-top"
                        alt="F1 Car Logo"/>
                        <h4>21st Century F1</h4>
          
        
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav mr-auto text-center">
                    <li>
                      <NavLink to="/" className={"nav-link nav-effect"}> Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/standings" className={"nav-link text-white nav-effect"}>Standings</NavLink>
                    </li>
                    <li>
                      <NavLink to="/results" className={"nav-link text-white nav-effect"}>GP Results</NavLink>
                    </li>
                  </ul>
                </div>
                </div>
            </nav>

          );
};
 
export default Navigation;