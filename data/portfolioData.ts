export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  goals: string[];
  role: string;
  technologies: string[];
  features: string[];
  decisions: string[];
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
  isLive: boolean;
  type: "Web Application" | "Full-Stack System" | "Desktop Software" | "AI / NLP Solution";
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  fullName: "M.R. Aakash",
  shortName: "Aakash",
  title: "Full-Stack Developer | Information Technology Undergraduate",
  roleHeadline: "Building Digital Experiences That Solve Real Problems.",
  location: "Dindigul, Tamil Nadu, India",
  email: "mraakashramraj@gmai.com",
  github: "https://github.com/mraakashramraj-star",
  portfolioRepo: "https://github.com/mraakashramraj-star/port",
  linkedin: "https://www.linkedin.com/in/aakash-m-r-4080942a2",
  resumePath: "/Aakash-MR-Resume.pdf",
  bioHeadline: "Curious by nature. Building with purpose.",
  bioParagraph1:
    "I am M.R. Aakash, an Information Technology undergraduate at PSNA College of Engineering and Technology. My interests include full-stack web development, database-driven applications, user interface development, and practical software engineering.",
  bioParagraph2:
    "Through academic projects, personal development work, and internship experience, I have gained exposure to building web applications, working with databases, troubleshooting software issues, and improving application functionality.",
  bioParagraph3:
    "I enjoy learning new technologies, exploring creative UI/UX approaches, and building software that makes everyday tasks easier. My goal is to continue developing my technical abilities and contribute to meaningful software products as a developer.",
  currentEducation: {
    degree: "Bachelor of Technology — Information Technology",
    institution: "PSNA College of Engineering and Technology",
    period: "2023–2027",
    cgpa: "7.64 / 10",
    status: "Undergraduate",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, scripting, and application logic",
    skills: [
      { name: "Python", icon: "python", highlight: true },
      { name: "Java", icon: "java", highlight: true },
      { name: "JavaScript", icon: "javascript", highlight: true },
    ],
  },
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and high-performance interfaces",
    skills: [
      { name: "React", icon: "react", highlight: true },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Responsive Web Design", icon: "responsive" },
    ],
  },
  {
    title: "Backend Development",
    description: "Architecting reliable APIs, servers, and business logic",
    skills: [
      { name: "Node.js", icon: "nodejs", highlight: true },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "api", highlight: true },
      { name: "FastAPI", icon: "fastapi", highlight: true },
    ],
  },
  {
    title: "Databases",
    description: "Relational and document storage systems with structured indexing",
    skills: [
      { name: "MongoDB", icon: "mongodb", highlight: true },
      { name: "MySQL", icon: "mysql", highlight: true },
      { name: "SQL", icon: "sql" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    title: "Data and AI",
    description: "Data analysis pipelines, sentiment classification, and machine learning models",
    skills: [
      { name: "NumPy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
      { name: "Natural Language Processing", icon: "nlp", highlight: true },
      { name: "Hugging Face tools", icon: "huggingface", highlight: true },
      { name: "Sentiment Analysis", icon: "sentiment" },
    ],
  },
  {
    title: "Tools and Core Concepts",
    description: "Engineering practices, debugging workflows, and fundamental algorithms",
    skills: [
      { name: "Git", icon: "git", highlight: true },
      { name: "GitHub", icon: "github", highlight: true },
      { name: "Data Structures and Algorithms", icon: "dsa" },
      { name: "Debugging", icon: "debugging" },
      { name: "Software Testing", icon: "testing" },
      { name: "Database Design", icon: "dbdesign" },
    ],
  },
];

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Developer Intern",
    company: "AMI HUB IT Services",
    location: "Madurai, Tamil Nadu",
    period: "June 2026 – July 2026",
    technologies: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
    bullets: [
      "Worked on web application development using Java, HTML, CSS, JavaScript, and SQL.",
      "Assisted in developing and improving application functionality.",
      "Supported debugging, testing, and identifying software issues.",
      "Contributed to improving application reliability and performance.",
      "Gained practical exposure to development workflows and problem-solving.",
    ],
  },
];

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "econsult-ai",
    title: "AI-Powered E-Consultation Sentiment Analysis System",
    category: "Artificial Intelligence / NLP / Web Application",
    type: "AI / NLP Solution",
    tagline: "NLP-driven sentiment analysis & visualization platform for clinical consultations.",
    description:
      "An application designed to analyze consultation-related text and identify sentiment patterns. The system presents analysis results through an accessible interface with visualization and text-analysis features.",
    longDescription:
      "The E-Consultation Sentiment Analysis System bridges machine learning and practical healthcare evaluation. By ingesting textual patient reviews and post-consultation feedback, the platform classifies sentiment polarity, generates insight charts, and stores records for medical workflow audits.",
    problem:
      "Healthcare practitioners and clinic coordinators receive large volumes of consultation feedback, making manual qualitative evaluation slow, inconsistent, and difficult to translate into actionable improvements.",
    goals: [
      "Automate consultation feedback ingestion and sentiment scoring.",
      "Provide visual representations of patient emotional tone.",
      "Enable instant bulk text analysis with persistent database records.",
      "Deliver an intuitive, responsive frontend paired with a modular Python API.",
    ],
    role: "Full-Stack & ML Implementation (Frontend UI, FastAPI backend, NLP pipeline integration)",
    technologies: ["Python", "FastAPI", "Hugging Face", "Streamlit", "SQLite", "JavaScript"],
    features: [
      "Bulk text analysis for processing multi-row consultation datasets.",
      "Sentiment classification (Positive, Neutral, Negative) using transformer pipelines.",
      "Visual representation of analysis results with distribution charts.",
      "Word-cloud visualization highlighting prevalent keywords and emotional indicators.",
      "Persistent storage of analysis records in SQLite for historical review.",
    ],
    decisions: [
      "Selected FastAPI for high-throughput asynchronous inference handling and automatic OpenAPI documentation.",
      "Employed Hugging Face NLP pipelines to achieve consistent classification accuracy on clinical text.",
      "Designed a clean decoupled frontend interface communicating with REST endpoints.",
    ],
    challenges: [
      "Handling ambiguous or mixed sentiments in healthcare feedback sentences: addressed by tuning preprocessing tokenization and thresholding.",
      "Maintaining low inference latency on web deployments: optimized through model caching and asynchronous request pooling.",
    ],
    liveUrl: "https://econsult-ai-frontend.onrender.com",
    githubUrl: "https://github.com/mraakashramraj-star/econsult-ai-frontend",
    isLive: true,
    accentColor: "#3b82f6",
  },
  {
    id: "smart-op-hospital",
    title: "Smart OP / Hospital Management System",
    category: "Healthcare / Full-Stack Application",
    type: "Full-Stack System",
    tagline: "Streamlining outpatient registration, doctor allocation, and medical queues.",
    description:
      "A healthcare management application focused on organizing hospital or outpatient workflows through a structured digital interface.",
    longDescription:
      "Smart OP is a full-stack hospital management application tailored to optimize outpatient check-in, token distribution, and consultation scheduling. Designed to eliminate crowded reception desks and manual paper logs, it provides patients and staff with a transparent, organized flow.",
    problem:
      "Hospital outpatient departments frequently suffer from chaotic front-desk registration, lost paper files, and unclear waiting times, leading to patient dissatisfaction and administrative fatigue.",
    goals: [
      "Digitize the outpatient intake pipeline from front desk to consulting room.",
      "Provide real-time token tracking to prevent waiting room confusion.",
      "Maintain centralized records accessible across hospital desks.",
      "Ensure an accessible, mobile-friendly interface for hospital personnel.",
    ],
    role: "Lead Developer (Architecture, UI design, front-end implementation, data models)",
    technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "Responsive Web Design"],
    features: [
      "Structured patient intake and outpatient record generation.",
      "Dynamic token allocation and department routing.",
      "Doctor and consultation schedule visibility.",
      "Clear status dashboards for receptionists and attending staff.",
      "Responsive interface optimized for clinic tablets and desktop screens.",
    ],
    decisions: [
      "Focused on rapid, zero-lag UI updates using lightweight native JavaScript to perform reliably on clinic hardware.",
      "Structured normalized MySQL tables for outpatient entries, doctors, and visit timestamps.",
      "Implemented clear visual feedback states for immediate status confirmation at the counter.",
    ],
    challenges: [
      "Ensuring high accessibility for staff with minimal digital training: solved through high-contrast typography, large button hit areas, and minimal input steps.",
    ],
    liveUrl: "https://smart-op-hospital-system.vercel.app",
    githubUrl: "https://github.com/mraakashramraj-star/smart-op-hospital-system",
    isLive: true,
    accentColor: "#10b981",
  },
  {
    id: "cureconnect",
    title: "CureConnect — Healthcare Appointment System",
    category: "Healthcare / Web Application",
    type: "Web Application",
    tagline: "Organized appointment scheduling and doctor directory for modern healthcare.",
    description:
      "A healthcare-focused application intended to make appointment-related interactions more organized and accessible through a digital interface.",
    longDescription:
      "CureConnect simplifies the process of finding healthcare providers and scheduling appointments. Designed with patient privacy and ease of navigation in mind, it provides searchable specialist directories, real-time time-slot selection, and automated appointment confirmations.",
    problem:
      "Patients struggle to find available specialists quickly and often rely on repeated phone calls to secure an appointment, creating friction for both patients and medical clinics.",
    goals: [
      "Provide a clean, searchable doctor catalog categorized by specialty.",
      "Enable seamless booking with instant slot confirmation.",
      "Organize patient appointment history in a clean dashboard.",
      "Establish a robust data model for clinic schedules.",
    ],
    role: "Full-Stack Web Developer (Conceptualization, interface architecture, database schema)",
    technologies: ["React", "JavaScript", "Node.js", "REST APIs", "Database Design"],
    features: [
      "Specialist search filter by department (Cardiology, Pediatrics, General Medicine).",
      "Interactive time slot picker with live availability indicators.",
      "Patient booking management and upcoming visit reminders.",
      "Responsive layout suitable for both smartphones and tablets.",
    ],
    decisions: [
      "Adopted a component-driven React architecture to manage complex scheduling states cleanly.",
      "Decoupled booking validation into dedicated API routes to prevent double-booking collisions.",
    ],
    challenges: [
      "Synchronizing schedule conflicts when multiple patients view the same slot: addressed with optimistic reservation locking.",
    ],
    isLive: false,
    accentColor: "#8b5cf6",
  },
  {
    id: "batron-gym",
    title: "BATRON Gym Management System",
    category: "Desktop Software / Business Management",
    type: "Desktop Software",
    tagline: "Desktop client for gym membership tracking, renewal alerts, and customer records.",
    description:
      "A gym management application designed to help organize membership information, monitor membership expirations, and support routine membership-management workflows.",
    longDescription:
      "BATRON is a desktop-oriented membership management solution crafted for fitness centers and gyms. It provides front-desk managers with quick member lookups, status filtering, and automated alerts for memberships nearing their expiration dates.",
    problem:
      "Gym owners commonly track subscriptions in informal notebooks or disconnected spreadsheets, leading to missed renewal fees, expired members entering unmonitored, and inconsistent attendance logs.",
    goals: [
      "Centralize member profiles, plan tiers, and payment dates.",
      "Provide instant filtering for expired and expiring memberships.",
      "Send or surface renewal reminders to ensure steady business revenue.",
      "Function as a dependable offline-first desktop tool for daily counter operations.",
    ],
    role: "Desktop Application Developer (UI architecture, local database integration, business logic)",
    technologies: ["JavaScript", "HTML5", "CSS3", "Desktop Architecture", "SQLite / Local Storage"],
    features: [
      "Membership status views with real-time active / pending / expired badges.",
      "Expired membership filtering for targeted follow-up communication.",
      "Expiry-related alerts and reminder notifications.",
      "Member search by phone number, name, or membership ID.",
      "Clean, high-contrast dark dashboard designed for counter monitors.",
    ],
    decisions: [
      "Designed an offline-first data model so reception operations continue uninterrupted during internet outages.",
      "Used a keyboard-friendly layout enabling gym staff to register new visitors in under 30 seconds.",
    ],
    challenges: [
      "Accurate date arithmetic across variable month lengths and leap years: implemented standardized UTC timestamp calculations.",
    ],
    githubUrl: "https://github.com/mraakashramraj-star/BATRON",
    isLive: false,
    accentColor: "#f59e0b",
  },
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Technology — Information Technology",
  institution: "PSNA College of Engineering and Technology",
  location: "Dindigul, Tamil Nadu",
  period: "2023–2027",
  cgpa: "7.64 / 10",
  status: "Undergraduate",
  highlights: [
    "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, and Web Engineering.",
    "Active participant in technical symposiums, hackathons, and software development challenges.",
    "Maintained strong academic standing (CGPA 7.64) while building real-world projects and completing developer internships.",
  ],
};

