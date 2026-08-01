/**
 * Portfolio Constants
 * Centralized data for contact, navigation, experience, projects, skills, and certifications
 */

export const CONTACT = {
  name: "Abdul Rafay",
  phone: "+92 309 858 9583",
  email: "abdulrafayb88@gmail.com",
  github: "abdulrafay7777",
  linkedin: "abdulrafaydev",
};

export const NAV_LINKS = ["About", "Experience", "Education", "Projects", "Skills", "Contact"];

export const EXPERIENCE = [
  {
    org: "NETSOL Technologies Pakistan",
    roles: [
      {
        title: "AI/ML Trainee",
        date: "Feb 2026 - Jun 2026",
        current: true,
        bullets: [
          "Engineered end-to-end ML pipelines, optimizing feature engineering and maximizing model performance.",
          "Architected advanced deep learning models, leveraging CNNs for vision and RNNs/LSTMs for sequence modeling.",
          "Engineered production-grade RAG pipelines and stateful multi-agent workflows using GenAI frameworks.",
        ],
      },
      {
        title: "AI/ML Intern",
        date: "Jul 2025 - Jan 2026",
        current: false,
        bullets: [
          "Engineered a production-grade RAG pipeline automating scraping and vectorizing of NETSOL enterprise data.",
          "Architected stateful multi-agent workflows automating complex query reasoning and interactive decisions.",
          "Built a Text-to-SQL AI agent for natural language database querying.",
        ],
      },
    ],
  },
  {
    org: "Xeltec",
    roles: [
      {
        title: "Python Developer",
        date: "Aug 2025 - Sep 2025",
        current: false,
        bullets: [
          "Engineered production FastAPI applications, driving reliability through debugging and performance tuning.",
          "Collaborated cross-functionally to deliver high-impact features that met critical client requirements.",
          "Gained hands-on experience with RESTful API design and code review in an agile environment.",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Lahore Garrison University",
    date: "2022 - 2026",
    current: false,
    details: [
      "Relevant Coursework: Data Structures, Object Oriented Programming, Algorithms, Machine Learning, Database Systems, Software Engineering",
      "Final Year Project: Argus - EDR System using Provenance Graphs",
    ],
  },
];

export const RESEARCH = [
  {
    org: "Lahore Garrison University",
    roles: [
      {
        title: "Undergraduate Research — EcoFed-Sepsis",
        date: "Dec 2025 - Jan 2026",
        current: false,
        bullets: [
          "Conducted distributed federated learning for privacy-preserving sepsis detection on low-resource edge devices.",
          "Benchmarked five ML algorithms, using a SMOTE pipeline to resolve severe class imbalance.",
          "Optimized an explainable XGBoost model, achieving a 0.65 F1-score and a 0.99 AUC.",
        ],
      },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Argus",
    tag: "Final Year Project",
    desc: "Legacy signature-based defenses leave enterprises blind. Argus is a next-gen EDR platform that outsmarts attackers using graph ML and Sysmon telemetry. It autonomously isolates threats in real time while streaming live attack chains to an interactive SOC dashboard.",
    stack: ["Python", "FastAPI", "React.js", "PostgreSQL", "Sysmon", "D3.js"],
  },
  {
    name: "Slack-Integrated Multi-Agent AI Consultant",
    tag: "Multi-Agent System",
    desc: "This multi-agent AI consultant sits directly in Slack, transforming raw discovery calls into polished, data-backed proposals in minutes. Powered by LangGraph and a hybrid RAG pipeline, it autonomously analyzes client needs and refines drafts through interactive feedback.",
    stack: ["Python", "LangChain", "LangGraph", "Groq", "Qdrant", "Sentence-Transformers"],
  },
  {
    name: "Multi-Agent Workspace Assistant",
    tag: "Autonomous Agents",
    desc: "This autonomous multi-agent assistant translates plain English into instant action. From executing complex web research to booking calendar meetings via GCP OAuth 2.0, it reasons through workflows at machine speed to multiply your daily productivity.",
    stack: ["Python", "LangChain", "LangGraph", "Apify", "GCP", "Google Calendar API"],
  },
];

export const SKILLS = [
  { 
    label: "Languages", 
    items: ["Python", "JavaScript", "SQL"] 
  },
  { 
    label: "Frameworks & Libraries", 
    items: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "LangChain", "LangGraph", "FastAPI", "React.js"] 
  },
  { 
    label: "Databases", 
    items: ["PostgreSQL", "MongoDB", "ChromaDB", "Qdrant"] 
  },
  { 
    label: "Cloud Platforms", 
    items: ["GCP", "Vercel"] 
  },
  { 
    label: "Developer Tools", 
    items: ["Git", "GitHub", "VS Code", "Postman"] 
  },
];

export const CERTS = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2026", url: "https://coursera.org/share/46b444f0bac1d565052f69105165a85d" },
  { name: "SQL for Data Science", issuer: "GreatLearning", year: "2024", url: "https://www.mygreatlearning.com/certificate/ETWTDGDU" },
  { name: "CodeRush ML Tournament (Hackathon)", issuer: "ITU Lahore", year: "2026", url: "https://drive.google.com/file/d/1f40w3oEGTIzVxJyF3v73gS4d5I2y_WIG/view" },
];

export const GRAPH_LABELS = [
  "LangGraph", "RAG", "FastAPI", "Qdrant", "XGBoost", "PyTorch",
  "Multi-Agent", "Sysmon", "GCP", "PostgreSQL", "React", "SMOTE",
];

export const THEME_COLORS = {
  bg: "#090C12",
  bgAlt: "#0D121B",
  glassBg: "rgba(255,255,255,0.035)",
  glassBorder: "rgba(255,255,255,0.09)",
  glassBorderHover: "rgba(94,234,212,0.35)",
  text: "#E8EDF4",
  textMuted: "#8996A9",
  textDim: "#5B6579",
  cyan: "#5EEAD4",
  violet: "#A78BFA",
};

export const FONTS = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};
