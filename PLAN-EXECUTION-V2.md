# IRON GYM V2 — PLAN D'EXÉCUTION

**Statut du blueprint :** 🔒 **VERROUILLÉ** — `BLUEPRINT-V2.md`
**Base stratégique :** `AUDIT-AAA-V2.md`
**Date :** 18 juillet 2026

---

## 0. RÈGLE DE FONCTIONNEMENT

**Le blueprint est fermé.** Toute évolution de la direction stratégique, du récit, du positionnement ou du système de design fait l'objet d'une demande explicite et d'une mise à jour datée du blueprint — pas d'une décision en cours de développement.

**Ce que ce document ajoute :** le comment, le dans quel ordre, avec quelle charge, et sous quelles conditions de repli.

---

## 1. TABLEAU DE BORD DU PROJET

### 🗣️ Ce qui est annoncé au client

> **« 4 à 5 semaines de production active, selon la disponibilité des contenus client. »**

C'est la seule formulation à utiliser en réunion, en devis et par écrit. Elle est vraie, elle protège, et elle place explicitement la latence côté client — là où elle sera effectivement.

**Ne jamais communiquer de charge en jours.** Un client qui entend « 15 jours » entend « trois semaines » et n'entend pas « selon disponibilité des contenus ». Le découpage en jours reste un outil de pilotage interne.

### 🔧 Pilotage interne

| | |
|---|---|
| **Charge estimée** | ~15,5 j de production effective *(interne)* |
| **Mobilisable immédiatement** | ~9 j *(voie A — 58 %)* |
| **En attente client** | ~6,5 j *(voie B)* |
| **Chemin critique** | Archives de Bernard · liste des machines |
| **Premier jalon** | Visio Bernard/Samuel — **à caler avant tout** |
| **Risque n°1** | Les assets n'arrivent jamais → 2 sections supprimées |
| **Risque n°2** | Le périmètre du coaching est plus étroit qu'anticipé → la formulation verrouillée le couvre déjà |

---

## 2. LES TROIS VOIES — RAPPEL OPÉRATIONNEL

```
🟢 VOIE A   Contenant — architecture, design system, composants, dette technique
            Ne dépend de personne. Démarre aujourd'hui.                    9 j

🔴 VOIE B   Contenu — récit, archives, machines, coachs, chiffres
            Bloqué par le client. Repli défini pour chaque item.         6,5 j

🔵 VOIE C   Hors site — collecte d'avis Google
            Ne dépend ni du site ni du design. À lancer semaine 1.    continu
```

---

## 3. ARCHITECTURE TECHNIQUE CIBLE

### 3.1 Ce qu'on garde de la V1

**Le socle est bon. On ne repart pas de zéro.**

| Conservé | Raison |
|---|---|
| Astro 6 + Tailwind v4 | Stack correcte, aucune raison d'en changer |
| `motion.ts` *(674 lignes GSAP/Lenis)* | Réutilisable, à étendre — pas à réécrire |
| `easing.ts` | Courbes partagées CSS/GSAP, architecture juste |
| Tokens de couleur et de typo | Système discipliné, on ajoute le régime archive |
| Nav + burger *(focus trap, Escape, `aria-expanded`)* | a11y exemplaire |
| Badge de statut ouvert/fermé live | Idée juste, rarement faite |
| Planning généré au runtime | Ne périme jamais |
| Posture perf/sécurité *(CSP, RGPD, fonts self-hostées)* | Point fort du projet |
| `prefers-reduced-motion` à trois niveaux | Best-in-class, **à ne pas casser** |

### 3.2 Arborescence cible

