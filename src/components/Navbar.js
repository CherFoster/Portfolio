import React, { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-scroll';
import Resume from './Resume';

function Navbar({ onContactClick, onProjectClick }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  function toggleMobileNav() {
    setMobileNavVisible(!mobileNavVisible);
    
    if (mobileNavVisible) {
      document.body.classList.remove('overflow-hidden');
    } else {   
      document.body.classList.add('overflow-hidden');
    }
  }

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