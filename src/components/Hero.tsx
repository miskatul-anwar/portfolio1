import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Zap, Terminal, Cpu, Moon } from 'lucide-react';
import { Section } from './Dock';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-0 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-20"
      >
        {/* Profile Picture - Top on mobile, Left on PC */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 p-1 glass neon-glow relative group"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="../assets/image.png"
                alt="Miskatul Anwar"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-color" />

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,_rgba(0,255,204,0.05)_50%)] bg-[length:100%_4px] animate-[scanline_10s_linear_infinite]" />
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

          <div className="absolute -bottom-2 -left-2 bg-primary text-background p-2 rounded-md shadow-[0_0_15px_rgba(0,255,204,0.6)] z-20 flex items-center justify-center">
            <Moon className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Content - Bottom on mobile, Right on PC */}
        <div className="flex-1 text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[0.9]">
              MISKATUL <span className="text-primary text-glow block lg:inline">ANWAR</span>
            </h1>

            <div className="flex flex-col items-center md:items-start gap-6 mb-12">
              <p className="text-xl md:text-3xl font-mono text-primary/80 tracking-tight">
                &gt; Systems Thinker // Problem Solver
              </p>
              <p className="max-w-xl text-base md:text-lg text-foreground/50 leading-relaxed font-light">
                Logic-first, efficiency-driven developer specializing in competitive programming
                and high-performance systems. Currently architecting with <span className="text-primary/80">Rust</span> and
                exploring <span className="text-primary/80">Tokio</span> internals.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <button
                onClick={() => onNavigate('work')}
                className="group relative px-8 py-4 bg-primary text-background font-bold rounded-lg overflow-hidden transition-all hover:neon-glow active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  INITIALIZE_WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="glass px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all duration-300 border-white/10 active:scale-95"
              >
                <Cpu className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm uppercase tracking-widest">System_Specs</span>
              </button>
            </div>

            <div className="md:justify-start flex">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
    </section>
  );
};