```
src/
├── data/
│   ├── site.ts              métadonnées, SEO, entité légale
│   ├── brand.ts             ★ essence, promesse, CTA verrouillés
│   ├── lignee.ts            ★ récit, frise, figures, archives
│   ├── plateau.ts           ★ espaces + index des machines
│   ├── coaching.ts          ★ méthode + périmètre inclus/exclu (§7.3)
│   ├── cours.ts             planning + fiches cours
│   ├── tarifs.ts            grille, extras, adhésion
│   ├── faq.ts               ★ entrées rédigées, par page
│   ├── avis.ts              snapshot Google + avis
│   └── contact.ts           NAP, horaires, réseaux
│
├── layout/
│   ├── Layout.astro         + JSON-LD par type de page
│   ├── PageLayout.astro     ★ gabarit des pages secondaires
│   └── Legal.astro
│
├── components/
│   ├── ui/
│   │   ├── Button.astro           ★ ex-GoldButton, branché partout
│   │   ├── SectionLabel.astro
│   │   ├── ArchiveFrame.astro     ★ cadre daté, régime archive
│   │   ├── Accordion.astro        ★ FAQ
│   │   ├── StickyCTA.astro        ★ barre mobile
│   │   └── WhatsAppBlock.astro    ★
│   ├── sections/
│   │   ├── Seuil.astro            ★ hero + phrase-stats inline
│   │   ├── Lignee.astro           ★ frise + diptyque + crossfade
│   │   ├── PremiereSeance.astro   ★ module anti-anxiété
│   │   ├── Methode.astro          ★ coaching chiffré
│   │   ├── Plateau.astro          galerie pinnée (existante, élargie)
│   │   ├── Index.astro            ★ liste typographique du matériel
│   │   ├── Mur.astro              ★ grille dense + marquee
│   │   ├── Avis.astro
│   │   ├── Entrer.astro           ★ tarifs tabulaires + FAQ
│   │   ├── Marquee.astro          (séparateur ✦ corrigé)
│   │   └── Footer.astro
│   └── Grain.astro
│
├── lib/
│   ├── motion.ts            + crossfade scrubbé, vitesses par régime
│   ├── easing.ts
│   ├── analytics.ts         ★ wrapper Plausible + événements
│   └── schema.ts            ★ générateurs JSON-LD
│
├── styles/
│   ├── global.css           + tokens archive, trame, séparateur
│   └── regimes.css          ★ archive vs présent
│
└── pages/
    ├── index.astro
    ├── premiere-seance.astro    ★
    ├── la-lignee.astro          ★
    ├── le-coaching.astro        ★
    ├── le-plateau.astro         ★
    ├── les-cours.astro          ★
    ├── tarifs.astro             ★
    ├── nous-trouver.astro       ★
    ├── mentions-legales.astro
    ├── confidentialite.astro
    ├── cgv.astro
    └── 404.astro
```

**Décision structurante :** éclatement de `content.ts` (726 lignes) en modules par domaine. Un fichier unique était tenable en mono-page ; sur 8 pages il devient un goulot d'édition et de relecture.

### 3.3 SEO local — le plan de balisage

Chaque page vise **une intention principale**, jamais deux.

| Page | Requête principale | JSON-LD |
|---|---|---|
| `/` | salle de sport Limoges · salle de musculation Limoges | `HealthClub` complet *(+ `openingHoursSpecification`, `priceRange`, `image`)* |
| `/premiere-seance` | essai salle de sport Limoges · débuter musculation Limoges | `Offer` |
| `/la-lignee` | iron gym limoges *(marque)* | `AboutPage` |
| `/le-coaching` | coach sportif Limoges · coach musculation Limoges | `Service` |
| `/le-plateau` | salle musculation matériel Limoges | `ItemList` |
| `/les-cours` | cours collectifs Limoges · pilates Limoges · cross training Limoges | `Schedule` |
| `/tarifs` | tarif salle de sport Limoges · abonnement salle Limoges | `PriceSpecification` |
| `/nous-trouver` | salle de sport centre-ville Limoges · ouvert dimanche | `Place` + `FAQPage` |

**`aggregateRating` n'est ajouté nulle part tant que la note réelle n'est pas vérifiée** *(4,5/105 affiché vs 4,4/39 relevé)*.

---

## 4. LOTS DE TRAVAIL

### 🟢 VOIE A — 9 jours mobilisables immédiatement

| Lot | Contenu | Charge | Dépend de |
|---|---|---|---|
| **A1** | **Architecture** — 8 routes, `PageLayout`, éclatement de `content.ts`, sitemap | 1,5 j | — |
| **A2** | **Design system** — tokens archive, `regimes.css`, trame halftone, motif séparateur | 1 j | — |
| **A3** | **Composants UI** — `Button` *(+ branchement Nav)*, `ArchiveFrame`, `Accordion`, `StickyCTA`, `WhatsAppBlock` | 1,5 j | A2 |
| **A4** | **Composants sections** — `Index`, `Mur` *(coquille)*, frise, `Entrer` tabulaire | 1 j | A2, A3 |
| **A5** | **⭐ Retraitement photo** — les 9 images sont déjà dans le repo. N&B dur, recadrages, grain | 0,5 j | — |
| **A6** | **Moteur motion** — lazy-load, vitesses par régime, crossfade scrubbé | 1 j | A2 |
| **A7** | **Dette technique P1** — preload fonts, suppression des 79 Ko orphelines, clavier planning, a11y formulaire, CSP | 1 j | — |
| **A8** | **Charpente SEO + analytics** — `schema.ts`, `analytics.ts`, 11 événements, méta par page | 0,5 j | A1 |
| **A9** | **Rédaction non bloquée** — `/premiere-seance`, `/tarifs`, FAQ, 404, légales | 1 j | — |

