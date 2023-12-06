import React, { useState } from 'react';
import '../styles/HeaderTest.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-scroll';

const Header = () => {

  return (
    <header id="header">
      <div className="container">
        <h1><a href="index.html">Emily Jones</a></h1>
        <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li className="nav-link active">Home</li>
            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Header;