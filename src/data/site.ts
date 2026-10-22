// Site-wide content. Replace the placeholders marked TODO.

import { withBase } from '../lib/url';

export const site = {
  name: 'joe johnson',
  fullName: 'Joe Johnson',
  role: 'full-stack developer',
  tagline: 'I build software that ships.',
  description:
    'Joe Johnson is a full-stack developer available for freelance projects. Web applications, APIs and the upkeep that keeps them fast.',
  availability: 'Available for [MONTH] projects', // TODO
  city: '[City]', // TODO
  email: 'hello@example.com', // TODO
  links: {
    github: 'https://github.com/your-handle', // TODO
    linkedin: 'https://www.linkedin.com/in/your-handle', // TODO
    cv: withBase('/cv.pdf'), // TODO: add public/cv.pdf
  },
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
] as const;

export const steps = [
  { title: 'Discover', body: 'We talk through the problem, the users and what success looks like.' },
  { title: 'Plan', body: 'A short written plan with scope, milestones and a fixed price.' },
  { title: 'Build', body: 'Weekly demos on a live preview. You see progress, not status reports.' },
  { title: 'Launch', body: 'Deploy, monitor, hand over. Support afterwards if you want it.' },
];

export const stack = [
  { area: 'Front end', items: 'TypeScript, React, Astro, CSS' }, // TODO
  { area: 'Back end', items: 'Node.js, Go, REST, GraphQL' }, // TODO
  { area: 'Data', items: 'PostgreSQL, Redis, SQLite' }, // TODO
  { area: 'Infra', items: 'AWS, Vercel, Docker, GitHub Actions' }, // TODO
];

export const about = {
  // TODO: replace with your own paragraphs.
  paragraphs: [
    "I'm a full-stack developer based in [City]. I've spent [N] years building web products for startups and established teams.",
    'I like small teams, clear goals and code that the next person can read. I studied [Degree] at [University].',
  ],
};

export const quote = {
  // TODO: replace with a real client quote.
  text: 'Joe took a vague brief and turned it into a product our customers use every day. Clear, quick and calm under pressure.',
  name: 'Client Name',
  role: 'Role, Company',
};
