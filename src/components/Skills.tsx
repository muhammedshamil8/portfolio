"use client";

import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const skillGroups = [
  {
    category: "Languages & Core",
    items: "JavaScript/TypeScript, Python, PHP, Go",
  },
  {
    category: "Web Frontend",
    items: "React, Next.js, Vue, Nuxt, Tailwind CSS, Livewire, Ant Design, Material UI, shadcn/ui",
  },
  {
    category: "Backend & Systems",
    items: "Node.js, Django, Flask, Laravel, Go, Express, REST APIs, Supabase, Firebase, MongoDB, MySQL",
  },
  {
    category: "DevOps & Cloud",
    items: "Docker, CI/CD, Git, Linux, GitHub/GitLab, Cloudflare, Postman",
  },
  {
    category: "Mobile App Dev",
    items: "React Native, Flutter, Android Deployment",
  },
];

export default function Skills() {
  const [parent] = useAutoAnimate();

  return (
    <section id="skills" className="py-24 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold font-mono text-secondary yellow-glow mb-16 uppercase tracking-[0.4em]"
        >
          ### Tech Stack
        </motion.h2>
        
        <div ref={parent} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 font-mono">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={group.category} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/5 group-hover:bg-primary transition-all duration-500" />
              <h3 className="text-xs font-black text-white/40 mb-3 uppercase tracking-[0.2em] flex items-center gap-3 group-hover:text-primary transition-colors">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {group.category}
              </h3>
              <p className="text-foreground/80 text-[13px] leading-relaxed pl-2 font-medium tracking-tight">
                {group.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
