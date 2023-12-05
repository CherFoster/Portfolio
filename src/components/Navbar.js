import React, { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-scroll';
import Resume from './Resume';

function Navbar({ onContactClick, hideContactForm, onProjectClick }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  function toggleMobileNav(){
    setMobileNavVisible(!mobileNavVisible);
  };

  // function hideContact(){
  //   hideContactForm();
  //   toggleMobileNav();
  // };

  return (
    <nav id="navbar" className={`navbar ${mobileNavVisible ? 'navbar-mobile' : ''}`}
  >
      <ul>
        <li>
          <Link
          to="/">
            Home
          </Link>
        </li>

        {/* <li>
          <Link 
          to="portfolio-section" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          onClick={toggleMobileNav}>
            Projects
            </Link>
            </li> */}

          <li>
            <a onClick={() => { toggleMobileNav(); onProjectClick(); }}>Projects</a>
          </li>

        <li>
          <a onClick={() => { toggleMobileNav(); onContactClick(); }}>Contact</a>
          </li>

        <li>
          <Resume />
          </li>
  
      </ul>
      <i className={`bi ${mobileNavVisible ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleMobileNav}></i>
    </nav>
  );
}

export default Navbar;