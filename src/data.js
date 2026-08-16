export const profile = {
  name: 'Hassan S',
  role: 'Backend & Gen AI Engineer',
  years: '2 years',
  location: 'Open to relocating anywhere',
  email: 'sheikhasan44@gmail.com',
  phone: '+91 86107 72538',
  phoneHref: 'tel:+918610772538',
  github: 'https://github.com/sheikhassan',
  githubLabel: 'github.com/sheikhassan',
  resumeFile: '/Hassan-S-Resume.pdf',
  headline:
    'I build production backends and applied AI systems — from multi-agent workflows to computer vision in the real world.',
  summary:
    'Backend and Gen AI engineer with two years of experience. I currently ship Java services, OCR, and computer vision at HTC Global Services. Before that I built and deployed production APIs at Aziwa Infosys Systems. On my own time I built VentureGPT, a multi-agent due-diligence platform for venture studios.',
}

export const nav = [
  { id: 'experience', label: 'Experience', number: '01' },
  { id: 'skills', label: 'Skills', number: '02' },
  { id: 'projects', label: 'Projects', number: '03' },
  { id: 'certification', label: 'Certification', number: '04' },
  { id: 'studies', label: 'Studies', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
]

export const snapshot = [
  { value: '2', suffix: ' yrs', label: 'Professional experience' },
  { value: '2', suffix: '', label: 'Product companies' },
  { value: '7', suffix: '', label: 'AI agents in VentureGPT' },
  { value: '0.95', suffix: '', label: 'YOLO detection accuracy' },
]

export const experience = [
  {
    id: 'htc',
    role: 'SDE & AI/ML Engineer',
    company: 'HTC Global Services',
    period: '2025 — Present',
    tenure: 'Current role',
    summary:
      'I modernize enterprise software and bring AI work in-house so the company no longer has to outsource it.',
    points: [
      {
        title: 'Rebuilt the timesheet product',
        detail:
          'Moved a legacy timesheet app to a modern Java full stack. Added JWT login and role-based access with Spring Boot and React.js so the right people see the right data.',
      },
      {
        title: 'Brought manuscript OCR in-house',
        detail:
          'The company used to outsource reading of 19th-century handwritten manuscripts. I built a hybrid pipeline — Kraken for line segmentation, Microsoft TrOCR for English, and a fine-tuned open-weight model for Chinese — then checked quality with Gemini Vision and CER/WER scores.',
      },
      {
        title: 'Automated newspaper text extraction',
        detail:
          'Replaced a fully manual, paragraph-by-paragraph bounding-box process by fine-tuning a YOLO object detection model. It reached 0.95 accuracy.',
      },
      {
        title: 'Run production backends',
        detail:
          'Build REST APIs and microservices in Java and Spring Boot. Handle deployments, data integrations, and day-to-day production support.',
      },
    ],
  },
  {
    id: 'aziwa',
    role: 'Software Developer',
    company: 'Aziwa Infosys Systems, Chennai',
    period: '2024 — 2025',
    tenure: 'First role',
    summary:
      'I shipped and operated Java services for real client workflows — my first year as a professional software developer.',
    points: [
      {
        title: 'Shipped production REST APIs',
        detail:
          'Built Java and Spring APIs that supported CRUD operations and client workflows in a live production system.',
      },
      {
        title: 'Deployed and scheduled work on AWS',
        detail:
          'Deployed services to AWS EC2, wrote cron jobs for recurring data tasks, and tested APIs with Postman.',
      },
      {
        title: 'Cleaned up legacy code and integrated Salesforce',
        detail:
          'Refactored a legacy Java codebase and built a Salesforce AppExchange integration.',
      },
    ],
  },
]

export const skillGroups = [
  {
    name: 'Languages',
    note: 'What I write in every day',
    items: ['Python', 'Java', 'SQL', 'JavaScript'],
  },
  {
    name: 'Generative AI',
    note: 'How I build applied AI systems',
    items: [
      'LLM fine-tuning (open-weight models)',
      'Multi-agent systems (LangGraph)',
      'RAG with Qdrant, HNSW, and hybrid search',
      'OCR & computer vision (YOLO, Kraken, TrOCR)',
    ],
  },
  {
    name: 'Backend',
    note: 'How I ship reliable services',
    items: [
      'Spring Boot',
      'FastAPI',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'Redis',
      'MySQL',
    ],
  },
  {
    name: 'Infrastructure & security',
    note: 'How I deploy and protect systems',
    items: [
      'AWS EC2',
      'Docker',
      'Git',
      'Postman',
      'JWT & role-based access control',
    ],
  },
  {
    name: 'AI coding agents',
    note: 'How I work faster without losing quality',
    items: ['Claude Code', 'Cursor', 'Parallel multi-agent coding workflows'],
  },
]

export const projects = [
  {
    id: 'venturegpt',
    eyebrow: 'Freelance · Venture studio',
    name: 'VentureGPT',
    oneLiner: 'A multi-agent platform that researches a startup and writes an investment memo.',
    problem:
      'Venture studios need structured due diligence — company, founder, market, risk — without weeks of manual research.',
    whatIBuilt:
      'An API-first system with 7 specialist AI agents (company, founder, competitor, market, technical, risk, memo). They run in parallel through a LangGraph workflow and return evidence-grounded scores, a memo, and a Go / No-Go recommendation.',
    how:
      'Typed shared state with reducer-based parallel merging, a human approval gate, and versioned Postgres checkpoints. A ports-and-adapters tool layer made 148 deterministic offline tests possible, and the same code deploys without changes.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'enterprise-rag',
    eyebrow: 'Solo · Internal R&D',
    name: 'Enterprise RAG',
    oneLiner: 'A question-answering system that finds answers from company documents.',
    problem:
      'Teams needed reliable answers from internal knowledge — not just chat, but search that actually finds the right passage.',
    whatIBuilt:
      'A production-grade RAG pipeline I built end-to-end as independent research. After the team validated the results, they adopted it internally.',
    how:
      'Vector search with HNSW indexing in Qdrant, combined with keyword search so both meaning and exact terms are covered.',
    stack: ['Qdrant', 'HNSW', 'Hybrid search', 'RAG'],
  },
]

export const certification = {
  name: 'Microsoft Certified: Azure AI Engineer Associate',
  code: 'AI-102',
  issuer: 'Microsoft',
  summary:
    'Official Microsoft certification for designing and implementing Azure AI solutions — covering applied AI services, responsible AI, and production-ready model integration.',
}

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  school: 'Mohamed Sathak A.J. College of Engineering, Chennai',
  note: 'Undergraduate degree in computer science. This is the foundation behind the backend, AI, and systems work above.',
}
