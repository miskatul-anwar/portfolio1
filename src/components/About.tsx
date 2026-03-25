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
            Core Technologies & Expertise
          </h3>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              My background is rooted in a deep interest in systems-level engineering and high-performance computing. 
              I specialize in building efficient, reliable software using modern languages like <span className="text-primary">Rust</span> and <span className="text-primary">C/C++</span>.
            </p>
            <p>
              I focus on creating robust architectures that prioritize performance and security. Whether it's optimizing 
              backend systems or designing memory-safe applications, I am committed to technical excellence and scalable solutions.
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
              Systems Engineering
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Experienced in working with Linux environments, asynchronous runtimes, and low-level memory management. 
              I enjoy building secure and resilient infrastructure that meets the demands of modern enterprise applications.
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
            Interests & Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/70">
            <div>
              <h4 className="text-sm font-bold mb-2 text-primary uppercase tracking-widest">Current Focus</h4>
              <p className="text-sm">
                Developing scalable backend solutions with Axum, exploring type-safe frontend frameworks, 
                and contributing to open-source systems projects.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-2 text-primary uppercase tracking-widest">Development Environment</h4>
              <p className="text-sm">
                I utilize a terminal-centric workflow on Linux, prioritizing efficiency, automation, and precision in my development process.
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
