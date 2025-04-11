import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">profile</a>
                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar; 