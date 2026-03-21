import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Globe, Linkedin, Award, Briefcase, GraduationCap, Code2, Terminal } from 'lucide-react';

export const CV: React.FC = () => {
  const skills = [
    { category: "Languages", items: ["Rust", "TypeScript", "C++", "Go", "Python", "Assembly"] },
    { category: "Systems", items: ["Kernel Dev", "Embedded Systems", "NixOS", "Docker", "Kubernetes"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { category: "Backend", items: ["Node.js", "gRPC", "PostgreSQL", "Redis", "WebSockets"] },
  ];

  return (
    <div className="min-h-screen pt-20 pb-32 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full flex justify-center items-center mb-8">
        <h2 className="text-4xl font-bold font-display uppercase tracking-tighter">Curriculum Vitae</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl w-full glass p-8 md:p-16 rounded-[2rem] relative overflow-hidden shadow-2xl bg-[#0a0a0a]"
      >
        {/* Decorative elements for the CV */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
        <div className="absolute top-10 right-10 opacity-5">
          <Terminal className="w-64 h-64" />
        </div>

        {/* Header */}
        <header className="mb-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGEukRjmNSOTA/profile-displayphoto-crop_800_800/B4EZnBqOcrGYAI-/0/1759890700990?e=1775692800&v=beta&t=ousACVsggICfp_B8dZIzNguMsbXlLFNoT-Zxc7YOrDY" 
                  alt="Miskatul Anwar" 
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">MISKATUL <span className="text-primary">ANWAR</span></h1>
                <p className="text-lg text-primary font-mono tracking-widest uppercase">Systems & Application Developer</p>
              </div>
            </div>
            <div className="space-y-2 text-sm font-mono text-foreground/60">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> miskat6603.dev@gmail.com</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Chittagong, Bangladesh</div>
              <div className="flex items-center gap-2"><Github className="w-4 h-4 text-primary" /> github.com/miskatul-anwar</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-10">
            <section>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Technical Arsenal
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-[10px] font-mono text-foreground/40 uppercase mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span key={skill} className="px-2 py-1 glass rounded text-[10px] font-mono border border-foreground/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" /> Achievements
              </h3>
              <ul className="space-y-4 text-xs font-light text-foreground/70 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>Codeforces Specialist (Max Rating: 1400+)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>LeetCode Guardian (Top 5% globally)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>picoCTF Top 500 Global Ranking</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Languages
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-primary">Professional</span>
                </div>
                <div className="flex justify-between">
                  <span>Bengali</span>
                  <span className="text-primary">Native</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Professional Experience
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold">Open Source Core Contributor</h4>
                    <span className="text-[10px] font-mono text-primary">2023 — Present</span>
                  </div>
                  <p className="text-xs text-foreground/50 mb-3 italic">Systems Research & Development</p>
                  <ul className="space-y-2 text-xs font-light text-foreground/70 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Developing memory-safe system utilities in Rust, focusing on low-level performance and security.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Implementing high-performance networking protocols and distributed system architectures.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold">Full Stack Developer</h4>
                    <span className="text-[10px] font-mono text-primary">2022 — 2023</span>
                  </div>
                  <p className="text-xs text-foreground/50 mb-3 italic">Freelance & Contract</p>
                  <ul className="space-y-2 text-xs font-light text-foreground/70 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Built scalable web applications using React and Node.js for international clients.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Optimized database queries and frontend performance, reducing load times by 40%.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold">B.Sc. in Computer Science & Engineering</h4>
                    <span className="text-[10px] font-mono text-primary">2021 — 2025</span>
                  </div>
                  <p className="text-xs text-foreground/60">University of Chittagong</p>
                  <p className="text-[10px] font-mono text-foreground/40 mt-2">Focus: Operating Systems, Compilers, Advanced Algorithms</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <User className="w-4 h-4" /> Professional Summary
              </h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed">
                Highly motivated Systems and Application Developer with a deep passion for memory safety, 
                high-performance computing, and elegant software architecture. Proven track record in 
                competitive programming and open-source contributions. Expert in bridging the gap 
                between low-level hardware constraints and modern high-level application needs.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const User = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
