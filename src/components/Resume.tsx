const experience = [
  {
    title: "Software Development Intern",
    company: "Destinify",
    period: "December 2023 - December 2025",
    desc: "Contributed to the development of a real-world e-commerce platform using Nuxt.js 3 and Vue.js 3. Worked primarily on the frontend, building core user interfaces and admin panel features with a focus on clean UI and usability.",
  },
  {
    title: "Convener",
    company: "Connect Emea",
    period: "October 2023 - February 2026",
    desc: "Leading technical projects and community initiatives. Built and maintained multiple websites using React, Next.js, and Vue.js, while mentoring students, managing teams, and organizing technical events.",
  },
  {
    title: "Campus Lead",
    company: "TinkerHub",
    period: "June 2023 – June 2024",
    desc: "Coordinating technical activities and student initiatives. Organized workshops and events, guided peers in learning development skills, and acted as the bridge between the campus community and the TinkerHub network.",
  },
];

const education = [
  {
    degree: "Bachelor's Degree",
    school: "EMEA Kondotti (Calicut University)",
    period: "August 2023 - April 2026",
    desc: "Bachelor of Science in Computer Science with complementary Mathematics and Statistics.",
  },
  {
    degree: "Higher Secondary",
    school: "Farook College",
    period: "June 2021 - March 2023",
    desc: "Completed Higher Secondary in Computer Science with 96% marks.",
  },
  {
    degree: "High School",
    school: "Markaz Karanthur (SSLC)",
    period: "June 2019 - March 2021",
    desc: "Completed High School with full A+ marks.",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-card/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h5 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
            Resume
          </h5>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Work & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm">💼</span>
              Work Experience
            </h3>
            <div className="space-y-12 border-l border-white/10 ml-4 pl-8 relative">
              {experience.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <span className="text-primary text-xs font-bold uppercase tracking-tighter mb-2 block italic">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-muted-foreground font-semibold mb-4">{item.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm">🎓</span>
              Education
            </h3>
            <div className="space-y-12 border-l border-white/10 ml-4 pl-8 relative">
              {education.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-background" />
                  <span className="text-primary text-xs font-bold uppercase tracking-tighter mb-2 block italic">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                  <p className="text-muted-foreground font-semibold mb-4">{item.school}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
