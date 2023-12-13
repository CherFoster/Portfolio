import React, { useState } from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar"; 
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Header.css'
function Home() {
    const [overlayContent, setOverlayContent] = useState(null);
    const [scrollPos, setScrollPos] = useState(0);

    const onContactClick = () => {
        if (mobileNavVisible) {
            toggleMobileNav(); // Close the mobile navigation if it's open
        }
        setOverlayContent('contact');
        document.body.classList.add('no-scroll');
    };

    const onProjectClick = () => {
        if (mobileNavVisible) {
            toggleMobileNav(); // Close the mobile navigation if it's open
        }
        setOverlayContent('projects');
        document.body.classList.add('no-scroll');
    };

    const onHideOverlay = () => {
        setOverlayContent(null);
        document.body.classList.remove('no-scroll');
        if (mobileNavVisible) {
            toggleMobileNav(); // reset the mobile navbar
        }
    };

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
        <>
        <Container>
            <Row className="align-items-center">
            <Col sm={7}>
                <div id="header"
                className={scrollPos > 100 ? 'header-top' : ''}>
                <div className="container">
                    <h1>Cherise Foster</h1>
                    <h2>I'm a Full-Stack <span>Software Engineer</span></h2>
                    <br />
                    <h4><i class="bi bi-geo-alt-fill"></i> Denver, Colorado</h4>
                    <p className="my-3 text-white">
                        I bring innovative solutions to complex problems, blending front-end flair with robust backend functionalities. My focus on user-friendly, efficient applications is enhanced by my flight attendant background, where I honed skills in public interaction and teamwork. My journey in tech is driven by a love for learning and exploring new technologies, constantly enhancing both the user experience and my own skill.
                    </p>

                    <Navbar 
                        onContactClick={onContactClick} 
                        onProjectClick={onProjectClick} 
                        mobileNavVisible={mobileNavVisible} 
                        toggleMobileNav={toggleMobileNav} 
                    />
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