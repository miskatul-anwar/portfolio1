import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Send, Github, Code2, Terminal, Globe, MapPin } from 'lucide-react';
import { Section } from './Dock';
import { GithubStats } from './GithubStats';
import { CompetitiveStats } from './CompetitiveStats';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const personalDetails = {
  name: "Miskatul Anwar",
  email: "miskat6603.dev@gmail.com",
  github: "miskatul-anwar",
  leetcode: "miskat666f",
  atcoder: "miskat6603dev",
  codeforces: "miskatul.anwar.csecu",
  picoCTF: "ghost_freak",
  location: "Chittagong, BD"
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Top Right Location Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 z-20 flex items-center gap-2"
      >
        <MapPin className="w-3 h-3 text-primary" />
        <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground/60">
          Chittagong, Bangladesh
        </span>
      </motion.div>

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block mb-12"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary via-secondary to-accent animate-float">
              <div className="w-full h-full rounded-full overflow-hidden glass border-2 border-background">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGEukRjmNSOTA/profile-displayphoto-crop_800_800/B4EZnBqOcrGYAI-/0/1759890700990?e=1775692800&v=beta&t=ousACVsggICfp_B8dZIzNguMsbXlLFNoT-Zxc7YOrDY" 
                  alt={personalDetails.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/miskatul/400/400";
                  }}
                />
              </div>
            </div>
            {/* Facebook Messenger styled status dot */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-background rounded-full flex items-center justify-center border-2 border-background">
              <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] font-display whitespace-nowrap">
            {personalDetails.name.split(' ')[0]}{' '}
            <span className="text-primary text-glow">{personalDetails.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            I'm a <span className="text-foreground font-medium">Systems & App Developer</span> focused on building high-performance, 
            memory-safe, and scalable infrastructure. From low-level kernels to modern cross-platform apps, 
            I bridge the gap between hardware and software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('work')}
              className="px-8 py-4 bg-primary text-background font-bold rounded-2xl hover:scale-105 transition-all flex items-center gap-2 group shadow-xl shadow-primary/20"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('skills')}
              className="px-8 py-4 glass font-bold rounded-2xl hover:bg-foreground/5 transition-all flex items-center gap-2"
            >
              Technical Arsenal
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass p-8 md:p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display uppercase tracking-wider">Drop an Email</h3>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-all font-mono"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-all font-mono"
                />
              </div>
              <textarea 
                placeholder="Secure Message Payload..." 
                rows={3}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-all font-mono resize-none"
              />
              <button className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-primary hover:text-background transition-all flex items-center justify-center gap-2 group">
                Transmit Signal
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-8 md:p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8">Connect Nodes</h3>
              <div className="space-y-4">
                <a href={`https://github.com/${personalDetails.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors group">
                  <div className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono">github.com/{personalDetails.github}</span>
                </a>
                <a href={`https://codeforces.com/profile/${personalDetails.codeforces}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors group">
                  <div className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono">codeforces/{personalDetails.codeforces.split('.')[0]}</span>
                </a>
                <a href={`https://atcoder.jp/users/${personalDetails.atcoder}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors group">
                  <div className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Globe className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-mono">atcoder/{personalDetails.atcoder}</span>
                </a>
                <a href={`https://leetcode.com/${personalDetails.leetcode}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors group">
                  <div className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono">leetcode/{personalDetails.leetcode}</span>
                </a>
                <a href="https://play.picoctf.org/users/ghost_freak" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors group">
                  <div className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono">picoCTF/{personalDetails.picoCTF}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <GithubStats username={personalDetails.github} />
        <CompetitiveStats 
          leetcodeUser={personalDetails.leetcode} 
          codeforcesUser={personalDetails.codeforces} 
        />
      </div>
    </section>
  );
};
