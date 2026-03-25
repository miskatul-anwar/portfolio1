import React from 'react';
import { motion } from 'motion/react';
import { Home, ChevronRight } from 'lucide-react';
import { Section } from './Dock';
import { cn } from '../lib/utils';

interface BreadcrumbProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const sectionLabels: Record<Section, string> = {
  home: 'Home',
  skills: 'Skills',
  work: 'Work Experience',
  education: 'Education',
  certifications: 'Certifications',
  blog: 'Blog',
  about: 'About Me',
  cv: 'Curriculum Vitae',
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ activeSection, onNavigate }) => {
  return (
    <motion.nav 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 left-4 md:top-8 md:left-8 z-40 pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto">
        <button 
          onClick={() => onNavigate('home')}
          className={cn(
            "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
            activeSection === 'home' ? "text-primary" : "text-foreground/40 hover:text-foreground"
          )}
        >
          <Home className="w-3 h-3" />
          <span>Home</span>
        </button>

        {activeSection !== 'home' && (
          <>
            <ChevronRight className="w-3 h-3 text-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {sectionLabels[activeSection]}
              </span>
            </div>
          </>
        )}
      </div>
    </motion.nav>
  );
};
