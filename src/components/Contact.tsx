"use client";

import React, { useState, useEffect } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold font-mono text-secondary yellow-glow mb-12">
            ### Ping Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-foreground/70 leading-relaxed font-mono text-sm mb-12 italic">
                // Available for interesting projects and technical collaborations. <br />
                // Drop a signal or find me on digital hubs.
              </p>
              
              <div className="space-y-6 font-mono">
                <a href="mailto:shamilzamil007@gmail.com" className="flex items-center gap-4 text-primary hover:text-white transition-colors group">
                  <div className="w-10 h-10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all shadow-lg shadow-primary/10">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm font-bold">shamilzamil007@gmail.com</span>
                </a>
                
                <div className="flex gap-6 pt-10">
                  <a href="https://github.com/muhammedshamil8" target="_blank" className="text-white/40 hover:text-primary transition-all hover:scale-110">
                    <GithubIcon />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammed-shamil-65878227a/" target="_blank" className="text-white/40 hover:text-primary transition-all hover:scale-110">
                    <LinkedinIcon />
                  </a>
                  <a href="https://twitter.com/ShamilK72633345" target="_blank" className="text-white/40 hover:text-primary transition-all hover:scale-110">
                    <TwitterIcon />
                  </a>
                  <a href="https://www.instagram.com/muhammed_shamil_kp" target="_blank" className="text-white/40 hover:text-primary transition-all hover:scale-110">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>

            <form 
              action="https://formspree.io/f/xqkrlywp" 
              method="POST"
              className="space-y-4 font-mono"
            >
              <input 
                type="text" 
                name="name" 
                placeholder="YOUR NAME" 
                required 
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="YOUR EMAIL" 
                required 
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
              />
              <textarea 
                name="message" 
                placeholder="DETAILS..." 
                required 
                rows={4}
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-4 bg-primary/10 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 pink-glow uppercase text-xs tracking-[0.2em]"
              >
                Dispatch Signal <Send size={14} />
              </button>
            </form>
          </div>
        </motion.div>

        <footer className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
          <p>© {mounted ? new Date().getFullYear() : "2024"} Shamil • Engineering Hub</p>
          <div className="flex gap-8">
            <a href="https://github.com/muhammedshamil8" className="hover:text-primary transition-colors">github</a>
            <a href="https://www.linkedin.com/in/muhammed-shamil-65878227a/" className="hover:text-primary transition-colors">linkedin</a>
            <a href="https://www.instagram.com/muhammed_shamil_kp" className="hover:text-primary transition-colors">instagram</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
