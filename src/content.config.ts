import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int(),
      role: z.string(),
      client: z.string().optional(),
      tech: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
      // The flagship project gets the large card on the home page.
      flagship: z.boolean().default(false),
      // Lower numbers sort first.
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().default('Present'),
    summary: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = { projects, experience };
