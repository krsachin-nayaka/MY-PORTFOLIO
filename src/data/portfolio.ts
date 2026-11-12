export interface PersonalInfo {
  name: string;
  tagline: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  bioIntro: string;
  isOpenToWork: boolean;
  statusText: string;
  resumeUrl: string;
  photoUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  scoreLabel: string;
  score: string;
  details?: string[];
}

export interface SkillCategory {
  name: string;
  categoryKey: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string; // Configurable: replace with repo link
  demoUrl?: string;   // Configurable: replace with live demo link
  architectureNote?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string; // Configurable verification URL
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "K R SACHIN",
    title: "Python Developer | AI/ML Enthusiast | Backend Developer",
    subtitle: "Python Developer | AI/ML Enthusiast",
    tagline: "I build practical software solutions, backend applications, and intelligent systems using Python, data analytics, and Machine Learning.",
    email: "sachinnayaka2602@gmail.com",
    phone: "+91 9663089300",
    location: "Bengaluru, Karnataka, India",
    github: "https://github.com/krsachin-nayaka",
    linkedin: "https://www.linkedin.com/in/krsachin01",
    isOpenToWork: true,
    statusText: "Open to Opportunities",
    resumeUrl: "/resume.pdf",
    photoUrl: "/profile.jpeg",
    bioIntro:
      "Computer Science Engineering student with a strong foundation in Python, SQL, DBMS, Operating Systems, Computer Networks, backend development, data analytics, and Machine Learning. Interested in building practical software applications, intelligent systems, backend services, and data-driven solutions.",
  } as PersonalInfo,

  about: {
    heading: "About Me",
    paragraphs: [
      "I am K R Sachin, a Computer Science Engineering student at New Horizon College of Engineering.",
      "I have a strong foundation in Python programming, SQL, DBMS, and core computer science concepts.",
      "My interests include backend development, Machine Learning, data analytics, and building real-world software applications.",
      "I enjoy understanding how systems work, solving technical problems, and continuously improving my development skills.",
      "My goal is to become an industry-ready software and AI/ML engineer by combining strong programming fundamentals with practical engineering experience.",
    ],
    keyFacts: [
      { label: "Education", value: "B.E. Computer Science Engineering" },
      { label: "College", value: "New Horizon College of Engineering" },
      { label: "CGPA", value: "8.33" },
      { label: "Graduation", value: "2027 (Expected)" },
      { label: "Primary Language", value: "Python" },
      { label: "Focus", value: "Backend Development and AI/ML" },
    ],
    interests: [
      "Backend Architecture",
      "Machine Learning Systems",
      "Data Analytics & Pipelines",
      "Strength Training",
      "Team Sports",
      "Continuous Learning",
    ],
  },

  skills: [
    {
      name: "Programming",
      categoryKey: "programming",
      iconName: "Code2",
      skills: ["Python", "C++"],
    },
    {
      name: "Backend Development",
      categoryKey: "backend",
      iconName: "Server",
      skills: ["Flask", "FastAPI"],
    },
    {
      name: "Data Analysis & Machine Learning",
      categoryKey: "data_ml",
      iconName: "Cpu",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Power BI",
        "Machine Learning",
        "Scikit-learn",
      ],
    },
    {
      name: "Database Systems",
      categoryKey: "database",
      iconName: "Database",
      skills: ["MySQL", "SQL", "DBMS"],
    },
    {
      name: "Emerging Technologies",
      categoryKey: "emerging",
      iconName: "Sparkles",
      skills: ["Internet of Things (IoT)", "SAP Generative AI"],
    },
    {
      name: "Web Fundamentals",
      categoryKey: "web",
      iconName: "Globe",
      skills: ["HTML", "CSS"],
    },
    {
      name: "Developer Tools",
      categoryKey: "tools",
      iconName: "Wrench",
      skills: ["Git", "GitHub", "VS Code", "Web Scraping"],
    },
    {
      name: "Computer Science Fundamentals",
      categoryKey: "cs_fundamentals",
      iconName: "Layers",
      skills: [
        "Operating Systems",
        "Computer Networks",
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "waste-management",
      title: "Smart Waste Management System with Route Optimization",
      category: "AI/ML & IoT Solution",
      description:
        "Developed a Machine Learning-based waste management system to predict waste bin fill levels and optimize collection routes using data analysis to support operational decisions.",
      features: [
        "Waste fill-level prediction models",
        "Real-time monitoring dashboard",
        "Flask web application with responsive UI",
        "SQL database integration for telemetry storage",
        "Automated exception alerts for overflow states",
        "Route optimization logic minimizing travel distance",
        "Operational efficiency & fuel footprint improvements",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Flask",
        "SQL",
        "Data Analysis",
        "IoT",
      ],
      image: "/src/assets/images/waste_route_opt_1794494067778.jpg",
      imageAlt: "Smart Waste Management and Route Optimization Architecture",
      githubUrl: "https://github.com/krsachin-nayaka",
      demoUrl: undefined, // Configurable: add live deployment URL when available
      architectureNote:
        "Predictive fill models feeding dynamic shortest-path routing algorithm to streamline collection fleet logistics.",
    },
    {
      id: "price-tracker",
      title: "Automated Price Tracker and Notifier",
      category: "Automation & Data Analytics",
      description:
        "Developed a Python-based automated price tracking system to monitor product prices from e-commerce websites using web scraping.",
      features: [
        "Automated product price monitoring engine",
        "Scheduled background tracking jobs",
        "Rule-based automated price-drop notifications",
        "Historical price storage in relational database",
        "Price trend analysis and variance reporting",
        "Database integration with clean schema",
      ],
      technologies: ["Python", "Web Scraping", "SQL", "Automation"],
      image: "/src/assets/images/price_tracker_ui_1794494069034.jpg",
      imageAlt: "Automated Price Tracker and Notifier Dashboard",
      githubUrl: "https://github.com/krsachin-nayaka",
      demoUrl: undefined, // Configurable: add live deployment URL when available
      architectureNote:
        "Headless scraper running periodic cron cycles with price threshold evaluation and historical delta logging.",
    },
  ] as ProjectItem[],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "New Horizon College of Engineering",
      location: "Bengaluru, Karnataka",
      period: "2023 – 2027 (Expected)",
      scoreLabel: "CGPA",
      score: "8.33",
      details: [
        "Strong focus on core engineering: Data Structures & Algorithms, Operating Systems, Computer Networks, and Database Systems.",
        "Hands-on project work in Python, backend development, and applied Machine Learning.",
      ],
    },
    {
      degree: "XII Standard",
      institution: "DR TF Boys PU College",
      location: "Davanagere, Karnataka",
      period: "2023",
      scoreLabel: "Score",
      score: "90%",
      details: [
        "Department of Pre-University Education, Karnataka.",
        "Strong analytical base in Mathematics, Physics, and foundational sciences.",
      ],
    },
    {
      degree: "X Standard",
      institution: "Sri Vinayaka Education Trust High School",
      location: "Davanagere, Karnataka",
      period: "2021",
      scoreLabel: "Score",
      score: "74%",
      details: [
        "Karnataka Secondary Education Examination Board.",
        "Active engagement in academic, sports, and team leadership activities.",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "sap-genai",
      title: "SAP Certified – SAP Generative AI Developer",
      issuer: "SAP",
      date: "August 2026",
      credentialUrl: undefined, // Configurable: replace with verification link
    },
    {
      id: "ccna",
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "May 2026",
      credentialUrl: undefined,
    },
    {
      id: "nptel-iot",
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      date: "January – April 2026",
      credentialUrl: undefined,
    },
    {
      id: "git-training",
      title: "Git Training",
      issuer: "IIT Bombay Spoken Tutorial",
      date: "November 2025",
      credentialUrl: undefined,
    },
    {
      id: "python-ml",
      title: "Python for Machine Learning",
      issuer: "IIT Bombay Spoken Tutorial",
      date: "May 2025",
      credentialUrl: undefined,
    },
  ] as CertificationItem[],
};
