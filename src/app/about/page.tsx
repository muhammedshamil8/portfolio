import Skills from "@/components/Skills";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-40">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Architecting <br /> the digital <br /> <span className="text-primary italic">landscape.</span>
          </h1>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a Full-Stack Engineer driven by the challenge of solving complex problems through clean architecture and intuitive interfaces.
            </p>
            <p>
              With deep expertise in the JavaScript ecosystem and cloud technologies, I bridge the gap between abstract requirements and production-ready applications. My work spans from high-traffic web platforms to performance-critical mobile apps.
            </p>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
          <Image 
            src="/images/Shamil7.jpg" 
            alt="Mohammed Shamil" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40" />
        </div>
      </div>

      <Skills />

      <section className="py-24 bg-card/10 mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-primary pl-6 uppercase tracking-widest text-[10px]">Philosophy</h3>
          <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
            "Software is not just about writing code; it's about engineering solutions that <span className="text-primary italic">endure</span> and deliver value at scale."
          </p>
        </div>
      </section>
    </div>
  );
}
