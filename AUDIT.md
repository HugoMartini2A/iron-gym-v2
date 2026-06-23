# Audit complet — Iron Gym Limoges

**URL de production :** https://iron-gym-v2.vercel.app
**Date :** 2026-06-23
**Périmètre :** Audit en lecture seule. Aucun fichier du projet n'a été modifié ; seul `AUDIT.md` est écrit.

---

## Résumé exécutif

Iron Gym Limoges est une vitrine premium **prête pour la production sur les fondamentaux** : Lighthouse 96 (mobile) / 100 (desktop) en performance, accessibilité et SEO à 100, Core Web Vitals tous au vert, CSP stricte et RGPD propre (fonts self-hostées, zéro Google Fonts). Les rares réserves sont des **finitions, pas des défauts de build** : ~79 Ko de fonts orphelines livrées au déploiement, JSON-LD `HealthClub` incomplet, et une décision d'indexation à trancher avant mise en prod réelle. **Aucun défaut P0 technique** ; un seul point P0 est une **décision métier** (indexabilité).

**Score moyen technique** (moyenne des 6 domaines hors valorisation : 92, 86, 88, 90, 93, 100) = **91,5 → 92/100**.

| Domaine | Score /100 | Verdict court |
|---|---|---|
| Performance | 92 | Site réellement rapide, CWV tous verts ; restes = hygiène fonts au déploiement, pas de la vitesse runtime |
| Accessibilité | 86 | Fondation a11y solide (LH 100 mérité) ; 2 vrais trous : carrousel planning non atteignable au clavier + validation form muette |
| Marketing / SEO | 88 | Mono-page local techniquement propre ; manque = JSON-LD incomplet + décision noindex à confirmer |
| Technique / Qualité code | 90 | Astro 6 production-grade, TS strict, 0 erreur `astro check` ; défauts = ~79 Ko fonts orphelines + drift de versions |
| Sécurité / AppSec | 93 | Posture sécurité production-grade ; résiduel = `unsafe-inline` sur script-src + drift intention/réalité |
| Liens morts | 100 | Zéro lien mort ou cassé ; 4 pages, 404 brandé, 8 ancres, 5 liens externes, tous résolvent |

---

## États intentionnels

Ces points sont **assumés et documentés** — ils ne doivent **jamais** être comptés comme défauts :

1. **Indexabilité du site (état factuel à clarifier).** Le brief supposait une « maquette noindex », mais **la prod est en réalité pleinement INDEXABLE** : `robots.txt` = `User-agent: * / Allow: /`, **aucune** balise `<meta name="robots" noindex>`, **aucun** header `X-Robots-Tag` (vérifié en live), Lighthouse SEO = 100. Un commentaire `Contact.astro:18`/`185` mentionne encore une « maquette noindex ». **Décision à prendre avant mise en prod réelle** : soit ajouter un `noindex` temporaire tant que le sous-domaine `.vercel.app` n'est pas remplacé par le domaine client (l'entité légale est encore en placeholder), soit assumer explicitement l'indexabilité et remplir d'abord les placeholders légaux.
2. **Clé Web3Forms publique inline.** La clé `be188250-…` dans `Contact.astro` est une clé d'accès **publique par design** (Web3Forms), pas une fuite de secret. `.env` est gitignoré ; `/.env` renvoie 404 en prod.
3. **Placeholders d'entité légale.** Les mentions `[À COMPLÉTER À LA SIGNATURE]` et le pied de page « Maquette de présentation — non contractuelle » sont **intentionnels** jusqu'à la signature du contrat.

---

## 1. Performance — 92/100

**Verdict :** Site réellement rapide (Lighthouse mobile 96 / desktop 100, CWV tous verts). Les seuls gains restants relèvent de l'hygiène des fonts au déploiement et de la couverture des preloads, pas de la vitesse d'exécution.

