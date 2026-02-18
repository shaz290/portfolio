import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const RESUME_DATA = {
  name: 'MD Shaz Ahmed',
  title: 'Software Engineer (.NET / React.js)',
  phone: '+91 8867334395',
  email: 'shazahmed290@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mdshazahmed',
  github: 'https://github.com/shaz290',
  summary:
    '.NET Backend Developer with 4.5 years of professional experience, including 3 years in backend development and 1.5 years in automation testing, delivering scalable and high-performance healthcare applications. Strong expertise in C#, ASP.NET Core, .NET 6/8, SQL Server, and backend system design. Experienced in microservices, CQRS, third-party integrations, and event-driven architectures using Apache Kafka. Hands-on exposure to React.js and Next.js for frontend integration and UI maintenance, with primary focus on backend services, APIs, and database optimization.',
  experience: [
    {
      company: 'Grasko Solution Pvt Ltd',
      location: 'Bangalore',
      role: 'Software Engineer',
      period: 'July 2021 – Present',
      duration: '4.5 Years',
      responsibilities: [
        'Backend Development using ASP.NET Core, .NET 6/8, and SQL Server for healthcare applications',
        'System Integration — Fax & telephony integrations for seamless communication workflows',
        'CQRS pattern implementation for scalable command-query separation architecture',
        'Database optimization with ADO.NET & Entity Framework for high-performance queries',
        'Event-driven architecture using Apache Kafka for real-time data streaming',
        'Web scraping automation for data extraction pipelines',
        'HCM module development covering hiring, onboarding, and management workflows',
      ],
    },
  ],
  skills: {
    languages: [
      { name: 'C#', level: 92 },
      { name: 'SQL', level: 88 },
      { name: 'JavaScript', level: 72 },
    ],
    backend: [
      { name: 'ASP.NET Core', level: 92 },
      { name: '.NET 6 / .NET 8', level: 90 },
      { name: 'Entity Framework', level: 85 },
      { name: 'ADO.NET', level: 83 },
      { name: 'LINQ', level: 85 },
    ],
    database: [
      { name: 'SQL Server', level: 88 },
      { name: 'MySQL', level: 74 },
    ],
    messaging: [{ name: 'Apache Kafka', level: 78 }],
    frontend: [
      { name: 'React.js', level: 68 },
      { name: 'Next.js', level: 62 },
    ],
  },
  techStack: [
    { name: 'C#', icon: '⚡', category: 'Language' },
    { name: 'ASP.NET Core', icon: '🔷', category: 'Framework' },
    { name: '.NET 8', icon: '🟣', category: 'Framework' },
    { name: 'SQL Server', icon: '🗄️', category: 'Database' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'Apache Kafka', icon: '📨', category: 'Messaging' },
    { name: 'Entity Framework', icon: '🔗', category: 'ORM' },
    { name: 'CQRS', icon: '🏗️', category: 'Pattern' },
    { name: 'Microservices', icon: '🧩', category: 'Architecture' },
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'LINQ', icon: '🔍', category: 'Library' },
  ],
  certifications: [
    {
      title: '.NET Course Certification',
      platform: 'Udemy',
      description: 'Comprehensive .NET development training covering modern patterns and practices.',
    },
    {
      title: 'ASP.NET Core Web APIs with .NET 8',
      platform: 'Udemy',
      description: 'Built production-ready Web APIs using ASP.NET Core and the latest .NET 8 features.',
    },
  ],
  education: [
    {
      degree: 'B.E. Computer Science',
      institution: 'University',
      board: 'N/A',
      year: '2015 – 2019',
      score: 'CGPA 6.5',
    },
    {
      degree: 'Class XII',
      institution: 'Higher Secondary',
      board: 'Odisha Board',
      year: '2015',
      score: '64%',
    },
    {
      degree: 'Class X',
      institution: 'Secondary School',
      board: 'Odisha Board',
      year: '2013',
      score: '65%',
    },
  ],
}
