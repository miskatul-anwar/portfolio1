import React from 'react';
import { motion } from 'motion/react';
import { User, Cpu, Brain, Database, Layers, Terminal, Code2 } from 'lucide-react';

const skills = [
  { name: "Algorithm Design", level: 98, icon: Brain },
  { name: "C++ (Competitive Programming)", level: 95, icon: Code2 },
  { name: "Rust & Systems", level: 75, icon: Cpu },
  { name: "Backend (Axum/Tokio)", level: 70, icon: Database },
  { name: "Linux (Arch/Customization)", level: 90, icon: Terminal },
];

export const About: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-primary w-8 h-8" />
            System_Profile
          </h2>
          
          <div className="space-y-6 text-foreground/70 leading-relaxed font-light">
            <p>
              I am a <span className="text-primary/80 font-medium">problem solver and systems-oriented developer</span>. 
              My engineering philosophy is built on a logic-first, efficiency-driven mindset, 
              emphasizing correctness and deep understanding over abstraction.
            </p>
            <p>
              With a strong foundation in <span className="text-primary/80 font-medium">competitive programming</span> using C++, 
              I approach every challenge through the lens of algorithmic optimization and 
              performance-focused development.
            </p>
            <p>
              My workflow is rooted in <span className="text-primary/80 font-medium">Arch Linux</span>, 
              where I maintain a heavily customized, terminal-first environment. This 
              technical curiosity drives me to understand how things work under the hood, 
              from async runtime internals to memory safety.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border-primary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
          
          <h3 className="text-xl font-bold mb-8 font-mono uppercase tracking-widest text-primary/80 flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Hardware_Abstraction
          </h3>
          
          <div className="space-y-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary/60" />
                      <span className="text-sm font-mono tracking-tight">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono text-primary/60">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 font-mono">
            <h4 className="text-xs font-bold mb-3 text-primary uppercase tracking-widest">Current_Focus</h4>
            <ul className="text-[11px] space-y-2 text-foreground/60">
              <li className="flex items-center gap-2">
                <span className="text-primary">01</span> Mastering Rust memory safety
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">02</span> Async runtime internals (Tokio)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">03</span> Scalable backends with Axum
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
