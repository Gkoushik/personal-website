import React, { useState, useRef, useEffect } from 'react';
import '../styles/Content.css';

const Content = () => {
    const [activeCommand, setActiveCommand] = useState(null);
    const [commandHistory, setCommandHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef(null);

    const availableCommands = [
        'whoami',
        'cat role.txt',
        'about',
        'ls skills/',
        'cd ../projects/',
        'cd interests/',
        'ls commands/'
    ];

    const filteredSuggestions = availableCommands.filter(cmd =>
        cmd.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleCommandClick = (command) => {
        setActiveCommand(activeCommand === command ? null : command);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
        inputRef.current.focus();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const command = inputValue.trim();
            if (command && availableCommands.includes(command)) {
                setCommandHistory([...commandHistory, command]);
                setActiveCommand(command);
                setInputValue('');
                setShowSuggestions(false);
            }
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="content-section">
            <div className="content-container">
                <div className="terminal-commands">
                    <div className={`terminal-line ${activeCommand === 'whoami' ? 'active' : ''}`}>
                        <span className="terminal-prefix">koushik@home:~$</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('whoami')}>whoami {'>'}</span>
                        {activeCommand === 'whoami' && (
                            <span className="terminal-text">Ganni Koushik</span>
                        )}
                    </div>
                    <div className={`terminal-line ${activeCommand === 'role' ? 'active' : ''}`}>
                        <span className="terminal-prefix">koushik@home:~$</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('role')}>cat role.txt {'>'}</span>
                        {activeCommand === 'role' && (
                            <span className="terminal-text">Software Development Engineer II at Amazon</span>
                        )}
                    </div>
                    <div className={`terminal-line ${activeCommand === 'about' ? 'active' : ''}`}>
                        <span className="terminal-prefix">~/profile {'>'}</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('about')}>about</span>
                    </div>
                    {activeCommand === 'about' && (
                        <div className="terminal-line active">
                            <span className="terminal-text">I am a passionate developer with expertise in web development and a strong focus on creating efficient, user-friendly applications.</span>
                        </div>
                    )}
                    <div className={`terminal-line ${activeCommand === 'skills' ? 'active' : ''}`}>
                        <span className="terminal-prefix">koushik@home:~$</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('skills')}>ls skills/ {'>'}</span>
                        {activeCommand === 'skills' && (
                            <div className="terminal-line active">
                                <span className="terminal-text">React JavaScript Java Python AWS</span>
                            </div>
                        )}
                    </div>
                    <div className={`terminal-line ${activeCommand === 'projects' ? 'active' : ''}`}>
                        <span className="terminal-prefix">koushik@home:~$</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('projects')}>cd ../projects/ {'>'}</span>
                        {activeCommand === 'projects' && (
                            <div className="terminal-line active">
                                <a href="https://gkoushik.github.io/Visualizer/#/" target="_blank" rel="noopener noreferrer" className="terminal-text">Visualizer - Path Finding & Sorting Algorithms</a>
                            </div>
                        )}
                    </div>
                    <div className={`terminal-line ${activeCommand === 'interests' ? 'active' : ''}`}>
                        <span className="terminal-prefix">koushik@home:~$</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('interests')}>cd interests/ {'>'}</span>
                        {activeCommand === 'interests' && (
                            <div className="terminal-line active">
                                <span className="terminal-text">Web Development Machine Learning UI/UX Design Problem Solving</span>
                            </div>
                        )}
                    </div>
                    <div className={`terminal-line ${activeCommand === 'commands' ? 'active' : ''}`}>
                        <span className="terminal-prefix">koushik@home:~$</span>
                        <span className="terminal-command" onClick={() => handleCommandClick('commands')}>ls commands/ {'>'}</span>
                        {activeCommand === 'commands' && (
                            <div className="terminal-line active">
                                <span className="terminal-text">Available commands:</span>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ whoami</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ cat role.txt</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ about</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ ls skills/</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ cd ../projects/</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ cd interests/</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="terminal-text">$ ls commands/</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="terminal-input-container">
                {showSuggestions && inputValue && filteredSuggestions.length > 0 && (
                    <div className="command-suggestions">
                        {filteredSuggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
                <div className="terminal-input-wrapper">
                    <span className="terminal-prefix">koushik@home:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="terminal-input"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        placeholder="Type a command..."
                    />
                </div>
            </div>
        </section>
    );
};

export default Content; 