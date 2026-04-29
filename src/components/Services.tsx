import { Code, Globe, Smartphone, BarChart3, Cloud, Palette } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "I build clean, responsive websites and product interfaces with React, Vue, Next.js, Nuxt.js, and Tailwind CSS. I focus on clear UI, fast loading, and layouts that help users take action.",
    icon: Globe,
  },
  {
    title: "Web Development",
    desc: "I convert ideas into full web applications with dashboards, forms, authentication, databases, reports, and deployment. I move quickly across frontend and backend work.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    desc: "I develop cross-platform mobile apps with Flutter and React Native, connecting them to high-performance APIs for a seamless user experience.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h5 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
            Services
          </h5>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Can I Do For You?
          </h2>
          <div className="h-1.5 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="p-10 rounded-2xl bg-background border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
