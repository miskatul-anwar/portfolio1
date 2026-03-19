import React from 'react';
import { cn } from '@/src/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className, 
  ...props 
}) => {
  const variants = {
    default: "bg-primary/10 text-primary border-primary/20",
    outline: "bg-transparent border-white/10 text-foreground/60",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <div 
      className={cn(
        "px-2 py-0.5 rounded text-[10px] uppercase tracking-widest font-mono border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
