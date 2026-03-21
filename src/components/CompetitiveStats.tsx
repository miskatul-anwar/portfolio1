import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, ExternalLink } from 'lucide-react';

interface CompetitiveStatsProps {
  leetcodeUser: string;
}

export const CompetitiveStats: React.FC<CompetitiveStatsProps> = ({ leetcodeUser }) => {
  // LeetCode Card URL - using a theme that's closer to our dark theme
  const leetcodeCardUrl = `https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Inter&ext=activity`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 w-full"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Trophy className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold font-display uppercase tracking-wider">Competitive Intelligence</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* LeetCode Section */}
        <div className="relative group max-w-2xl mx-auto w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass p-6 sm:p-8 rounded-[2rem] overflow-hidden flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-xl">
                  <Target className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider">LeetCode</h3>
                  <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Protocol: Algorithms</p>
                </div>
              </div>
              <a 
                href={`https://leetcode.com/${leetcodeUser}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 glass rounded-lg hover:bg-primary/10 transition-colors group/link"
              >
                <ExternalLink className="w-4 h-4 text-foreground/40 group-hover/link:text-primary transition-colors" />
              </a>
            </div>
            
            <div className="flex-grow flex items-center justify-center relative">
              {/* Custom styling for the external card to make it blend */}
              <div className="w-full relative">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none rounded-xl"></div>
                <img 
                  src={leetcodeCardUrl} 
                  alt="LeetCode Stats" 
                  className="w-full h-auto rounded-xl shadow-2xl filter contrast-[1.1] brightness-[0.9]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: 'Status', value: 'Active', color: 'text-yellow-500' },
                { label: 'Focus', value: 'DP/Graph', color: 'text-yellow-500' },
                { label: 'Tier', value: 'Guardian', color: 'text-yellow-500' }
              ].map((stat) => (
                <div key={stat.label} className="p-3 sm:p-4 glass rounded-2xl text-center border border-white/5">
                  <div className="text-[8px] sm:text-[10px] text-foreground/30 uppercase mb-1 font-mono tracking-widest">{stat.label}</div>
                  <div className={`text-[10px] sm:text-xs font-bold font-mono ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
