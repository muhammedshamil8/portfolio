export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  link: string;
  github?: string | string[];
  appLink?: string;
  badges: { text: string; color: string }[];
  rank?: number;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "C-Zone Management System",
    category: "Software Systems",
    description: "Built a full-scale event management system handling registrations, results, and admin workflows for 100+ colleges.",
    detailedDescription: "Implemented hall ticket generation, live score updates, and real-time result publishing with TV display. Used across 100+ colleges; replaced manual processes with a centralized digital platform.",
    image: "/images/portfolio/czone.png",
    github: [
      "https://github.com/connectemea/gloryboard-admin-panel",
      "https://github.com/connectemea/kalama"
    ],
    link: "https://czone.connectemea.in",
    badges: [
      { text: "React", color: "blue" },
      { text: "Node.js", color: "green" },
      { text: "MongoDB", color: "emerald" },
      { text: "shadcn/ui", color: "zinc" }
    ],
    rank: 1
  },
  {
    id: "02",
    title: "EMEAHub",
    category: "Web Applications",
    description: "Platform for managing and accessing academic resources with role-based access.",
    detailedDescription: "Implemented content upload, verification workflows, and search functionality. Developed API-integrated UI for structured content management.",
    image: "/images/portfolio/emeahub.png",
    link: "https://emeahub.vercel.app",
    github: "https://github.com/muhammedshamil8/EmeaHub",
    badges: [
      { text: "React", color: "blue" },
      { text: "Laravel", color: "red" },
      { text: "MySQL", color: "orange" }
    ],
    rank: 2
  },
  {
    id: "03",
    title: "Institutional Admission System",
    category: "Software Systems",
    description: "Enterprise-grade PHP admission engine for higher secondary institutions.",
    detailedDescription: "A high-performance PHP-based admission system designed for higher secondary institutions. The platform manages the full digital transformation of the admission process, covering online multi-step applications, automated document verification workflows, integrated payment gateway support, and a complex seat allocation algorithm based on institutional quotas.",
    image: "/images/portfolio/iqac.jpeg",
    images: ["/images/portfolio/iqac.jpeg", "/images/portfolio/studentprofile.jpeg"],
    link: "https://hss.ptm.org",
    badges: [
      { text: "PHP", color: "blue" },
      { text: "MySQL", color: "green" },
      { text: "Payment", color: "pink" }
    ],
    rank: 3
  },
  {
    id: "04",
    title: "Task Management Suite",
    category: "Web Applications",
    description: "A centralized platform for tracking developer productivity and institutional task progress.",
    detailedDescription: "Next-generation task management system featuring real-time collaborative workspaces, automated deadline notifications, and comprehensive performance analytics. Built with a focus on high-velocity team orchestration.",
    image: "/images/portfolio/task-managment.png",
    images: ["/images/portfolio/task-managment.png", "/images/portfolio/courseoutline.png"],
    link: "https://tasks.shamil.dev",
    badges: [
      { text: "Next.js", color: "blue" },
      { text: "Node.js", color: "indigo" },
      { text: "PostgreSQL", color: "cyan" }
    ],
    rank: 4
  },
  {
    id: "05",
    title: "BuildEMEA Event Platform",
    category: "Web Applications",
    description: "Official event management and registration portal for the BuildEMEA tech conference.",
    image: "/images/portfolio/buildemea-event.jpeg",
    images: ["/images/portfolio/buildemea-event.jpeg"],
    link: "https://buildemea.org",
    badges: [
      { text: "Next.js", color: "blue" },
      { text: "Tailwind CSS", color: "pink" },
      { text: "Supabase", color: "emerald" }
    ],
    rank: 5
  },
  {
    id: "06",
    title: "Kalart Creative Hub",
    category: "Mobile Applications",
    description: "A creative portfolio and marketplace platform for local artists to showcase and sell their digital assets.",
    image: "/images/portfolio/kalart.jpeg",
    link: "https://kalart.gallery",
    badges: [
      { text: "Flutter", color: "blue" },
      { text: "Dart", color: "cyan" }
    ],
    rank: 6
  }
];
