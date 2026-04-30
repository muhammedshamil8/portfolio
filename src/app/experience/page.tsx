"use client";

import Header from "@/components/Header";
import Footer from "@/components/Contact";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ExperiencePage() {
  const [parent] = useAutoAnimate();

  return (
    <div className="bg-[#0d0d15] min-h-screen text-[#e2e2f0] selection:bg-[#ff0077] selection:text-white relative overflow-x-hidden">
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-20 z-[100]" />
      <Header />
      
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              MY <span className="text-secondary italic yellow-glow">JOURNEY_</span>
            </h1>
            <p className="text-foreground/40 font-mono text-sm max-w-xl">
              Professional experience, community leadership, and technical initiatives.
            </p>
          </div>
          
          <div className="space-y-12" ref={parent}>
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 group"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 group-hover:bg-primary/30 transition-colors" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-[#12121a] border-2 border-white/10 group-hover:border-primary group-hover:scale-125 transition-all duration-500" />
                
                <div className="cyber-card p-8 rounded-2xl bg-[#12121a] border border-white/5 group-hover:border-primary/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-black text-white group-hover:text-primary transition-colors mb-1">
                        {exp.title}
                      </h2>
                      <div className="flex items-center gap-2 text-secondary font-bold text-sm">
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2 text-foreground/40 font-mono text-[11px] uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed mb-6 font-mono text-sm border-l-2 border-primary/20 pl-4 py-1">
                    {exp.desc}
                  </p>
                  
                  {exp.details && exp.details.length > 0 && (
                    <ul className="space-y-3">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-foreground/50 text-xs font-mono group-hover:text-foreground/80 transition-colors">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
