import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, Code, Terminal, Globe } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: React.ElementType;
  color: string;
}

const certifications: Certification[] = [
  {
    title: "Galactic Problem Solver",
    issuer: "NASA Space Apps",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    title: "Problem Solving Intermediate",
    issuer: "HackerRank",
    icon: Code,
    color: "text-green-400"
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    icon: Code,
    color: "text-green-400"
  },
  {
    title: "Introduction to Ethical Hacking",
    issuer: "Great Learning",
    icon: ShieldCheck,
    color: "text-purple-400"
  },
  {
    title: "Java",
    issuer: "HackerRank",
    icon: Terminal,
    color: "text-orange-400"
  },
  {
    title: "Python",
    issuer: "HackerRank",
    icon: Terminal,
    color: "text-yellow-400"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    icon: ShieldCheck,
    color: "text-red-400"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-5xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Award className="text-primary w-8 h-8" />
          Licenses & Certifications
        </h2>
        <p className="text-foreground/50 font-mono text-sm">
          &gt; professional validation and skill verification.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title + cert.issuer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass p-6 rounded-[2rem] group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-foreground/5 ${cert.color}`}>
                <cert.icon className="w-6 h-6" />
              </div>
              <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-primary transition-colors" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-foreground/40 font-mono">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
