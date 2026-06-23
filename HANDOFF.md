# HANDOFF — Iron Gym Limoges V2

État complet du projet pour reprise sans contexte. Dernière mise à jour : 2026-06-23.

---

## 0. TL;DR

- **Prod (live) :** https://iron-gym-v2.vercel.app
- **Repo :** https://github.com/HugoMartini2A/iron-gym-v2 (branche `main`)
- **Vercel :** projet `iron-gym-v2`, scope `hugomartini2as-projects`, CLI authentifié `hugomartini2a`. Deploy = `npx vercel deploy --prod --yes` (build sur Vercel, alias auto → iron-gym-v2.vercel.app).
- **Lighthouse prod (mesuré) :** Mobile 96–98 / Desktop 100 · A11y 100 · Best-Practices 100 · SEO 100 (les deux viewports).
- **Type :** site vitrine one-page (SSG statique) + 3 pages légales + 404.
- **Statut :** livré, déployé, audité. Voir §8 pour les écarts/TODO restants.

---

## 1. Stack

- **Astro 6** SSG (`output: static`), `trailingSlash: 'never'`, `compressHTML: true`.
- **Tailwind v4** config CSS-first via **PostCSS** (`postcss.config.mjs` + `@tailwindcss/postcss`). PAS de `tailwind.config.js`.
- **TypeScript strict** (`astro/tsconfigs/strict`).
- **GSAP 3.15** (ScrollTrigger, SplitText, CustomEase — tous gratuits/inclus) + **Lenis 1.3** (smooth scroll lerp 0.1).
- **sharp** (optimisation images build-time).
- Fonts **auto-hébergées woff2** dans `public/fonts/` (Teko, DM Sans, Oswald) — zéro Google Fonts.
- Pas de WebGL/Three.js (retiré pour la perf mobile — décision assumée).
- `astro.config.mjs` : `build.inlineStylesheets:'always'` (CSS inliné → 0 requête bloquante), `vite.esbuild.drop:['console','debugger']` (console propre en prod), `image.responsiveStyles:true`.

### Commandes
```bash
npm install
npm run dev        # localhost:4321
npm run build      # = astro build (dist/) ; CI : npx astro check d'abord
npm run preview    # sert dist/ sur :4321
npx astro check    # diagnostics TS (doit être 0/0/0)
```

---

## 2. Architecture / fichiers clés

