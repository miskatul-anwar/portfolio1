import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Send, Github, Terminal, Globe, MapPin, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { Section } from './Dock';
import { GithubStats } from './GithubStats';
import { CompetitiveStats } from './CompetitiveStats';
import { cn } from '@/src/lib/utils';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const personalDetails = {
  name: "Miskatul Anwar",
  email: "miskat6603.dev@gmail.com",
  github: "miskatul-anwar",
  leetcode: "miskat666f",
  atcoder: "miskat6603dev",
  picoCTF: "ghost_freak",
  location: "Chittagong, BD"
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const categories = ['Inquiry', 'Collaboration', 'Bug Report', 'Job Offer', 'Other'];
  const templates = [
    { label: 'Collab', text: 'Hi Miskat, I saw your work and would love to collaborate on...' },
    { label: 'Hire', text: 'Hello, we are interested in your systems development expertise for...' },
    { label: 'Bug', text: 'Found an issue in one of your projects: \n\nSteps to reproduce:\n1. ' }
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e as any);
    }
    if (e.altKey && e.key === '1') applyTemplate(templates[0].text);
    if (e.altKey && e.key === '2') applyTemplate(templates[1].text);
    if (e.altKey && e.key === '3') applyTemplate(templates[2].text);
  };

  const applyTemplate = (text: string) => {
    setFormData(prev => ({ ...prev, message: text }));
  };

  const getLineCount = () => formData.message.split('\n').length;
  const getCharCount = () => formData.message.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Construct mailto link as a fallback/real action
      const mailtoLink = `mailto:${personalDetails.email}?subject=[${formData.category}] ${formData.subject || 'No Subject'} - from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0A---%0D%0AFrom: ${formData.name} (${formData.email})`;
      
      // In a real app, you'd fetch an API here. 
      // For this portfolio, we'll open the mailto and show success.
      window.location.href = mailtoLink;
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', category: 'Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
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
              Technical Skills
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-foreground/5"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display uppercase tracking-wider">Send a Message</h3>
            </div>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-foreground/60 text-sm max-w-xs mx-auto mb-6">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 glass rounded-xl text-xs font-bold hover:bg-foreground/5 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest ml-1">Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name" 
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-5 py-4 text-sm focus:border-primary/40 focus:bg-foreground/[0.05] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email" 
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-5 py-4 text-sm focus:border-primary/40 focus:bg-foreground/[0.05] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest ml-1">Subject</label>
                      <input 
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?" 
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-5 py-4 text-sm focus:border-primary/40 focus:bg-foreground/[0.05] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest ml-1">Category</label>
                      <div className="relative">
                        <select 
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-5 py-4 text-sm focus:border-primary/40 focus:bg-foreground/[0.05] outline-none transition-all appearance-none cursor-pointer"
                        >
                          {categories.map(cat => (
                            <option key={cat} value={cat} className="bg-background text-foreground">{cat}</option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest">Message</label>
                      <div className="flex gap-2">
                        {templates.map(t => (
                          <button
                            key={t.label}
                            type="button"
                            onClick={() => applyTemplate(t.text)}
                            className="text-[10px] px-2.5 py-1 bg-foreground/5 hover:bg-primary/10 hover:text-primary rounded-lg transition-all border border-foreground/5"
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <textarea 
                      required
                      value={formData.message}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onKeyDown={handleKeyDown}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                      }}
                      placeholder="Your message..." 
                      className={cn(
                        "w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-5 py-4 text-sm focus:outline-none transition-all resize-none leading-relaxed min-h-[160px]",
                        isFocused ? "border-primary/40 bg-foreground/[0.05]" : ""
                      )}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button 
                      disabled={status === 'sending'}
                      className={cn(
                        "w-full sm:w-auto px-10 py-4 bg-foreground text-background font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group",
                        status === 'sending' ? "opacity-70 cursor-not-allowed" : "hover:bg-primary hover:text-background active:scale-95"
                      )}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-red-400 text-xs font-medium"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errorMessage}
                      </motion.div>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-8 md:p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8">Social Profiles</h3>
              <div className="space-y-4">
                <a href={`https://github.com/${personalDetails.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors group">
                  <div className="p-2 glass rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono">github.com/{personalDetails.github}</span>
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
        />
      </div>
    </section>
  );
};
