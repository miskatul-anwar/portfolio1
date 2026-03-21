import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Layers, 
  Globe, 
  Zap, 
  Box, 
  Workflow, 
  Binary,
  Layout,
  Server,
  Wrench,
  LineChart,
  Bot,
  Smartphone,
  Package,
  FileCode,
  Command
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    skills: [
      { name: "React", icon: Globe },
      { name: "Vue", icon: Box },
      { name: "Leptos (Rust)", icon: Zap },
      { name: "shadcn/ui", icon: Layers },
      { name: "ThawUI", icon: Layers },
      { name: "Aceternity UI", icon: Zap },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "Sass", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
    ]
  },
  {
    title: "Backend & Persistence",
    icon: Server,
    skills: [
      { name: "Rust", icon: Cpu },
      { name: "Axum", icon: Zap },
      { name: "Rocket", icon: Zap },
      { name: "Python", icon: Code2 },
      { name: "Flask", icon: Zap },
      { name: "Spring Boot", icon: Box },
      { name: "MongoDB", icon: Database },
      { name: "SQLx", icon: Database },
      { name: "Nix Language", icon: FileCode },
    ]
  },
  {
    title: "App Development",
    icon: Smartphone,
    skills: [
      { name: "Tauri", icon: Box },
      { name: "Android Studio", icon: Smartphone },
      { name: "ReactNative", icon: Smartphone },
      { name: "Flutter", icon: Smartphone },
      { name: "Legacy Android (Eclipse ADK)", icon: Smartphone },
    ]
  },
  {
    title: "Systems & Low Level",
    icon: Binary,
    skills: [
      { name: "C/C++", icon: Cpu },
      { name: "Rust", icon: Cpu },
      { name: "Rayon", icon: Zap },
      { name: "GNU Assembly (AT&T)", icon: Terminal },
      { name: "Tokio.rs", icon: Zap },
      { name: "Embedded C++/Rust", icon: Cpu },
    ]
  },
  {
    title: "Intelligence & Data",
    icon: Bot,
    skills: [
      { name: "LangChain", icon: Workflow },
      { name: "Ollama", icon: Bot },
      { name: "R", icon: LineChart },
      { name: "LaTeX", icon: Code2 },
      { name: "NumPy/Pandas", icon: LineChart },
      { name: "SciPy/SymPy", icon: LineChart },
    ]
  },
  {
    title: "Tooling & Environment",
    icon: Wrench,
    skills: [
      { name: "Linux", icon: Terminal },
      { name: "Nix & Nix OS", icon: Package },
      { name: "Emacs", icon: Terminal },
      { name: "Vim / Neovim", icon: Terminal },
      { name: "VS Code", icon: Code2 },
      { name: "Zed Editor", icon: Zap },
      { name: "Docker", icon: Box },
      { name: "Git & GitHub", icon: Workflow },
      { name: "GitHub Actions", icon: Workflow },
      { name: "Bash / Zsh", icon: Command },
      { name: "Fish / Nushell", icon: Command },
      { name: "Java Swing", icon: Layout },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Binary className="text-primary w-8 h-8" />
          Technical Arsenal
        </h2>
        <p className="text-foreground/50 font-mono text-sm">
          &gt; categorized capabilities across the stack.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-8">
              <category.icon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold font-display uppercase tracking-wider">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 border border-foreground/10 hover:border-primary/30 hover:bg-primary/5 transition-all group/skill"
                >
                  <skill.icon className="w-4 h-4 text-foreground/40 group-hover/skill:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground/70 group-hover/skill:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