```
src/
  data/content.ts          ← SOURCE UNIQUE de tout le contenu (copy, prix, horaires, avis, coords, legal). Tout édit de texte passe ici.
  layout/
    Layout.astro           ← layout home : <head> SEO/OG/JSON-LD(HealthClub), preload fonts, favicon, flag js-motion, import global.css, monte Grain + initSite()
    Legal.astro            ← layout pages légales (prose + bandeau "document modèle")
  styles/global.css        ← @font-face, @theme (tokens DA), base, utilitaires (.display .num .label-mono .tagline .text-gradient-blood .text-gradient-steel .duotone .marquee .open-status .field .scroll-progress …), reduced-motion, anti-flash
  lib/
    motion.ts              ← orchestration client (Lenis + GSAP). Branche REDUCED complète. startHero() = entrée hero char-by-char. setupMarquee/Temple/Counts/YearCount/Reveals/LineMasks/Magnetic/Nav/ScrollProgress/NavMenu/ReviewCarousel/ContactForm/ObjetPrefill
    easing.ts              ← 6 CustomEase (soft/snap/swift/enter/exit/overshoot)
  components/
    Nav.astro              ← header : logo+wordmark+statut live "Ouvert/Fermé" (calc heure de Paris), liens desktop, CTA (desktop≥lg), burger (mobile<lg), scroll-progress+haltère, menu plein écran mobile
    Grain.astro            ← <div class="grain"> overlay
    ui/GoldButton.astro    ← CTA (variant primary=rouge / ghost=acier) + magnetic + prefill objet. (Nom legacy "GoldButton", style rouge/acier.)
    ui/SectionLabel.astro  ← label mono rouge
    ui/Placeholder.astro   ← <Image> Astro (résout content.ts /images/x.webp → src/assets via import.meta.glob) + duotone acier/rouge ; fallback bloc si src null
    sections/              ← Hero, Manifesto, Heritage, Marquee, Temple, Programs, Schedule, Champions, Pricing, Referral, Contact, Footer
  pages/
    index.astro            ← assemble : Nav, Hero, Manifesto, Heritage, Marquee, Temple, Programs, Schedule, Champions, Pricing, Referral, Contact, Footer
    mentions-legales.astro / confidentialite.astro / cgv.astro / 404.astro
  assets/images/           ← traitées par <Image> : bernard-scene, samuel-scene, temple-*, map-iron-gym.webp
public/
  fonts/*.woff2            ← teko-500/700, dmsans-400/500/700, oswald-500/600/700
  images/og.webp           ← OG (chemin absolu, NE PAS mettre dans src/assets)
  logo-iron-gym.jpg/.webp  ← logo officiel (source jpg 768², webp pour header)
  favicon-32.png / favicon-64.png / apple-touch-icon.png  ← dérivés du logo
  robots.txt / sitemap.xml / _headers
vercel.json                ← framework astro, headers sécurité + CSP, cache _astro immutable
scripts/audit.mjs          ← audit Playwright 3 viewports (overflow, burger, ancres, console, screenshots fullPage → /tmp/audit)
scripts/shots.mjs          ← screenshots viewport par ancre (reduced-motion) → /tmp/shots
```

---

## 3. Design system (DA VALIDÉE — non négociable)

**Direction : brutal red / brushed steel, éditorial façon Locomotive. Fond #0A0A0A.**

Tokens (`@theme` dans global.css — noms conservés depuis V1, valeurs = nouvelle DA) :
- `--color-ink #0a0a0a` (fond), `--color-surface #121214`, `--color-surface-2 #1b1b20`
- `--color-blood #c0392b` (rouge sang, fills/boutons/gros texte) · `--color-blood-hi #ed5340` (PETIT texte rouge + hover — passe AA ~5.5:1 sur noir) · `--color-blood-deep #7e1f14`
- `--color-steel #9ca3af` / `steel-hi #dfe3e8` / `steel-dark #4b5563` · `--steel-grad` (dégradé acier brossé pour `.text-gradient-steel`)
- `--color-haze #ededed` (texte) · `--color-bone #f6f6f6` (texte vif) · `--color-bronze #9aa0a8` (labels muted) · `--color-open #4ade80` (statut ouvert)
- Fonts : `--font-display "Teko"` · `--font-sans "DM Sans"` · `--font-mono "Oswald"` (labels tracked + chiffres tabulaires)

**Règles contraste (a11y 100) :** petit texte rouge = TOUJOURS `text-blood-hi` (jamais `text-blood` ni opacité <100% sur du rouge). Texte muted = `text-haze/55` minimum (jamais /40-/50). Texte blanc sur `bg-blood` = `text-bone`. Avatars avis = fonds sombres only.

**Moments signature :** hero "IRON GYM" char-by-char (SplitText, `aria:'none'` + h1 `aria-label` + spans `aria-hidden`) · compteurs Oswald (`[data-count]`, `[data-count-year]` → année courante) · marquee plein écran couplé vélocité Lenis · hover magnétique (`[data-magnetic]`) · galerie Temple scroll horizontal épinglé (desktop, GSAP pin) / swipe natif (mobile) · `prefers-reduced-motion` = tout statique, Lenis off.

**Interdits :** bleu, dorure, Inter en display, iframe Maps, Google Fonts en `<link>`, hero H1 centré sans effet, cards Tailwind brutes.

---

## 4. Contenu & faits (source = content.ts)