> **A5 est à faire en premier.** C'est une demi-journée, ça ne dépend de rien, et c'est le geste qui change le plus la perception du site. Le supprimer du duotone rouge et recadrer produit ~20 visuels exploitables à partir de 9 fichiers déjà présents.

### 🔴 VOIE B — 6,5 jours en attente

| Lot | Contenu | Charge | Bloqué par | Repli |
|---|---|---|---|---|
| **B1** | **§ 02 La Lignée** — copy finale, diptyque, frise | 1,5 j | Visio | Version courte à partir des sources presse |
| **B2** | **§ 07 Le Mur** | 1 j | **Archives** | 🔴 **Section supprimée** |
| **B3** | **§ 06 L'Index** | 0,5 j | Liste machines | 🔴 **Section supprimée** |
| **B4** | **`/le-coaching`** — copy + tableau inclus/exclu | 1 j | Grille §7.3 | Formulation prudente par défaut |
| **B5** | **Planning + fiches coachs** | 1 j | Noms, photos, citations | 🔴 **Non publiable en l'état** |
| **B6** | **Réservation de créneau** | 1 j | Logiciel client | Formulaire + WhatsApp + tél |
| **B7** | **Mise en ligne** — légales, noindex ×3, domaine | 0,5 j | Placeholders | Reste en `noindex` |

---

## 5. SÉQUENCEMENT

```
SEMAINE 1
🟢  A5 retraitement photo · A1 architecture · A7 dette technique
🔴  ☎️ Appel archives Bernard  ☎️ Appel liste machines  📅 Visio calée
🔵  Lancement du dispositif d'avis Google

SEMAINE 2
🟢  A2 design system · A3 composants UI · A9 rédaction non bloquée
🔴  Visio enregistrée · grille coaching remplie · réception assets

SEMAINE 3
🟢  A4 composants sections · A6 motion · A8 SEO/analytics
🟢  Intégration sections 01 · 03 · 04 · 05 · 08 · 09
🔴  Arbitrage des formulations coaching · validation client maquettes

SEMAINE 4
🟢  B1 Lignée · B3 Index · B2 Mur (si archives reçues)
🟢  Pages secondaires · SEO local · B4 coaching · B5 planning

SEMAINE 5
🟢  B6 réservation · recette · Lighthouse · CWV · a11y
🔴  B7 complétion légale · levée noindex ×3 · bascule domaine
```

---

## 6. POINTS DE CONTRÔLE

**Quatre jalons. Aucun ne se franchit sans validation explicite.**

| Jalon | Quand | Ce qui est validé | Bloque |
|---|---|---|---|
| **J1 — Cadrage** | Fin S2 | Grille coaching remplie · option B confirmée par Samuel · horaires · prix d'essai · note Google · objectif d'acquisition | Toute rédaction définitive |
| **J2 — Design** | Fin S3 | Maquettes home + `/premiere-seance` + `/la-lignee` | Le développement des sections |
| **J3 — Recette** | Fin S5 | Lighthouse ≥ 95 · CWV verts · a11y · parcours mobile testé sur vrai téléphone | La mise en ligne |
| **J4 — Go live** | S5 | Légales complètes · `noindex` levé ×3 · domaine · canonical/OG/sitemap | — |

---

## 7. RISQUES ET REPLIS

