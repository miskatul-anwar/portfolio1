import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Brain, Database, Code2, Globe, Heart, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Terminal className="text-primary w-8 h-8" />
          About Me
        </h2>
        <p className="text-foreground/50 font-mono text-sm">
          &gt; last updated: 2026-02-20
        </p>
      </motion.div>

      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Code2 className="text-primary w-6 h-6" />
            Languages & Low-Level Fascination
          </h3>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              My journey into the digital realm started with a deep curiosity about how things work at the most fundamental level. 
              I find a unique beauty in the strictness of <span className="text-primary">Rust</span> and the raw power of <span className="text-primary">C/C++</span>.
            </p>
            <p>
              I don't just write code; I orchestrate logic. Whether it's optimizing a hot loop in a systems application or 
              designing a memory-safe architecture, I'm driven by the pursuit of technical excellence and performance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="text-primary w-5 h-5" />
              Systems & Security
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Tinkering with Linux kernels, exploring async runtimes like Tokio, and understanding the nuances of memory management. 
              I enjoy the challenge of building secure, resilient systems that can handle the demands of modern computing.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="text-primary w-5 h-5" />
              ML & Research
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Applying algorithmic thinking to machine learning. I'm interested in the intersection of high-performance computing 
              and AI, exploring how we can make models more efficient and accessible.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Globe className="text-primary w-6 h-6" />
            Beyond the Terminal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/70">
            <div>
              <h4 className="text-sm font-bold mb-2 text-primary uppercase tracking-widest">Current Work</h4>
              <p className="text-sm">
                Building scalable backends with Axum, exploring the Leptos ecosystem for type-safe frontend development, 
                and contributing to open-source systems tools.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-2 text-primary uppercase tracking-widest">Daily Tools</h4>
              <p className="text-sm">
                Emacs for everything, Arch Linux as the base, and a terminal-first workflow that prioritizes speed and precision.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-8 py-8 opacity-30 grayscale hover:grayscale-0 transition-all">
          <Heart className="w-6 h-6" />
          <Coffee className="w-6 h-6" />
          <Database className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};
