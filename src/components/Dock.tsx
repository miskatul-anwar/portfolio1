import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Briefcase, BookOpen, User, Cpu, GraduationCap, Award, FileText, MoreHorizontal, ChevronUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type Section = 'home' | 'work' | 'blog' | 'about' | 'skills' | 'education' | 'certifications' | 'cv';

interface DockProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const mainItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
] as const;

const moreItems = [
  { id: 'certifications', icon: Award, label: 'Certifications' },
  { id: 'cv', icon: FileText, label: 'CV' },
  { id: 'blog', icon: BookOpen, label: 'Blog' },
  { id: 'about', icon: User, label: 'About' },
] as const;

export const Dock: React.FC<DockProps> = ({ activeSection, onSectionChange }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const isMoreActive = moreItems.some(item => item.id === activeSection);

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 w-[98%] sm:w-auto max-w-full px-2">
      <AnimatePresence>
        {isMoreOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass rounded-2xl p-1 flex items-center justify-center shadow-xl mb-1"
          >
            {moreItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMoreOpen(false);
                  }}
                  className={cn(
                    "relative py-2 sm:py-2 rounded-xl transition-all duration-300 group flex-shrink-0 flex flex-col items-center gap-1 w-[60px] min-[400px]:w-[65px] sm:w-[70px]",
                    isActive ? "text-primary" : "text-foreground/50 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-more"
                      className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-4.5 h-4.5 sm:w-4 sm:h-4 relative z-10" />
                  <span className="text-[8px] sm:text-[7px] font-bold relative z-10 uppercase tracking-wider font-mono text-center w-full px-0.5 truncate">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-[2rem] sm:rounded-[2.5rem] p-1 sm:p-2 flex items-center justify-center shadow-2xl overflow-x-auto sm:overflow-visible no-scrollbar mx-auto"
      >
        {mainItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                setIsMoreOpen(false);
              }}
              className={cn(
                "relative py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 group flex-shrink-0 flex flex-col items-center gap-1 w-[60px] min-[400px]:w-[65px] min-[500px]:w-[75px] sm:w-[90px]",
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
              <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 relative z-10" />
              <span className="text-[8px] min-[400px]:text-[8px] sm:text-[8px] font-bold relative z-10 uppercase tracking-wider font-mono text-center w-full px-0.5 truncate">
                {item.label}
              </span>
            </button>
          );
        })}

        <button
          onClick={() => setIsMoreOpen(!isMoreOpen)}
          className={cn(
            "relative py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 group flex-shrink-0 flex flex-col items-center gap-1 w-[60px] min-[400px]:w-[65px] min-[500px]:w-[75px] sm:w-[90px]",
            isMoreActive ? "text-primary" : "text-foreground/50 hover:text-foreground",
            isMoreOpen && "bg-primary/5"
          )}
        >
          {isMoreActive && !isMoreOpen && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl border border-primary/20"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className="relative">
            <MoreHorizontal className={cn("w-4.5 h-4.5 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300", isMoreOpen && "rotate-90")} />
            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -top-1 -right-1"
                >
                  <ChevronUp className="w-2 h-2 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-[8px] min-[400px]:text-[8px] sm:text-[8px] font-bold relative z-10 uppercase tracking-wider font-mono text-center w-full px-0.5 truncate">
            More
          </span>
        </button>
      </motion.nav>
    </div>
  );
};
