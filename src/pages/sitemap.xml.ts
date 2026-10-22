import type { APIRoute } from 'astro';
import { indexablePaths } from '../lib/pages';
import { withBase } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const urls = (await indexablePaths()).map((path) => `  <url><loc>${new URL(withBase(path), site).href}</loc></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
