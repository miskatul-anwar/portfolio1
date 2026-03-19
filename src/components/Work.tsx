import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal, Cpu } from 'lucide-react';

import { Badge } from './Badge';

const projects = [
  {
    title: "Tokio-Async Explorer",
    description: "A deep dive into async runtime internals, implementing a custom simplified executor to understand polling and wakers.",
    tags: ["Rust", "Tokio", "Systems"],
    link: "#",
    github: "#"
  },
  {
    title: "Competitive-STL",
    description: "A collection of optimized data structures and algorithms implemented in C++ for high-performance competitive programming.",
    tags: ["C++", "Algorithms", "Optimization"],
    link: "#",
    github: "#"
  },
  {
    title: "Axum-Microservice",
    description: "A high-performance backend service built with Axum and SQLx, emphasizing clean architecture and memory safety.",
    tags: ["Rust", "Axum", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Arch-Config Engine",
    description: "Automated deployment and configuration engine for highly customized Arch Linux environments.",
    tags: ["Bash", "Python", "Linux"],
    link: "#",
    github: "#"
  }
];

export const Work: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Cpu className="text-primary w-8 h-8" />
          Systems_Deployment
        </h2>
        <p className="text-foreground/50 max-w-lg">
          A collection of experiments and projects exploring the boundaries of 
          frontend engineering and system-level performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-2xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
              <a href={project.github} className="p-2 glass rounded-lg hover:bg-white/10">
                <Github className="w-4 h-4" />
              </a>
              <a href={project.link} className="p-2 glass rounded-lg hover:bg-white/10">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