**Détails (chiffres réels) :**
- **Lighthouse mobile** perf 96 : LCP 2,1 s · FCP 1,8 s · CLS 0 · TBT 70 ms · TTI 2,1 s · SpeedIndex 4,0 s.
- **Lighthouse desktop** perf 100 : LCP 0,6 s · FCP 0,5 s · CLS 0,001 · TBT 0 ms · SI 0,7 s. **Tous les Core Web Vitals passent** sur les deux formats.
- **Poids total maîtrisé** : 253 Ko transférés / 15 requêtes (identique mobile + desktop). Plus gros postes : JS 62 Ko, hero `samuel-scene.webp` 43 Ko, HTML 29,5 Ko, puis fonts et `bernard-scene.webp` 14 Ko.
- **JS = un seul chunk** `Layout.astro_…BMTHaN4_.js` : 155,6 Ko non compressé → 59,2 Ko gzip / 62 Ko transfert. Contenu : GSAP 3.13 + ScrollTrigger + SplitText + Lenis 1.3 + logique applicative. Aucun `import()` dynamique : tout est chargé et exécuté eagerly (~29 Ko inutilisés au premier paint, ~150 ms `unused-javascript`).
- **Fonts :** `global.css` déclare exactement **8 `@font-face`** (teko-500/700, dmsans-400/500/700, oswald-500/600/700), tous en `font-display:swap`. Les 8 woff2 se téléchargent réellement sur la home (~107 Ko). **Seuls teko-700 + dmsans-400 sont en `<link rel=preload>`** (`Layout.astro:54-55`, vérifié) ; les 6 autres sont découvertes tardivement.
- **CSS entièrement inlinée** dans le HTML (aucune requête CSS bloquante). Grain + godrays sont du **CSS pur** (SVG `feTurbulence` inline + gradient opacity-25), **pas du WebGL** — aucun `<canvas>` — et correctement bridés par `prefers-reduced-motion`.
- Le **SpeedIndex 4,0 s mobile** (vs LCP 2,1 s) est dû au travail thread principal (~2,2 s, dont 0,5 s d'init GSAP/SplitText) + la fenêtre de swap des 6 fonts non préchargées sur CPU mobile throttlé — un artefact CPU/découverte de fonts, pas un problème de payload (desktop : TBT 0 ms, SI 0,7 s).

**Défauts :** 6/8 fonts non préchargées (P1) ; 78,9 Ko de woff2 orphelines livrées (P1) ; bundle JS monolithique de 62 Ko chargé eagerly (P2) ; iframe Maps embarquée au chargement et non différée au clic (P2).

---

## 2. Accessibilité — 86/100

**Verdict :** Fondation a11y solide et délibérée (Lighthouse 100 mérité, pas gamé) : contrastes, alt et burger excellents. Deux vrais trous subsistent : carrousel planning non atteignable au clavier et validation de formulaire muette pour les lecteurs d'écran.

**Détails (chiffres réels) :**
- **Contrastes calculés** (composités sur fond réel `#0A0A0A` / carte `#121214`) : tout le corps de texte passe WCAG 1.4.3 AA (≥ 4,5:1) — haze/70 8,42:1, haze/55 5,43-5,51:1 (le plus bas utilisé), bronze `#9aa0a8` 7,10-7,51:1, blood-hi `#ed5340` 5,27-5,57:1. Le blood plein `#c0392b` (3,64:1) n'est jamais utilisé en petit texte (vérifié : zéro usage `text-blood` non-hi).
- **Burger (fix Part-1) correct :** re-clic pour fermer, `aria-expanded` togglé, `aria-label` Ouvrir/Fermer, `aria-controls="mobile-menu"`, focus trap Tab/Shift+Tab, Escape ferme, scroll-lock Lenis, focus rendu au toggle à la fermeture, menu en `hidden` (retiré de l'arbre a11y).
- **Carrousel Pricing (fix Part-1) correct :** `.pricing-track` a `tabindex=0` + `aria-label`, focusable et défilable aux flèches ; CTAs réels `<a>`. Exactement une carte « Aussi disponible » dans l'arbre par breakpoint.
- **Reduced-motion best-in-class :** si `prefers-reduced-motion`, pas de Lenis, révélations forcées à `opacity:1`, compteurs écrits en valeur finale ; SplitText en `aria:'none'`. Structure : `lang`, `<h1>` unique, landmark `<main>`, `<nav aria-label>`, badge ouvert/fermé en `aria-live="polite"`.

**Défauts :** carrousel planning non atteignable au clavier sous 1024px — `data-schedule-track` (`Schedule.astro:34-35`) sans `tabindex` ni `aria-label`, cartes sans enfant focusable (**vérifié** : 0 tabindex) (P1) ; erreurs de validation non annoncées (pas de `role`/`aria-live`/`aria-invalid`) (P1) ; pas de skip link vers le contenu (P2) ; confirmation de succès non annoncée (P2) ; inputs perdant le ring `:focus-visible` (`.field__input:focus { outline:none }`, `global.css:745`) (P2).

---

## 3. Marketing / SEO — 88/100

**Verdict :** Mono-page local techniquement propre, prêt sur les fondamentaux (LH SEO 100, CWV verts, NAP cohérent). Seul vrai manque : JSON-LD `LocalBusiness` incomplet (toutes les données manquantes existent déjà dans `content.ts`), plus la décision d'indexabilité à confirmer.

**Détails (chiffres réels) :**
- **Hiérarchie Hn correcte :** exactement un `<h1>` (« IRON GYM »), plan H2 propre, H3 logiques, aucun niveau sauté.
- **Title** « Iron Gym Limoges — Musculation & coaching depuis 1992 » = 54 caractères (idéal 50-60). Canonical auto-référencé. **OG complet** (type, locale `fr_FR`, title, desc, image `og.webp` 1200×630 live 200). Twitter `summary_large_image`.
- **NAP cohérent** sur les 3 sources : `content.ts` (31 rue François Chénieux, `+33555797423`), JSON-LD rendu, et pages légales. `geo` 45.8368766/1.2561097, `foundingDate` 1992, `sameAs` [Instagram, Facebook].
- **`sitemap.xml`** valide : 4 URLs (/, mentions-legales, confidentialite, cgv), mais **sans `<lastmod>`**.

**Défauts :** **JSON-LD `HealthClub` manque 4 propriétés** — `openingHoursSpecification`, `priceRange`, `image`, `aggregateRating` — **vérifié** (`Layout.astro` ne contient aucune de ces clés), alors que les valeurs existent dans `content.ts` (P1) ; **décision d'indexabilité à confirmer** (P0, voir États intentionnels) ; meta description ~172 caractères (risque de troncature SERP mobile sur « Essai offert. »), `og:image:alt` défini mais non rendu, `sitemap` sans `lastmod` (P2).

---

## 4. Technique / Qualité code — 90/100

**Verdict :** Codebase Astro 6 production-grade : TS strict, 0 erreur `astro check`, hygiène image/CSP/perf exemplaire. Seuls vrais défauts : ~79 Ko de fonts orphelines déployées et un léger écart entre `package.json` et les versions installées.

**Détails (chiffres réels) :**
- **TypeScript strict** (tsconfig `astro/strict` + `strict:true` + `verbatimModuleSyntax`). `astro check` = **0 erreur / 0 warning / 0 hint** sur 33 fichiers.
- **`npm audit` = 7 vulnérabilités** (2 low, 5 moderate, **0 high/critical**), **toutes** dans la chaîne dev/build (esbuild dev-server Windows-only via astro ; yaml via `@astrojs/check`) — **zéro exposition runtime** (sortie SSG statique).
- **Pipeline image exemplaire :** `<Image>` astro:assets, glob eager, aspect-ratio réservé, `loading` eager/lazy + `decoding=async` — explique CLS 0 / 0,001.
- **Console prod propre par construction** : `vite.esbuild.drop=['console','debugger']`. Client JS null-guardé partout. CSS inlinée via `build.inlineStylesheets:'always'`.
- **GSAP 3.15.0 installé** (pin `^3.13.0`) — léger drift ; `SplitText.js` présent dans le core gsap, aucun risque licence/runtime.

**Défauts :** **~79 Ko de fonts orphelines** — `dm-sans.woff2` (36 932 o) + `oswald.woff2` (28 488 o) + `teko.woff2` (15 420 o) = 80 840 o git-trackées et livrées mais **0 référence** dans `global.css` (**vérifié** : `grep -c` = 0) (P1) ; **image orpheline** `public/logo-iron-gym.jpg` (**vérifiée présente**, 0 référence ; le `.webp` est utilisé 4×) (P2) ; drift de versions `package.json` vs installées (P2) ; JSON-LD incomplet (P2) ; findings npm audit dev-toolchain non épinglés (P2).

---

## 5. Sécurité / AppSec — 93/100

**Verdict :** Posture sécurité production-grade pour une vitrine statique : CSP stricte, suite complète de headers, aucune fuite de secret, formulaire protégé par honeypot, tous les liens externes durcis. Seuls résidus : `unsafe-inline` sur script-src (atténuable) et un drift intention/réalité (noindex + carte cookieless).

**Détails (chiffres réels) :**
- **Secrets :** grep `api-key/secret/token/password/bearer` = **0 match** au-delà de la clé Web3Forms publique. `.env` gitignoré ; `/.env` → 404 live ; aucun `.map` en `dist/` ; aucun `sourceMappingURL`.
- **Liens externes durcis :** les 5 ancres `target="_blank"` portent toutes `rel="noopener noreferrer"` (source ET `dist`) — zéro reverse-tabnabbing.
- **Anti-spam form :** honeypot Web3Forms (`botcheck` hidden, `tabindex=-1`, `aria-hidden`) + validation client (nom ≥2, tel regex, email regex, message ≥10, consentement requis). Pas de CAPTCHA (acceptable pour faible volume).
- **Headers (vercel.json = live, vérifié) :** CSP `default-src 'self'`, HSTS 1 an `includeSubDomains`, `X-Frame-Options DENY`, `frame-ancestors 'none'`, `nosniff`, `Referrer-Policy strict-origin-when-cross-origin`, `Permissions-Policy` verrouillée, `object-src 'none'`, `base-uri 'self'`, `form-action` limité à self + web3forms, `connect-src` scopé à `self` + `api.web3forms.com`.

**Défauts :** **CSP `script-src 'self' 'unsafe-inline'`** (**vérifié**) neutralise la protection XSS de la directive — durcissable via hashes SHA-256 des scripts inline (surface XSS actuelle minimale, donc P1) ; **drift intention/réalité** (P2) — le commentaire `Contact.astro:18` dit « Chargé UNIQUEMENT au clic sur la façade (data-map-reveal) » mais **lignes 192-199 l'iframe `src={mapEmbedUrl}` est rendue directement** (`loading="lazy"` seulement, **vérifié**), donc des cookies tiers Google peuvent être posés avant consentement sur un site indexable servant des utilisateurs UE : restaurer la façade au clic ou ajouter un `noindex` ; pas de CAPTCHA (P2, à surveiller post-launch).

---

## 6. Liens morts — 100/100

**Verdict :** Zéro lien mort ou cassé. Les 4 pages internes, le 404 personnalisé, les 8 ancres in-page, les 5 deep-links externes et tous les assets référencés résolvent correctement.

**Détails (chiffres réels) :**
- **Pages internes (curl) :** `/` 200, `/mentions-legales` 200, `/confidentialite` 200, `/cgv` 200. `/does-not-exist` → 404. Les 4 URLs du sitemap atteignables (**robots/headers re-vérifiés en live**).
- **404 brandé :** `/does-not-exist` rend la page d'erreur Iron Gym (`<title>Page introuvable — Iron Gym Limoges</title>`, lien « Retour » vers `/`) — pas un 404 Vercel générique.
- **Ancres :** les 8 hrefs (`#top #heritage #manifeste #programmes #temple #tarifs #avis #contact`) ont une cible `id` correspondante. Aucune ancre orpheline.
- **Liens externes (curl -sIL) :** Instagram `irongymlimogessports` 200, Facebook `IRONGYMlimoges` 200, Maps directions 200, Maps search 200, CNIL 200. `tel:+33555797423` valide et cohérent NAP.
- **Assets :** favicons, `dmsans-400.woff2`, `teko-700.woff2`, `og.webp` tous 200. `mailto` légal intentionnel (le commit `4cebad0` n'a retiré que le fallback mailto du formulaire).

**Défauts :** aucun.

---

## Valorisation

**(a) Valeur marché — agence FR :** **8 000 – 16 000 € HT.** Ce build relève du segment vitrine **premium 100 % sur-mesure** (10-25 k+), pas du template : DA bespoke (tokens acier/rouge sang, 3 familles de fontes self-hostées, grain métallique CSS), moteur GSAP+Lenis maison (~675 lignes : split-text char-by-char, galerie horizontale pinnée, marquee couplé à la vélocité du scroll, boutons magnétiques, count-ups, parallaxe, scroll-progress), 3 carrousels, formulaire Web3Forms validé, statut live ouvert/fermé, planning hebdo généré en JS, carte Google Maps (façade cookieless à réactiver pour la prod — cf. P1), SEO/JSON-LD/OG. Charge agence réaliste 17-24 j à 500-650 €/j → ~8 000-16 000 € facturés (plancher = freelance senior efficace ; haut = agence parisienne).

**(b) Positionnement CRUX :**
- **Devis création : 4 500 – 6 500 € HT** (point milieu recommandé **5 500 €**). Estimation par les heures au taux CRUX **95 €/h** : ~50-68 h de production effective (DA+tokens 8 h, 13 composants Astro + 4 pages 18-22 h, moteur motion GSAP/Lenis 12-16 h, formulaire+validation+intégration carte 6 h, SEO/JSON-LD/OG/perf 6 h, copy éditoriale FR + intégration 6-8 h). 50 h × 95 = 4 750 € ; 68 h × 95 = 6 460 €. Clairement au-dessus du freelance no-code (1 500-2 000) et nettement sous l'agence premium (10-25 k) à qualité équivalente. 4 500 € = prix plancher signature rapide ; 6 500 € si shooting photo / pages additionnelles entrent dans le scope.
- **Maintenance : palier Évolutif — 149 € HT/mois** (engagement 12 mois). ~1,5 h/mois au taux 95 €/h : héberg./uptime/SSL, MAJ deps (les 2 low + 5 moderate dev à tenir à jour), monitoring Lighthouse/CWV, sauvegardes, + forfait de petites évolutions éditoriales mensuelles (tarifs, planning hebdo, snapshot avis Google 4,5/105, swap photos du Temple, complétion JSON-LD). Le palier Sérénité (79 €) ne couvre que « le site en ligne qui ne casse pas » — insuffisant vu le moteur d'animation custom, les 3 carrousels et le formulaire transactionnel. Premium (279 €) serait surdimensionné (pas de back-office ni d'e-commerce). *Recommander Sérénité uniquement si le client gère lui-même planning et tarifs via `content.ts`.*

---

## Défauts priorisés

**Aucun défaut P0 technique — site prod-ready sous réserve des P1.** Le seul P0 est une décision métier.

### P0 (décision avant mise en prod)
- **[SEO / Sécurité]** Le site est **pleinement indexable en prod** (robots `Allow:/`, aucun `noindex`, aucun `X-Robots-Tag` — vérifié) alors qu'il s'agit d'une maquette pré-signature sur `.vercel.app` (entité légale en placeholder, pied de page « non contractuelle ») — *trancher : ajouter un `noindex` temporaire (meta + `X-Robots-Tag` via `vercel.json`) jusqu'au passage sur le domaine client, ou assumer l'indexabilité et remplir d'abord les placeholders légaux ; basculer canonical/OG/sitemap sur le domaine de prod au lancement.*

### P1
- **[Performance]** 6/8 fonts non préchargées → flash de swap qui gonfle le SpeedIndex mobile — *ajouter `<link rel=preload as=font crossorigin>` pour les faces above-the-fold (au minimum teko-500, dmsans-500/700, oswald-700) dans `Layout.astro`, ou self-host moins de graisses.*
- **[Performance / Technique]** ~79 Ko de woff2 orphelines livrées (`dm-sans.woff2` + `oswald.woff2` + `teko.woff2` = 80 840 o, 0 référence — vérifié) — *supprimer ces 3 fichiers de `public/fonts/` (les copies `dist/` se régénèrent au build) ; aucun changement visuel.*
- **[Accessibilité]** Carrousel planning non atteignable au clavier sous 1024px (`Schedule.astro:34-35`, 0 tabindex — vérifié) — *appliquer le même fix que Pricing : `tabindex="0"` + `aria-label="Planning de la semaine — défilement horizontal sur mobile"` sur `data-schedule-track`.*
- **[Accessibilité]** Erreurs de validation du formulaire non annoncées aux lecteurs d'écran — *donner un `id` à chaque `<p class="field__error">`, ajouter `role="alert"`, câbler `aria-describedby` sur chaque input, toggler `aria-invalid` dans `setError()`.*
- **[SEO]** JSON-LD `HealthClub` privé de `openingHoursSpecification`, `priceRange`, `image`, `aggregateRating` (vérifié absent de `Layout.astro`) — *enrichir l'objet `jsonLd` depuis `content.ts` (horaires 07:30-23:00, `priceRange '€€'`, image OG absolue ; `aggregateRating` 4,5/105 uniquement car la note est visible on-page).*
- **[Sécurité]** CSP `script-src` autorise `'unsafe-inline'` (vérifié) — *remplacer par des hashes SHA-256 des blocs `<script>` inline (contenu build-time-statique, hashable) ; garder `'unsafe-inline'` sur `style-src` uniquement.*

### P2
- **[Performance / Technique]** Bundle JS unique de 62 Ko (GSAP+ScrollTrigger+SplitText+Lenis) chargé eagerly, ~29 Ko inutilisés au premier paint — *lazy-load le motion non critique (Lenis, SplitText, CTA magnétiques) derrière un `import()` dynamique sur premier scroll/interaction ou `requestIdleCallback`.*
- **[Performance / Sécurité]** Iframe Google Maps embarquée au chargement et non différée au clic (`Contact.astro:192-199`, le commentaire ligne 18 affirme l'inverse — vérifié) — *restaurer la façade cliquable cookieless conforme à la MEMORY (les deep-links directions/search existent déjà) pour honorer le consentement préalable RGPD ; impact perf faible (below-fold, lazy).*
- **[Accessibilité]** Pas de skip link vers `<main>` — *ajouter un `<a href="#top" class="sr-only focus:not-sr-only">Aller au contenu</a>` comme premier élément focusable.*
- **[Accessibilité]** Confirmation de succès du formulaire non annoncée — *ajouter `role="status" aria-live="polite"` sur `[data-form-success]`.*
- **[Accessibilité]** Inputs perdant le ring `:focus-visible` (`global.css:745`, `outline:none`) — *remplacer par `.field__input:focus-visible { outline:2px solid var(--color-blood-hi); outline-offset:1px; }`.*
- **[SEO]** Meta description ~172 car. (risque troncature SERP mobile), `og:image:alt` non rendu, `sitemap.xml` sans `lastmod` — *réduire `site.description` à ~155 car., rendre `og:image:alt` + `twitter:image:alt`, ajouter `<lastmod>`.*
- **[Technique]** Image orpheline `public/logo-iron-gym.jpg` (vérifiée présente, 0 référence) — *supprimer ; seul le `.webp` est utilisé (4×).*
- **[Technique]** Drift de versions `package.json` (`gsap ^3.13` vs 3.15.0 installé) — *`npm update`, bumper les pins, committer `package-lock.json`.*
- **[Technique / Sécurité]** 7 findings `npm audit` dev-toolchain (transitifs, 0 runtime) non épinglés — *documenter le risque accepté ou `npm audit fix` (sans `--force`).*
- **[Sécurité]** Pas de CAPTCHA sur le formulaire public (honeypot seul) — *suffisant à faible volume ; activer hCaptcha Web3Forms si du spam apparaît post-launch.*

---

## Verdict final

Iron Gym Limoges est une **vitrine premium de finition agence**, livrée via une structure studio CRUX, dans le quartile supérieur des sites vitrines artisanaux français : Lighthouse 96-100 partout, CWV tous verts, a11y 100, CSP stricte, RGPD propre et un moteur d'animation GSAP/Lenis sur-mesure de ~675 lignes. **Aucun défaut P0 technique** — le site est prod-ready sous réserve des P1 (preload fonts, fonts orphelines, clavier planning, annonces de validation, JSON-LD, durcissement CSP). Le seul P0 est une **décision métier** : trancher la politique d'indexation et basculer sur le domaine client avant la mise en prod réelle. Devis création recommandé **5 500 € HT** (4 500-6 500), maintenance **Évolutif 149 € HT/mois** — score global **88/100**, plafonné uniquement par le SEO structuré incomplet et la politique d'indexation à arbitrer.
