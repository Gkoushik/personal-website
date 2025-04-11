import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-content">
                <div className="social-links">
                    <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 