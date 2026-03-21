import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dock, Section } from './components/Dock';
import { Hero } from './components/Hero';
import { SocialLinks } from './components/SocialLinks';
import { Work } from './components/Work';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import './styles/background.scss';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  if (!isMounted) return null;

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero key="home" onNavigate={setActiveSection} />;
      case 'skills':
        return <Skills key="skills" />;
      case 'work':
        return <Work key="work" />;
      case 'education':
        return <Education key="education" />;
      case 'certifications':
        return <Certifications key="certifications" />;
      case 'blog':
        return <Blog key="blog" />;
      case 'about':
        return <About key="about" />;
      default:
        return <Hero key="home" onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
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
            initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
            transition={{ 
              duration: 0.6, 
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.4 }
            }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Dock */}
      <Dock 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Custom Cursor / Accent */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-50 pointer-events-none" />
    </div>
  );
}
