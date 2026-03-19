import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

const socials = [
  { icon: Github, href: "https://github.com/miskatul-anwar", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/miskatul-anwar-095176389/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/miskat666f", label: "LeetCode" },
  { icon: Mail, href: "mailto:miskat6603.dev@gmail.com", label: "Email" },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-12">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -3, scale: 1.1 }}
            className="text-foreground/40 hover:text-primary transition-colors p-2 glass rounded-lg"
            title={social.label}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
};
