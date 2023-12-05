import React, { useState } from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar"; // Assuming Navbar is a separate component
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const navigate = useNavigate();

  const onContactClick = () => {
    setShowContact(!showContact); // Toggle visibility of Contact form
    setShowProject(false); // Ensure that Projects is not shown
  };

  const onProjectClick = () => {
    setShowProject(!showProject);
    setShowContact(false); // Ensure that Contact is not shown
  };

  const hideContactForm = () => {
    setShowContact(false);
    navigate('/'); // Navigate back to the home page
  };

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col sm={7}>
            <div id="header">
              <div className="container">
                <h1>Cherise Foster</h1>
                <h2>I'm a full-stack <span>software engineer</span> from Denver, Colorado</h2>
                <p className="my-3 text-white">
                  I bring innovative solutions to complex problems, blending front-end flair with robust backend functionalities. My focus is on creating user-friendly and efficient applications, always prioritizing a seamless user experience. My journey in tech is driven by a love for learning and exploring new technologies, constantly enhancing both the user experience and my own skill set.
                </p>

                <Navbar onContactClick={onContactClick} onProjectClick={onProjectClick} hideContactForm={hideContactForm} />
                {showContact && <Contact />}
                {showProject && <Projects />}

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
    </>
  );
}

export default Home;