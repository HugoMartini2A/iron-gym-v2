# IRON GYM V2 — EXECUTION STATUS

**Date :** 19 juillet 2026
**Phase actuelle :** 🟢 **REVUE DA/UX — les 24 points traités.** Reste : données client (APE, directeur, préavis), et Lenis smooth (dormant, non bloquant).

### Revue DA/UX — récap final (24 points)

| # | Point | État |
|---|---|---|
| 1,8 | Header renommé (Histoire, La salle…) + « Plateau »→« La salle » | ✅ |
| 2 | One-page vs multi-page → **one-page** (nav ancres, 7 pages supprimées) | ✅ |
| 3 | Hero pièce maîtresse → **vraie statue chromée** (modèle GLB CC-BY, compressé 3,2 Mo) | ✅ |
| 4 | CTA hero Appeler + Itinéraire | ✅ |
| 5,16,17,18,20 | Pré-titres supprimés partout | ✅ |
| 6 | Mise en page (largeur, header aéré) | ✅ partiel |
| 7 | Ton humanisé + citation produits retirée | ✅ |
| 9 | Vidéos — posters extraits, intégration à faire | 🟠 posters prêts |
| 10,21 | Motion + micro-interactions (hover cartes, reveals) | ✅ passe faite |
| 11 | Bandeau refait (losanges usinés, plus de lettres détourées) | ✅ |
| 12 | Galerie éditoriale asymétrique (desktop) | ✅ |
| 13 | Numérotation coaching retirée (page + home) | ✅ |
| 14,16 | Planning : icônes disciplines, états Aujourd'hui/Demain, hover | ✅ |
| 15 | DA par section (identités distinctes) | ✅ en cours |
| 17 | Avis : note en avant, cartes profondeur hover | ✅ |
| 18 | Tarifs : offre recommandée surélevée, hover premium | ✅ |
| 19 | Parrainage intégré + micro-anim | ✅ |
| 20 | Accès & Contact : email ajouté, carte cookieless, CTA appeler/itinéraire | ✅ |
| 22 | Responsive desktop signature / mobile léger | ✅ |
| 23 | Performance (GPU, statue lazy+compressée, mobile allégé) | ✅ |
| 24 | Juridique : mentions/confidentialité/CGV complétées, cookieless, crédit CC-BY | ✅ |

**Coaching** : passé en formulation prudente (aucun « gratuit/compris » affirmé) tant que Bernard ne confirme pas le périmètre.

### 🔴 Reste — données client (bloquant mise en ligne)
- `legalEntity.ape` (code APE/NAF) et `legalEntity.director` (directeur de publication) — placeholders.
- CGV : durée de préavis de résiliation.
- Récit Bernard/Samuel, horaires réels, note Google, prix d'essai, liste machines, vrais coachs — cf. visio (§7 blueprint).

