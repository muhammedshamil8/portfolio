"use client";

import Header from "@/components/Header";
import Footer from "@/components/Contact";
import { projects, Project } from "@/data/projects";
import Image from "next/image";
import { ExternalLink, Maximize2, X, ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

function ProjectModal({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-[#12121a] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto cyber-card p-6 md:p-12 scrollbar-hide relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all ring-1 ring-white/10 z-[210]"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start mb-10 pr-12">
            <div>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 bg-primary/10 rounded-full mb-6 inline-block ring-1 ring-primary/20">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none">{project.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group/img bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                />
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

            <div className="flex flex-col">
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-mono">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-black rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 text-center uppercase text-sm tracking-widest"
                  >
                    Launch Live <ExternalLink size={20} />
                  </a>
                )}
                {project.github && (
                  <a 
                    href={Array.isArray(project.github) ? project.github[0] : project.github} 
                    target="_blank" 
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-colors text-center uppercase text-sm tracking-widest"
                  >
                    Repository <GithubIcon size={20} />
                  </a>
                )}
                {project.appLink && (
                  <a 
                    href={project.appLink} 
                    target="_blank" 
                    className="sm:col-span-2 flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-black font-black rounded-2xl hover:scale-[1.02] transition-transform text-center uppercase text-sm tracking-widest"
                  >
                    Download Application <ExternalLink size={20} />
                  </a>
                )}
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="cyber-card p-6 rounded-3xl group flex flex-col h-full ring-1 ring-white/5 hover:ring-primary/40 transition-all duration-700 bg-[#0d0d15] hover:shadow-[0_0_40px_rgba(255,0,119,0.1)]"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5 bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px] pointer-events-auto">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onOpen(project)}
            className="p-4 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20"
          >
            <Maximize2 size={24} />
          </motion.button>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.link} 
            target="_blank" 
            className="p-4 bg-white/10 text-white rounded-2xl backdrop-blur-xl border border-white/20"
          >
            <ExternalLink size={24} />
          </motion.a>
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
          {project.badges.map((badge, i) => (
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

export default function AllProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [parent] = useAutoAnimate();

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="bg-[#0d0d15] min-h-screen text-[#e2e2f0] selection:bg-[#ff0077] selection:text-white relative overflow-x-hidden">
      {/* Project Modal - Rendered outside main stacking context */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="fixed inset-0 bg-grain pointer-events-none opacity-20 z-0" />
      <Header />
      
      <main className="relative pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-24 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute -top-4 left-0 h-[1px] bg-gradient-to-r from-primary to-transparent"
                />
                <h1 className="text-6xl md:text-[12vw] font-black text-white tracking-tighter leading-[0.8] uppercase flex flex-col">
                  <span className="relative">
                    PRO
                    <span className="text-primary italic">JECTS</span>
                  </span>
                </h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.05 }}
                  className="absolute -bottom-10 md:-bottom-20 left-0 text-[15vw] font-black text-white select-none pointer-events-none tracking-tighter"
                >
                  SELECTED_WORKS
                </motion.p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-12 md:mt-24">
                <p className="text-foreground/40 font-mono text-xs md:text-sm max-w-xl leading-relaxed uppercase tracking-widest border-l-2 border-white/5 pl-6">
                  // Showcasing technical projects and production systems <br />
                  // Focused on high-performance architecture and scalable applications
                </p>
                
                {/* Search & Filter Container */}
                <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                  <div className="relative group flex-1 sm:w-80">
                    <div className="absolute inset-0 bg-primary/5 blur-xl group-focus-within:bg-primary/10 transition-all rounded-2xl" />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                      type="text" 
                      placeholder="SEARCH MISSION..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-mono focus:outline-none focus:border-primary transition-all placeholder:text-white/10 relative z-10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Filter Bar - Sticky-ish */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 md:gap-3 mb-16 p-2 bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] w-full md:w-fit mx-auto lg:mx-0 ring-1 ring-white/5 backdrop-blur-md"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-1 md:flex-none px-4 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                  filter === cat 
                  ? "bg-primary text-white shadow-[0_0_30px_rgba(255,0,119,0.3)] ring-1 ring-primary/50" 
                  : "text-white/30 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <div 
            ref={parent}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} onOpen={setSelectedProject} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="py-40 md:py-60 text-center border-2 border-dashed border-white/5 rounded-[2rem] md:rounded-[3rem]">
              <p className="text-white/10 font-mono text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] animate-pulse px-6">No projects found matching the selected criteria</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