| # | Risque | Probabilité | Impact | Parade |
|---|---|---|---|---|
| **1** | **Les archives n'arrivent jamais** | Élevée | Le Mur supprimé, Lignée amputée | Aller les chercher physiquement. Une heure sur place avec un téléphone et un fond neutre vaut mieux que trois relances par mail |
| **2** | **La promesse coaching est plus étroite que prévu** | Moyenne | 5 formulations à réécrire | La formulation prudente est déjà rédigée. Basculer dessus coûte 1 h, pas 1 j |
| **3** | **Pas de logiciel permettant la réservation** | Élevée | Maillons ③④⑤ du parcours dégradés | Repli formulaire + WhatsApp + `tel:`. **Growth 2 et 3 (§9) récupèrent l'essentiel de la valeur** à condition que le webhook soit prévu au développement |
| **4** | **Le dossier France 2 se confirme lourdement** | Moyenne | Arbitrage à revoir | L'option B tient déjà sans aucun titre. Aucune modification nécessaire |
| **5** | **Le client veut afficher le palmarès** | Moyenne | Retour à l'option A | Présenter le risque par écrit, faire trancher, tracer la décision |
| **6** | **Réservations > capacité d'accueil** | Faible à moyenne | Avis négatifs, no-shows | Question 29 en visio. Si la capacité est basse, brider le funnel plutôt que de le pousser |
| **7** | **Le client n'a jamais mesuré sa transformation** | Élevée | Pas de référence | Mettre en place « comment nous avez-vous connus ? » **dès la semaine 1**, avant le lancement |

---

## 8. CHECKLIST DE MISE EN LIGNE

**Aucun go live tant qu'une case est vide.**

**Contenu**
- [ ] Zéro mention de fédération, de titre ou de palmarès *(vérification par `grep` : `IFBB`, `WNBF`, `champion`, `titre`, `mondial`)*
- [ ] Zéro coach fictif *(Léa, Marc, Inès)*
- [ ] Formulation coaching conforme à la grille §7.3
- [ ] Horaires confirmés et cohérents entre badge live, contact et JSON-LD
- [ ] Un seul prix d'essai affiché
- [ ] Note Google vérifiée sur la fiche le jour même
- [ ] Aucune image de banque d'images
- [ ] Un seul libellé de CTA principal sur tout le site

**Légal**
- [ ] Code APE/NAF renseigné
- [ ] Directeur de publication renseigné
- [ ] Mention « maquette non contractuelle » retirée
- [ ] Autorisations droit à l'image obtenues pour chaque visage publié

**Technique**
- [ ] `noindex` levé **aux trois endroits** : `vercel.json` · `<meta robots>` · `robots.txt`
- [ ] Domaine de production · canonical · OG · sitemap alignés
- [ ] JSON-LD complet, **sans `aggregateRating` non vérifié**
- [ ] Lighthouse ≥ 95 mobile · CWV verts
- [ ] Parcours mobile testé **sur un vrai téléphone**, pas en émulation
- [ ] Les 11 événements analytics remontent
- [ ] Formulaire, WhatsApp et `tel:` testés en conditions réelles

**Opérationnel** *(le plus souvent oublié)*
- [ ] Quelqu'un est désigné pour répondre aux demandes, avec un délai annoncé tenable
- [ ] « Comment nous avez-vous connus ? » en place à l'accueil
- [ ] Dispositif d'avis Google actif
- [ ] Bernard et l'équipe savent ce que le site promet

---

## 9. IRON GYM GROWTH — LES AUTOMATISATIONS n8n

> **Offre distincte de la refonte.** Ces workflows ne sont **pas inclus** dans le devis du site. Ils constituent une prestation complémentaire, avec sa propre valeur et son propre récurrent — voir §10.3.
>
> **Note de méthode.** Les gains annoncés ci-dessous sont des ordres de grandeur observés dans le secteur, pas des engagements. Le gain réel de chaque workflow sera mesuré après installation, sur les données de la salle. C'est d'ailleurs l'intérêt d'installer la mesure (§8 du blueprint) **avant** les automatisations.

### 🥇 Growth 1 — Collecte d'avis Google

**À lancer en premier, et très tôt — avant même la mise en ligne du site.**

```
Nouvel adhérent → J+30
   → WhatsApp : « ça se passe comment ? »
   → Si retour positif : lien direct vers la fiche Google
   → Notion : suivi des demandes envoyées et des avis obtenus
```

**Pourquoi en premier.** Iron Gym affiche 39 à 105 avis contre 148-226 chez les concurrents locaux. **Le nombre d'avis est un levier majeur de référencement local** — il pèse à la fois sur le classement dans le pack local Google et sur le taux de clic. Contrairement au site, qui met 3 à 6 mois à produire du SEO, les avis produisent un effet en quelques semaines.

**Et c'est indépendant du site :** aucune dépendance au développement, aucune validation de contenu, aucun asset requis. C'est le seul chantier qui peut démarrer aujourd'hui sans rien attendre.

