export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  status: 'In progress' | 'Completed';
  category: 'Full Stack' | 'AI & Systems' | 'UI/UX Design';
  summary: string;
  bullets: string[];
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  demoType: 'healthcare' | 'icu' | 'deepfake' | 'studybuddy' | 'whatsapp';
  githubUrl?: string;
  figmaUrl?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  category: 'Leadership' | 'Symposium Award' | 'Pitch Contest' | 'Campus Ambassador';
  year: string;
  badge: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Narmatha M P',
    title: 'Full Stack Developer · Frontend Engineer',
    location: 'Puravasery, Nagercoil – 629901, Tamil Nadu, India',
    email: 'mpnarmatha18@gmail.com',
    phone: '+91-9385942895',
    github: 'https://github.com/NarmathaMP',
    linkedin: 'https://www.linkedin.com/in/narmatha-m-p',
    availability: 'Available for Full-Time Roles & Internships',
    education: {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'DMI Engineering College, Aralvaimozhi',
      years: '2024 – 2028',
      status: 'Third-Year Undergraduate Student'
    },
    profileBio:
      'Third-year Computer Science Engineering student with a frontend-first approach to full-stack development. Experienced in building responsive React interfaces and connecting them to API and database layers, with hands-on work across web development and UI/UX internships. Currently building multi-portal and AI-powered applications. Quick learner who enjoys shipping clean, usable products.'
  },

  recruiterQuickFacts: [
    {
      label: 'Core Focus',
      value: 'React + FastAPI + TimescaleDB',
      desc: 'Frontend-first full stack engineering'
    },
    {
      label: 'Internship Experience',
      value: '3 Internships Completed',
      desc: 'Wikpolt Softwares, Zetamind, Cognifyz'
    },
    {
      label: 'Leadership',
      value: 'IEEE Secretary & IIT Bombay Ambassador',
      desc: 'Student branch executive & campus outreach'
    },
    {
      label: 'Competitive Track Record',
      value: '5+ National Awards',
      desc: '1st prizes in technical symposia & hackathons'
    }
  ],

  projects: [
    {
      id: 'med-nexus',
      title: 'Med NeXus',
      subtitle: 'Full Stack Healthcare Platform with Dual-Portal Architecture',
      role: 'Full Stack Developer & Architect',
      status: 'In progress',
      category: 'Full Stack',
      summary:
        'A unified healthcare management system engineered with segregated purpose-built portals for citizens and hospital administrators, backed by a single high-concurrency database and API layer.',
      bullets: [
        'Building a connected platform with separate purpose-built portals for citizens and hospital admins, backed by one shared database and API layer.',
        'Engineered role-based access control (RBAC) ensuring patient medical records remain confidential while emergency triage teams have rapid lookup access.',
        'Designed real-time bed availability and appointment synchronization to streamline triage workflows during surge periods.'
      ],
      image: '/src/assets/images/project_mednexus_preview_1791019703124.jpg',
      tags: ['React', 'FastAPI', 'TimescaleDB', 'REST APIs', 'RBAC', 'Tailwind CSS'],
      metrics: [
        { label: 'Portal Types', value: 'Dual (Citizen & Admin)' },
        { label: 'Latency Target', value: '< 120ms' },
        { label: 'Schema Compatibility', value: 'FHIR Compliant' }
      ],
      problem:
        'Healthcare institutions frequently suffer from fragmented systems: patient-facing apps lack live coordination with ICU triage desks, leading to scheduling bottlenecks and out-of-sync bed availability.',
      solution:
        'Med NeXus establishes a unified data architecture powering two dedicated client applications. Citizens gain a frictionless appointment and health record portal, while hospital administrators manage real-time ward capacity, patient admissions, and doctor schedules through an operational dashboard.',
      architecture: [
        'Client Tier: Responsive React Single Page Application with dynamic role switcher',
        'API Gateway: High-performance asynchronous FastAPI router with OAuth & JWT validation',
        'Persistence: TimescaleDB / PostgreSQL database schema with automated tenant isolation',
        'Event Layer: Real-time status broadcasting for bed occupancy and triage queues'
      ],
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
        backend: ['FastAPI', 'Python', 'Pydantic', 'RESTful API Architecture'],
        database: ['TimescaleDB', 'PostgreSQL Schema', 'Connection Pooling'],
        tools: ['Git', 'GitHub', 'Postman', 'VS Code']
      },
      demoType: 'healthcare',
      githubUrl: 'https://github.com/NarmathaMP/Med-NeXus'
    },
    {
      id: 'neopulse',
      title: 'NeoPulse',
      subtitle: 'AI-Powered ICU Early-Warning System with Clinical Replay',
      role: 'Full Stack & ML Pipeline Engineer',
      status: 'In progress',
      category: 'AI & Systems',
      summary:
        'Built a missingness-aware time-series pipeline raising explainable early-warning alerts from irregular ICU telemetry before critical decompensation events.',
      bullets: [
        'Built a missingness-aware time-series pipeline (Python, TimescaleDB) that raises explainable early-warning alerts from irregular ICU telemetry before critical events.',
        'Integrated an LLM narrative layer (Claude API) translating complex multivariate physiological alarms into natural clinical summaries.',
        'Developed a real-time React + FastAPI clinical dashboard equipped with counterfactual trajectory replay for post-event clinical audits.'
      ],
      image: '/src/assets/images/project_neopulse_preview_1791019712632.jpg',
      tags: ['Python', 'TimescaleDB', 'FastAPI', 'Claude API', 'React', 'Time-Series'],
      metrics: [
        { label: 'Warning Lead Time', value: '4–6 Hours Early' },
        { label: 'Data Ingestion', value: 'Multi-parameter Telemetry' },
        { label: 'Explanation Speed', value: '< 2.1s Clinical Briefing' }
      ],
      problem:
        'Standard ICU threshold monitors trigger high false-alarm fatigue (up to 80%) while missing slow multi-parameter deterioration patterns across irregular vital signs.',
      solution:
        'NeoPulse ingests high-frequency, irregularly sampled telemetry (MAP, Heart Rate, SpO2, Respiratory Rate) into TimescaleDB, detects early systemic trends, and invokes an LLM narrative layer to produce concise clinical explanations for nursing staff.',
      architecture: [
        'Data Ingestion: Streaming telemetry pipeline with missingness-aware forward-fill & spline imputation',
        'Analytics Engine: TimescaleDB continuous aggregates calculating rolling deterioration z-scores',
        'Narrative Synthesis: Claude API integration generating structured clinical rationale',
        'UI Dashboard: Low-latency React interface with SVG waveform rendering and counterfactual slider'
      ],
      techStack: {
        frontend: ['React', 'TypeScript', 'Interactive SVG Waves', 'Tailwind CSS'],
        backend: ['FastAPI', 'Python 3.11', 'Claude API', 'NumPy / SciPy'],
        database: ['TimescaleDB', 'Hypertable Partitioning', 'Hypertables'],
        tools: ['VS Code', 'Git', 'Jupyter', 'Postman']
      },
      demoType: 'icu',
      githubUrl: 'https://github.com/NarmathaMP/Neo_Pulse'
    },
    {
      id: 'deepfake-detection',
      title: 'Deepfake Detection Website',
      subtitle: 'Multimodal Forensic Analysis Web Platform',
      role: 'Frontend Lead & UI/UX Designer',
      status: 'Completed',
      category: 'UI/UX Design',
      summary:
        'Designed and built an intuitive, high-performance web interface for analyzing digital images, video frames, and audio tracks to detect synthetic manipulation and deepfakes.',
      bullets: [
        'Designed and built a user-friendly web interface for analyzing images, video and audio to detect deepfakes.',
        'Created visual artifact inspection tools including facial frequency heatmaps and audio spectrogram overlays.',
        'Architected clear confidence ratings and forensic evidence breakdowns so non-technical users can make informed verification decisions.'
      ],
      image: '/src/assets/images/project_deepfake_preview_1791019725327.jpg',
      tags: ['React', 'UI/UX', 'Forensic Web', 'Responsive Design', 'Spectrograms'],
      metrics: [
        { label: 'Modalities Supported', value: 'Image, Video, Audio' },
        { label: 'Analysis Stages', value: '3-Tier Forensic Pipeline' },
        { label: 'User Accessibility', value: 'Instant Drag & Drop' }
      ],
      problem:
        'Synthetic media tools have democratized deepfakes, but most forensic tools exist as obscure command-line scripts inaccessible to journalists, recruiters, and everyday web users.',
      solution:
        'Engineered an approachable yet technically robust web interface that provides instant drag-and-drop verification with intuitive confidence scores, facial boundary tracking, and audio vocal anomaly inspection.',
      architecture: [
        'Frontend UI: Responsive media upload with client-side canvas preview & slice extraction',
        'Analysis Visualizer: Heatmap overlay renderer highlighting synthetic blending boundaries',
        'Reporting Engine: Interactive score breakout showing facial consistency, eye-blink rhythm, and vocal pitch anomalies'
      ],
      techStack: {
        frontend: ['React', 'JavaScript', 'HTML5 Canvas', 'Tailwind CSS', 'Figma'],
        backend: ['REST API Ingestion', 'File Stream Processing'],
        database: ['Metadata Cache', 'Verification Session Storage'],
        tools: ['Figma', 'VS Code', 'Git']
      },
      demoType: 'deepfake',
      githubUrl: 'https://github.com/NarmathaMP/Deepfake_Detection'
    },
    {
      id: 'study-buddy',
      title: 'Study Buddy',
      subtitle: 'Personalized AI Learning Assistant & Knowledge Companion',
      role: 'Full Stack Developer',
      status: 'In progress',
      category: 'AI & Systems',
      summary:
        'Developing an intelligent AI chatbot and study companion for students, working professionals, and lifelong learners featuring adaptive concept breakdown and spaced-repetition quizzing.',
      bullets: [
        'Developing an AI chatbot for students, working professionals and lifelong learners.',
        'Implementing personalized roadmap generation tailored to user career goals and background.',
        'Incorporating active recall flashcard generation and conversational debugging for code concepts.'
      ],
      image: '',
      tags: ['React', 'Python', 'AI Chatbot', 'Prompt Engineering', 'REST APIs'],
      metrics: [
        { label: 'Target Audience', value: 'Students & Developers' },
        { label: 'Adaptive Levels', value: 'Beginner to Advanced' },
        { label: 'Feature Set', value: 'Roadmaps + Flashcards' }
      ],
      problem:
        'Traditional course content is monolithic and inflexible, making it hard for students balancing academics or jobs to get instant answers without cognitive overload.',
      solution:
        'Created a dynamic conversational learning interface that deconstructs complex technical subjects into step-by-step interactive milestones, sample problems, and personalized cheat-sheets.',
      architecture: [
        'Conversational Interface: Threaded message system with markdown code rendering',
        'Knowledge Planner: Curriculum decomposition engine creating progressive study sprints',
        'State Management: Local storage session preservation with bookmarking capabilities'
      ],
      techStack: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Markdown Renderer'],
        backend: ['Python', 'FastAPI / REST', 'LLM Prompt Architecture'],
        database: ['User Progress Storage', 'Curriculum Taxonomy'],
        tools: ['Git', 'VS Code']
      },
      demoType: 'studybuddy',
      githubUrl: 'https://github.com/NarmathaMP/Study_Buddy'
    },
    {
      id: 'whatsapp-redesign',
      title: 'WhatsApp UI Redesign',
      subtitle: 'Enhanced Hierarchy & Modern Conversation Navigation',
      role: 'UI/UX Designer',
      status: 'Completed',
      category: 'UI/UX Design',
      summary:
        'Redesigned WhatsApp navigation, chat layout, and visual hierarchy in Figma to eliminate conversation clutter, improve media organization, and modernize group communications.',
      bullets: [
        'Redesigned navigation, chat layout and visual hierarchy for a cleaner user experience.',
        'Conducted user research to identify pain points in message search, media drawer clutter, and channel discovery.',
        'Constructed high-fidelity Figma components and interactive prototypes with micro-interactions.'
      ],
      image: '',
      tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'User Research'],
      metrics: [
        { label: 'Research Participants', value: '18 Active Users' },
        { label: 'Key Pain Points Solved', value: 'Search, Media & Noise' },
        { label: 'Figma Components', value: '40+ Modular Variants' }
      ],
      problem:
        'As messaging apps incorporate channels, communities, and payments, the core chat feed becomes overwhelmed, making key conversations hard to surface quickly.',
      solution:
        'Redesigned the primary navigation with segregated personal/work tabs, a unified media gallery, and an intuitive quick-filter bar for unread, pinned, and media messages.',
      architecture: [
        'UX Research: Surveyed everyday users and mapped friction areas in current layout',
        'Information Architecture: Restructured tab navigation with bottom-accessible controls',
        'Visual Design: Created clean typography hierarchy, balanced contrast, and custom iconography'
      ],
      techStack: {
        frontend: ['Figma Prototype', 'Design System Spec', 'Interactive Components'],
        backend: ['N/A (Product Design Focus)'],
        database: ['N/A'],
        tools: ['Figma', 'Canva', 'FigJam', 'Wireframing Kits']
      },
      demoType: 'whatsapp',
      figmaUrl: 'https://www.figma.com/proto/2HrocZVKR8oTplyCAR2LGz/WhatsApp-Redesign?page-id=0%3A1&node-id=2-3&viewport=3%2C0%2C1&t=iRI6zVVNNrKFH0Vx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=178%3A549'
    }
  ] as Project[],

  internships: [
    {
      id: 'wikpolt',
      role: 'Web Development Intern',
      company: 'Wikpolt Softwares',
      location: 'Remote / India',
      period: 'Internship',
      type: 'Engineering',
      summary:
        'Engineered responsive React web components in close collaboration with the engineering and product team, translating UI designs into performant, clean production code.',
      bullets: [
        'Collaborated with a development team to build responsive React components, bridging design intent and working code.',
        'Wrote modular, reusable TypeScript/JavaScript frontend code ensuring consistent cross-device performance.',
        'Participated in code reviews, component styling refinements, and sprint planning.'
      ],
      skills: ['React', 'JavaScript', 'Responsive Design', 'HTML5 / CSS3', 'Git']
    },
    {
      id: 'zetamind',
      role: 'UI/UX Design Intern',
      company: 'Zetamind Technologies',
      location: 'Remote / India',
      period: 'Internship',
      type: 'Design & Product',
      summary:
        'Developed end-to-end wireframes and interactive prototypes in Figma, establishing clear layout hierarchy and streamlined user flows.',
      bullets: [
        'Designed wireframes and interactive prototypes in Figma, improving usability and interface clarity.',
        'Conducted usability walkthroughs to refine button placements, navigation flows, and accessibility.',
        'Collaborated with developers to ensure faithful implementation of Figma component specifications.'
      ],
      skills: ['Figma', 'Wireframing', 'Interactive Prototyping', 'User Research', 'Design Systems']
    },
    {
      id: 'cognifyz',
      role: 'UI/UX Design Intern',
      company: 'Cognifyz Technologies',
      location: 'Remote / India',
      period: 'Internship',
      type: 'Design & Visuals',
      summary:
        'Delivered polished UI concepts for e-commerce product pages and marketing collateral, translating client briefs into high-converting visual designs.',
      bullets: [
        'Delivered UI concepts for an e-commerce product page and poster designs, translating briefs into polished visuals.',
        'Created cohesive typography and color schemes tailored to digital retail environments.',
        'Assisted in refining user journey steps from product discovery to cart checkout.'
      ],
      skills: ['Figma', 'E-commerce UX', 'Visual Design', 'Canva', 'Prototyping']
    }
  ] as Internship[],

  skillCategories: [
    {
      title: 'Frontend Engineering',
      description: 'Building fast, accessible, responsive interfaces that delight users',
      skills: [
        { name: 'React', level: 'Advanced', note: 'Hooks, Component Architecture, State Management, Med NeXus' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', note: 'Asynchronous workflows, DOM, functional patterns' },
        { name: 'TypeScript', level: 'Proficient', note: 'Type safety, interfaces, strict compiler rules' },
        { name: 'Responsive Design', level: 'Advanced', note: 'Mobile-first layouts, Flexbox, CSS Grid, media queries' },
        { name: 'HTML5 & CSS3', level: 'Advanced', note: 'Semantic markup, accessible structures, animations' },
        { name: 'Tailwind CSS', level: 'Advanced', note: 'Utility-first styling, design system tokens' }
      ]
    },
    {
      title: 'Backend & Systems',
      description: 'Connecting frontend clients to robust asynchronous APIs and services',
      skills: [
        { name: 'FastAPI', level: 'Proficient', note: 'High-speed async endpoints, Pydantic schemas, NeoPulse' },
        { name: 'REST APIs', level: 'Advanced', note: 'Resource design, status codes, authentication, error handling' },
        { name: 'Claude API / LLM Integration', level: 'Proficient', note: 'Prompt chaining, clinical narrative generation' },
        { name: 'Node.js & Express', level: 'Intermediate', note: 'Server routes, middleware, API proxies' }
      ]
    },
    {
      title: 'Databases & Architecture',
      description: 'Designing data pipelines, relational schemas, and time-series storage',
      skills: [
        { name: 'TimescaleDB', level: 'Proficient', note: 'Hypertables, time-series telemetry, compression' },
        { name: 'SQL & PostgreSQL', level: 'Proficient', note: 'Schema relationships, indexing, querying' },
        { name: 'Shared DB Architecture', level: 'Proficient', note: 'Multi-portal data models, tenant isolation' },
        { name: 'RBAC (Access Control)', level: 'Proficient', note: 'Role validation for patient & admin portals' }
      ]
    },
    {
      title: 'Languages & Core CS',
      description: 'Strong foundation in algorithmic thinking and programming principles',
      skills: [
        { name: 'Python', level: 'Advanced', note: 'Data pipelines, backend services, scientific packages' },
        { name: 'JavaScript', level: 'Advanced', note: 'Frontend UI logic, client state, web APIs' },
        { name: 'C Language', level: 'Proficient', note: 'Memory management, data structures, algorithms' },
        { name: 'Data Structures', level: 'Proficient', note: 'Arrays, trees, graphs, sorting, searching' }
      ]
    },
    {
      title: 'Tools & Workflow',
      description: 'Modern development environment and collaboration stack',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', note: 'Branching, pull requests, version control, CI/CD basics' },
        { name: 'VS Code', level: 'Advanced', note: 'Extensions, debugging, terminal workflows' },
        { name: 'Postman', level: 'Proficient', note: 'API contract testing, mock environments, debugging' },
        { name: 'Vite & Modern Bundlers', level: 'Proficient', note: 'Fast builds, hot reloading, asset bundling' }
      ]
    },
    {
      title: 'Design & Prototyping',
      description: 'Bridging user empathy and interface craft before writing code',
      skills: [
        { name: 'Figma', level: 'Advanced', note: 'Interactive prototypes, auto-layout, design tokens' },
        { name: 'Wireframing', level: 'Advanced', note: 'Low-fi to high-fi user flow mapping' },
        { name: 'User Research', level: 'Proficient', note: 'Pain-point analysis, usability testing' },
        { name: 'Canva', level: 'Proficient', note: 'Visual presentations, symposium posters' }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Certified Training',
      skills: 'React, Node.js, REST APIs, Database Integration'
    },
    {
      title: 'Advanced Python',
      issuer: 'Certified Training',
      skills: 'Object-Oriented Programming, Data Handling, Backend Logic'
    },
    {
      title: 'UI/UX Designing',
      issuer: 'Certified Training',
      skills: 'Figma, Information Architecture, Prototyping'
    }
  ],

  achievements: [
    {
      id: 'ieee-sec',
      title: 'IEEE Student Branch Secretary',
      organization: 'DMI Engineering College',
      category: 'Leadership',
      year: '2025 – Present',
      badge: 'Executive Leadership',
      description:
        'Spearheading technical events, workshops, and project exhibitions for engineering students, fostering an active coding and innovation culture on campus.'
    },
    {
      id: 'ecell-iitb',
      title: 'Campus Ambassador',
      organization: 'E-Cell IIT Bombay',
      category: 'Campus Ambassador',
      year: 'Selected',
      badge: 'National Representation',
      description:
        'Representing the Entrepreneurship Cell of IIT Bombay, driving entrepreneurial initiatives, hackathon participation, and technical bootcamps among collegiate peers.'
    },
    {
      id: 'gfg-mantri',
      title: 'Campus Mantri',
      organization: 'GeeksforGeeks',
      category: 'Campus Ambassador',
      year: 'Current',
      badge: 'Tech Community',
      description:
        'Leading coding challenges, DSA study cohorts, and technical workshops to help students elevate their problem-solving and software development capabilities.'
    },
    {
      id: 'pet-1st',
      title: '1st Prize — Paper Presentation',
      organization: 'PET Engineering College, Valliyoor',
      category: 'Symposium Award',
      year: 'Award Winner',
      badge: '1st Prize / Gold',
      description:
        'Won first prize at the National-level Technical Symposium for presenting novel technical research and architectural problem-solving.'
    },
    {
      id: 'vv-1st',
      title: '1st Prize — Paper Presentation',
      organization: 'V.V College of Engineering, Thisayanvilai',
      category: 'Symposium Award',
      year: 'Award Winner',
      badge: '1st Prize / Gold',
      description:
        'Clinched the top honors at the National-level Technical Symposium with rigorous technical evaluation from industry and academic juries.'
    },
    {
      id: 'st-xavier-expo',
      title: '2nd Prize — IEEE Project Expo',
      organization: "St. Xavier's Catholic College, Chunkankadai",
      category: 'Symposium Award',
      year: 'Award Winner',
      badge: '2nd Prize / Silver',
      description:
        'Showcased an innovative engineering project demo to IEEE delegates and technical evaluators, securing second position.'
    },
    {
      id: 'shatter-pitch',
      title: '2nd Prize — "SHATTER: The Limitless Launch" Pitch Contest',
      organization: 'Arunachala College of Engineering for Women',
      category: 'Pitch Contest',
      year: 'Award Winner',
      badge: '2nd Prize / Pitch',
      description:
        'Presented a compelling technology product pitch, feasibility analysis, and business prototype before venture-minded judges.'
    },
    {
      id: 'st-xavier-paper',
      title: '3rd Prize — Paper Presentation',
      organization: "St. Xavier's Catholic College, Chunkankadai",
      category: 'Symposium Award',
      year: 'Award Winner',
      badge: '3rd Prize / Bronze',
      description:
        'Recognized for exceptional technical research delivery and defense during the inter-collegiate engineering symposium.'
    }
  ] as Achievement[]
};
