import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full translate-x-4 translate-y-4" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-2xl skew-x-1">
                <Image
                  src="/images/Shamil7.jpg"
                  alt="Mohammed Shamil"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-2/3">
            <h5 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              About
            </h5>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Let me introduce myself.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Hi, I'm Shamil, a full-stack developer building web applications and admin dashboards.
              I specialize in JavaScript across frontend and backend, with experience in Laravel for
              full-stack applications. I also work with React Native and Flutter for mobile apps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-white font-bold mb-4 border-l-4 border-primary pl-4">Profile</h4>
                <ul className="space-y-3 text-sm">
                  <li><span className="text-white font-semibold">Full Name:</span> <span className="text-muted-foreground ml-2">Mohammed Shamil K P</span></li>
                  <li><span className="text-white font-semibold">Birth Date:</span> <span className="text-muted-foreground ml-2">February 24, 2005</span></li>
                  <li><span className="text-white font-semibold">Job:</span> <span className="text-muted-foreground ml-2">Full-Stack Developer</span></li>
                  <li><span className="text-white font-semibold">Website:</span> <span className="text-muted-foreground ml-2">zamil.vercel.app</span></li>
                  <li><span className="text-white font-semibold">Email:</span> <span className="text-muted-foreground ml-2">shamilzamil007@gmail.com</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-4 border-l-4 border-primary pl-4">Skills Focus</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My strongest area is JavaScript, used across frontend, backend, and real-world projects.
                  I’ve also built applications with Laravel and expanding into mobile with cross-platform frameworks.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-hover transition-all">
                HIRE ME
              </a>
              <a 
                href="https://drive.google.com/file/d/1r9CYzJO7E0ctVE0P-rMfQePRnNLrNcwU/view?usp=sharing" 
                target="_blank"
                className="px-8 py-3 border border-white/10 hover:border-white/20 text-white rounded-lg font-bold transition-all"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
