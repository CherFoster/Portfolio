import React from "react";
import '../styles/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  return (
    <header id="header">
      <div className="container">

        <h1>Cherise Foster</h1>
        <h2>I'm a passionate <span>software engineer</span> from Denver, Colorado</h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link active" href="#header">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#resume">Resume</a></li>
            <li><a className="nav-link" href="#services">Services</a></li>
            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <p className="my-3">Check out my LinkedIn profile and blog:</p>
  
        <div className="social-links">
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="blog"><i className="bi bi-journal-text"></i></a>
        </div>

      </div>
    </header>
  );
}

export default Header;