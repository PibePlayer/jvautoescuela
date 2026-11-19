import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { categories } from '../data/cursos';

export const prerender = true;

export const GET: APIRoute = () => {
  const paths = ['/', '/cursos', '/contacto', ...categories.map((c) => `/cursos/${c.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${new URL(p, site.url).href}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'content-type': 'application/xml' } });
};
