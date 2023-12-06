import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar"; 
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {

const [overlayContent, setOverlayContent] = useState(null);
const [scrollPos, setScrollPos] = useState(0);

  const onContactClick = () => {
    setOverlayContent('contact');
  };

  const onProjectClick = () => {
    setOverlayContent('projects');
  };

  const onHideOverlay = () => {
    setOverlayContent(null); // Function to hide the overlay
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    }
  
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col sm={7}>
            <div id="header"
            className={scrollPos > 100 ? 'header-top' : ''}>
              <div className="container">
                <h1>Cherise Foster</h1>
                <h2>I'm a full-stack <span>software engineer</span> from Denver, Colorado</h2>
                <p className="my-3 text-white">
                  I bring innovative solutions to complex problems, blending front-end flair with robust backend functionalities. My focus is on creating user-friendly and efficient applications, always prioritizing a seamless user experience. My journey in tech is driven by a love for learning and exploring new technologies, constantly enhancing both the user experience and my own skill set.
                </p>

                <Navbar onContactClick={onContactClick} onProjectClick={onProjectClick} />

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
            </div>
          </Col>
          <Col sm={5}>
            <Image 
              src="https://i.postimg.cc/X7cbnzZW/me.jpg"
              fluid
              roundedCircle
              style={{ width: '450px', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
      {overlayContent === 'contact' && (
        <div className="overlay">
          <Contact onHideOverlay={onHideOverlay} />
        </div>
      )}
      {overlayContent === 'projects' && (
        <div className="overlay">
          <Projects onHideOverlay={onHideOverlay} />
        </div>
      )}
    </>
  );
}

export default Home;