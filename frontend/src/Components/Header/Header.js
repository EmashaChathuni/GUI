import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'

import logo from "C:\Users\MSI\Desktop\TourGuide\GUI\frontend\src\images\logo.png"

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {path:'/about',
  display: 'About'
  },
  { path: '/tours',
    display: 'Tours'
  },
]

  const Header = () => {
    return (
      <header className='header'>
        <Container>
          <Row>
            <div className='nav_wrapper d-flex justify-content-between align-items-center'>
              {/* Logo */}
              <div className='logo'>
                <img src={logo} alt="Logo" />
              </div>
              {/* Navigation Links */}
              <nav className='navigation'>
                <ul className='nav_list d-flex'>
                  {navLinks.map((link, index) => (
                    <li key={index} className='nav_item'>
                      <NavLink to={link.path} activeClassName='active'>
                        {link.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Example Button */}
              <Button variant='primary'>Example Button</Button>
            </div>
          </Row>
        </Container>
      </header>
    );
  };
  
  export default Header;
  
