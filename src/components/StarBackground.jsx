import { useState, useEffect } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
        
        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateStars = () => {
        // Menos estrellas para look más profesional
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 15000);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 1.5 + 0.5, // Estrellas más pequeñas (0.5px - 2px)
                x: Math.random() * 100,
                y: Math.random() * 100, 
                baseOpacity: Math.random() * 0.2 + 0.1, // Muy sutiles (0.1 - 0.3)
                animationDuration: Math.random() * 6 + 8, // Animación más lenta (8s - 14s)
                animationDelay: Math.random() * 10, // Delay hasta 10s
            });
        }
        
        setStars(newStars);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={`star-${star.id}`}
                    className="star-twinkle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        '--base-opacity': star.baseOpacity,
                        animationDuration: `${star.animationDuration}s`,
                        animationDelay: `${star.animationDelay}s`,
                    }}
                />
            ))}
        </div>
    );
};