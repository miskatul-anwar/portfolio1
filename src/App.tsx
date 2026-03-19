import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dock, Section } from './components/Dock';
import { Hero } from './components/Hero';
import { SocialLinks } from './components/SocialLinks';
import { Work } from './components/Work';
import { Blog } from './components/Blog';
import { About } from './components/About';
import './styles/background.scss';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero key="home" onNavigate={setActiveSection} />;
      case 'work':
        return <Work key="work" />;
      case 'blog':
        return <Blog key="blog" />;
      case 'about':
        return <About key="about" />;
      default:
        return <Hero key="home" onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Futuristic Background */}
      <div className="background-container">
        <div className="grid-overlay" />
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Dock */}
      <Dock activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Custom Cursor / Accent */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-50 pointer-events-none" />
    </div>
  );
}
