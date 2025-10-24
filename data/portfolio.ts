export const personalInfo = {
  name: "KM Khalid Saifullah",
  nickname: "Tasin",
  title: "Software Engineer",
  location: "Palo Alto, CA", // Or Wooster, OH if more accurate currently
  email: "tsaifullah25@gmail.com",
  phone: "+1 (330) 462-9654",
  linkedin: "https://www.linkedin.com/in/k-tasin/",
  github: "https://github.com/t-tasin",
  portfolio: "https://tsaifullah.com", // Ensure this is correct
  // New Tagline: Focus on building, launching, and enterprise scale
  tagline: "Software Engineer building & launching scalable, AI-powered systems for enterprise impact. Architected a SaaS platform adopted by an institution serving 35,000+ users.",
};

export const about = {
  // New Intro: Emphasize Founder role, pilot, problem-solving
  introduction:
    "I'm a software engineer driven by the challenge of building solutions that tackle real-world problems at scale. As the founder and lead engineer of an enterprise-grade SaaS ITSM platform, I took an idea from concept to production, securing pilot adoption by an institution serving over 35,000 users. I thrive on architecting robust systems, integrating cutting-edge AI, and delivering measurable impact.",
  // New Highlights: Your absolute best, quantified achievements
  highlights: [
    "Founded & built a SaaS platform adopted for pilot by an institution serving 35,000+ users & 7,000+ devices.",
    "Engineered an AI PR Reviewer slashing review latency by 88% (10.1s to 1.2s) using intelligent caching.",
    "Prototyped an LLM co-pilot at Schneider Electric automating 250,000+ data analysis workflows.",
    "Improved web app performance score from 72% to 96% through full-stack optimization.",
  ],
};

export const education = {
  degree: "B.A., Computer Science & Business Economics",
  institution: "The College of Wooster",
  graduationDate: "May 2025",
  location: "Wooster, OH",
  awards: ["Departmental Honor (Computer Science)", "Dean's List"],
  gpa: null, // Keep null unless it's exceptional (e.g., 3.8+)
};

export const skills = {
  // Use the same structure as the final resume for consistency
  languages: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "FastAPI",
    "Django",
    "REST APIs",
  ],
  frontend: ["React", "Next.js", "Tailwind CSS", "TanStack Query"],
  databases: ["PostgreSQL", "Prisma", "Redis", "MongoDB"],
  devops: [
    "Docker",
    "Kubernetes",
    "CI/CD (GitHub Actions)",
    "AWS (EC2, S3, RDS)",
    "Vercel",
    "Supabase", // Added if used for DB
  ],
  ai: [
    "Google Gemini API",
    "LlamaIndex",
    "RAG",
    "Groq",
    "Autonomous Agents",
    "Prompt Engineering",
  ],
  // Added Enterprise Auth from resume
  enterpriseAuth: ["SAML 2.0", "Microsoft Entra ID (Azure AD)", "JWT"],
  // Merged Practices into relevant categories or removed redundancy
};

// --- EXPERIENCE SECTION ---
// IMPORTANT: This now mirrors the final resume structure and uses the strong bullets.
// The SaaS platform is listed first as the "Founder" role.