**Version manuelle :** QR code à l'accueil + demande systématique après le bilan. Fonctionne, et devrait être mis en place immédiatement en parallèle de l'automatisation.

### 🥈 Growth 2 — Routage des leads

```
Formulaire / réservation
   → Notion (base leads : nom, téléphone, objet, source)
   → Notification WhatsApp instantanée à l'accueil
   → Si pas de réponse sous 4 h : relance interne
```

**Pourquoi ça compte.** La promesse affichée sur le site est « on vous répond sous 24-48 h ». Un lead non traité annule la totalité du travail d'acquisition en amont. **C'est le maillon le plus fragile de la chaîne, et le moins cher à sécuriser.**

À installer **au moment de la mise en ligne**, pas après : un site qui génère des demandes sans que personne ne soit alerté est pire qu'un site sans formulaire.

### 🥉 Growth 3 — Rappel de première séance

```
Réservation confirmée
   → Confirmation immédiate (email + WhatsApp) : adresse, horaire, quoi apporter
   → J-1 : rappel WhatsApp
   → J+1 si absent : « on vous reprogramme quand ? »
   → J+2 si venu : bascule vers Growth 1
```

**Effet attendu.** Les rappels automatisés réduisent généralement les absences aux rendez-vous. **Le gain réel sera mesuré après installation**, par rapprochement entre réservations en ligne et séances honorées (§8.3 du blueprint).

**Ce workflow couvre les maillons ④ et ⑤ du parcours de conversion.** Sans lui, le funnel a un trou entre la réservation et la visite.

**Prérequis :** que la réservation existe (lot B6). D'où la position 3.

### 4️⃣ Growth 4 — Reporting mensuel

```
1er du mois
   → Plausible API : trafic, événements, conversions
   → Google Business : nouveaux avis, évolution de la note
   → Claude API : synthèse en 5 lignes + une recommandation actionnable
   → Notion + email au client
```

**Bénéfice commercial.** C'est ce qui rend la maintenance visible. Un client qui reçoit chaque mois un rapport lisible, avec une recommandation, ne résilie pas — et c'est le support naturel des ventes additionnelles.

### Séquencement Growth

| Priorité | Workflow | Quand | Dépend de |
|---|---|---|---|
| **1** | Collecte d'avis | **Immédiatement** — avant le site | Rien |
| **2** | Routage des leads | À la mise en ligne | Le formulaire en production |
| **3** | Rappel première séance | Dès que la réservation existe | Lot B6 |
| **4** | Reporting mensuel | Post-lancement, mois 1 | Analytics en place |

---

## 10. CADRE COMMERCIAL

### 10.1 Périmètre

**Ce qui est inclus :** refonte complète en 8 pages · extension du design system · retraitement de la banque photo existante · rédaction intégrale · SEO local par page · instrumentation analytics · FAQ · mise en ligne.

**Ce qui n'est pas inclus** *(et doit être dit explicitement)* :
- **Les automatisations n8n — c'est l'offre IRON GYM GROWTH, facturée séparément (§10.3)**
- Tout shooting photo ou vidéo
- Les fiches machines individuelles `/le-plateau/[machine]` — **phase 2, conditionnée à un shooting**
- Le développement d'un système de réservation propriétaire *(on branche l'existant, ou on livre le repli)*
- La création de contenu récurrent
- La gestion des réseaux sociaux

> **Le site couvre les maillons ① à ③ du parcours de conversion** *(§3.4 bis du blueprint)*. Les maillons ④ ⑤ ⑨ relèvent de Growth. Les maillons ⑥ ⑦ ⑧ sont opérationnels et appartiennent au client. **Cette répartition doit être explicite dans le devis** — c'est elle qui rend Growth vendable ensuite, et qui protège de la demande « et le rappel automatique, c'est compris ? ».

### 10.2 Chiffrage — création

**Ce projet n'est pas une refonte graphique.** Il comprend la stratégie de marque, la direction artistique, le copywriting intégral, une architecture de 8 pages, le SEO local, l'instrumentation analytics, l'optimisation de conversion et la préparation du dispositif d'acquisition.

