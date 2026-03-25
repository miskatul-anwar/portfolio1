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
import OrbitingCirclesGlobe from './OrbitingCircles';

interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  image: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Layout,
    image: "https://media.cnn.com/api/v1/images/stellar/prod/111006035408-steve-jobs-iphone-100611.jpg?q=w_1160,c_fill/f_webp",
    description: "Crafting responsive and interactive user interfaces with modern frameworks.",
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
    title: "Backend & Databases",
    icon: Server,
    image: "https://www.infoworld.com/wp-content/uploads/2024/06/linus_torvalds-100600260-orig.jpg?quality=50&strip=all",
    description: "Building scalable server-side logic and robust data architectures.",
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
    image: "https://www.zdnet.com/a/img/resize/4db6063f16a0b240dab94a97a28d2bd9aa20a23c/2025/10/09/2b21a0a8-7ff5-4462-a6cd-2abe91139fde/8-free-linux-apps-that-are-surprisingly-useful-no-command-line-required.jpg?auto=webp&width=1280",
    description: "Developing cross-platform desktop and mobile applications.",
    skills: [
      { name: "Tauri", icon: Box },
      { name: "Android Studio", icon: Smartphone },
      { name: "ReactNative", icon: Smartphone },
      { name: "Flutter", icon: Smartphone },
      { name: "Legacy Android (Eclipse ADK)", icon: Smartphone },
    ]
  },
  {
    title: "Systems Engineering",
    icon: Binary,
    image: "https://erau.edu/-/media/images/university/hub-spoke/stories/eecs-systems-eng-hero-image.jpg?as=0&hash=D05798779A2613601860E373116C7596",
    description: "Low-level programming and high-performance system design.",
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
    title: "Data Science & AI",
    icon: Bot,
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2011/10/31/20/48-John-McCarthy-AP.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp",
    description: "Implementing intelligent systems and data-driven solutions.",
    skills: [
      { name: "LangChain", icon: Workflow },
      { name: "TensorFlow", icon: Zap },
      { name: "Ollama", icon: Bot },
      { name: "R", icon: LineChart },
      { name: "LaTeX", icon: Code2 },
      { name: "NumPy/Pandas", icon: LineChart },
      { name: "SciPy/SymPy", icon: LineChart },
    ]
  },
  {
    title: "Tools & Environments",
    icon: Wrench,
    image: "https://blog-assets.3ds.com/uploads/2022/03/environmental-engineering-newest-tools-being-used-today-768x519.jpg",
    description: "Optimizing development workflows and system configurations.",
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
    <section className="py-12 px-4 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Binary className="text-primary w-8 h-8" />
          Technical Expertise
        </h2>
        <p className="text-foreground/50 text-lg max-w-2xl">
          A comprehensive overview of my technical skills and tools across the stack.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-20"
      >
        <OrbitingCirclesGlobe />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass overflow-hidden rounded-[2.5rem] group flex flex-col"
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <div className="p-3 bg-primary/20 backdrop-blur-md rounded-2xl">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display uppercase tracking-wider text-white drop-shadow-md">
                  {category.title}
                </h3>
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-primary/30 hover:bg-primary/5 transition-all group/skill"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-foreground/40 group-hover/skill:text-primary transition-colors" />
                    <span className="text-xs font-medium text-foreground/70 group-hover/skill:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