- **Marque :** Iron Gym Limoges, salle old-school **est. 1992**, affaire de famille Hartman (Bernard fondateur → Samuel, WNBF Pro World Champion 2024).
- **Adresse :** 31 rue François Chénieux, 87000 Limoges. **Coords réelles géocodées : lat 45.8368766 / lng 1.2561097.**
- **Tél :** 05 55 79 74 23 (`tel:+33555797423`). **Email :** irongymlimogessports@hotmail.com.
- **Réseaux :** Instagram @irongymlimogessports · Facebook IRONGYMlimoges.
- **Tarifs :** Essai gratuit (ou 5€) · Sans engagement 45€/mois · **Annuel 33€/mois (featured)** · Étudiant 30€/mois · Duo 25€/mois · carnet 10 séances 75€ · 20 séances 120€ · frais d'adhésion unique 39€.
- **Avis Google :** note 4,5 / 105 avis (snapshot public 20/06/2026), 8 avis affichés.
- **Entité légale :** IRON GYM LIMOGES SPORTS, asso loi 1901, SIREN 932 034 580, SIRET 932 034 580 00013, APE 9313Z, hébergeur = Vercel.

### Horaires RÉELS (décision : ce sont les vrais)
- **Accès salle (badge, adhérents) :** 7j/7 · 6h–23h → c'est la source du statut live "Ouvert/Fermé" du header (`contact.accessHours`).
- **Accueil (staff/coaching) :** Lun 14h–20h · Mar 10h–13h & 17h–20h · Mer 14h–20h · Jeu 10h–13h & 17h–20h · Ven 14h–20h · Sam 10h–13h · Dim fermé (`contact.receptionHours`).
- Planning cours (`schedule.days`) = **grille type indicative** (bandeau le précise), dates calculées au runtime.

---

## 5. Décisions (règles) + état d'implémentation

