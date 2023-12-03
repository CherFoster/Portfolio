import React, { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-scroll';
import Resume from './Resume';

function Navbar({ onContactClick, hideContactForm }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  function toggleMobileNav(){
    setMobileNavVisible(!mobileNavVisible);
  };

  function hideContact(){
    hideContactForm();
    toggleMobileNav();
  };

  return (
    <nav id="navbar" className={`navbar ${mobileNavVisible ? 'navbar-mobile' : ''}`}
  >
      <ul>
        <li>
          <Link
          to="home-section" 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => {hideContact()}}>
            Home
          </Link>
        </li>

        {/* <li>
          <Link
           to="about-section"
           spy={true}
           smooth={true} 
           offset={-70} 
           duration={500} 
           onClick={toggleMobileNav}>
            About
            </Link>
          </li> */}

        <li>
          <Resume />
          </li>

        <li>
          <Link 
          to="portfolio-section" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          onClick={toggleMobileNav}>
            Portfolio
            </Link>
            </li>

        {/* <li><Link to="contact-section" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileNav}>Contact</Link></li> */}

        <li><a onClick={() => { toggleMobileNav(); onContactClick(); }}>Contact</a></li>
  
      </ul>
      <i className={`bi ${mobileNavVisible ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleMobileNav}></i>
    </nav>
  );
}

export default Navbar;