| Scénario | Périmètre | Fourchette |
|---|---|---|
| **V2 complète** | Les 8 pages · tous les lots A et B · stratégie, DA, copy, SEO, analytics | **8 500 – 12 000 € HT** |
| **V2 dégradée** | Sans Le Mur ni l'Index *(archives et liste machines non fournies)* | **7 000 – 9 000 € HT** |
| **Phase 2** *(ultérieure)* | Shooting photo + fiches machines individuelles + réservation native | **+ 2 500 – 4 000 € HT** |

**Comment présenter la fourchette.** Le bas de fourchette correspond à une signature rapide avec des contenus client livrés dans les temps. Le haut correspond à un accompagnement renforcé sur la collecte de contenus, plus de cycles de validation, ou un périmètre rédactionnel étendu.

> **⚠️ Point d'attention commercial.** L'audit valorisait la V1 à 4 500-6 500 € HT. **Le client doit comprendre qu'il ne paie pas deux fois la même chose.**
>
> L'angle : *la V1 était un site. La V2 est un dispositif d'acquisition.* Ce qui a changé de nature — 8 pages contre 1, un positionnement de marque, une architecture SEO par intention, un parcours de conversion instrumenté de bout en bout, et pour la première fois **des chiffres promis et mesurés** (§8 du blueprint).
>
> Le §8 est le meilleur argument de vente du devis : c'est la première fois qu'on lui dit ce que le site doit produire, et comment on le saura.

### 10.3 IRON GYM GROWTH — l'offre complémentaire

**Prestation distincte, à ne jamais inclure automatiquement dans la refonte.** Elle a sa propre valeur, son propre calendrier, et surtout **son propre récurrent**.

**Contenu :**

- Automatisations n8n — les 4 workflows du §9
- Récupération et routage des leads
- Rappels de rendez-vous automatisés
- Dispositif de collecte d'avis Google
- Reporting mensuel automatisé

**Modèle tarifaire :**

| Volet | Fourchette |
|---|---|
| **Installation** *(setup des 4 workflows)* | **1 200 – 2 000 € HT** |
| **Pilotage mensuel** *(supervision, ajustements, reporting)* | **150 – 250 € HT/mois** |

**Pourquoi le vendre séparément :**

1. **Ça ne se vend pas au même moment.** La refonte se vend sur la promesse ; Growth se vend sur les chiffres — donc après le lancement, quand les premières données arrivent.
2. **Ça crée une seconde source de valeur récurrente**, adossée à un bénéfice mesurable plutôt qu'à de la maintenance technique.
3. **Growth 1 (les avis) peut se vendre immédiatement, seul, sans attendre le site.** C'est une porte d'entrée commerciale à faible engagement — et une excellente démonstration de compétence avant même la livraison de la refonte.

> **Ordre de vente recommandé :** Growth 1 seul dès maintenant *(petit ticket, effet rapide, crédibilité)* → refonte V2 → Growth 2-3-4 une fois le site en ligne et les premiers chiffres disponibles.

### 10.4 Maintenance du site

**Palier Évolutif — 149 € HT/mois**, engagement 12 mois.

Hébergement, uptime, SSL, mises à jour de dépendances, monitoring Lighthouse/CWV, sauvegardes, évolutions éditoriales mensuelles *(tarifs, planning, snapshot avis, photos)*.

**Distinct du pilotage Growth.** Les deux peuvent se cumuler *(149 € maintenance + 150-250 € Growth)* ou se packager en une offre unique — mais ils doivent être **présentés séparément**, sans quoi la valeur de Growth disparaît dans la maintenance.

---

## 11. LES TROIS PREMIÈRES ACTIONS

> Tout le reste attend. Ces trois-là, aujourd'hui.

| # | Action | Pourquoi maintenant |
|---|---|---|
| **1** | ☎️ **Appeler Bernard : archives + liste des machines** | Chemin critique. La numérisation prend du temps chez lui — chaque jour de retard décale deux sections |
| **2** | 📅 **Caler la visio, prévoir 90 min, annoncer l'enregistrement** | Tout le récit en dépend. La question « pourquoi être revenu la chercher en 2018 ? » produira le meilleur texte du site |
| **3** | 🔵 **Lancer Growth 1 + la question « comment nous avez-vous connus ? »** | Zéro dépendance au site. Les avis produisent un effet en semaines, le SEO en mois. Et sans mesure de référence avant lancement, on ne pourra rien prouver ensuite |

*(A5 — le retraitement photo — est déjà en cours d'exécution : voir `EXECUTION-STATUS.md`.)*

---

**Blueprint verrouillé. Plan d'exécution à jour. Voie A lancée.**
