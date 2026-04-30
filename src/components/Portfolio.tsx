"use client";

import { projects, Project } from "@/data/projects";
import Image from "next/image";
import { ExternalLink, Maximize2, X, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { ImageOff } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const getProjectLinks = (project: Project) => {
  const links: { label: string; href: string }[] = [];

  // 1. Check for specific link list (highest priority)
  if (project.links?.length) {
    return project.links;
  }

  // 2. Production/Live link (link 1)
  if (project.link) {
    links.push({ label: "Production", href: project.link });
  }

  // 3. App Link (alternate link 1 or 2)
  if (project.appLink) {
    links.push({ label: "Download App", href: project.appLink });
  }

  // 4. GitHub link (optional)
  if (project.github) {
    const githubLinks = Array.isArray(project.github) ? project.github : [project.github];
    githubLinks.forEach((href, index) => {
      links.push({
        label: index === 0 ? "GitHub" : `GitHub ${index + 1}`,
        href
      });
    });
  }

  return links;
};

function ProjectVisual({ project, showColor = false }: { project: Project; showColor?: boolean }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        className={`object-cover transition-all duration-1000 group-hover:scale-105 ${showColor ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center px-6 z-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl ring-1 ring-white/10">
          <ImageOff size={32} className="text-primary/60" />
        </div>
        <div>
          <p className="text-sm font-black text-white/80 uppercase tracking-widest mb-1">{project.title}</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Preview Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-[#0a0a0f]/95 border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto cyber-card p-6 md:p-12 scrollbar-hide relative backdrop-blur-2xl shadow-[0_0_100px_rgba(255,0,119,0.1)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Decorative Glows - Wrapped to prevent X-overflow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-all ring-1 ring-white/20 z-50 shadow-xl backdrop-blur-md"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start mb-10 pr-16 md:pr-24 relative z-10">
            <div>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 bg-primary/10 rounded-full mb-6 inline-block ring-1 ring-primary/20 shadow-[0_0_20px_rgba(255,0,119,0.15)]">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">{project.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 relative z-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group/img bg-black/40">
                <ProjectVisual project={project} showColor={true} />
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.badges.map((badge, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[12px] font-mono font-bold text-white/60 hover:text-primary transition-colors cursor-default"
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col relative z-10">
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-foreground/80 text-xl leading-relaxed font-mono border-l-2 border-primary/30 pl-6 bg-gradient-to-r from-primary/5 to-transparent py-4 rounded-r-2xl">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {getProjectLinks(project).map((link, index) => {
                  const isPrimary = index === 0;
                  return (
                    <a
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      target="_blank"
                      className={`flex items-center justify-center gap-3 px-8 py-4 font-black rounded-2xl transition-transform text-center uppercase text-sm tracking-widest ${
                        isPrimary
                          ? "bg-primary text-white hover:scale-[1.02] shadow-lg shadow-primary/20"
                          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label} {link.label.toLowerCase().includes("github") ? <GithubIcon size={20} /> : <ExternalLink size={20} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [parent] = useAutoAnimate();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cyber-card p-6 rounded-3xl group flex flex-col h-full ring-1 ring-white/5 hover:ring-primary/40 transition-all duration-700 bg-[#0d0d15] hover:shadow-[0_0_40px_rgba(255,0,119,0.1)]"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5 bg-black/40">
        <ProjectVisual project={project} />
        <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px] pointer-events-auto z-20">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onOpen(project)}
            className="p-4 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20"
          >
            <Maximize2 size={24} />
          </motion.button>
          {getProjectLinks(project)[0] && (
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={getProjectLinks(project)[0].href} 
              target="_blank" 
              className="p-4 bg-white/10 text-white rounded-2xl backdrop-blur-xl border border-white/20"
            >
              <ExternalLink size={24} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col" ref={parent}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-black text-primary px-3 py-1 bg-primary/10 rounded-full uppercase tracking-[0.2em] ring-1 ring-primary/20">
            {project.category}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors font-mono tracking-tighter mb-4">
          {project.title}
        </h3>
        
        <p className={`text-[13px] text-foreground/50 font-mono leading-relaxed mb-6 ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {project.description}
        </p>
        
        {project.description.length > 80 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] font-bold text-primary/60 flex items-center gap-1.5 hover:text-primary transition-colors uppercase tracking-[0.2em] mb-6 w-fit"
          >
            {isExpanded ? (
              <>Collapse <ChevronUp size={12} /></>
            ) : (
              <>Read More <ChevronDown size={12} /></>
            )}
          </button>
        )}
        
        <div className="flex flex-wrap gap-2.5 mt-auto pt-6 border-t border-white/5">
          {project.badges.slice(0, 3).map((badge, i) => (
            <span 
              key={i} 
              className="text-[10px] font-mono font-bold text-white/10 uppercase tracking-widest"
            >
              #{badge.text.replace(/\s+/g, "").toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const featuredProjects = projects
    .sort((a, b) => (a.rank || 99) - (b.rank || 99))
    .slice(0, 3);

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      {/* Project Modal - Rendered outside the local card context */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-xl font-bold font-mono text-secondary yellow-glow uppercase tracking-[0.4em]">
            ### Works
          </h2>
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 text-[10px] font-mono text-white/40 hover:text-primary transition-colors uppercase tracking-[0.2em] mb-1"
          >
            View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
