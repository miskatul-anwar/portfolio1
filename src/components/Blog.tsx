import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, Terminal } from 'lucide-react';

import { Badge } from './Badge';

const posts = [
  {
    title: "Understanding Tokio: The Polling Loop",
    excerpt: "A deep dive into how the Tokio runtime manages tasks and how the poll function actually works under the hood.",
    date: "Mar 15, 2026",
    readTime: "12 min read",
    tag: "Rust"
  },
  {
    title: "C++ Competitive Programming: STL Optimization",
    excerpt: "Techniques for squeezing every millisecond out of the STL for high-performance algorithmic problem solving.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    tag: "C++"
  },
  {
    title: "Arch Linux: The Ultimate Dev Environment",
    excerpt: "Why Arch Linux and a terminal-first workflow is the peak of developer efficiency and customization.",
    date: "Feb 10, 2026",
    readTime: "10 min read",
    tag: "Linux"
  }
];

export const Blog: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Terminal className="text-primary w-8 h-8" />
          Technical_Logs
        </h2>
        <p className="text-foreground/50 font-mono text-sm">
          &gt; documenting the journey through systems and algorithms.
        </p>
      </motion.div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4 text-xs text-foreground/40 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
                <Badge variant="default">
                  {post.tag}
                </Badge>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-foreground/60 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
