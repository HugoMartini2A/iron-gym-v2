/**
 * Sitemap généré au build (lot A1).
 * ----------------------------------------------------------------------------
 * Remplace `public/sitemap.xml`, qui était écrit à la main et ne déclarait que
 * 4 URLs — donc déjà faux à l'ajout de la première page, et sans `<lastmod>`
 * (défaut P2 relevé à l'audit).
 *
 * Les priorités reflètent le parcours de conversion, pas la profondeur de
 * l'arborescence : `/premiere-seance` est la page de conversion n°1 et passe
 * donc devant les pages éditoriales.
 *
 * ⚠️ Tant que le site est en `noindex` (trois verrous : en-tête X-Robots-Tag,
 * meta robots, robots.txt), ce sitemap n'est lu par personne. Il doit être
 * exact au moment de la levée, pas après.
 */
import type { APIRoute } from 'astro';
import { site } from '../data/site';

interface Entry {
  path: string;
  priority: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
}

// One-page : une seule URL commerciale + les pages légales.
const entries: Entry[] = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { path: '/confidentialite', priority: '0.3', changefreq: 'yearly' },
  { path: '/cgv', priority: '0.3', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${new URL(e.path, site.url).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
