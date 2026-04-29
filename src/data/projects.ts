export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  link: string;
  badges: { text: string; color: string }[];
  rank?: number;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Institutional Admission System",
    category: "enterprise",
    description: "Enterprise-grade PHP admission engine for higher secondary institutions. It automates the entire student lifecycle from application to final seat allocation.",
    detailedDescription: "A high-performance PHP-based admission system designed for higher secondary institutions. The platform manages the full digital transformation of the admission process, covering online multi-step applications, automated document verification workflows, integrated payment gateway support, and a complex seat allocation algorithm based on institutional quotas.",
    image: "/images/portfolio/iqac.jpeg",
    images: ["/images/portfolio/iqac.jpeg", "/images/portfolio/studentprofile.jpeg"],
    link: "https://hss.ptm.org",
    badges: [
      { text: "PHP/MySQL", color: "blue" },
      { text: "Payment Integration", color: "green" },
      { text: "Workflow Automation", color: "pink" }
    ],
    rank: 1
  },
  {
    id: "02",
    title: "Task Management Suite",
    category: "production",
    description: "A centralized platform for tracking developer productivity and institutional task progress.",
    detailedDescription: "Next-generation task management system featuring real-time collaborative workspaces, automated deadline notifications, and comprehensive performance analytics. Built with a focus on high-velocity team orchestration.",
    image: "/images/portfolio/task-managment.png",
    images: ["/images/portfolio/task-managment.png", "/images/portfolio/courseoutline.png"],
    link: "https://tasks.shamil.dev",
    badges: [
      { text: "React/Next.js", color: "blue" },
      { text: "Node.js", color: "indigo" },
      { text: "PostgreSQL", color: "cyan" }
    ],
    rank: 2
  },
  {
    id: "03",
    title: "BuildEMEA Event Platform",
    category: "community",
    description: "Official event management and registration portal for the BuildEMEA tech conference.",
    image: "/images/portfolio/buildemea-event.jpeg",
    images: ["/images/portfolio/buildemea-event.jpeg"],
    link: "https://buildemea.org",
    badges: [
      { text: "Next.js", color: "blue" },
      { text: "Tailwind CSS", color: "pink" },
      { text: "Supabase", color: "emerald" }
    ],
    rank: 3
  },
  {
    id: "04",
    title: "Kalart Creative Hub",
    category: "personal",
    description: "A creative portfolio and marketplace platform for local artists to showcase and sell their digital assets.",
    image: "/images/portfolio/kalart.jpeg",
    link: "https://kalart.gallery",
    badges: [
      { text: "Flutter", color: "blue" },
      { text: "Dart", color: "cyan" }
    ],
    rank: 4
  },
  {
    id: "05",
    title: "Media Distribution Engine",
    category: "experiment",
    description: "High-performance video streaming clone optimized for decentralized content delivery.",
    image: "/images/portfolio/youtube-clone.png",
    link: "https://vibe.shamil.dev",
    badges: [
      { text: "React", color: "red" },
      { text: "Firebase", color: "amber" }
    ],
    rank: 5
  }
];
