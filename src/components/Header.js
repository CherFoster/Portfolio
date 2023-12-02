import React, { useState } from "react";
import '../styles/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./Navbar";
import Contact from "./Contact";
import { useNavigate } from 'react-router-dom';

function Header() {

  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const onContactClick = () => {
    setShowContact(!showContact); // Toggle visibility of Contact form
  };

  const hideContactForm = () => {
    setShowContact(false);
    navigate('/'); // Navigate back to the home page
  };

  return (
    <header id="header">
      <div className="container">

        <h1>Cherise Foster</h1>
        <h2>I'm a full-stack <span>software engineer</span> from Denver, Colorado</h2>
        <p className="my-3 text-white">
          I bring innovative solutions to complex problems, blending front-end flair with robust backend functionalities. My focus is on creating user-friendly and efficient applications, always prioritizing a seamless user experience. My journey in tech is driven by a love for learning and exploring new technologies, constantly enhancing both the user experience and my own skill set.
          </p>

        <Navbar onContactClick={onContactClick} hideContactForm={hideContactForm} />
        {showContact && <Contact />}

        <p className="my-3">Check out my LinkedIn profile, GitHub, and blog:</p>
  
        <div className="social-links">
          <a href="https://www.linkedin.com/in/cherise-foster/" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/CherFoster" className="github">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://dev.to/cherisefoster" className="blog">
            <i className="bi bi-journal-text"></i>
          </a>
        </div>
        
      </div>
    </header>
  );
}

export default Header;