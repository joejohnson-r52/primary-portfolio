import { getCollection } from 'astro:content';

// Every indexable page, as root-relative paths. Used by the sitemap.
export async function indexablePaths(): Promise<string[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return ['/', '/about/', '/projects/', '/contact/', ...projects.map((p) => `/projects/${p.id}/`)];
}
