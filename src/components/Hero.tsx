import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Zap, Terminal, Cpu } from 'lucide-react';
import { Section } from './Dock';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 w-full max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border-primary/20 animate-pulse">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono">
            Kernel: Miskatul-OS | Status: Optimizing
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-tight">
          MISKATUL <span className="text-primary text-glow block md:inline">ANWAR</span>
        </h1>
        
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-xl md:text-2xl font-mono text-primary/80 tracking-tight">
            &gt; Systems Thinker // Problem Solver
          </p>
          <p className="max-w-2xl mx-auto text-base text-foreground/50 leading-relaxed font-light">
            Logic-first, efficiency-driven developer specializing in competitive programming 
            and high-performance systems. Currently architecting with <span className="text-primary/80">Rust</span> and 
            exploring <span className="text-primary/80">Tokio</span> internals.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button 
            onClick={() => onNavigate('work')}
            className="group relative px-8 py-4 bg-primary text-background font-bold rounded-lg overflow-hidden transition-all hover:neon-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              INITIALIZE_WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate('about')}
            className="glass px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all duration-300 border-white/10"
          >
            <Cpu className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm uppercase tracking-widest">System_Specs</span>
          </button>
        </div>

        <SocialLinks />
      </motion.div>
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
    </section>
  );
};
