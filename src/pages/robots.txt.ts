import type { APIRoute } from 'astro';
import { withBase } from '../lib/url';

// Crawlers only read robots.txt at the domain root. On a GitHub Pages project
// site this file sits under the base path, so it takes effect once the site
// moves to its own domain. Submit the sitemap in Search Console until then.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap.xml'), site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
