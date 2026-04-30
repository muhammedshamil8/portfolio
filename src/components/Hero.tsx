"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-48 pb-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="text-[20vw] font-black text-white/5 select-none pointer-events-none">CODE_</div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-primary" />
            <h2 className="text-sm md:text-base font-mono text-primary pink-glow uppercase tracking-[0.3em]">
              {`// Full Stack Developer`}
            </h2>
          </div>
          
          <h1 className="text-6xl md:text-[8vw] font-black text-white tracking-tighter leading-[0.9] mb-12 uppercase">
            SHAMIL <span className="text-secondary yellow-glow">KP</span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <div className="text-xl md:text-2xl text-foreground/80 font-mono leading-relaxed border-l-2 border-white/5 pl-8 space-y-2">
              <p>Full-stack developer building scalable web and mobile apps.</p>
              <p className="text-foreground/40 italic">Focused on real-world projects and production systems.</p>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-10 font-mono text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="/projects" className="group flex items-center gap-2 text-primary hover:text-white transition-all underline decoration-primary/20 underline-offset-8">
              Explore Works <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link href="/experience" className="group flex items-center gap-2 text-primary hover:text-white transition-all underline decoration-primary/20 underline-offset-8">
              Experience <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link href="/#contact" className="group flex items-center gap-2 text-primary hover:text-white transition-all underline decoration-primary/20 underline-offset-8">
              Get In Touch <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-24 flex flex-wrap gap-12 font-mono text-[10px] text-white/20 uppercase tracking-[0.4em]">
            <div className="flex flex-col gap-2">
              <span className="text-white/40">Location</span>
              <p>Kerala, India // Remote</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/40">Status</span>
              <p>Active // Open for Collab</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
