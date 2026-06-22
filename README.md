# Iron Gym Limoges — V2

Site vitrine one-page pour Iron Gym Limoges (salle de musculation old-school, est. 1992, affaire de famille Hartman).

**Direction artistique :** brutal red / brushed steel. Fond `#0A0A0A`, rouge sang `#C0392B`, acier brossé. Typo Teko (display) / DM Sans (corps) / Oswald (chiffres). Éditorial façon Locomotive.

## Stack

- **Astro 6** (SSG statique)
- **Tailwind v4** (config CSS-first, via PostCSS — pas de `tailwind.config.js`)
- **GSAP** (ScrollTrigger, SplitText, CustomEase) + **Lenis** (smooth scroll, lerp 0.1)
- **TypeScript strict**
- Polices **auto-hébergées** en woff2 (zéro Google Fonts en `<link>`)

## Développement

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build statique dans dist/
npm run preview    # sert le build
npx astro check    # diagnostics TypeScript
```

## Contenu

Toute la copie, les tarifs, horaires, coordonnées et avis vivent dans `src/data/content.ts` (source unique). Éditer ce fichier pour mettre à jour le site.

## Formulaire de contact

Envoi via [Web3Forms](https://web3forms.com) (sans backend). Définir `PUBLIC_WEB3FORMS_KEY` (env local + Vercel). Sans clé → fallback `mailto:` propre. Voir `.env.example`.

## Moments signature

- Hero « IRON GYM » révélé caractère par caractère (SplitText)
- Compteurs animés Oswald (année de fondation, stats)
- Marquee plein écran couplé à la vélocité du scroll
- Hover magnétique sur les CTA
- Galerie « Le Temple » en scroll horizontal épinglé (desktop)
- Chemin `prefers-reduced-motion` complet (statique, jamais cassé)

## Déploiement

Vercel (SSG). En-têtes de sécurité + CSP dans `vercel.json`. Carte Google = lien statique (aucun iframe / cookie tiers, RGPD).
