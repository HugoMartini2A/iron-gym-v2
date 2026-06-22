// @ts-check
import { defineConfig } from 'astro/config';

// Sortie statique (SSG). `site` sert aux URLs absolues (canonical, OG, sitemap).
// À synchroniser avec le domaine de prod Vercel.
export default defineConfig({
  site: 'https://iron-gym-v2.vercel.app',
  trailingSlash: 'never',
  compressHTML: true,
  devToolbar: { enabled: false },
  // Inline tout le CSS dans le <head> → zéro requête CSS bloquante (meilleur FCP).
  build: { inlineStylesheets: 'always' },
  image: {
    // Astro re-encode les sources en WebP + dimensions intrinsèques (zéro CLS).
    responsiveStyles: true,
  },
  vite: {
    optimizeDeps: { include: ['gsap', 'lenis'] },
    // Build de prod : retire tout console.* / debugger (y compris ceux des
    // libs gsap/lenis) → console propre en production.
    esbuild: { drop: ['console', 'debugger'] },
  },
});
