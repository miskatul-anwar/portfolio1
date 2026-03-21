import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitBranch, Activity, Code } from 'lucide-react';

interface GithubStatsProps {
  username: string;
}

export const GithubStats: React.FC<GithubStatsProps> = ({ username }) => {
  const theme = "transparent";
  const color = "00ffcc"; // primary color
  const titleColor = "ffffff";
  const textColor = "999999";

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&title_color=${titleColor}&text_color=${textColor}&icon_color=${color}&border_color=${color}&hide_border=true&bg_color=00000000`;
  const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&title_color=${titleColor}&text_color=${textColor}&icon_color=${color}&border_color=${color}&hide_border=true&bg_color=00000000`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&fire=${color}&ring=${color}&sideNums=${textColor}&sideLabels=${textColor}&dates=${textColor}&stroke=${color}&hide_border=true&background=00000000`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 w-full"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Github className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold font-display uppercase tracking-wider">GitHub Intelligence</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Stats */}
        <div className="glass p-6 rounded-3xl overflow-hidden group relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          <div className="flex items-center gap-2 mb-4 text-primary/60 font-mono text-xs uppercase tracking-widest">
            <Activity className="w-3 h-3" /> System Metrics
          </div>
          <img 
            src={statsUrl} 
            alt="GitHub Stats" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Top Languages */}
        <div className="glass p-6 rounded-3xl overflow-hidden group relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          <div className="flex items-center gap-2 mb-4 text-primary/60 font-mono text-xs uppercase tracking-widest">
            <Code className="w-3 h-3" /> Language Distribution
          </div>
          <img 
            src={languagesUrl} 
            alt="Top Languages" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Streak Stats */}
        <div className="lg:col-span-2 glass p-6 rounded-3xl overflow-hidden group relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          <div className="flex items-center gap-2 mb-4 text-primary/60 font-mono text-xs uppercase tracking-widest">
            <GitBranch className="w-3 h-3" /> Contribution Streak
          </div>
          <img 
            src={streakUrl} 
            alt="GitHub Streak" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Contribution Graph - Embed from GitHub directly if possible, or use a placeholder/link */}
      <div className="mt-6 glass p-6 rounded-3xl overflow-hidden group relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-primary/60 font-mono text-xs uppercase tracking-widest">
            <Star className="w-3 h-3" /> Activity Graph
          </div>
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noreferrer"
            className="text-[10px] font-mono text-primary hover:underline uppercase tracking-widest"
          >
            View Full Profile
          </a>
        </div>
        <img 
          src={`https://ghchart.rshah.org/${color.replace('#', '')}/${username}`} 
          alt="GitHub Contribution Graph" 
          className="w-full h-auto filter invert brightness-150"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  );
};