export const CERTIFICATIONS_DATA = [
  {
    title: "MongoDB Basics",
    issuer: "MongoDB",
    type: "Certification",
    skills: ["NoSQL", "Document Modeling", "CRUD Operations", "Aggregation"],
    accent: "#10b981",
  },
  {
    title: "Cisco CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    type: "Certification",
    skills: ["IP Addressing", "Subnetting", "Network Protocols", "Routing Basics"],
    accent: "#0ea5e9",
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "Smart India Hackathon 2025",
    role: "Participant",
    organization: "Ministry of Education / AICTE",
    description:
      "Selected to participate in the nationwide Smart India Hackathon 2025, collaborating in a team-based engineering environment to address complex real-world challenges through technology.",
    badge: "National Hackathon",
    accent: "#f59e0b",
  },
];

export const PROCESS_STAGES = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the problem, requirements, users, and expected outcome.",
    details:
      "Deep dive into user pain points, define technical constraints, map core user journeys, and establish measurable success criteria.",
  },
  {
    number: "02",
    title: "Design",
    description: "Plan the interface, application structure, user journey, and data flow.",
    details:
      "Architect relational schemas, design component hierarchies, plan REST/API contracts, and ensure ergonomic UI layouts.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Implement the application using appropriate technologies and reusable components.",
    details:
      "Write clean, modular code with strict TypeScript types, reusable UI systems, robust error boundaries, and efficient state management.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description: "Test functionality, identify issues, refine usability, and improve reliability.",
    details:
      "Conduct end-to-end user testing, debug edge cases, optimize render cycles, audit accessibility, and polish responsive breakpoints.",
  },
];
