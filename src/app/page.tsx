import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-[#0d0d15] min-h-screen text-[#e2e2f0] selection:bg-[#ff0077] selection:text-white relative overflow-x-hidden">
      {/* Persistent Background Overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-20 z-0" />
      
      <Header />
      <main className="relative scroll-smooth">
        <Hero />
        <Skills />
        <Portfolio />
        {/* <About /> */}
        <Contact />
      </main>
    </div>
  );
}
