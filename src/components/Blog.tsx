import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, Terminal, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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
    id: "tokio-polling",
    title: "Understanding Tokio: The Polling Loop",
    excerpt: "A deep dive into how the Tokio runtime manages tasks and how the poll function actually works under the hood.",
    content: `
# Understanding Tokio: The Polling Loop

In the world of asynchronous Rust, **Tokio** is the de facto standard runtime. But have you ever wondered how it actually manages to run thousands of tasks on just a few threads?

## The Future Trait

At the heart of Rust's async model is the \`Future\` trait. Unlike promises in other languages, Rust futures are *lazy*. They don't do anything until they are polled.

\`\`\`rust
pub trait Future {
    type Output;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
\`\`\`

## The Executor's Job

The Tokio executor is responsible for calling \`poll\` on your futures. When a future is polled, it can return one of two things:
1. \`Poll::Ready(val)\`: The future is finished, here is the result.
2. \`Poll::Pending\`: The future is not ready yet.

## Wakers

If a future returns \`Pending\`, it must ensure that the executor is notified when it *is* ready to be polled again. This is done via the \`Waker\`.

When the underlying resource (like a network socket) becomes ready, it calls \`waker.wake()\`, which puts the task back onto the executor's run queue.

## Conclusion

Tokio's efficiency comes from this cooperative, pull-based model. By only polling tasks that have been explicitly woken, it avoids the overhead of constant busy-waiting.
    `,
    date: "Mar 15, 2026",
    readTime: "12 min read",
    tag: "Rust"
  },
  {
    id: "rust-memory-safety",
    title: "Rust Memory Safety: Beyond the Borrow Checker",
    excerpt: "Exploring how Rust's ownership model prevents common memory bugs and why it matters for systems programming.",
    content: `
# Rust Memory Safety: Beyond the Borrow Checker

Rust is famous for its memory safety guarantees without a garbage collector. This is achieved through a unique system of ownership, borrowing, and lifetimes.

## Ownership Rules

1. Each value in Rust has a variable that’s called its owner.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

## Borrowing

Instead of transferring ownership, you can *borrow* a value.
- **Immutable Borrowing**: \`&T\` - You can have multiple immutable borrows.
- **Mutable Borrowing**: \`&mut T\` - You can have exactly one mutable borrow.

## Why it matters

This system prevents:
- **Dangling Pointers**: You can't have a reference to data that has been dropped.
- **Data Races**: Multiple threads can't mutate the same data simultaneously.
- **Double Free**: Data is only dropped once when the owner goes out of scope.

## The Zero-Cost Abstraction

The best part? Most of these checks happen at *compile time*. There is no runtime overhead for this safety.
    `,
    date: "Mar 10, 2026",
    readTime: "15 min read",
    tag: "Rust"
  },
  {
    id: "rust-error-handling",
    title: "Elegant Error Handling in Rust",
    excerpt: "Mastering Result and Option types to write robust and readable code that handles failures gracefully.",
    content: `
# Elegant Error Handling in Rust

Rust doesn't have exceptions. Instead, it uses the \`Result<T, E>\` and \`Option<T>\` enums to represent potential failure.

## The Result Enum

\`\`\`rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
\`\`\`

## The ? Operator

One of Rust's most beloved features is the \`?\` operator. It allows you to propagate errors up the call stack with minimal boilerplate.

\`\`\`rust
fn read_username_from_file() -> Result<String, io::Error> {
    let mut f = File::open("hello.txt")?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
}
\`\`\`

## Conclusion

By making errors explicit, Rust forces you to think about failure cases. This leads to more robust software that doesn't crash unexpectedly in production.
    `,
    date: "Mar 05, 2026",
    readTime: "8 min read",
    tag: "Rust"
  },
  {
    id: "cpp-stl-opt",
    title: "C++ Competitive Programming: STL Optimization",
    excerpt: "Techniques for squeezing every millisecond out of the STL for high-performance algorithmic problem solving.",
    content: `
# C++ Competitive Programming: STL Optimization

In competitive programming, every millisecond counts. While the STL is powerful, using it incorrectly can lead to TLE (Time Limit Exceeded).

## Fast I/O

The first thing every competitive programmer should do is disable sync with stdio.

\`\`\`cpp
ios_base::sync_with_stdio(false);
cin.tie(NULL);
\`\`\`

## Avoid std::endl

\`std::endl\` flushes the output buffer, which is slow. Use \`\\n\` instead.

## Reserve Space

If you know the size of your vector, use \`reserve()\` to avoid multiple reallocations.

\`\`\`cpp
vector<int> v;
v.reserve(1000000);
\`\`\`

## Conclusion

The STL is fast, but knowing these small tweaks can make the difference between a pass and a fail in high-stakes contests.
    `,
    date: "Feb 28, 2026",
    readTime: "8 min read",
    tag: "C++"
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
          </motion.div>
        ) : (
          <motion.div
            key="post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass p-8 md:p-12 rounded-3xl relative"
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
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
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
