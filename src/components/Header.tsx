"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Works", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Ping Me", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 font-mono bg-background/20 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-white hover:text-primary pink-glow transition-all tracking-tighter">
          Shamil<span className="text-primary italic">.</span>
        </Link>
        
        <nav className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-white/40 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
