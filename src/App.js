import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <footer>
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App; 