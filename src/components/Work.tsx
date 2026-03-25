import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Terminal, ArrowLeft, Calendar, Tag, Briefcase, Cpu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Badge } from './Badge';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  date: string;
}

const projects: Project[] = [
  {
    id: "diabetes-analysis",
    title: "Bangladesh Diabetes Data Analysis",
    description: "Comprehensive data analysis and regional map creation for diabetes prevalence in Bangladesh.",
    fullDescription: `
# Bangladesh Diabetes Data Analysis

A data-driven exploration of diabetes statistics across different regions of Bangladesh.

## Key Features
- **Data Visualization**: Interactive maps showing regional prevalence.
- **Statistical Analysis**: Identifying trends and risk factors.
- **Reporting**: Automated generation of health reports.

## Technical Stack
- **Languages**: Python, R
- **Libraries**: Pandas, Matplotlib, Leaflet
- **Data Source**: National Health Surveys
    `,
    tags: ["Python", "R", "Data Analysis"],
    image: "https://picsum.photos/seed/diabetes/800/600",
    date: "2025"
  },
  {
    id: "normaflow",
    title: "Normaflow: Database Normalization Tool",
    description: "A specialized tool for database architects to normalize schemas and generate SQL DDL.",
    fullDescription: `
# Normaflow

A comprehensive tool designed to assist in database schema normalization and SQL generation.

## Key Features
- **Schema Normalization**: Automated decomposition of database tables up to 3NF.
- **Visual ERD Generation**: Interactive Entity-Relationship Diagrams for better architectural planning.
- **SQL Generation**: Instant generation of SQL DDL for multiple database dialects.
- **Data Flow Visualization**: Clear representation of data transformation and normalization paths.

## Technical Stack
- **Frontend**: React, ReactFlow, Tailwind CSS
- **Logic**: TypeScript
    `,
    tags: ["React", "TypeScript", "SQL"],
    github: "https://github.com/miskatul/normaflow",
    image: "https://picsum.photos/seed/database/800/600",
    date: "2026"
  },
  {
    id: "tictactoe-ai",
    title: "Desktop TicTacToe AI",
    description: "A cross-platform desktop game featuring an unbeatable AI opponent using advanced algorithms.",
    fullDescription: `
# TicTacToe AI

A modern desktop application that provides a challenging gaming experience against a perfect AI.

## Key Features
- **Perfect AI Opponent**: Implementation of the Minimax algorithm for unbeatable logic.
- **Cross-Platform Support**: Native applications for Windows, macOS, and Linux.
- **Modern Interface**: Clean and responsive UI built with modern web technologies.

## Technical Stack
- **Backend**: Rust (Tauri)
- **Frontend**: React, TypeScript, Tailwind CSS
    `,
    tags: ["Rust", "Tauri", "AI"],
    image: "https://picsum.photos/seed/tictactoe/800/600",
    date: "2025"
  },
  {
    id: "free-vpn",
    title: "Free VPN Android",
    description: "A secure and free VPN application developed natively for Android.",
    fullDescription: `
# Free VPN App

A native Android application providing secure tunneling and privacy.

## Features
- **Secure Protocols**: Implementation of OpenVPN/WireGuard.
- **Global Servers**: Dynamic server list fetching.
- **One-Tap Connect**: Simplified user experience.

## Technical Stack
- **Environment**: Android Studio
- **Language**: Kotlin/Java
    `,
    tags: ["Android", "Java", "Networking"],
    image: "https://picsum.photos/seed/vpn/800/600",
    date: "2024"
  },
  {
    id: "todo-fullstack",
    title: "Fullstack Todo App",
    description: "A complete task management system with Axum backend, React frontend, and SQLx persistence.",
    fullDescription: `
# Todo App (Fullstack)

A production-ready task management application demonstrating modern fullstack patterns.

## Features
- **Authentication**: Secure JWT-based user auth.
- **Real-time Updates**: Responsive UI with shadcn/ui.
- **Persistence**: High-performance SQLx queries.

## Technical Stack
- **Backend**: Rust (Axum)
- **Frontend**: React, Tailwind
- **Database**: PostgreSQL (SQLx)
    `,
    tags: ["Rust", "React", "PostgreSQL"],
    image: "https://picsum.photos/seed/todo/800/600",
    date: "2026"
  },
  {
    id: "mario-clone",
    title: "Super Mario Pygame",
    description: "A faithful recreation of Super Mario mechanics using the Pygame library.",
    fullDescription: `
# Super Mario Clone

A desktop game project focusing on physics, sprite animation, and level design.

## Features
- **Physics Engine**: Custom collision detection and gravity.
- **Level Editor**: Support for custom map loading.
- **Classic Mechanics**: Power-ups, enemies, and scrolling backgrounds.

## Technical Stack
- **Language**: Python
- **Library**: Pygame
    `,
    tags: ["Python", "Game Dev"],
    image: "https://picsum.photos/seed/mario/800/600",
    date: "2023"
  },
  {
    id: "ratatui-dashboard",
    title: "Terminal-Based System Monitor",
    description: "A high-performance system monitoring dashboard designed for the terminal.",
    fullDescription: `
# System Monitor Dashboard

A professional terminal user interface (TUI) for real-time system administration and monitoring.

## Key Features
- **Real-time Performance Metrics**: Monitoring of CPU, Memory, and Network usage.
- **Process Management**: Interactive tools for managing system processes and priorities.
- **Efficient Workflow**: Optimized for keyboard-driven navigation and control.

## Technical Stack
- **Language**: Rust
- **Library**: Ratatui (TUI Framework)
    `,
    tags: ["Rust", "TUI", "Systems"],
    image: "https://picsum.photos/seed/terminal/800/600",
    date: "2026"
  },
  {
    id: "codeforces-dashboard",
    title: "Codeforces Status Hub",
    description: "Real-time user status and performance dashboard using the Codeforces API.",
    fullDescription: `
# Codeforces User Status

A web application to track competitive programming progress and contest performance.

## Features
- **API Integration**: Real-time data fetching from Codeforces.
- **Performance Charts**: Visualizing rating changes and problem tags.
- **Leptos Frontend**: High-performance WASM-based UI.

## Technical Stack
- **Frontend**: Leptos (Rust)
- **Backend**: Rust
- **Deployment**: Vercel
    `,
    tags: ["Rust", "Leptos", "WASM"],
    image: "https://picsum.photos/seed/codeforces/800/600",
    date: "2025"
  },
  {
    id: "nixos-config",
    title: "NixOS Configuration Automator",
    description: "A command-line tool to automate and manage reproducible NixOS system configurations.",
    fullDescription: `
# NixOS Configuration Automator

A tool designed to streamline the deployment and management of NixOS environments.

## Key Features
- **Reproducible Environments**: Leveraging Nix Flakes for modular and reliable configurations.
- **Automated Hardware Setup**: Intelligent detection and configuration of hardware-specific settings.
- **Streamlined Deployment**: One-command setup for fully customized desktop environments.

## Technical Stack
- **Languages**: Nix, Bash
- **Tools**: Nix Flakes, Git
    `,
    tags: ["Nix", "Bash", "Linux"],
    image: "https://picsum.photos/seed/nixos/800/600",
    date: "2026"
  },
  {
    id: "arch-dots",
    title: "Linux Configuration Management",
    description: "A collection of automated scripts for managing Linux system configurations and dotfiles.",
    fullDescription: `
# Linux Configuration Management

A systematic approach to managing and deploying Linux configuration files (dotfiles).

## Key Features
- **Automated Management**: Using GNU Stow for efficient symlink management.
- **Modular Architecture**: Easily enable or disable configurations for specific tools.
- **Optimized Performance**: Focused on minimalist and high-performance system setups.

## Technical Stack
- **Language**: Bash
- **Tools**: GNU Stow, Git
    `,
    tags: ["Bash", "Linux", "DevOps"],
    image: "https://picsum.photos/seed/arch/800/600",
    date: "2024"
  },
  {
    id: "android-todo",
    title: "Android Todo DB",
    description: "A native Android Todo application with local SQLite database support.",
    fullDescription: `
# Android Todo App

A robust mobile application for task tracking with persistent storage.

## Features
- **SQLite Integration**: Local data persistence.
- **Material Design**: Modern and intuitive UI.
- **Notifications**: Reminders for pending tasks.

## Technical Stack
- **Environment**: Android Studio
- **Language**: Java/Kotlin
    `,
    tags: ["Android", "SQLite", "Mobile"],
    image: "https://picsum.photos/seed/mobile-todo/800/600",
    date: "2024"
  },
  {
    id: "project-tracker",
    title: "Tauri Project Tracker",
    description: "Cross-platform project management tool built with Tauri, React, and Rust.",
    fullDescription: `
# Project Tracker App

A desktop application for managing complex project lifecycles.

## Features
- **Local First**: Fast and private data storage.
- **Kanban Boards**: Visual task management.
- **Time Tracking**: Integrated timers for tasks.

## Technical Stack
- **Backend**: Rust (Tauri)
- **Frontend**: React, TypeScript
    `,
    tags: ["Rust", "Tauri", "React"],
    image: "https://picsum.photos/seed/tracker/800/600",
    date: "2026"
  },
  {
    id: "rust-apis",
    title: "High-Performance Backend APIs",
    description: "Low-latency asynchronous APIs built with Rust for high-concurrency environments.",
    fullDescription: `
# High-Performance Backend APIs

An exploration into building extremely efficient and scalable backend services using Rust.

## Key Features
- **Asynchronous Concurrency**: High-performance request handling using the Tokio runtime.
- **Parallel Processing**: Efficient execution of data-intensive tasks using Rayon.
- **Optimized Data Handling**: Zero-copy JSON parsing and serialization for minimal overhead.

## Technical Stack
- **Language**: Rust
- **Libraries**: Tokio, Rayon, Serde
    `,
    tags: ["Rust", "Async", "Performance"],
    image: "https://picsum.photos/seed/api/800/600",
    date: "2026"
  }
];

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary w-8 h-8" />
                Project Showcase
              </h2>
              <p className="text-foreground/50 text-lg max-w-2xl">
                A selection of my recent projects, ranging from systems engineering to full-stack web applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group glass rounded-[2rem] overflow-hidden cursor-pointer hover:bg-foreground/5 transition-all"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-6 py-2 glass rounded-full text-sm font-bold uppercase tracking-widest">View Details</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">{project.date}</span>
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-[10px]">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-foreground/50 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO PROJECTS
            </button>

            <div className="glass rounded-[2rem] overflow-hidden mb-12">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono text-foreground/40">
                    <Calendar className="w-3 h-3" />
                    {selectedProject.date}
                  </div>
                  <div className="flex gap-2">
                    {selectedProject.tags.map(tag => (
                      <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 ml-auto">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="markdown-body">
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            className="rounded-xl border border-foreground/5 !bg-[#1e1e1e] !my-6"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={`${className} bg-foreground/10 px-1.5 py-0.5 rounded text-primary/80`} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {selectedProject.fullDescription}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
