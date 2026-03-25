import React from 'react';
import { motion } from 'motion/react';
import { Home, Briefcase, BookOpen, User, Cpu, GraduationCap, Award, FileText } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type Section = 'home' | 'work' | 'blog' | 'about' | 'skills' | 'education' | 'certifications' | 'cv';

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
  { id: 'cv', icon: FileText, label: 'CV' },
  { id: 'blog', icon: BookOpen, label: 'Blog' },
  { id: 'about', icon: User, label: 'About' },
] as const;

export const Dock: React.FC<DockProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center w-[98%] sm:w-auto max-w-full px-2">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-[2rem] sm:rounded-[2.5rem] p-1 sm:p-2 flex items-center justify-center shadow-2xl overflow-x-auto sm:overflow-visible no-scrollbar mx-auto"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "relative py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 group flex-shrink-0 flex flex-col items-center gap-0.5 sm:gap-1 w-[42px] min-[400px]:w-[50px] min-[500px]:w-[65px] sm:w-[90px]",
                isActive ? "text-primary" : "text-foreground/50 hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl border border-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 relative z-10" />
              <span className="text-[6px] min-[400px]:text-[7px] sm:text-[8px] font-bold relative z-10 uppercase tracking-wider font-mono text-center w-full px-0.5 truncate">
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};