| Décision (règle) | Rationale | État actuel dans le code |
|---|---|---|
| **DA validée** : brutal red/steel, #0A0A0A, Teko/DM Sans/Oswald | cf §3 | ✅ appliqué partout |
| **Horaires réels** : accès 6h–23h 7j/7 ; accueil = grille §4 | vrais horaires salle | ✅ dans content.ts ; statut live basé sur accessHours |
| **Règle carte** : JAMAIS d'iframe Google (cookies RGPD). Carte = **image statique auto-hébergée** (tuiles OSM assemblées, assombrie DA, pin rouge) **cliquable vers Google Maps** | RGPD + perf + DA | ✅ `Contact.astro` + `src/assets/images/map-iron-gym.webp`. Régénération : §7 |
| **Citation non signée** : la pull-quote éditoriale (`heritage.pullQuote` « Ici, on transmet plus qu'une salle… ») reste **sans attribution** | ne pas inventer une citation attribuée | ✅ pullQuote non signée. ⚠️ MAIS `manifesto.signature` = « — Bernard Hartman, fondateur » est encore signée → **si la règle s'étend au manifeste, la retirer (TODO)** |
| **Avis anonymisés** : afficher les avis sans nom de famille complet (prénom + initiale, ex. « Lucas D. ») | RGPD : noms réels de tiers | ❌ **NON appliqué** — `champions.reviews` contient encore les noms complets (Lucas Ducharlet, Matthieu Gaisnon, Romain Pui, Lucas Gres, Lucas Moreau, Tab Marc…). **TODO prioritaire : anonymiser dans content.ts** (garder text/rating/age/localGuide ; le badge "Avis Google" + l'initiale d'avatar restent) |

---

## 6. Décisions techniques notables

- **Tokens Tailwind** : noms hérités V1 (`text-blood` etc.) re-mappés à la nouvelle DA dans `@theme`. `.text-gradient-steel` (≠ utilitaire `text-steel`) pour éviter collision.
- **SplitText sur le hero** : `aria:'none'` obligatoire (sinon aria-label sur `<span>` = violation a11y). Accessibilité portée par h1 `aria-label` + spans `aria-hidden`. Ne PAS mettre de gradient `background-clip:text` sur un élément splitté (devient invisible) → IRON = `text-blood-hi` plein, GYM = `text-steel-hi` plein.
- **Pas de preloader** (retiré : bloquait LCP/Speed Index). `startHero()` lance l'entrée hero direct.
- **Temple** : section `overflow-hidden` obligatoire sinon scroll horizontal parasite desktop (la track large s'échappe de `body{overflow-x:clip}` pendant le pin).
- **Grain** : statique (pas d'animation flicker — coût paint/SI). Keyframe `grain-shift` encore présente mais inutilisée (dead CSS mineur, peut être retirée).
- **Console propre** : `esbuild.drop` en prod retire les `console.*` internes de gsap/lenis.
- **Web3Forms** : clé lue via `import.meta.env.PUBLIC_WEB3FORMS_KEY`. Vide → **fallback mailto** propre (vers fallbackEmail). Fonctionnel sans clé.

---

## 7. Régénérer la carte (si l'adresse/coords changent)

Script ad-hoc (Node, sharp + fetch tuiles OSM, zoom 16, 5×4 tuiles, crop 1100×640, webp) :
- Calculer tile x/y depuis lat/lon, fetcher `https://tile.openstreetmap.org/{z}/{x}/{y}.png` (UA requis), composite sharp, crop centré sur le pixel de la coord, `.webp({quality:80})` → `src/assets/images/map-iron-gym.webp`.
- Géocodage adresse : Nominatim `https://nominatim.openstreetmap.org/search?q=...&format=json` (UA requis).
- Le pin rouge + overlay adresse + badge "Ouvrir dans Google Maps" sont en CSS/HTML dans `Contact.astro` (PAS dans l'image) ; l'image est assombrie via `filter` (`.static-map__img`).

---

## 8. Prochaine étape / TODO (par priorité)

1. **Anonymiser les avis** (`content.ts` → `champions.reviews[].name`) : nom complet → prénom + initiale. Règle décidée, non appliquée. ⚠️
2. **Trancher la signature du manifeste** : retirer « — Bernard Hartman, fondateur » si la règle "citation non signée" s'y applique.
3. **Web3Forms** : le client crée une clé (web3forms.com, liée à irongymlimogessports@hotmail.com, vérif email côté client) → la poser dans Vercel env `PUBLIC_WEB3FORMS_KEY` (redeploy auto). Tant que vide = mailto.
4. **Pages légales = modèles** (bandeau "à faire valider par un juriste") : à faire relire avant usage réel ; `legalEntity.director` = « Bernard Hartman, président » à confirmer.
5. **Domaine** : actuellement `iron-gym-v2.vercel.app`. Si domaine client → mettre à jour `site` dans `astro.config.mjs` + `site.url` dans content.ts + `sitemap.xml` + `robots.txt` (Sitemap:) puis rebuild/redeploy.
6. (Optionnel) retirer la keyframe `grain-shift` inutilisée ; Playwright a été retiré des devDeps (réinstaller `npm i -D playwright @playwright/test && npx playwright install chromium` pour relancer les audits).

---

## 9. Boucle d'audit (reproductible)

```bash
npm run build && npm run preview &           # :4321
node scripts/audit.mjs                        # JSON : overflow/burger/ancres/console + screenshots /tmp/audit/{mobile,tablet,desktop}.png
node scripts/shots.mjs                        # screenshots par section /tmp/shots/{m,d}-{top,heritage,temple,tarifs,contact}.png
# Lighthouse :
npx lighthouse http://localhost:4321/ --quiet --chrome-flags="--headless=new --no-sandbox" --output=json --output-path=/tmp/lh.json            # mobile
npx lighthouse http://localhost:4321/ --preset=desktop ... # desktop
```
Cibles : Lighthouse 95+ mobile ET desktop ; `scrollX=0` aux 3 viewports ; 0 dead anchor ; 0 erreur console ; burger ouvre ; reduced-motion = rendu statique complet.
