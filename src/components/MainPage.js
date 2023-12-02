import React, { useState } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Contact from './Contact';
import Modal from './Modal';
import { Element } from 'react-scroll';

function MainPage() {
    const [showContact, setShowContact] = useState(false);

    const toggleContactModal = () => {
        setShowContact(!showContact);
    };
    
    return (
        <div>
            <Element name="home-section">
                <Home />
            </Element>

            {showContact && (
                <Element name="contact-section">
                    <Contact />
                </Element>
            )}
        </div>
    );
}

export default MainPage;