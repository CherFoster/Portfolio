import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Contact from './Contact';
import Home from './Home';
import { Element } from 'react-scroll';


function App(){
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

    return (
          <Router>
            <Routes>
              <Route path="/" element={
                <>
                  <Home onContactClick={handleContactClick} />
                  {showContact && (
                    <Element name="contact-section">
                      <Contact />
                    </Element>
                  )}
                </>
              } />
            </Routes>
          </Router>
    )
}

export default App