import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, Terminal, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Badge } from './Badge';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tag: string;
}

const posts: Post[] = [
  {
    id: "nixos-immutable",
    title: "NixOS: The Immutable Future",
    excerpt: "Exploring the power of reproducible builds and declarative configuration with NixOS and Flakes.",
    content: `
# NixOS: The Immutable Future

NixOS is not just another Linux distribution; it's a paradigm shift in how we manage our operating systems.

## Declarative Configuration

In NixOS, your entire system state is described in a single file (or a set of files). This means you can recreate your exact environment on any machine.

\`\`\`nix
{ config, pkgs, ... }: {
  imports = [ ./hardware-configuration.nix ];
  boot.loader.systemd-boot.enable = true;
  networking.hostName = "miskatul-nixos";
  environment.systemPackages = with pkgs; [ vim git rustup ];
}
\`\`\`

## Flakes: The Game Changer

Flakes provide a standardized way to manage dependencies and lock versions, ensuring that your configuration is truly reproducible across time and space.

## Conclusion

If you value stability and reproducibility, NixOS is the ultimate tool for developers who want to treat their OS like code.
    `,
    date: "Mar 20, 2026",
    readTime: "10 min read",
    tag: "Linux"
  },
  {
    id: "rust-rayon",
    title: "High-Performance Rust: Beyond Async",
    excerpt: "When async isn't enough, Rayon brings data-parallelism to Rust with zero-cost abstractions.",
    content: `
# High-Performance Rust: Beyond Async

While \`tokio\` is great for I/O-bound tasks, \`rayon\` is the king of CPU-bound parallelism in Rust.

## The Magic of Iterators

Rayon allows you to turn a sequential iterator into a parallel one with just one method call: \`par_iter()\`.

\`\`\`rust
use rayon::prelude::*;

fn sum_of_squares(input: &[i32]) -> i32 {
    input.par_iter()
         .map(|&i| i * i)
         .sum()
}
\`\`\`

## Work-Stealing Scheduler

Rayon uses a sophisticated work-stealing scheduler to ensure that all your CPU cores are kept busy without the overhead of manual thread management.

## Conclusion

For data-intensive applications, Rayon is an indispensable tool in the Rustacean's toolkit.
    `,
    date: "Mar 18, 2026",
    readTime: "8 min read",
    tag: "Rust"
  },
  {
    id: "tauri-vs-electron",
    title: "Tauri vs Electron: A Systems Perspective",
    excerpt: "Comparing the architecture and performance of modern desktop application frameworks.",
    content: `
# Tauri vs Electron

Building desktop apps with web technologies has never been easier, but the choice of framework has massive implications for performance and security.

## Binary Size

Electron apps are notorious for their massive binary sizes because they bundle Chromium. Tauri, on the other hand, uses the system's native WebView, resulting in binaries that are often 10x smaller.

## Security

Tauri is built with Rust and follows a "secure by default" philosophy. It restricts access to system APIs unless explicitly enabled, reducing the attack surface significantly.

## Performance

By offloading heavy logic to Rust, Tauri apps can achieve performance that is simply not possible in pure JavaScript environments.
    `,
    date: "Mar 15, 2026",
    readTime: "12 min read",
    tag: "Systems"
  },
  {
    id: "db-normalization",
    title: "Database Normalization: The Normaflow Way",
    excerpt: "A guide to 1NF, 2NF, and 3NF, and how Normaflow automates the decomposition process.",
    content: `
# Database Normalization

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.

## The Normal Forms

- **1NF**: Eliminate duplicate columns and ensure atomicity.
- **2NF**: Remove partial dependencies on the primary key.
- **3NF**: Remove transitive dependencies.

## Automating with Normaflow

Normaflow takes your raw schema and visually guides you through the decomposition process, generating the final SQL DDL for you.

## Conclusion

Proper normalization is the foundation of a scalable and maintainable database architecture.
    `,
    date: "Mar 12, 2026",
    readTime: "15 min read",
    tag: "Database"
  }
];

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <section className="py-32 px-4 max-w-4xl mx-auto min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
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
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPost(post)}
                  className="group glass p-8 rounded-[2rem] hover:bg-foreground/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
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
          </motion.div>
        ) : (
          <motion.div
            key="post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass p-8 md:p-12 rounded-[2rem] relative"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK_TO_LOGS
            </button>

            <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/40 font-mono mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {selectedPost.readTime}
              </span>
              <Badge variant="default">
                {selectedPost.tag}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
              {selectedPost.title}
            </h1>

            <div className="prose prose-invert prose-primary max-w-none">
              <div className="markdown-body">
                <ReactMarkdown
                  components={{
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-xl border border-foreground/5 !bg-[#1e1e1e] !my-6"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={`${className} bg-foreground/10 px-1.5 py-0.5 rounded text-primary/80`} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {selectedPost.content}
                </ReactMarkdown>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-foreground/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="p-2 glass rounded-lg hover:bg-foreground/10 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 glass rounded-lg hover:bg-foreground/10 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-foreground/30 font-mono">
                &gt; End of log
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
