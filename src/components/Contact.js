import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>Get In Touch</h2>
                <div className="contact-info">
                    <p>koushikganni@gmail.com</p>
                </div>
                <div className="contact-links">
                    <a href="mailto:koushikganni@gmail.com" className="contact-button">Email</a>
                    <a href="https://github.com/Gkoushik" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
                    <a href="https://www.linkedin.com/in/koushik-ganni" target="_blank" rel="noopener noreferrer" className="contact-button">LinkedIn</a>
                </div>
            </div>
        </section>
    );
};

export default Contact; 