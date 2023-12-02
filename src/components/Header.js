import React from "react";
import '../styles/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import Navbar from "./NavBar";

function Header() {
  return (
    <header id="header">
      <div className="container">

        <h1>Cherise Foster</h1>
        <h2>I'm a full-stack <span>software engineer</span> from Denver, Colorado</h2>
        <p className="my-3 text-white">I bring innovative solutions to complex problems, blending front-end flair with robust backend functionalities. My focus is on creating user-friendly and efficient applications, always prioritizing a seamless user experience. My journey in tech is driven by a love for learning and exploring new technologies, constantly enhancing both the user experience and my own skill set.</p>

        <Navbar />

        <p className="my-3">Check out my LinkedIn profile, GitHub, and blog:</p>
  
        <div className="social-links">
          <Link className="linkedin" to="https://www.linkedin.com/in/cherise-foster/">
            <i className="bi bi-linkedin"></i>
            </Link>
          <Link className="github" to="https://github.com/CherFoster">
            <i class="bi bi-github"></i>
            </Link>
          <Link className="blog" to="https://dev.to/cherisefoster">
            <i className="bi bi-journal-text"></i>
            </Link>
          
        </div>

      </div>
    </header>
  );
}

export default Header;