"use client";

import React, { useState, useEffect } from "react";
import { Mail, Send, MessageSquare, ExternalLink, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
);

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>
    <path d="M7.5 7.1c2-1.3 4.5-2.1 7-2.1 2.5 0 5 .8 7 2.1 1.3 1.1 2.2 2.7 2.5 4.4.2 1.3.1 2.6-.4 3.8-.5 1.2-1.5 2.1-2.6 2.6-1.2.6-2.5.8-3.8.7-1.1-.1-2.2-.4-3.2-.9-.4-.2-.8-.2-1.2 0-1 .5-2.1.8-3.2.9-1.3.1-2.6-.1-3.8-.7-1.1-.5-2.1-1.4-2.6-2.6-.5-1.2-.6-2.5-.4-3.8.3-1.7 1.2-3.3 2.5-4.4Z"/>
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            {/* Left Column: Direct Contact */}
            <div className="flex-1 space-y-12">
              <div>
                <h2 className="text-xl font-bold font-mono text-secondary yellow-glow mb-6 uppercase tracking-[0.4em]">
                  ### Get In Touch
                </h2>
                <p className="text-foreground/50 font-mono text-sm leading-relaxed max-w-md italic">
                  // Available for interesting projects and technical collaborations.
                </p>
              </div>

              <div className="space-y-8">
                {/* Telegram - Preferred */}
                <div className="cyber-card p-6 rounded-2xl group border-primary/20 hover:border-primary transition-all duration-500 bg-primary/5">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <TelegramIcon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-primary/60 uppercase tracking-widest mb-1">Fastest Option</h3>
                      <p className="text-xl font-black text-white group-hover:text-primary transition-colors">Telegram</p>
                      <p className="text-xs text-white/40 font-mono mt-1">@shamilkp_7</p>
                    </div>
                    <a 
                      href="https://t.me/shamilkp_7" 
                      target="_blank" 
                      className="ml-auto p-3 bg-white/5 rounded-full text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Discord - Alternative */}
                <div className="cyber-card p-6 rounded-2xl group border-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-white/40 group-hover:text-secondary group-hover:scale-110 transition-transform">
                      <DiscordIcon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-white/20 uppercase tracking-widest mb-1">Alternative</h3>
                      <p className="text-xl font-black text-white group-hover:text-secondary transition-colors">Discord</p>
                      <p className="text-xs text-white/40 font-mono mt-1">zamil_7</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard("zamil_7")}
                      className="ml-auto p-3 bg-white/5 rounded-full text-white/20 group-hover:text-secondary group-hover:bg-secondary/10 transition-all relative"
                      title="Copy Username"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check size={18} className="text-secondary" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy size={18} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                {/* Email - Last Resort */}
                <div className="cyber-card p-6 rounded-2xl group border-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-white/40 group-hover:scale-110 transition-transform">
                      <Mail size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">might be slow to respond</h3>
                      <p className="text-lg font-black text-white break-all">Electronic Mail</p>
                      <p className="text-[10px] text-white/40 font-mono mt-1 italic">shamilzamil007@gmail.com</p>
                    </div>
                    <a 
                      href="mailto:shamilzamil007@gmail.com" 
                      className="p-3 bg-white/5 rounded-full text-white/20 group-hover:text-white group-hover:bg-white/10 transition-all h-fit"
                    >
                      <Send size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Signal */}
            <div className="w-full md:w-[400px]">
              <div className="cyber-card p-8 rounded-3xl border-white/5 relative bg-[#12121a]">
                <h3 className="text-sm font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Quick Signal
                </h3>
                
                <form 
                  action="https://formspree.io/f/xqkrlywp" 
                  method="POST"
                  className="space-y-4 font-mono"
                >
                  <div className="space-y-1">
                    <label className="text-[10px] text-white/20 uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="NAME/ORG" 
                      required 
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-white/20 uppercase tracking-widest ml-1">Return Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="EMAIL" 
                      required 
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-white/20 uppercase tracking-widest ml-1">Transmission Data</label>
                    <textarea 
                      name="message" 
                      placeholder="YOUR MESSAGE..." 
                      required 
                      rows={4}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-primary/10 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 pink-glow uppercase text-xs tracking-[0.2em]"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simplified Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-mono text-white/40 uppercase tracking-[0.2em]">
          <p>© {mounted ? new Date().getFullYear() : "2024"} Shamil</p>
          
          <div className="flex gap-10">
            <a href="https://github.com/muhammedshamil8" target="_blank" className="text-white hover:text-primary transition-all flex items-center gap-2 font-bold">
              <GithubIcon size={14} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammed-shamil-65878227a/" target="_blank" className="text-white hover:text-primary transition-all flex items-center gap-2 font-bold">
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a href="https://t.me/shamilkp_7" target="_blank" className="text-white hover:text-primary transition-all flex items-center gap-2 font-bold">
              <TelegramIcon size={14} /> Telegram
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
