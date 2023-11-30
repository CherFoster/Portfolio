import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js'


function App(){

    return (
        <>
          <Router>
            <Header />
          </Router>
        
        </>
    )
}

export default App