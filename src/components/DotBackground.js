import React, { useEffect, useRef } from 'react';
import '../styles/DotBackground.css';

const DotBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const dots = [];
        const numDots = 100;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initialize dots
        const initDots = () => {
            for (let i = 0; i < numDots; i++) {
                dots.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speed: Math.random() * 0.5 + 0.2
                });
            }
        };

        // Animate dots
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.y += dot.speed;
                if (dot.y > canvas.height) {
                    dot.y = 0;
                    dot.x = Math.random() * canvas.width;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100, 255, 218, 0.2)';
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        initDots();
        animate();

        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return <canvas ref={canvasRef} className="dot-background" />;
};

export default DotBackground; 