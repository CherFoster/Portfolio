import React from "react";
import '../styles/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <div className="container">

        <h1>Cherise Foster</h1>
        <h2>I'm a full-stack <span>software engineer</span> from Denver, Colorado</h2>
        <p className="my-3 text-white">I bring innovative solutions to complex problems, blending front-end flair with robust backend functionalities. My focus is on creating user-friendly and efficient applications, always prioritizing a seamless user experience. My journey in tech is driven by a love for learning and exploring new technologies, constantly enhancing both the user experience and my own skill set.</p>

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

        <p className="my-3">Check out my LinkedIn profile, GitHub, and blog:</p>
  
        <div className="social-links">
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="github"><i class="bi bi-github"></i></a>
          <a href="#" className="blog"><i className="bi bi-journal-text"></i></a>
          
        </div>

      </div>
    </header>
  );
}

export default Header;