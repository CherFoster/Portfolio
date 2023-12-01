import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Navbar from './NavBar';


function App(){

    return (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        
        </>
    )
}

export default App