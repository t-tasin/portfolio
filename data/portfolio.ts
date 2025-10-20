export const personalInfo = {
  name: "KM Khalid Saifullah",
  nickname: "Tasin",
  title: "Software Engineer",
  location: "Palo Alto, CA",
  email: "tsaifullah25@gmail.com",
  phone: "+1 (330) 462-9654",
  linkedin: "https://www.linkedin.com/in/k-tasin/",
  github: "https://github.com/t-tasin",
  portfolio: "https://tsaifullah.com",
  tagline: "A self-driven software engineer who thrives on solving problems and building solutions that make life easier, independently architecting, developing, and deploying production-ready enterprise platforms.",
};

export const about = {
  introduction:
    "I'm a software engineer passionate about building scalable, production-ready systems. I independently architected, developed, and deployed an enterprise-grade IT Service Management platform, demonstrating full-stack capabilities, system design thinking, and production operations experience.",
  highlights: [
    "Architected and deployed a microservices platform serving 100+ concurrent users",
    "Built 60+ RESTful APIs with <200ms average response time",
    "Achieved 99.9% uptime with comprehensive monitoring and disaster recovery",
    "Prototyped LLM-driven autonomous agents for 250,000+ workflows at Schneider Electric",
  ],
};

export const education = {
  degree: "B.A., Computer Science & Business Economics",
  institution: "The College of Wooster",
  graduationDate: "May 2025",
  location: "Wooster, OH",
  awards: ["Departmental Honor (Computer Science)", "Dean's List"],
  gpa: null,
};

export const skills = {
  languages: [
    "Python",
    "TypeScript",
    "JavaScript",
    "C++",
    "Java",
  ],
  frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Radix UI",
    "TanStack Query",
    "Framer Motion",
    "Zod",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "Django",
    "Django REST Framework",
    "REST APIs",
    "GraphQL",
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma ORM",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3, RDS, Fargate)",
    "Railway",
    "Neon",
    "CI/CD",
    "GitHub Actions",
  ],
  ai: [
    "LlamaIndex",
    "AutoGen",
    "Groq API",
    "RAG",
    "LLM Fine-tuning",
  ],
  practices: [
    "Microservices Architecture",
    "RESTful API Design",
    "Authentication (JWT, OAuth)",
    "Caching Strategies",
    "Database Optimization",
    "Unit & Integration Testing",
    "Git/GitHub",
    "System Design",
  ],
  platforms: ["Linux", "macOS", "Windows"],
};

