import React from 'react';
import '../styles/NavBar.css';
import Resume from './Resume';

function Navbar({ onContactClick, onProjectClick, mobileNavVisible, toggleMobileNav }) {

  return (
    <nav id="navbar" className={`navbar ${mobileNavVisible ? 'navbar-mobile' : ''}`}
  >
      <ul>
        <li><a href="#projects" onClick={() => { toggleMobileNav(); onProjectClick(); }}>Projects</a></li>
        <li><a href="#contact" onClick={() => { toggleMobileNav(); onContactClick(); }}>Contact</a></li>
        <li><Resume /></li>
      </ul>
      <i className={`bi ${mobileNavVisible ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleMobileNav}></i>
    </nav>
  );
}

export default Navbar;