import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Welcome to My Website</h1>
                <p>I'm a passionate developer creating amazing things</p>
                <a href="#contact" className="cta-button">Get in Touch</a>
            </div>
        </section>
    );
};

export default Hero; 