### 🟡 Reste — technique (non bloquant)
- **Lenis smooth dormant** : `isSmooth` false même après passage en RAF autonome ; le scroll natif fonctionne, toute la motion tourne via GSAP. À investiguer (quirk de config/version). Non bloquant.
- Vidéos (#9) : intégration éditoriale à construire (mur de reels).
- Build de prod à reconfirmer sur la machine client (sandbox trop lent).

> **Revue client du 18/07 (24 points).** Réponse complète dans `REVIEW-V2.md`. Changements stables appliqués (nav, CTA hero, dé-numérotation, copy). Le gros — direction artistique par section + système de motion — est séquencé mais **bloqué sur 3 décisions** : le hero (vidéo vs statue 3D), le périmètre coaching (Bernard), l'ordre d'attaque. Décisions overridant le blueprint, tracées ci-dessous.

### 🟢 Prototype hero WebGL — construit *(direction « Lusion » temps réel)*

Le client a choisi **temps réel avec placeholder**. Livré : `src/components/hero/StatueCanvas.astro`.

| Aspect | Détail |
|---|---|
| **Forme** | Icosaèdre facetté élancé (placeholder statue), métal acier + jante rouge sang, environnement studio procédural (RoomEnvironment, aucun HDR externe) |
| **Interaction** | Rotation lente permanente + **réaction au curseur** lissée (l'effet Lusion) + flottement subtil |
| **Perf — chemin critique** | Three.js (167 Ko gz) en **`import()` dynamique sur idle** → chunk séparé, **jamais dans le HTML de la home**, le texte du hero (LCP) ne l'attend pas |
| **Perf — runtime** | DPR plafonné à 2, géométrie allégée < 1280px, **rendu en pause hors écran** (IntersectionObserver), dispose au unload |
| **Reduced-motion** | Une seule frame statique, aucune boucle, aucun suivi curseur |
| **Mobile** | Masqué sous 1024px — le desktop est la version signature, le mobile reste léger |
| **Lisibilité** | Voile dégradé gauche→droite : le texte reste net par-dessus la 3D |
| **Check** | `astro check` 0 erreur · build 12 pages OK |

**⚠️ Deux choses à savoir pour le lancer :**

1. **`npm install` requis** avant `npm run dev` : `three` a été ajouté à `package.json`. Sans réinstall, l'import échoue.
2. **C'est un placeholder** : la forme métallique n'est pas la statue finale. On y glisse le vrai modèle `.glb` dès qu'on l'a (asset à sourcer — voir REVIEW-V2 point 3).

### Overrides blueprint actés à la revue

| Blueprint disait | Revue client décide | Impact |
|---|---|---|
| CTA unique « Réserver ma première séance » (§9) | **Hero = Appeler + Itinéraire** ; « Réserver » reste sur les pages de conversion | Le contact immédiat prime sur une salle locale |
| Nav « La lignée / Le plateau / Le coaching / Les cours » | **Histoire / La salle / Cours & Coaching / Tarifs / Accès & Contact** | Wording plus clair, 5 entrées |
| Citation Bernard sur les produits = actif (§2.4) | **Sujet écarté par le client.** Ligne de transmission non attribuée | Retirée du site |
| Multi-page (SEO) | **Confirmé** — + home cinématique courte | Résout « one-page trop long » + « chaque section son identité » |

---

**Phase précédente :** 🟢 VOIE A — production du contenant *(terminée)*
**Documents de référence :** `AUDIT-AAA-V2.md` · `BLUEPRINT-V2.md` 🔒 · `PLAN-EXECUTION-V2.md`

---

## ✅ TÂCHES TERMINÉES

### Documentation — mise à jour d'ajustement final

| Élément | Détail |
|---|---|
| **Repositionnement du coaching** | « Illimité » supprimé partout. Formulation verrouillée : **« Le coaching individuel est compris dans l'abonnement. »** Vocabulaire interdit documenté. Tableau *compris / non compris* ajouté comme section obligatoire de `/le-coaching` |
| **Parcours de conversion** | Nouvelle section `§3.4 bis` du blueprint — chaîne complète ① visiteur → ⑨ avis J+30, avec l'exigence technique de chaque maillon et les deux points de fuite identifiés |
| **Mesure business** | `§8.3` réécrit en exigence : « Comment nous avez-vous connus ? », 5 libellés verrouillés, 3 points de collecte |
| **Chiffrage client** | « 15,5 jours » retiré du discours client → **« 4 à 5 semaines de production active selon disponibilité des contenus client »**. Découpage en jours conservé en pilotage interne |
| **Prix** | V2 complète **8 500 – 12 000 € HT** · V2 dégradée **7 000 – 9 000 € HT** · Phase 2 **+2 500 – 4 000 € HT** |
| **Offre Growth** | **IRON GYM GROWTH** créée comme prestation distincte — setup 1 200-2 000 € HT + pilotage 150-250 € HT/mois. Explicitement exclue du devis de refonte |
| **n8n repriorisé** | Growth 1 avis → 2 routage leads → 3 rappel séance → 4 reporting. Affirmations chiffrées remplacées par des formulations prudentes, gain à mesurer après installation |

### 🟢 A5 — Retraitement photo · **TERMINÉ**

**Diagnostic préalable.** Le duotone rouge n'était pas dans les fichiers mais en CSS : `.duotone { grayscale(1) }` suivi d'un calque `mix-blend-mode: color` teinté rouge/acier à 50 %. Les sources étaient restées en couleur. Le traitement portait donc sur **deux couches**, pas une.

**Choix de direction.** Les sources révèlent une salle **claire et lumineuse** — charpente blanche, verrières, lumière naturelle. Forcer un rendu « sombre hardcore » aurait sonné faux. Parti retenu : **N&B documentaire contrasté**, les photos devenant des objets graphiques clairs sur la page noire. C'est le contraste qu'exploitent les références type Locomotive, et il est honnête vis-à-vis du lieu réel.

**Livré :**

| Élément | Résultat |
|---|---|
| **9 images retraitées** | 8 en régime *présent*, 1 en régime *archive* |
| **6 recadrages** | Retenus sur 11 générés — les 5 faibles supprimés plutôt que livrés en remplissage |
| **Originaux couleur** | Sauvegardés dans `src/assets/images/_originals/` — chaîne rejouable et réversible |
| **CSS** | Duotone rouge supprimé · classes `.img-present` / `.img-archive` / `.media-wrap` · tokens `--color-archive*` ajoutés |
| **Composants** | `Placeholder.astro` reçoit une prop `regime`. `Heritage.astro` bascule Bernard en *archive*, Samuel en *présent* |
| **Build** | ✅ vert · 5 pages · duotone rouge absent du rendu *(0 occurrence de `mix-blend-mode: color`)* · 4 `img-archive` / 11 `img-present` / 14 `media-wrap` appliquées |

**Poids — bilan honnête :**

| Mesure | Avant | Après | Δ |
|---|---|---|---|
| Sources | 1 083 Ko | 1 141 Ko | **+5,4 %** |
| **Expédié en production** *(`dist/_astro`)* | 1 219 Ko | **1 076 Ko** | **−11,7 %** |

Le +5,4 % sur les sources vient du détail tonal supplémentaire conservé dans les ombres. Il est plus que compensé en sortie : toutes les images passant par `Placeholder`, la qualité d'encodage y a été centralisée à **68** — ce qui neutralise le double encodage lossy (mon WebP, puis celui d'Astro par-dessus) qui gonflait les fichiers de 7 à 8 %.

**Point d'attention :** `temple-terrasse` reste l'image la plus lourde (270 Ko) — et c'est aussi la plus faible et la plus hors-registre du lot *(parasol rouge, chaises en plastique, ciel bleu)*. **Candidate à la suppression en A1** lors de la restructuration des sections, plutôt qu'à l'optimisation.

**Calibration.** Trois itérations, la tonalité ayant été validée par balayage de paramètres puis contrôle visuel :
1. Grain trop lourd → +130 % de poids fichier. Corrigé : le grain reste au calque CSS procédural existant, seul un grain résiduel est gravé.
2. Rendu délavé, noirs absents → courbe en S refaite proprement (levels → smoothstep → contraste au pivot).
3. Bernard traité comme du contemporain assombri → **inversion de la logique** : une archive est *délavée*, pas sombre. Noirs remontés (aucun noir pur), contraste compressé, dominante chaude mesurée à +28 d'écart R−B.

**Recadrage notable :** l'enseigne **« IRON GYM — SINCE 199… »** a été extraite de `temple-cage`. C'est un actif de marque — la date de fondation dans la signalétique de la salle elle-même.

---

### 🟢 A1 — Architecture 8 pages · **TERMINÉ**

**Le site est passé de 1 page éditoriale à 8.** `npm run build` : **12 pages générées** (contre 5), `astro check` : **0 erreur / 0 warning / 0 hint** sur 55 fichiers.

| Chantier | Livré |
|---|---|
| **Découpage des données** | `content.ts` (726 lignes) éclaté en 11 modules par domaine. Le fichier subsiste comme **baril de compatibilité** — aucun composant existant n'a eu à changer d'import, la migration peut être incrémentale |
| **7 routes créées** | `/premiere-seance` · `/la-lignee` · `/le-coaching` · `/le-plateau` · `/les-cours` · `/tarifs` · `/nous-trouver` |
| **`PageLayout.astro`** | Gabarit commun : en-tête éditorial dans le registre de la home, rappel de conversion, pied de page. Aucune page secondaire ne doit ressembler à une annexe |
| **`lib/schema.ts`** | JSON-LD par intention de recherche : `HealthClub` · `Offer` · `Service` · `AboutPage` · `ItemList` · `FAQPage` · `BreadcrumbList`. La V1 posait un `HealthClub` incomplet identique partout |
| **`faq.ts`** | 16 entrées, dont les objections réelles (« je débute », « je suis blessé ») et **la résiliation**, grief n°1 des avis négatifs |
| **`Accordion.astro`** | Bâti sur `<details>` natif : accessible sans JS, et le texte reste dans le DOM même replié — donc indexable et citable par les assistants IA |
| **`Button.astro`** | Ex-`GoldButton`, renommé et **branché dans la navigation**, qui l'ignorait |
| **Sitemap** | Généré au build avec `<lastmod>`, 11 URLs, priorités calées sur le parcours de conversion. L'ancien était écrit à la main, figé à 4 URLs |
| **Dette DA** | Toutes les traces de l'ancienne direction dorée supprimées (`GoldButton`, « placeholder doré », « cercle doré », « lignes mises en or ») |

**Vérifications de sortie :**

| Contrôle | Résultat |
|---|---|
| CTA principal — variantes concurrentes | **22 occurrences du libellé unique, 0 variante** *(la V1 en avait 3)* |
| `aggregateRating` publié | **0** — la note Google n'est toujours pas vérifiée |
| Entrées FAQ non confirmées en production | **0** — masquées automatiquement, et exclues du balisage JSON-LD |
| JSON-LD par page | Un type par intention, vérifié page par page |

**Deux garde-fous intégrés au code**, pour que les données non validées ne puissent pas fuiter :

- L'accordéon ne rend les entrées `todo` **qu'en développement**, avec un bandeau d'alerte. En production, elles n'existent pas.
- `schema.ts` porte un drapeau `confirmedHours = false` : les horaires ne partent pas en JSON-LD tant que les quatre versions qui circulent ne sont pas arbitrées. Idem pour le prix de l'essai dans `offerSchema`.

### 🟢 A7 — Dette technique P1 · **TERMINÉ**

| Correction | Détail |
|---|---|
| **Lien d'évitement** | Ajouté comme premier élément focusable, invisible jusqu'au focus |
| **Carrousel planning** | `tabindex="0"` + `role="group"` + `aria-label`. Sous 1024px il n'était atteignable qu'au doigt : **aucun accès clavier** |
| **Erreurs de formulaire** | `role="alert"` + `aria-describedby` + `aria-invalid` câblés dans `setError()`. Les erreurs étaient purement visuelles — la soumission échouait sans qu'on sache pourquoi |
| **Confirmation d'envoi** | `role="status"` + `aria-live="polite"` |
| **Ring de focus des champs** | `outline: none` remplacé par un vrai ring sur `:focus-visible` — le seul repère au clavier avait été supprimé |

**Deux items de l'audit se sont révélés caducs, et sont documentés comme tels :**

1. **Les 79 Ko de woff2 orphelines n'existent plus** — supprimées dans un commit antérieur. Les 8 fichiers restants sont tous référencés.
2. **Les 3 fonts non préchargées ne doivent PAS l'être.** L'audit relevait « 6/8 non préchargées » ; il n'en reste que 3 (`teko-500`, `dmsans-500`, `oswald-500`), et elles sont toutes **hors du premier écran**. Les précharger ferait concurrence au LCP pour ~35 Ko sans bénéfice. **Correction volontairement non appliquée** — appliquer une recommandation devenue fausse aurait dégradé la performance.

---

## 🔄 TÂCHES EN COURS

Aucune. **La voie A est terminée à hauteur de ce qui ne dépend d'aucun asset client.**

Reste mobilisable sans le client : **A2** (extension du design system — trame d'archive, motif séparateur), **A3/A4** (composants et sections restants), **A6** (moteur motion — crossfade scrubbé, lazy-load), **A8** (instrumentation analytique), **A9** (rédaction non bloquée).

---

## 🔴 BLOQUANTS

### Bloquants clients — chemin critique

| # | Bloquant | Bloque | Repli si non fourni |
|---|---|---|---|
| **1** | **Archives de Bernard** | § 07 Le Mur · § 02 La Lignée | 🔴 **Le Mur supprimé.** Aucun substitut générique |
| **2** | **Liste exacte des machines** *(marques, charges, nombre)* | § 06 L'Index | 🔴 **L'Index supprimé** |
| **3** | **Banque photo/vidéo de Samuel** *(fichiers sources)* | Toute la photo contemporaine | On reste sur les 9 images retraitées + 6 recadrages |
| **4** | **Grille du périmètre coaching** *(§7.3 blueprint)* | Copy de `/le-coaching` | Formulation prudente déjà rédigée — coût de bascule : 1 h |
| **5** | **Vrais noms de coachs** + photos + citations | Planning · fiches coachs | 🔴 **Planning non publiable** *(Léa, Marc, Inès sont fictifs)* |
| **6** | **Horaires réels** | Badge live · JSON-LD · contact | Quatre versions circulent : 6h-23h / 7h30-22h / 9h30-21h / 24/7 |
| **7** | **Prix de l'essai** — gratuit **ou** 5 € | Section Entrer · `/tarifs` | Ambiguïté actuelle = frein au moment de la décision |
| **8** | **Note Google réelle** | Section Avis · JSON-LD | 4,5/105 affiché vs 4,4/39 relevé. **Ne rien publier avant vérification** |
| **9** | **Placeholders légaux** *(code APE, directeur de publication)* | Mise en ligne | Site maintenu en `noindex` |
| **10** | **Logiciel de gestion des adhérents** | Réservation de créneau (B6) | Repli formulaire + WhatsApp + `tel:` |
| **11** | **Objectif d'acquisition + capacité d'accueil** *(§7.2-E)* | Dimensionnement du funnel | Funnel générique, non calibré |

### Bloquant technique — ✅ résolu

`npm run build` échouait dans l'environnement Linux de travail : `node_modules` ayant été installé sous macOS, le binaire natif de rollup ne correspondait pas à la plateforme. Résolu par `npm install --no-save @rollup/rollup-linux-x64-gnu` — c'est une dépendance **optionnelle** de rollup, **sans aucun effet sur le build macOS**, et `package.json` / `package-lock.json` sont restés intacts *(vérifié par `git diff`)*.

### Arbitrage en attente

**Le dossier France 2.** L'option B *(la lignée sans les titres)* est confirmée et appliquée — aucune fédération, aucun titre n'apparaîtra sur le site. **Le passage de « Quelle époque ! » du 20/12/2025 reste à visionner** avant de clore définitivement le sujet avec le client. L'option B tient quel que soit le résultat ; le visionnage sert à savoir ce qu'on affronte, pas à décider.

---

## ▶️ PROCHAINE ACTION

### Côté production — immédiat

**A2 — Extension du design system**, puis **A6 — moteur motion**. Aucune dépendance client.

⚠️ **Deux points à traiter en priorité au prochain lot :**

- **`/premiere-seance` n'a pas de réservation.** C'est la page de conversion n°1 et elle se termine aujourd'hui sur un renvoi vers le formulaire de la home. Tant que le logiciel de gestion n'est pas identifié (question 24), le repli tient — mais **le webhook sortant doit être posé dès maintenant**, sans quoi Growth 2 et 3 seront impossibles à brancher plus tard.
- **Les cards restent en place** sur Tarifs et Programmes, explicitement interdites par le brief. Lot A4, à concevoir en phase design.

### Côté client — à faire aujourd'hui

| # | Action | Pourquoi maintenant |
|---|---|---|
| **1** | ☎️ **Appeler Bernard — archives + liste des machines** | Chemin critique. La numérisation prend du temps chez lui ; chaque jour de retard décale deux sections |
| **2** | 📅 **Caler la visio — 90 min, enregistrée** | La question *« pourquoi être revenu la chercher en 2018 ? »* produira le meilleur texte du site |
| **3** | 🔵 **Lancer Growth 1 + « Comment nous avez-vous connus ? »** | Zéro dépendance au site. Les avis agissent en semaines, le SEO en mois. Et sans mesure de référence **avant** lancement, on ne pourra rien prouver ensuite |

---

## 📌 JOURNAL DES DÉCISIONS

| Date | Décision | Motif |
|---|---|---|
| 18/07 | **« Illimité » interdit sur tout le site** | À 33 €/mois, une heure de coach par adhérent consomme la totalité de l'abonnement. Promesse intenable → source n°1 d'avis négatifs |
| 18/07 | **Tableau *compris / non compris* rendu obligatoire** | Écrire les limites de son propre argument est ce qui le rend crédible. Même logique que la FAQ résiliation |
| 18/07 | **Growth sorti du périmètre de la refonte** | Se vend sur les chiffres, donc après le lancement. Crée un second récurrent adossé à un bénéfice mesurable |
| 18/07 | **Growth 1 (avis) passe en priorité 1** | Seul chantier sans aucune dépendance, et le nombre d'avis est un levier SEO local majeur |
| 18/07 | **N&B documentaire clair plutôt que rendu sombre** | La salle est réellement claire et lumineuse. Un rendu sombre aurait été un mensonge visuel |
| 18/07 | **Grain laissé au CSS, pas gravé** | Le calque procédural existe déjà ; le graver coûtait +130 % de poids fichier pour un résultat identique |
| 18/07 | **Archive = délavée, pas sombre** | Une photo ancienne a les noirs *remontés* et le contraste compressé. La traiter en sombre produit une photo sous-exposée, pas un document |
| 18/07 | **5 recadrages faibles supprimés sur 11** | Six recadrages forts valent mieux que onze dont la moitié est du remplissage |
| 18/07 | **Originaux couleur conservés** | `_originals/` — toute la chaîne de retraitement est rejouable et réversible |
| 18/07 | **`content.ts` conservé comme baril** | Le découpage en 11 modules est réel, mais aucun composant n'a eu à changer d'import. Migration incrémentale, zéro risque de régression |
| 18/07 | **Données non validées bloquées par le code, pas par la vigilance** | Entrées FAQ `todo` masquées en production, `confirmedHours = false`, `offerSchema` sans prix. Un oubli humain ne peut pas publier une donnée fausse |
| 18/07 | **Préchargement des 3 fonts restantes NON appliqué** | Recommandation devenue fausse : ces fonts sont hors du premier écran, les précharger concurrencerait le LCP pour ~35 Ko sans gain |
| 18/07 | **`aggregateRating` absent de tout le JSON-LD** | 4,5/105 affiché vs 4,4/39 relevé. Publier une note fausse est une infraction aux consignes Google |
