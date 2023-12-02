import React, { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar({ onContactClick }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  function toggleMobileNav(){
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <nav id="navbar" className={`navbar ${mobileNavVisible ? 'navbar-mobile' : ''}`}>
      <ul>
        <li><Link to="home-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>Home</Link></li>

        {/* <li><Link to="about-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>About</Link></li> */}

        <li><ScrollLink to="about-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>About</ScrollLink></li>

        <li><Link to="resume-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>Resume</Link></li>

        <li><Link to="portfolio-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>Portfolio</Link></li>

        {/* <li><Link to="contact-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>Contact</Link></li> */}

        <li><a onClick={() => { toggleMobileNav(); onContactClick(); }}>Contact</a></li>
  
      </ul>
      <i className={`bi ${mobileNavVisible ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleMobileNav}></i>
    </nav>
  );
}

export default Navbar;