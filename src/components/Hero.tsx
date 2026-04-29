"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-48 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-mono text-primary pink-glow mb-4 uppercase tracking-widest">
            {`// Full Stack Developer`}
          </h2>
          
          <h1 className="text-5xl md:text-[8vw] font-black text-white tracking-tighter leading-none mb-10">
            Shamil <span className="text-secondary yellow-glow">K P</span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl mb-12"
          >
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed">
              Full-stack developer building scalable web and mobile apps with React, Node.js, and modern stacks. 
              I focus on performance, maintainability, and real-world usability.
            </p>
          </motion.div>

          <div className="flex gap-8 font-mono text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="#portfolio" className="text-primary hover:text-white transition-all underline decoration-primary/20 underline-offset-8">Works</Link>
            <Link href="#skills" className="text-primary hover:text-white transition-all underline decoration-primary/20 underline-offset-8">Stack</Link>
            <Link href="#contact" className="text-primary hover:text-white transition-all underline decoration-primary/20 underline-offset-8">Ping Me</Link>
          </div>

          <div className="mt-20 flex gap-12 font-mono text-[10px] text-white/20 uppercase tracking-[0.4em]">
            <p>Based in Kerala, India</p>
            <p>Ready to collaborate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
