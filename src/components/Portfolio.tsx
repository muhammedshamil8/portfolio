"use client";

import { projects, Project } from "@/data/projects";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const mainImage = project.image;

  // Prevent hydration mismatch by only rendering state-dependent content after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cyber-card p-5 rounded-2xl group flex flex-col h-full ring-1 ring-white/5 hover:ring-primary/20 transition-all duration-500"
    >
      <motion.div layout="position" className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/5 bg-black/40">
        <Image
          src={mainImage}
          alt={project.title}
          fill
          priority={index < 3}
          loading={index < 3 ? "eager" : "lazy"}
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <a 
          href={project.link} 
          target="_blank" 
          className="absolute top-3 right-3 p-2 bg-black/60 rounded-lg text-white/40 hover:text-primary transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
        >
          <ExternalLink size={14} />
        </a>
      </motion.div>

      <div className="flex-1 flex flex-col">
        <motion.div layout="position" className="flex items-center gap-2 mb-3">
          <span className="text-[9px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-md uppercase tracking-widest">
            {project.category}
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>

        <motion.h3 layout="position" className="text-lg font-black text-white group-hover:text-primary transition-colors font-mono tracking-tight mb-3">
          {project.title}
        </motion.h3>
        
        <div className="relative">
          <motion.p 
            layout
            className="text-[12px] text-foreground/60 font-mono leading-relaxed mb-4"
            style={isMounted ? { 
              display: "-webkit-box",
              WebkitLineClamp: isExpanded ? "unset" : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            } : {
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {project.detailedDescription || project.description}
          </motion.p>
          
          {(project.detailedDescription || project.description.length > 100) && (
            <motion.button 
              layout="position"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[9px] font-bold text-primary flex items-center gap-1 hover:text-white transition-colors uppercase tracking-widest mb-4"
            >
              {isExpanded ? (
                <>Less <ChevronUp size={10} /></>
              ) : (
                <>More <ChevronDown size={10} /></>
              )}
            </motion.button>
          )}
        </div>
        
        <motion.div layout="position" className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.badges.slice(0, 3).map((badge, i) => (
            <span 
              key={i} 
              className="text-[9px] font-mono font-bold text-white/20 uppercase"
            >
              #{badge.text.replace(/\s+/g, "").toLowerCase()}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const featuredProjects = projects
    .sort((a, b) => (a.rank || 99) - (b.rank || 99))
    .slice(0, 6);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-xl font-bold font-mono text-secondary yellow-glow uppercase tracking-[0.4em]">
            ### Works
          </h2>
          <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em] mb-1">
            Featured Selection
          </p>
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence>
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
