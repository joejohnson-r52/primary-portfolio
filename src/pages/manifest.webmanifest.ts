import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { withBase } from '../lib/url';

export const GET: APIRoute = () =>
  Response.json({
    name: site.fullName,
    short_name: 'Joe Johnson',
    description: site.description,
    start_url: withBase('/'),
    display: 'standalone',
    background_color: site.themeColor,
    theme_color: site.themeColor,
    icons: [
      { src: withBase('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: withBase('/icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
  });
