export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  desc: string;
  details?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "Destinify",
    period: "December 2023 - December 2025",
    location: "Remote",
    desc: "Contributed to the development of a real-world e-commerce platform using Nuxt.js 3 and Vue.js 3. Worked primarily on the frontend, building core user interfaces and admin panel features with a focus on clean UI and usability.",
    details: [
      "Built admin, vendor, and public e-commerce panels using Vue 3, Nuxt 3, Ant Design and Tailwind",
      "Developed reusable component systems for dashboards and landing pages",
      "Integrated REST APIs with optimized rendering and state management",
      "Implemented loading states, error handling, and responsive UI"
    ]
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Freelance",
    period: "2023 – Present",
    desc: "Delivered 8+ projects including admin dashboards and event management systems. Built systems with authentication, role-based access control, and structured data workflows.",
    details: [
      "Developed full-stack applications using React, Node.js, Next.js, TypeScript, Laravel, and Firebase/Supabase, MongoDB"
    ]
  },
  {
    title: "Convener",
    company: "Connect Emea",
    period: "October 2023 - February 2026",
    desc: "Leading technical projects and community initiatives. Built and maintained multiple websites using React, Next.js, and Vue.js, while mentoring students, managing teams, and organizing technical events.",
    details: [
      "Organized workshops and hackathons, handling coordination and execution",
      "Conducted sessions on Git & GitHub and full-stack development"
    ]
  },
  {
    title: "CTO",
    company: "IEDC EMEA College",
    period: "2023 - 2024",
    desc: "Led development of internal platforms and coordinated technical teams. Mentored students and conducted technical sessions.",
    details: [
      "Led development of internal platforms and coordinated technical teams",
      "Mentored students and conducted technical sessions"
    ]
  },
  {
    title: "Campus Lead",
    company: "TinkerHub",
    period: "June 2023 – June 2024",
    desc: "Coordinating technical activities and student initiatives. Organized workshops and events, guided peers in learning development skills, and acted as the bridge between the campus community and the TinkerHub network.",
    details: [
      "Led community initiatives through technical sessions and peer learning",
      "Organized workshops on development tools and projects"
    ]
  }
];
