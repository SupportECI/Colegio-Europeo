import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generamos 20 burbujas con propiedades aleatorias
    const newBubbles = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20, // Tamaño entre 20px y 80px
      left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
      color: ["#B32C3A", "#364966"][Math.floor(Math.random() * 2)],
      duration: Math.random() * 15 + 10, // Tiempo de subida
      delay: Math.random() * 5, // Retraso inicial
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        // Desvanecimiento suave en los últimos 40px superiores
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 40px)',
        maskImage: 'linear-gradient(to bottom, transparent 0px, black 40px)'
      }}
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full opacity-40" 
          style={{
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            left: bubble.left,
            bottom: "-100px",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: ["0px", `${Math.random() * 100 - 50}px`, "0px"],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;