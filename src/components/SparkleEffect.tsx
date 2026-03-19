import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  rotation: number;
  size: number;
}

export const SparkleEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle: Math.random() * Math.PI * 2,
        radius: 10 + Math.random() * 30,
        speed: 0.01 + Math.random() * 0.03,
        rotation: Math.random() * 360,
        size: 4 + Math.random() * 8
      };

      setSparkles(prev => [...prev.slice(-25), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => prev.map(s => {
        return {
          ...s,
          angle: s.angle + s.speed,
          rotation: s.rotation + 5
        };
      }));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => {
          const currentX = mousePos.x + Math.cos(sparkle.angle) * sparkle.radius;
          const currentY = mousePos.y + Math.sin(sparkle.angle) * sparkle.radius;
          
          return (
            <motion.div
              key={sparkle.id}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: [0, 1, 0.5, 0], 
                scale: [0, 1.2, 1, 0],
                rotate: sparkle.rotation + 180
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                position: 'absolute',
                left: currentX,
                top: currentY,
                color: 'var(--color-primary)',
                textShadow: '0 0 10px var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Sparkles size={sparkle.size} className="fill-primary" />
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {/* Subtle glow at mouse position */}
      <div 
        className="fixed w-48 h-48 bg-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out pointer-events-none"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
    </div>
  );
};
