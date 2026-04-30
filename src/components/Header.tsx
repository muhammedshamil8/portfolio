"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-6 font-mono bg-background/20 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-white hover:text-primary pink-glow transition-all tracking-tighter relative z-[110]">
          Shamil<span className="text-primary italic">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className={`${
                pathname === item.href ? "text-primary" : "text-white/40"
              } hover:text-primary transition-colors relative group`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 ${
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-[110] p-2 text-white/60 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 w-screen h-[100dvh] bg-[#0d0d15] z-[105] flex flex-col items-center justify-center gap-12"
            >
              {/* Background Decorative Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03]">
                <div className="text-[40vw] font-black text-white select-none pointer-events-none tracking-tighter">NAV</div>
              </div>

              <div className="flex flex-col items-center justify-center gap-8 px-10">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className={`text-5xl font-black uppercase tracking-tighter text-center block ${
                        pathname === item.href ? "text-primary" : "text-white/40"
                      } hover:text-primary transition-all active:scale-90`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col items-center gap-8"
              >
                <div className="h-px w-24 bg-white/10" />
                <div className="flex gap-10 text-white/30 font-mono text-xs font-black uppercase tracking-[0.3em]">
                  <a href="https://github.com/muhammedshamil8" className="hover:text-primary transition-colors">GitHub</a>
                  <a href="https://t.me/shamilkp_7" className="hover:text-primary transition-colors">Telegram</a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
