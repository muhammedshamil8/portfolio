export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  image?: string;
  images?: string[];
  link?: string;
  github?: string | string[];
  appLink?: string;
  links?: { label: string; href: string }[];
  badges: { text: string; color: string }[];
  rank?: number;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "C-Zone Management System",
    category: "Real-world",
    description: "Full-scale event management system handling registrations and results for 100+ colleges.",
    detailedDescription: "Implemented hall ticket generation, live score updates, and real-time result publishing with TV display. Replaced manual processes with a centralized digital platform used across the Calicut University C-Zone festivals.",
    image: "/images/portfolio/czone.jpeg",
    links: [
      { label: "Production", href: "https://kalama.vercel.app" },
      // { label: "GitHub Admin", href: "https://github.com/connectemea/gloryboard-admin-panel" }
    ],
    badges: [
      { text: "React", color: "blue" },
      { text: "Node.js", color: "green" },
      { text: "Express", color: "gray" },
      { text: "shadcn/ui", color: "zinc" }
    ],
    rank: 1
  },
  {
    id: "02",
    title: "EMEAHub",
    category: "College",
    description: "Academic resource management platform with role-based access for students and faculty.",
    detailedDescription: "Final year project focused on streamlining academic content delivery. Features include automated verification workflows, global search, and a structured repository for previous year questions and notes.",
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
    title: "AmaniSamagrhm",
    category: "Freelance",
    description: "Comprehensive mobile application and admin ecosystem for resource management.",
    detailedDescription: "Developed a cross-platform mobile app using Flutter for end-users and a powerful React-based admin panel for operations. Powered by Supabase for real-time data sync and authentication.",
    image: "/images/portfolio/amani.png",
    links: [
      { label: "App", href: "https://play.google.com/store/apps/details?id=com.appletsolution.amanisamgraham" },
      { label: "Website", href: "https://amanisamgraham.blissapps.in/" }
    ],
    badges: [
      { text: "Flutter", color: "cyan" },
      { text: "React", color: "blue" },
      { text: "Supabase", color: "emerald" }
    ],
    rank: 3
  },
  {
    id: "04",
    title: "Zynkchat",
    category: "Personal",
    description: "High-performance real-time messaging application with end-to-end connectivity.",
    detailedDescription: "Built to explore low-latency communication. Features real-time typing indicators, online status, and group chat capabilities using Socket.io and Node.js.",
    github: "https://github.com/muhammedshamil8/ZynkChat",
    badges: [
      { text: "Flutter", color: "cyan" },
      { text: "Node.js", color: "green" },
      { text: "Socket.io", color: "white" }
    ],
    rank: 4
  },
  {
    id: "05",
    title: "Budroom",
    category: "Freelance",
    description: "Modern E-commerce platform with a focus on seamless user experience and performance.",
    detailedDescription: "Implemented using Nuxt 3 for optimal SEO and SSR performance. Utilized Ant Design for a professional and consistent UI component library.",
    link: "https://budroom.in",
    badges: [
      { text: "Nuxt 3", color: "emerald" },
      { text: "Vue", color: "green" },
      { text: "Ant Design", color: "blue" }
    ],
    rank: 5
  },
  {
    id: "06",
    title: "Admission Portal",
    category: "Freelance",
    description: "Digital admission engine for educational institutions with multi-step applications.",
    detailedDescription: "Automated the institutional admission process including form submission, document uploads, and status tracking. Built with React and Firebase for rapid deployment.",
    badges: [
      { text: "React", color: "blue" },
      { text: "Firebase", color: "orange" }
    ],
    rank: 6
  },
  {
    id: "07",
    title: "ConnectEMEA",
    category: "Community",
    image: "/images/portfolio/connect.jpeg",
    description: "Official community platform for networking and event coordination.",
    detailedDescription: "A central hub for community members to stay updated with latest news and events. Built using React and Firebase to handle real-time interactions.",
    link: "https://connectemea.in",
    badges: [
      { text: "React", color: "blue" },
      { text: "Firebase", color: "orange" }
    ],
    rank: 7
  },
  {
    id: "08",
    title: "IEDC EMEA",
    category: "Community",
    description: "Official portal for the Innovation and Entrepreneurship Development Cell.",
    detailedDescription: "Showcases startup initiatives and manages event registrations for aspiring entrepreneurs. Built with a focus on clean design and performance.",
    link: "https://iedc.emeacollege.ac.in",
    badges: [
      { text: "React", color: "blue" },
      { text: "Supabase", color: "emerald" }
    ],
    rank: 8
  },
  {
    id: "09",
    title: "RankersForum",
    category: "Freelance",
    description: "Educational forum and resource sharing platform for competitive exams.",
    detailedDescription: "Provides a structured environment for students to share resources and discuss topics. Optimized for mobile and desktop using Tailwind CSS.",
    badges: [
      { text: "React", color: "blue" },
      { text: "Tailwind CSS", color: "sky" }
    ],
    rank: 9
  },
  {
    id: "10",
    title: "Attendance Collection System",
    category: "Real-world",
    description: "Internal tool for automated attendance tracking and reporting.",
    detailedDescription: "Simplified the process of recording attendance across events. Built with a Node.js backend and a React frontend.",
    badges: [
      { text: "React", color: "blue" },
      { text: "Node.js", color: "green" },
      { text: "Firebase", color: "orange" }
    ],
    rank: 10
  },
  {
    id: "11",
    title: "Emerge",
    category: "College",
    image: "/images/portfolio/emergelap.jpeg",
    description: "Event management portal for large-scale college festivals.",
    detailedDescription: "Handled registrations and scheduling for numerous college events. Used Supabase for real-time updates during the festival.",
    badges: [
      { text: "React", color: "blue" },
      { text: "Supabase", color: "emerald" }
    ],
    rank: 11
  },
  {
    id: "16",
    title: "NSS Festival",
    category: "College",
    description: "Event management portal for large-scale college festivals.",
    detailedDescription: "Handled registrations and scheduling for numerous college events. Used Supabase for real-time updates during the festival.",
    badges: [
      { text: "React", color: "blue" },
      { text: "Supabase", color: "emerald" }
    ],
    rank: 16
  },
  {
    id: "12",
    title: "IQAC",
    category: "College",
    description: "Internal institutional portal for quality assurance and recruitment.",
    detailedDescription: "Managed institutional documentation for IQAC and handled external hiring workflows for college staff. Built with Laravel and React.",
    badges: [
      { text: "React", color: "blue" },
      { text: "Laravel", color: "red" }
    ],
    rank: 12
  },
  {
    id: "13",
    title: "Blockchain Drug Abuse",
    category: "Hackathon",
    description: "Award-winning solution using blockchain to track and prevent pharmaceutical abuse.",
    detailedDescription: "Winner of the national hackathon. Built using Solana for immutable tracking and a React Native Expo app for frontline access. Integrated Vector DB for advanced analytics.",
    link: "https://www.linkedin.com/posts/muhammed-shamil-65878227a_we-won-a-blockchain-hackathon-without-knowing-activity-7318853316749209601-7YeK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQaDSQB8zVgTENyjxOkLNFySH3zIEWmD3M",
    badges: [
      { text: "Solana", color: "purple" },
      { text: "React Native", color: "blue" },
      { text: "Supabase", color: "emerald" },
      { text: "Vector DB", color: "pink" }
    ],
    rank: 13
  },
  {
    id: "14",
    title: "BuildEMEA",
    category: "Community",
    image: "/images/portfolio/buildemea-event.jpeg",
    description: "Website for a community-led tech acceleration program.",
    detailedDescription: "Showcases program details and participant success stories. Built with Vue.js for a lightweight and reactive user interface.",
    link: "https://buildemea.connectemea.in",
    badges: [
      { text: "Vue.js", color: "green" },
      { text: "Vite", color: "purple" }
    ],
    rank: 14
  },
  {
    id: "15",
    title: "Kalart",
    category: "College",
    description: "The digital heartbeat of college arts festivals with live results.",
    image: "/images/portfolio/kalart.jpeg",
    detailedDescription: "Real-time leaderboard and event tracker for college arts. Utilized Airtable API for flexible data management and instant updates.",
    link: "https://kalart.vercel.app",
    badges: [
      { text: "React", color: "blue" },
      { text: "Airtable", color: "yellow" }
    ],
    rank: 15
  }
];
