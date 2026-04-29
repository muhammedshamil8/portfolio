import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[#0d0d15] min-h-screen text-[#e2e2f0] selection:bg-[#ff0077] selection:text-white relative overflow-x-hidden">
      {/* Persistent Background Overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-20 z-[100]" />
      
      <Header />
      <main className="relative z-10 scroll-smooth">
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
