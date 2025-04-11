import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InteractiveGraphic from './components/InteractiveGraphic';
import Contact from './components/Contact';
import DotBackground from './components/DotBackground';
import Content from './components/Content';

function App() {
    return (
        <div className="App">
            <DotBackground />
            <InteractiveGraphic />
            <div className="content-wrapper">
                <Navbar />
                <main>
                    <Content />
                    <Contact />
                </main>
            </div>
        </div>
    );
}

export default App; 