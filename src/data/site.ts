// Site-wide content. Replace the placeholders marked TODO.

import { withBase } from '../lib/url';

export const site = {
  name: 'joe johnson',
  fullName: 'Joe Johnson',
  role: 'full-stack developer',
  tagline: 'I build software that ships.',
  description:
    'Joe Johnson is a full-stack developer available for freelance projects. Web applications, APIs and the upkeep that keeps them fast.',
  availability: 'Available',
  city: 'Lancashire',
  email: 'jhj3004mail@gmail.com', 
  links: {
    github: 'https://github.com/joejohnson-r52',
    linkedin: 'https://www.linkedin.com/in/joe-h-johnson/', 
    cv: withBase('/cv.pdf'), // TODO: add public/cv.pdf
  },
  // Social preview defaults (public/og-default.png is 1200x630).
  locale: 'en_US',
  themeColor: '#0B0C0E',
  ogImage: '/og-default.png',
  ogImageAlt: 'Joe Johnson, full-stack developer. I build software that ships.',
};

export const nav = [
  { label: 'Services', href: withBase('/#services') },
  { label: 'Work', href: withBase('/projects') },
  { label: 'Experience', href: withBase('/#experience') },
  { label: 'About', href: withBase('/about') },
];

export const services = [
  {
    icon: 'window',
    title: 'Web applications',
    body: 'Fast, accessible front ends and the product logic behind them. From first prototype to production.',
  },
  {
    icon: 'server',
    title: 'APIs & back ends',
    body: 'Clean APIs, sensible data models and integrations that keep working when traffic grows.',
  },
  {
    icon: 'gauge',
    title: 'Performance & upkeep',
    body: 'Audits, speed fixes, dependency upgrades and the steady maintenance most projects skip.',
  },
  {
    icon: 'spark',
    title: 'AI integrations',
    body: 'LLM features wired into real products. Assistants, search and automation with sensible guardrails and costs.',
  },
] as const;

export const steps = [
  { title: 'Discover', body: 'We talk through the problem, the users and what success looks like.' },
  { title: 'Plan', body: 'A short written plan with scope, milestones and a fixed price.' },
  { title: 'Build', body: 'Weekly demos on a live preview. You see progress, not status reports.' },
  { title: 'Launch', body: 'Deploy, monitor, hand over. Support afterwards if you want it.' },
];

export const stack = [
  { area: 'Front end', items: 'TypeScript, React, Astro, CSS, Next.js' },
  { area: 'Back end', items: 'Node.js, Laravel, Express, PHP, Java' },
  { area: 'Data', items: 'PostgreSQL, Redis, SQLite, MongoDB, MySQL' },
  { area: 'Infra', items: 'AWS, Vercel, Docker, GitHub Actions, Linode, Kubernetes' },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer based in Lancashire. I've spent 5 years building web products for startups and established teams.",
    'I like small teams, clear goals and code that the next person can read. I studied Interactive Media at The University of York, where I created web applications, virtual reality experiences and mobile applications.',
  ],
};

export const quote = {
  text: 'Joe took a vague brief and turned it into a product our customers use every day. Clear, quick and calm under pressure.',
  name: 'Client Name',
  role: 'Role, Company',
};
