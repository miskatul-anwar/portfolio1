import React from 'react';
import { motion } from 'motion/react';
import { Home, Briefcase, BookOpen, User, Cpu, GraduationCap, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type Section = 'home' | 'work' | 'blog' | 'about' | 'skills' | 'education' | 'certifications';

interface DockProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'certifications', icon: Award, label: 'Certifications' },
  { id: 'blog', icon: BookOpen, label: 'Blog' },
  { id: 'about', icon: User, label: 'About' },
] as const;

export const Dock: React.FC<DockProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-2xl p-2 flex items-center gap-2 shadow-2xl"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "relative p-3 rounded-xl transition-all duration-300 group",
                isActive ? "text-primary" : "text-foreground/50 hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="w-6 h-6 relative z-10" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 glass px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};
