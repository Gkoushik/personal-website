import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/InteractiveGraphic.css';

const InteractiveGraphic = () => {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        setRipples(prev => [...prev, { x, y, id: Date.now() }]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== Date.now()));
        }, 1000);
    };

    return (
        <motion.div
            className="interactive-graphic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ripple-area" onClick={handleClick} />
            {ripples.map(ripple => (
                <motion.div
                    key={ripple.id}
                    className="ripple"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                    }}
                />
            ))}
        </motion.div>
    );
};

export default InteractiveGraphic; 