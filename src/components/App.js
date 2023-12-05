import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import { Element } from 'react-scroll';


function App(){
  const [showContact, setShowContact] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
    setShowProject(false); // Hide Projects if Contact is opened
  };

  const handleProjectClick = () => {
    setShowProject(!showProject);
    setShowContact(false); // Hide Contact if Projects is opened
  }

  const hideContactForm = () => {
    setShowContact(false);
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home 
              onContactClick={handleContactClick} 
              hideContactForm={hideContactForm}
              onProjectClick={handleProjectClick} />
            {showContact && (
              <Element name="contact-section">
                <Contact />
              </Element>
            )}
            {showProject && (
              <Element name="portfolio-section">
                <Projects />
              </Element>
            )}
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App