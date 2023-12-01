import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/resume">Resume</Link></li>
            <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  )
}

export default Navbar;