import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <Link to="/" className="Navbar-logo">
          Expert Guide
        </Link>
        <ul className="Navbar-menu">
          <li className="Navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/tour">Tour</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/sign_up">SignUp</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/services">Services</Link>
          </li>
          
        </ul>
      </div>
      <div className='icons'>
     
<div className="fas fa-user"></div>
</div>
    </nav>
   
  );
};

export default NavbarComponent;