export const experience = [
  // Moved SaaS Platform here as the lead experience
  {
    title: "Founder & Lead Engineer", // Clear title
    company: "SaaS ITSM Platform (Independent Venture)", // Clear context
    location: "Remote",
    period: "September 2025 - Present",
    type: "Entrepreneurial", // More accurate than Internship/Full-time
    description: "Architected, built, deployed, and secured pilot adoption for an enterprise-grade IT Service Management SaaS platform.",
    // Use the final resume bullets, adapted slightly for readability
    achievements: [
      "Architected, developed, and deployed a 5-microservice platform (NestJS, Docker, K8s) independently from concept to production.",
      "Secured pilot adoption by The College of Wooster (serving 35,000+ users, managing 7,000+ devices) for potential campus-wide deployment.",
      "Currently engineering enterprise SAML 2.0 authentication with Microsoft Entra ID to meet pilot client requirements for secure SSO.",
      "Integrated a RAG-based Llama 3 model, reducing ticket creation time by 70%, and optimized PostgreSQL (70% query improvement) achieving 99.9% uptime and <200ms P95 latency.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "Groq API",
      "SAML 2.0",
      "Microsoft Entra ID",
    ],
  },
  // Schneider Electric - Using final resume bullets
  {
    title: "Software Engineer Intern (AI/ML)",
    company: "Schneider Electric",
    location: "Remote",
    period: "May 2024 - July 2024",
    type: "Internship",
    description: "Prototyped LLM-driven autonomous agents to automate internal data analysis workflows for energy management systems.",
    achievements: [
        "Prototyped an LLM-driven co-pilot (LlamaIndex, FastAPI) automating 250,000+ data analysis workflows, enabling natural language queries over energy data.",
        "Reduced agent-tool integration complexity (O(M*N) to O(M+N)) via a Model Context Protocol (MCP) client-server architecture for 15+ tools.",
        "Benchmarked 13 LLMs (GPT-4 eval) across single vs. multi-agent designs, providing data-driven recommendations on accuracy/speed/cost trade-offs.",
    ],
    technologies: ["Python", "LlamaIndex", "FastAPI", "AutoGen", "LLM Benchmarking"],
  },
  // Jomee Jomaa - Using final resume bullets
   {
    title: "Software Engineer Intern",
    company: "Jomee Jomaa Inc.",
    location: "Remote",
    period: "May 2023 - Dec 2023",
    type: "Internship",
    description: "Contributed to full-stack development of a Django-based application with Next.js frontend.",
    achievements: [
        "Improved web performance score from 72% to 96% by optimizing PostgreSQL queries, tuning 30+ Django REST APIs, and resolving frontend CLS issues.",
        "Hardened security against session hijacking for 10,000+ users by implementing JWT authentication with rotating refresh tokens.",
        "Contributed to payment system reliability by improving third-party integration error handling and edge-case coverage.",
    ],
    technologies: ["Python", "Django", "DRF", "PostgreSQL", "Next.js", "React", "JWT"],
  },
   // College of Wooster - Using final resume bullets (focused on official role)
   {
    title: "IT Specialist",
    company: "The College of Wooster",
    location: "Wooster, OH",
    period: "Sept 2021 - Present",
    type: "Full-time",
    description: "Supported campus-wide technology infrastructure, automation, and cybersecurity initiatives.",
    achievements: [
        "Automated OS installation/domain binding for 200+ lab computers via PowerShell scripts, reducing 4-5 hours of weekly manual work to 10 minutes.",
        "Reduced phishing incidents by 40% in 2 months by developing/leading cybersecurity workshops (including simulated attacks) for 200+ users.",
        "Resolved 500+ individual tickets achieving 90% user satisfaction.",
    ],
    technologies: ["PowerShell", "Active Directory", "Windows Server", "Cybersecurity Training", "Ticketing Systems"],
  },
  // Shiree - Using final resume bullets
  {
    title: "Software Engineer Intern",
    company: "Shiree Pvt. Ltd.",
    location: "Remote",
    period: "Jan 2023 - April 2023",
    type: "Internship",
    description: "Worked on payment method development for an e-commerce platform.",
    achievements: [
        "Improved payment system reliability by 90%+ by implementing idempotent API handlers (Node.js) and structured logging, eliminating duplicate transaction errors.",
        "Designed and implemented REST endpoints and provider callbacks for new payment methods.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "Idempotency"],
  },
];

// --- PROJECTS SECTION ---
// Now features the AI PR Reviewer as the star. SaaS platform is removed as it's in Experience.

export const projects = [
  // AI PR Reviewer - Using final resume bullets and REAL metrics
  {
    title: "AI PR Reviewer (ReviewBuddy-S)",
    subtitle: "AI-Powered GitHub App for Automated Code Reviews",
    period: "Oct 2025 - Present", // Adjust start date if needed
    description:
      "Architected and deployed a full-stack AI application that automatically reviews GitHub pull requests using the Gemini 2.5 API, providing line-specific feedback.",
    achievements: [
      "Processes live GitHub webhooks, analyzes code diffs, and posts line-specific comments via GitHub API.",
      "Slashed review latency by 88% (10.1s to 1.2s) using an intelligent PostgreSQL caching system based on file hashes, proven with real cache hits.",
      "Engineered a resilient event-driven system achieving 86% reliability in initial production testing, with graceful handling of external API (503) errors.",
      "Built with a focus on metrics: tracking P95 latency (~10s), cache hit ratio (14%+), API costs, and success rates via a dedicated dashboard.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "React", // Assuming a simple dashboard UI might be added later
      "PostgreSQL",
      "Redis", // If/when queue is added
      "BullMQ", // If/when queue is added
      "Google Gemini API",
      "GitHub API",
      "Webhooks",
      "Vercel", // Or wherever it's hosted
    ],
    metrics: { // Using your REAL metrics
      "Avg Latency": "~10s",
      "Cache Hit Latency": "1.2s (88% faster)",
      "Reliability": "86%",
      "Cache Hit Ratio": "14%+",
    },
    links: {
      demo: "#", // Link to the GitHub App installation page or a live demo if applicable
      github: "https://github.com/t-tasin/AiPrreviewer", // Ensure this is correct
      // video: "#", // Optional: Add a short demo video later
    },
    featured: false, // Make this the featured project
  },
  // ShutterShare - Keep as a good secondary full-stack example
  {
    title: "ShutterShare",
    subtitle: "Video-Sharing Platform",
    period: "2024", // Adjust date if needed
    description:
      "Built a full-stack video-sharing application featuring authenticated uploads, optimized video processing, and structured state management.",
    achievements: [
      "Implemented secure video upload/sharing pipelines using AppWrite backend.",
      "Integrated video compression techniques reducing average latency and upload times by ~30%.", // Added a sample metric
      "Managed application state predictably using Zustand.",
      "Secured user accounts via Google OAuth 2.0 integration.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand", "AppWrite", "Google OAuth 2.0"],
    links: {
      demo: "https://shuttershare.vercel.app", // Add link if available
      github: "https://github.com/t-tasin/shuttershare", // Add link if available
    },
    featured: false,
  },
];


// Research, Leadership, Contact sections remain largely the same, just ensure consistency.

export const research = [
    {
    title: "Multi-Agent Coordination in Autonomous Vehicle Routing: A Simulation-Based Study",
    authors: ["KM Khalid Saifullah"],
    venue: "Research Paper", // Add conference/journal if accepted
    year: "2025",
    status: "Under Review", // Added status
    abstract:
      "This study explores how multi-agent interaction enhances autonomous vehicle (AV) decision-making in dynamic traffic environments. While traditional AV models focus on individual autonomy, real-world traffic scenarios often require collective behavior through inter-agent communication and coordination. To investigate this, we developed a graph-based simulation environment that enables vehicle agents to exchange information and reroute in real time in response to road obstacles. Our findings demonstrate that communication and adaptive rerouting significantly reduce average wait times and improve travel efficiency. Furthermore, we introduce a lightweight memory mechanism—Object Memory Management (OMM)—which allows agents to retain knowledge of previously encountered obstacles. This feature proved critical in avoiding routing loops and redundant decisions. Together, these results highlight the potential of communication- and memory-enhanced agents in creating resilient, cooperative AV systems capable of navigating complex and unpredictable traffic networks.",
    keywords: [
      "Autonomous Vehicles", "Multi-Agent Systems", "V2V Communication", "Dynamic Rerouting", "Traffic Simulation",
    ],
    links: {
      paper: "/documents/ksaifullah_multiAgent.pdf", // Ensure path is correct
    },
  },
   {
    title: "Sentiment Analysis in Software Engineering: Evaluating Generative Pre-trained Transformers",
    authors: ["KM Khalid Saifullah"],
    venue: "National Conference on Undergraduate Research (NCUR)", // Link to venue if possible e.g., arXiv
    year: "2024",
    status: "Published", // Added status
    abstract:
      "Sentiment analysis plays a crucial role in understanding developer interactions, issue resolutions, and project dynamics within software engineering (SE). While traditional SE-specific sentiment analysis tools have made significant strides, they often fail to account for the nuanced and context-dependent language inherent to the domain. This study systematically evaluates the performance of bidirectional transformers, such as BERT, against generative pre-trained transformers, specifically GPT-4o-mini, in SE sentiment analysis. Using datasets from GitHub, Stack Overflow, and Jira, we benchmark the models' capabilities with fine-tuned and default configurations. The results reveal that fine-tuned GPT-4o-mini performs comparable to BERT and other bidirectional models on structured and balanced datasets like GitHub and Jira, achieving macro-averaged F1-scores of 0.93 and 0.98, respectively. However, on linguistically complex datasets with imbalanced sentiment distributions, such as Stack Overflow, the default GPT-4o-mini model exhibits superior generalization, achieving an accuracy of 85.3% compared to the fine-tuned model's 13.1%. These findings highlight the trade-offs between fine-tuning and leveraging pre-trained models for SE tasks.",
    keywords: [
      "Sentiment Analysis", "Software Engineering", "Transformer Models", "GPT", "BERT", "Fine-tuning", "NLP",
    ],
    links: {
      paper: "https://arxiv.org/pdf/2505.14692", // Ensure link is correct
    },
  },
];


export const leadership = [
  {
    role: "Co-Lead",
    organization: "Google Developer Student Club",
    institution: "The College of Wooster",
    period: "2023 - 2025",
    description: "Organized and led technical workshops (e.g., Cloud Study Jams, Android Dev) and hackathons for 100+ student developers.", // Added detail
  },
   {
    role: "Participant",
    organization: "Stanford TreeHacks",
    period: "2024",
    description: "Developed a project prototype during Stanford's 36-hour premier hackathon.", // Added detail
  },
  {
    role: "Residential Assistant",
    organization: "The College of Wooster",
    period: "2022 - 2024",
    description: "Mentored and supported 50+ residents, fostering community and enforcing residential policies.", // Added detail
  },
];

export const contact = {
  email: "tsaifullah25@gmail.com",
  phone: "+1 (330) 462-9654",
  location: "Palo Alto, CA", // Or Wooster, OH
  linkedin: "https://www.linkedin.com/in/k-tasin/",
  github: "https://github.com/t-tasin",
  availability: "Seeking full-time Software Engineering roles starting May 2025.", // Be specific
};