export const experience = [
    {
    title: "Software Engineer Intern",
    company: "Schneider Electric",
    location: "Remote",
    period: "May 2024 - July 2024",
    type: "Internship",
    description: "Prototyped LLM-driven autonomous agents to automate internal data analysis workflows for energy management systems.",
    achievements: [
      "Prototyped LLM-driven 8 autonomous agents to automate 250,000+ internal data analysis workflows; compared multiple agent frameworks",
      "Developed and integrated 15+ MCP tools for querying energy, cost, emissions, production, occupancy, platform knowledge, domain knowledge, site-level comparisons, and top-N site rankings",
      "Executed agent-driven document extraction by integrating LlamaIndex Query engine with custom visualization and organizational tools, improving efficiency and utility of RAG",
      "Ran experiments and demonstrations; presented trade-offs, limitations, and integration recommendations to Data Science leadership team",
    ],
    technologies: ["Python", "LlamaIndex", "AutoGen", "Jupyter Notebook", "LLM Frameworks"],
  },
  {
    title: "IT Specialist",
    company: "The College of Wooster",
    location: "Wooster, OH",
    period: "Sept 2021 - Present",
    type: "Full-time (Promoted from Student Tech Assistant - July 2025)",
    description: "Promoted to full-time IT Specialist role supporting campus-wide technology infrastructure and cybersecurity initiatives.",
    achievements: [
      "Automated software patch deployment across 200+ domain-bound lab computers using PowerShell scripts, reducing update time significantly",
      "Resolved over 500 individual tickets with 90% satisfaction rate by delivering accurate troubleshooting for software issues",
      "Developed training workshops for 200+ university students and staff on cybersecurity best practices, resulting in 40% reduction in phishing incidents",
    ],
    technologies: ["PowerShell", "Active Directory", "Windows Server", "ServiceNow"],
  },
  {
    title: "Software Engineer Intern",
    company: "Jomee Jomaa Inc.",
    location: "Remote",
    period: "May 2023 - Dec 2023",
    type: "Internship",
    description: "Contributed to full-stack development of a Django-based application with Next.js frontend.",
    achievements: [
      "Implemented advanced JWT authentication with rotating refresh tokens to harden account security and session hygiene",
      "Developed 30+ scalable REST APIs with Django REST Framework; tuned queries and indexes for responsiveness",
      "Contributed to payment system with third-party integration; improved error handling and edge-case coverage",
      "Resolved layout/CLS issues and backend latency contributors, improving overall web performance score from 72% to 96%",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Next.js", "React"],
  },
  {
    title: "Software Engineer Intern",
    company: "Shiree Pvt. Ltd.",
    location: "Remote",
    period: "Jan 2023 - April 2023",
    type: "Internship",
    description: "Worked on payment method development for an e-commerce platform built with Node.js and MongoDB.",
    achievements: [
      "Worked on payment method development; designed and implemented REST endpoints and provider callbacks",
      "Added input validation, idempotent handlers, and structured logging to improve reliability and debuggability",
      "Collaborated with teammates on API specs, error taxonomies, and basic monitoring checks",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
];

export const projects = [
  {
    title: "SaaS IT Service Management Platform",
    subtitle: "Enterprise-Grade Microservices Architecture",
    period: "Jan 2025",
    description:
      "Independently architected, developed, and deployed a production-ready cloud-native IT Service Management system serving 100+ concurrent users with 99.9% uptime.",
    achievements: [
      "Built 5 independent microservices (Identity, Ticket, Asset, Reservation, NL Gateway) with 60+ RESTful endpoints",
      "Designed multi-schema PostgreSQL architecture with 18 tables and 12 strategic indexes (70% query improvement)",
      "Implemented JWT-based authentication with role-based access control (3 permission levels)",
      "Integrated AWS S3 for file storage with presigned URLs for secure uploads",
      "Developed AI-powered ticket creation using Groq API and Llama 3.1-8B with 85% accuracy",
      "Achieved <200ms average response time and 99.9% availability with Kubernetes auto-scaling",
      "Wrote 15,000+ lines of production-grade TypeScript with comprehensive error handling",
    ],
    technologies: [
      "TypeScript",
      "Next.js 15",
      "React 19",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "Groq API",
      "TanStack Query",
      "Tailwind CSS",
    ],
    metrics: {
      "Microservices": "5",
      "API Endpoints": "60+",
      "Database Tables": "18",
      "Lines of Code": "15,000+",
      "Response Time": "<200ms avg",
      "Uptime": "99.9%",
      "Concurrent Users": "100+",
    },
    links: {
      demo: null,
      github: null,
      documentation: "#", // Link to system design
    },
    featured: true,
  },
  {
    title: "Multi-Agent Coordination in AV Routing",
    subtitle: "Simulation-Based Research Study",
    period: "2024",
    description:
      "Developed an algorithm enabling multi-agent interaction in autonomous vehicles to enhance decision-making in dynamic traffic environments.",
    achievements: [
      "Developed graph-based simulation environment with real-time vehicle-to-vehicle communication",
      "Engineered Obstacle Memory Management (OMM) system to avoid redundant decisions",
      "Tested with 50 autonomous cars and 40 dynamic obstacles in complex traffic scenarios",
      "Demonstrated significant reduction in average wait times through adaptive rerouting",
      "Published research paper with findings on communication-enhanced agent systems",
    ],
    technologies: ["Python", "Pygame", "NetworkX", "Graph Algorithms"],
    links: {
      paper: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "ShutterShare",
    subtitle: "Video-Sharing Platform",
    period: "2024",
    description:
      "Built a full-stack video-sharing application with authenticated uploads, structured state management, and optimized video compression.",
    achievements: [
      "Implemented authenticated video sharing with upload pipelines using AppWrite",
      "Optimized video compression to reduce latency and upload time",
      "Structured state management with Zustand for predictable application state",
      "Integrated Google OAuth 2.0 for secure authentication",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand", "AppWrite", "Google OAuth 2.0"],
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
];

export const research = [
  {
    title: "Multi-Agent Coordination in Autonomous Vehicle Routing: A Simulation-Based Study",
    authors: ["KM Khalid Saifullah"],
    venue: "Research Paper",
    year: "2024",
    abstract:
      "This study explores how multi-agent interaction enhances autonomous vehicle (AV) decision-making in dynamic traffic environments. While traditional AV models focus on individual autonomy, real-world traffic scenarios often require collective behavior through inter-agent communication and coordination. To investigate this, we developed a graph-based simulation environment that enables vehicle agents to exchange information and reroute in real time in response to road obstacles. Our findings demonstrate that communication and adaptive rerouting significantly reduce average wait times and improve travel efficiency. Furthermore, we introduce a lightweight memory mechanism—Object Memory Management (OMM)—which allows agents to retain knowledge of previously encountered obstacles. This feature proved critical in avoiding routing loops and redundant decisions. Together, these results highlight the potential of communication- and memory-enhanced agents in creating resilient, cooperative AV systems capable of navigating complex and unpredictable traffic networks.",
    keywords: [
      "Autonomous Vehicles",
      "Multi-Agent Systems",
      "V2V Communication",
      "Dynamic Rerouting",
      "Traffic Simulation",
      "Obstacle Avoidance",
    ],
    links: {
      paper: "/documents/ksaifullah_multiAgent.pdf",
      github: "#", // Add your GitHub repo link here if available
    },
  },
  {
    title: "Sentiment Analysis in Software Engineering: Evaluating Generative Pre-trained Transformers",
    authors: ["KM Khalid Saifullah"],
    venue: "Research Paper",
    year: "2024",
    abstract:
      "Sentiment analysis plays a crucial role in understanding developer interactions, issue resolutions, and project dynamics within software engineering (SE). While traditional SE-specific sentiment analysis tools have made significant strides, they often fail to account for the nuanced and context-dependent language inherent to the domain. This study systematically evaluates the performance of bidirectional transformers, such as BERT, against generative pre-trained transformers, specifically GPT-4o-mini, in SE sentiment analysis. Using datasets from GitHub, Stack Overflow, and Jira, we benchmark the models' capabilities with fine-tuned and default configurations. The results reveal that fine-tuned GPT-4o-mini performs comparable to BERT and other bidirectional models on structured and balanced datasets like GitHub and Jira, achieving macro-averaged F1-scores of 0.93 and 0.98, respectively. However, on linguistically complex datasets with imbalanced sentiment distributions, such as Stack Overflow, the default GPT-4o-mini model exhibits superior generalization, achieving an accuracy of 85.3% compared to the fine-tuned model's 13.1%. These findings highlight the trade-offs between fine-tuning and leveraging pre-trained models for SE tasks.",
    keywords: [
      "Sentiment Analysis",
      "Software Engineering",
      "Transformer Models",
      "Generative Pre-trained Transformers",
      "BERT",
      "Fine-tuning",
      "Natural Language Processing",
      "Gold-standard Datasets",
    ],
    links: {
      paper: "https://arxiv.org/pdf/2505.14692", // Add your published paper link here when available
    },
  },
];

// Note: Add paper status to show if it's published, under review, etc.
export const researchStatus = {
  "Multi-Agent Coordination in Autonomous Vehicle Routing: A Simulation-Based Study": "Under Review",
  "Sentiment Analysis in Software Engineering: Evaluating Generative Pre-trained Transformers": "Published"
};

export const leadership = [
  {
    role: "Co-Lead",
    organization: "Google Developer Student Club",
    institution: "The College of Wooster",
    period: "2023 - 2025",
    description: "Led technical workshops and hackathons for student developers.",
  },
  {
    role: "Participant",
    organization: "Stanford TreeHacks",
    period: "2024",
    description: "Participated in Stanford's premier hackathon.",
  },
  {
    role: "Residential Assistant",
    organization: "The College of Wooster",
    period: "2022 - 2024",
    description: "Supported residential life and community building initiatives.",
  },
];

export const contact = {
  email: "tsaifullah25@gmail.com",
  phone: "+1 (330) 462-9654",
  location: "Palo Alto, CA",
  linkedin: "https://www.linkedin.com/in/k-tasin/",
  github: "https://github.com/t-tasin",
  availability: "Open to full-time software engineering opportunities",
};
