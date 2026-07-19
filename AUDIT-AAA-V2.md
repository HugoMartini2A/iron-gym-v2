# AUDIT AAA + CREATIVE DIRECTION LAB — IRON GYM LIMOGES V2

**Périmètre analysé :** code source complet (33 fichiers, 4 242 LOC), déploiement live `iron-gym-v2.vercel.app` (desktop + mobile), `AUDIT.md` technique existant, benchmark 25 références mondiales, paysage concurrentiel Limoges, dossier Hartman.
**Date :** 18 juillet 2026
**Nature :** analyse stratégique. Aucun code modifié.

---

## AVERTISSEMENT PRÉALABLE — À LIRE AVANT TOUT LE RESTE

Trois éléments découverts pendant la recherche **conditionnent toute la direction V2**. Ils sont traités en détail en §6, mais ils doivent être arbitrés avec le client **avant** la moindre ligne de code.

1. **Samuel Hartman aurait publiquement reconnu utiliser des produits dopants, en prime time sur France 2** (« Quelle époque ! », 20 décembre 2025, face à Hugo Clément). *Niveau de preuve : le titre du short officiel de l'émission et une reprise franceinfo l'indiquent ; je n'ai pas pu ouvrir la vidéo ni l'article pour l'entendre directement. **À visionner avant tout arbitrage.*** Le site actuel l'affiche comme « **WNBF** Pro World Champion » — or la WNBF est la fédération **naturelle**, à contrôles antidopage. Si l'information se confirme, ce télescopage est un risque réputationnel direct pour la salle.
2. **Le palmarès de Bernard Hartman affiché sur le site n'est pas vérifiable.** « 3 podiums France IFBB » et « Grand Prix de Paris 1996 » ne sont sourcés que par son propre témoignage en presse locale. L'archive des résultats des championnats de France IFBB ne le mentionne dans aucune année couverte.
3. **Le site est actuellement en `noindex, nofollow` sur toutes les routes** (`vercel.json`). Sa valeur d'acquisition aujourd'hui est **nulle**. C'est intentionnel (maquette pré-signature), mais cela signifie que l'audit SEO porte sur un potentiel, pas sur une performance.

---

## RÉSUMÉ EXÉCUTIF

**La V1 est un excellent site pour une salle de sport. Ce n'est pas encore le site d'Iron Gym.**

Techniquement, c'est du travail d'agence : Lighthouse 96/100, CWV verts, a11y 100, CSP stricte, moteur GSAP/Lenis sur-mesure de 674 lignes. L'audit technique existant lui donne 88/100 et il a raison sur son périmètre.

Stratégiquement, le site laisse le principal sur la table. Iron Gym possède **l'actif éditorial le plus rare du marché du fitness français** : deux générations de compétiteurs, sur la même scène, dans la même salle, à trente ans d'écart — dont un champion du monde en activité, suivi par plus de 240 000 personnes sur Instagram et invité sur France 2. Cet actif est aujourd'hui traité **en position 3 sur 11 sections, dans un bloc de trois petits chiffres**, après le hero et après le manifeste.

Le site vend « une salle de musculation à Limoges ». Il devrait vendre « **l'endroit d'où sortent les champions** ».

**Note globale stratégique : 63/100.**

| Domaine | Note | Verdict en une ligne |
|---|---|---|
| Direction artistique | **62** | Système propre et cohérent, mais timide en composition et non tenu sur ses propres règles |
| Branding | **55** | Aucun territoire de marque revendiqué ; « Iron Gym » reste un nom, pas une marque |
| UX | **74** | Navigation claire, a11y sérieuse, mais parcours mono-page linéaire sans hiérarchie d'intention |
| Conversion | **48** | Le point le plus faible : un formulaire générique comme unique mécanique de conversion |
| Storytelling | **58** | L'histoire existe, elle est bien écrite — et elle est enterrée en position 3 |
| Performance | **92** | Réellement rapide. Rien à redire. Repris de `AUDIT.md`, vérifié |
| SEO (valeur d'acquisition) | **45** | Mono-page + `noindex` actif = zéro captation locale aujourd'hui |
| Expérience mobile | **68** | Fonctionne, mais subit la mise en page desktop au lieu d'être pensée pour le pouce |
| Différenciation marché | **61** | Meilleur site de Limoges, mais ne dit toujours pas pourquoi Iron Gym plutôt qu'une autre |

**Moyenne : 62,6 → 63/100.**

L'écart entre 88 (technique) et 63 (stratégique) est le sujet de tout ce document. Le véhicule est excellent. Il n'est pas branché sur le bon moteur.

---
---

# PHASE 1 — AUDIT AAA DE LA V1

## 1. DIAGNOSTIC GLOBAL DÉTAILLÉ

### 1.1 Direction artistique — 62/100

**Ce qui fonctionne.**

Le système de tokens est réel et discipliné : `#0A0A0A` en fond, `#C0392B` / `#ED5340` en accent, gamme acier `#9CA3AF → #DFE3E8`, trois familles typographiques self-hostées avec des rôles assignés (Teko display, DM Sans corps, Oswald chiffres et labels). Le grain métallique est procédural (`feTurbulence` en data-URI, zéro asset raster) et bridé par `prefers-reduced-motion`. Les easings sont partagés entre CSS et GSAP via `lib/easing.ts`. C'est une architecture de design system, pas un empilement de classes.

Le titre hero en Teko `clamp(4rem, 20vw, 17rem)`, IRON en rouge sur GYM en acier, avec un reveal char-by-char — c'est le meilleur moment du site. Il tient la comparaison avec la référence Locomotive.

**Ce qui ne fonctionne pas.**

**(a) La composition est timide.** Le `.u-container` fait bien 88rem (1408px) centré — le problème n'est pas la grille, il est dans les blocs de texte. Titres bridés à `max-w-3xl` (768px), intros à `max-w-xl` (576px), manifeste à `max-w-5xl` (1024px), tous alignés à gauche. Résultat mesuré sur le rendu live en 1568px : **le hero et le manifeste laissent un tiers d'écran mort à droite**, et les intros de Temple, Champions et Contact flottent dans un vide latéral. Le hero compense par un halo radial rouge dans ce vide — un pansement, pas une composition.

Locomotive, la référence citée dans le brief, ne laisse jamais un tiers d'écran mort : la typo déborde, les images collent au bord, le plein-bleed est la règle. Ici tout reste sage. Les sections en grille (Programmes en `lg:grid-cols-4`, Contact en `lg:grid-cols-2`, le carrousel Champions) occupent bien toute la largeur — c'est la preuve que le système sait le faire quand on le lui demande. On ne le lui demande pas assez.

**(b) Le brief interdit trois choses. Deux sont dans le site.**

> `Forbidden : … cards Tailwind brutes, fond blanc plat, hero H1 centré sans effet`

La section **Programmes** est quatre cards bordées `01 / 02 / 03 / 04` (titre, paragraphe, petit trait rouge) surmontant un bandeau « 100+ ». La section **Tarifs** est quatre cards de pricing à coches rouges avec un badge « LE PLUS CHOISI », suivies de deux blocs récapitulatifs. Ce sont les deux sections les plus conversionnelles du site, et ce sont les deux plus génériques. Elles pourraient être sur le site d'un cabinet comptable.

**(c) Le manifeste — le moment le plus éditorial du site — n'utilise pas la police display.** `Manifesto.astro` ligne 22 : `font-sans font-normal` en `clamp(2rem, 7vw, 5.5rem)`. Trois lignes de DM Sans Regular à 88px, puis deux lignes passées en Bold + dégradé rouge via `.wonky` pour la chute. C'est propre, et c'est du Apple. Aucune tension verticale, aucune condensation, aucune brutalité. Le seul endroit où le site déclare son identité, il parle avec la voix de quelqu'un d'autre.

**(d) Le séparateur du marquee est un `✦`.** `Marquee.astro` ligne 22. C'est un glyphe de mode et de beauté. Sur un marquee qui dit MUSCULATION · CROSS TRAINING · SAUNA · COACHING, il détonne. Un séparateur juste serait une barre, un slash, un point carré, un chevron — quelque chose d'usiné.

**(e) Dette de nommage : `GoldButton.astro`.** Le composant bouton du site s'appelle « bouton doré » alors que le brief interdit explicitement la dorure — et il ne contient rien de doré (`bg-blood` / `border-steel`). Il n'est d'ailleurs utilisé qu'à **trois endroits** (les deux CTA du hero et le plan Essai) ; les CTA de la navigation sont écrits en dur et ne passent pas par lui — incohérence à corriger au passage. `content.ts` parle encore de « placeholder doré », `Manifesto.astro` de « lignes mises en or », `Champions.astro` de « remplissage doré » et « cercle doré ». Ce sont des fossiles d'une DA précédente. Sans conséquence visuelle, mais révélateur : le site a changé de peau sans changer de squelette.

**(f) La photographie est le maillon faible absolu.** Sept photos du Temple (cinq intérieures, deux extérieures), toutes en plan large, toutes traitées au même duotone rouge-brun, toutes au même cadrage, toutes de la même valeur tonale. Aucun gros plan sur l'acier. Aucune texture. Aucune main sur une barre. Aucun corps en effort. Aucune échelle. Le sauna est une **photo de banque d'images Unsplash** (assumé en commentaire dans `content.ts` ligne 263) : sur une section qui s'appelle « Le Temple » et qui vend l'authenticité, il y a une image générique. Et l'archive de Bernard est visiblement upscalée — les artefacts sont lisibles à l'œil nu en 1568px.

Le duotone rouge uniforme ne sauve pas des photos faibles. Il les uniformise, ce qui les rend interchangeables — l'inverse de l'effet recherché.

---

### 1.2 Branding — 55/100

**Le site n'a pas de territoire de marque. Il a une charte graphique.**

La différence : une charte dit « voici mes couleurs et mes polices ». Un territoire dit « voici ce que je suis, ce que je refuse d'être, et ce que le visiteur devient en franchissant la porte ».

**Le ton est bancal parce qu'il a été neutralisé.** Le CLAUDE.md prescrit « tutoiement motivant ». Le commit `53cb21c` a tout réécrit en vouvoiement éditorial. Résultat, la copy actuelle :

> « Profitez d'un équipement moderne, d'une ambiance authentique et d'un accompagnement adapté à tous les niveaux. »
> « Un espace complet, du matériel fiable et une équipe présente pour vous aider à atteindre vos objectifs. »
> « Un plateau moderne, des machines sélectionnées pour leur qualité et un espace où chaque pratiquant peut s'entraîner dans les meilleures conditions. »

Ces trois phrases pourraient décrire n'importe quelle salle de France. Elles sont polies, correctes, professionnelles — et totalement interchangeables. « Équipement moderne », « ambiance authentique », « meilleures conditions », « matériel fiable » : ce sont des adjectifs sans référent. Comparer avec ce que Gymshark écrit pour son propre club :

> *« A new era doesn't start loudly. It starts with the quiet work. »*

Même registre de puissance retenue que celui visé par le brief. Zéro adjectif. Une idée.

**Le nom « Iron Gym » n'est jamais exploité.** « Iron » est un cadeau : le fer, la fonte, l'acier, la discipline de fer, l'âge du fer. Le site n'en fait rien, sauf une baseline correcte (« La fonte, depuis 1992 »). Aucun système visuel n'en découle : pas de texture d'acier réelle, pas de vocabulaire métallurgique, pas de nomenclature.

**Rien n'est nommé.** Les meilleures salles du monde nomment leurs espaces (« The Red Room » chez Barry's) et leurs cours comme des marques déposées (« The WOD », « Afterburner », « Speed Fiends » chez Third Space). Iron Gym a « Plateau musculation », « Charges libres », « Cardio », « Force libre » — la nomenclature d'un inventaire de matériel. Seul « Le mur de fonte » sort du lot, et c'est le meilleur titre du site : il prouve que la salle sait faire quand elle essaie.

**La marque de machines est l'argument n°1 et elle a été retirée.** Le commit `5c8a568` a supprimé la mention Star Trac. Prudence juridique compréhensible, mais on a jeté la preuve avec le risque. David Lloyd cite *Life Fitness, Woodway Curve, Concept 2, Wattbike, SkiErg* : c'est ce qui transforme « du bon matériel » en fait vérifiable. « 20+ machines » sans nom de constructeur est une affirmation ; « 20+ machines Panatta / Hammer Strength » est une preuve.

---

### 1.3 UX / Conversion — UX 74, Conversion 48

**La question du brief :** *un visiteur qui arrive comprend-il en 10 secondes pourquoi Iron Gym est différente ?*

**Non.** Voici littéralement ce qu'il voit dans les 10 premières secondes, mesuré sur le rendu live :

- Le mot **IRON** en rouge, le mot **GYM** en acier — magnifique, mais informativement vide
- « La fonte, depuis 1992 »
- « La salle de musculation de référence à Limoges. Profitez d'un équipement moderne… »
- Deux CTA
- Un tiers droit vide

Il apprend : c'est une salle de musculation, à Limoges, ancienne. **Il n'apprend aucun des cinq faits qui rendent Iron Gym unique** : le champion du monde formé sur place, le coaching individuel gratuit là où les autres le facturent 50 €/séance, la seule cage extérieure de Limoges, le sauna inclus, les 100+ cours/mois. Tout arrive plus tard, dilué.

Basic-Fit à Limoges, c'est 24,99 €. Iron Gym, c'est 33 €. **Le hero ne justifie pas les 8 € d'écart.**

#### Frictions de conversion identifiées

**(a) Une seule mécanique de conversion : un formulaire.** Tous les CTA du site — « Réserver ma séance d'essai » (hero, menu mobile, plan Essai), « Essai gratuit » (nav desktop), « Devenir membre » (3 plans) — mènent à `#contact`, c'est-à-dire à un formulaire de 6 champs (nom, téléphone, email, objet, message, consentement) suivi d'une promesse de rappel « sous 24-48 h ». Seul « Visiter la salle » échappe à l'entonnoir, et il mène à `#temple`. Pour une salle de sport locale en 2026, c'est le pire tunnel possible : le prospect qui veut essayer jeudi soir doit écrire un message et attendre deux jours.

**Au passage : le libellé du CTA principal n'est pas stable.** « Réserver ma séance d'essai » dans le hero, « Essai gratuit » dans la nav desktop, « Réserver une séance d'essai » dans le sélecteur du formulaire. Trois formulations pour une seule action. Le principe Barry's — *un* libellé, répété partout — n'est pas appliqué.

Ce qui manque, par ordre d'impact décroissant :
- **Créneaux réservables directement** (le standard de la catégorie : Barry's, Phive, La Huella convertissent tous sur un créneau, jamais sur un formulaire)
- **WhatsApp** — canal de contact dominant en local France, utilisé par La Huella comme CTA principal ; coût d'implémentation : un lien `wa.me`
- **Téléphone en CTA sticky mobile** — le numéro existe mais n'est jamais un bouton persistant
- **Achat en ligne du carnet 10 séances (75 €)** — le seul produit du catalogue achetable sans engagement ni rendez-vous, et il n'est pas achetable

**(b) L'offre d'essai est sous-vendue et ambiguë.** Le site dit « Gratuit » avec en dessous « Ou 5 € · sans engagement ». Les deux prix cohabitent sans règle explicite. Un avis Google de 2018 dit que c'est 5 €, ou gratuit avec parrainage. Cette ambiguïté au moment exact de la décision est un frein pur. Par ailleurs, la donnée sectorielle est constante : un essai **payant modique** convertit mieux en rétention qu'un essai gratuit, parce qu'il qualifie l'intention. Le choix est à trancher, pas à afficher deux fois.

**(c) L'arme principale est traitée comme une puce.** *Le coaching individuel gratuit + bilan + carnet de bord.* C'est, littéralement, ce que la littérature du secteur identifie comme le levier n°1 de conversion des essais (« la conversation de 10-15 minutes sur les objectifs avant la première séance », qui fait passer la conversion de 10-20 % à 30-45 %). Iron Gym l'offre déjà. Sur le site, c'est la card `02` sur 4, avec 2 lignes de texte. Ça devrait être une section entière.

**(d) Aucun traitement de l'objection.** Le frein n°1 à l'inscription dans une salle de musculation hardcore n'est pas le prix : c'est **la peur d'être jugé**. « Je débute, est-ce que c'est pour moi ? » « Je vais être le plus faible de la salle. » « Je ne sais pas me servir des machines. » Iron Gym a la réponse parfaite (coaching gratuit, avis Google qui parlent tous d'accueil et d'ambiance) et le site ne pose jamais la question. La Huella a une FAQ dont les entrées sont littéralement « *Can I join if I'm not fit?* » et « *Is this place for me?* ». C'est gratuit à implémenter et ça lève le frein principal.

**(e) Aucune FAQ.** Zéro. Sur un site local en 2026, c'est doublement coûteux : perte de longue traîne SEO (« parking Iron Gym Limoges », « Iron Gym résiliation », « essai gratuit salle Limoges ») **et** invisibilité dans les réponses des assistants IA, qui citent préférentiellement les blocs Q/R rédigés.

**(f) Aucune preuve visuelle.** 8 avis Google en texte, une note 4,5/5. Pas une photo de membre. Pas une transformation. Pas un visage de coach. Pas une story Instagram. Sur une salle dont le compte Instagram est actif et dont le fils du fondateur a 241 000 abonnés.

**(g) Faille factuelle sur les avis.** Le site affiche **4,5/5 sur 105 avis**. Les agrégateurs relevés en juillet 2026 donnent **4,4/5 sur 39 avis**. Ces chiffres sont en écart significatif et le snapshot est daté du 20/06/2026 dans le code. À revérifier sur la fiche Google avant publication — un `aggregateRating` faux en JSON-LD est une infraction aux consignes Google et un motif de pénalité.

#### Ce qui fonctionne côté UX

Navigation ancrée à 7 entrées, cohérente et lisible. Burger mobile avec focus trap, Escape, `aria-expanded`, scroll-lock — c'est du travail sérieux. Badge de statut « Ouvert · Ferme à 23h00 » calculé en live avec `aria-live` : excellente idée, très utile, rarement faite. Barre de progression de scroll. `prefers-reduced-motion` best-in-class. Le planning hebdomadaire généré en JS ne périme jamais. Zéro lien mort sur 4 pages, 8 ancres, 5 liens externes.

---

### 1.4 Design / Direction artistique — analyse composant par composant

| Section | Diagnostic | Note |
|---|---|---|
| **Hero** | Typo excellente. Mais : zéro image, zéro vidéo, zéro chiffre, zéro preuve. Le fond est un dégradé radial CSS. Le brief demandait « compteur animé sur les stats clés + marquee des cours en bas de viewport » — **ni l'un ni l'autre n'est présent** (vérifié dans `Hero.astro`). Un tiers droit mort. | 65 |
| **Manifeste** | En `font-sans`, pas en display. 5 lignes révélées, propre, mais visuellement neutre. Le texte lui-même est bon (« Une salle / où la fonte / se transmet »). | 55 |
| **Héritage** | **Le cœur du site, et il est en position 3.** Composition en décalé correcte, count-up 1992→2026 réussi. Mais : photos low-res/duotonées, révélation tardive (rectangles rouges vides pendant ~1 s au scroll), et le récit « 1996 / 2024 / Ce soir-là » — qui est le meilleur texte du site — est rendu en petit corps de texte gris. | 60 |
| **Marquee** | Bonne exécution technique (couplé à la vélocité de scroll, alternance plein/contour). Séparateur `✦` hors-sujet. Ne contient que 4 mots. | 70 |
| **Le Temple** | Galerie horizontale pinnée bien codée. Mais cartes petites, espacées de vides énormes, photos plates et interchangeables, une image Unsplash. La section censée faire désirer la salle ne la fait pas désirer. | 55 |
| **Programmes** | 4 cards Tailwind bordées. Explicitement interdit par le brief. | 40 |
| **Planning** | Utile, honnête, bien conçu (dates calculées au runtime). Visuellement anonyme. Coachs fictifs (« Coach Léa », « Coach Marc », « Coach Inès ») — à remplacer par les vrais avant toute mise en ligne. | 65 |
| **Avis** | Note + carrousel. Fonctionnel. Aucune preuve visuelle. Chiffres à revérifier. | 58 |
| **Tarifs** | 4 cards de pricing génériques. Lisible et honnête (les frais d'adhésion de 39 € sont clairement séparés, ce qui est rare et bien) — mais aucune DA. | 50 |
| **Parrainage** | Mécanique claire, bien écrite, correctement placée. Une des meilleures sections. | 75 |
| **Contact** | Coordonnées, deux jeux d'horaires bien distingués (accueil vs accès badge — subtilité intelligente), carte, formulaire. Solide. Le formulaire reste le goulot. | 70 |

---

### 1.5 Audit technique

L'audit technique existant (`AUDIT.md`, 92/100 en performance) est fiable et j'ai revérifié ses points principaux. Je ne le redouble pas. Ce qui suit sont les points **non couverts** par lui ou qui ont changé depuis.

**Critiques**
- **`noindex, nofollow` actif, et verrouillé à trois endroits** : header global `X-Robots-Tag` dans `vercel.json`, `<meta name="robots">` dans `Layout.astro`, et `Disallow: /` dans `public/robots.txt`. C'était le P0 en suspens de l'audit précédent ; il a été tranché dans le sens du blocage. **Les trois doivent être levés ensemble** au lancement, avec le domaine client — en oublier un suffit à maintenir le site invisible.
- **Mono-page éditorial** : `src/pages/` contient bien 5 routes, mais 4 sont légales (mentions, confidentialité, CGV, 404). **Tout le contenu commercial vit sur `/`.** Structurellement incapable de capter la longue traîne locale : une seule URL ne peut pas se positionner simultanément sur « salle de musculation Limoges », « salle de sport centre-ville Limoges », « coach sportif Limoges », « cours collectifs Limoges », « salle de sport ouverte le dimanche Limoges ». Chaque intention réclame une page. C'est le plafond de verre n°1 de l'acquisition.
- **Note Google affichée à revérifier** (105 avis affichés vs 39 relevés en juillet 2026).

**Importants**
- **Placeholders légaux non résolus** : `ape` et `director` sont en `[À COMPLÉTER À LA SIGNATURE]` dans `content.ts`. Bloquant pour la mise en ligne.
- **Coachs fictifs** dans le planning. Bloquant.
- **Images below-fold révélées en rectangles rouges vides** pendant ~1 s au scroll rapide (constaté en live sur Héritage et Le Temple). Ce n'est pas du CLS — le ratio est réservé — mais c'est une dégradation de la qualité perçue exactement sur les deux sections émotionnelles.
- **Aucune vidéo**, nulle part. Sur un site qui vend l'intensité physique, c'est une absence structurelle. Toutes les références 2026 du benchmark (Capitolium, XNRGY, Phive, Eleiko) reposent sur de la boucle vidéo ou du scrub au scroll.
- **`JSON-LD` incomplet** (`openingHoursSpecification`, `priceRange`, `image` absents) — repris de `AUDIT.md`, toujours valide.
- **6/8 fonts non préchargées**, **79 Ko de woff2 orphelines** livrées — repris de `AUDIT.md`, toujours valides.

**Nice to have**
- Bundle JS monolithique de 62 Ko chargé eagerly (GSAP + ScrollTrigger + SplitText + Lenis), ~29 Ko inutilisés au premier paint.
- Carrousel planning non atteignable au clavier sous 1024px.
- Erreurs de validation du formulaire non annoncées aux lecteurs d'écran.
- Dette de nommage `GoldButton` / « placeholder doré » / « lignes mises en or ».
- Drift de versions `package.json` vs installées.

---

## 2. ANALYSE DU POSITIONNEMENT

### 2.1 Ce que la V1 renvoie aujourd'hui

**Une salle locale sérieuse et bien tenue, avec un bon site.** Pas une institution. Pas une marque.

Le test des six dimensions :

| Dimension | Transmise ? | Pourquoi |
|---|---|---|
| **Puissance** | Partiellement | Le hero et la palette y arrivent. Le reste du site — copy vouvoyée neutre, cards, photos plates — l'annule aussitôt. |
| **Expertise** | **Non** | Aucune méthode nommée, aucune marque de machine, aucun coach identifié, aucun protocole décrit. Le mot « old school » est répété sans jamais être défini. |
| **Communauté** | Faible | 8 avis en texte. Zéro visage, zéro membre, zéro événement, zéro photo de groupe. |
| **Exclusivité** | **Non** | Tarifs en vitrine, 4 cards, coches. C'est un catalogue, pas un club. |
| **Histoire** | Oui, mais enterrée | Le récit Bernard→Samuel est le meilleur contenu du site. Il arrive en 3ᵉ position, sous le pli, dans des rectangles de 400px. |
| **Légitimité bodybuilding** | **Non** | Un compétiteur de niveau international est né dans cette salle. Le site le mentionne dans un bloc de trois chiffres, sous le pli. |

### 2.2 Sur l'échelle du positionnement

- Salle locale classique ─────●──────────────── Institution bodybuilding
- La V1 se situe à **~30 %** : au-dessus de la salle locale par la qualité d'exécution, très loin de l'institution.

**Elle ressemble aujourd'hui à : une salle locale premium avec un très bon site.**
**Elle devrait ressembler à : l'institution bodybuilding du Limousin.**

Cet écart n'est pas un problème de design. C'est un problème d'arbitrage éditorial : le site a choisi de rassurer avant d'affirmer.

### 2.3 Le paysage concurrentiel de Limoges

| Salle | Tarif | Note Google | Site |
|---|---|---|---|
| Planète Forme | **dès 9,95 €** | n.r. | Propre, générique |
| Fitness Park | dès 19 € | 4,9 (69) | Page de chaîne |
| Basic-Fit (4 clubs) | 24,99–34,99 € | 2,9 – 4,0 | Page de chaîne |
| Espace Forme (2 clubs) | dès 25 € | 4,5 (88) / 4,3 (119) | Propre, générique |
| On Air (2 clubs) | dès 31,96 € | contrastée | Page de chaîne, très actif en promo |
| **Iron Gym** | **~33-35 €** | **4,4-4,5** | Le seul design-led de la ville |
| L'Orange Bleue | 45 € | 5,0 (120) | Page de chaîne |
| The Box (CrossFit/Hyrox) | n.r. | n.r. | Propre |

**Quatre constats.**

1. **Le marché est écrasé par le bas.** De 9,95 € à 45 €. Iron Gym est au milieu haut. Le white space n'est pas le prix — c'est **la justification du prix**. Tout le monde vend « pas cher » ou « équipement neuf ». Personne ne vend l'expertise, la compétition, l'héritage.
2. **Personne à Limoges ne raconte d'histoire d'athlète.** C'est le gisement. Iron Gym possède un actif que zéro concurrent local ne peut égaler, ni acheter, ni copier.
3. **Le créneau bodybuilding / Golden Era est totalement vide.** Fitness Park et On Air poussent l'hybride/Hyrox, The Box fait du CrossFit. Et surtout : **les avis Google d'Iron Gym occupent déjà spontanément ce terrain** — « ambiance old school », « vraie atmosphère de sport », « salle style rétro », « incomparable à une salle commerciale ». Le positionnement est déjà validé par les clients. Il n'est simplement pas revendiqué par la marque.
4. **Aucun site design-led dans toute la ville.** Le registre Locomotive — sombre, type-driven, éditorial — est entièrement libre. La V1 est déjà le meilleur site de Limoges. Elle peut être le meilleur site de salle de sport de France, ce qui est un tout autre argument commercial.

**Deux faiblesses à corriger :**
- **Volume d'avis très faible** : ~39-105 avis contre 148-193 chez Basic-Fit et 226 au Centre Buchilien. Sous-exposition majeure. Un dispositif de collecte d'avis vaut probablement plus, en euros par heure investie, que la moitié des améliorations de ce document.
- **Les avis négatifs récents portent sur la difficulté de résiliation.** À neutraliser frontalement par la transparence (une section « Résiliation » explicite en FAQ retourne l'objection en preuve d'honnêteté).

---
---

# PHASE 2 — CREATIVE DIRECTION LAB

## 3. BENCHMARK MONDIAL — LES MÉCANISMES À VOLER

25 références analysées. Je ne liste que ce qui est transposable à une salle locale française.

### 3.1 Les cinq références maîtresses

**① Capitolium** — collabcapitolium.fr — *Supercolor · Site of the Day Awwwards, mai 2026*
Toulouse FC × Stade Toulousain. **La référence n°1 : française, locale, patrimoniale, primée.**
- Seuil narratif : vidéo + baseline + bouton « **Entrer** ». On franchit une porte.
- **Vidéo scrubbée au scroll** — les fichiers s'appellent littéralement `capitole-entrance-scrub.mp4`.
- **Structure en Chapitres nommés** (I. Les arcades / II. Salle du conseil / III. Salle des Illustres), chacun ouvert par une boucle plein écran + un **marquee du nom du chapitre**.
- **Une seule texture (`marble.svg`) répétée en séparateur** sur tout le site : le tissu conjonctif graphique.
- Copy littéraire française : *« Il est des lieux qui ne se contentent pas d'abriter l'histoire, ils la fabriquent. »*
- Les athlètes sont photographiés **dans le patrimoine de la ville**, jamais en studio.

**② La Huella** — lahuella.club — *Mortensen · Nominee Awwwards 2025*
- **Le meilleur hero du benchmark** : les stats ne sont pas dans une barre de chiffres, elles sont **tissées dans une phrase courante**, avec icônes et images inline.
- **Refus de catégorie** : *« We're not a gym. We're a coach-led training club. »*
- **FAQ = traitement d'objections**, littéralement : *« Can I join if I'm not fit? »* / *« Is this place for me? »*
- **WhatsApp comme CTA de contact.**

**③ Eleiko** — eleiko.com — *le matériel comme objet de désir*
- Le hero est une **vidéo produit muette en boucle**, avec un **nom de produit en H1**, pas un slogan.
- CTA « **Explorer** » avant tout CTA d'achat. L'éditorial passe devant le commerce.
- **Le procédé, documenté :** Eleiko a abandonné la photo produit au profit d'un pipeline CAD→CGI avec **un template fixe d'angles de caméra, d'éclairage et de matériaux réutilisé sur toute la gamme**.
> **La leçon, applicable telle quelle :** une machine photographiée n'importe comment = un équipement. Vingt machines photographiées **identiquement** = un arsenal. La cohérence répétée crée la sensation de gamme, donc de collection, donc de désir.

**④ Barry's** — barrys.com
- L'espace physique est nommé : « **The Red Room** ». Il devient un actif de marque.
- **Module « What to Expect in Your First Workout » en position 2** du scroll — un module anti-anxiété.
- **Copy de désintimidation explicite** : *« Go at your pace. Walk, jog, or run. Let them know before class if you're brand new, coming back from time off, or working around an injury. »*
- **Un seul CTA, répété 6+ fois : « Book Your First Class. »** Jamais « adhérer », jamais « voir les tarifs ».
- **Le grain est dans le nom des fichiers photo** (`..._131_VS_R1_C1grain.webp`) : la texture est un paramètre de production photo, pas un filtre CSS ajouté après coup.

**⑤ BXR London** — bxrlondon.com — *le modèle de conversion à copier*
- **Deux marques, deux niveaux d'engagement, deux parcours** : *BXR The Club* (abonnement, prix jamais affiché, CTA « ENQUIRE ») et *SWEAT by BXR* (« pay-to-train », achat direct de packs sans engagement).
- « **TRAIN LIKE A CHAMPION** » — le champion est invoqué **sans être nommé**. Très malin quand on n'a pas de contrat d'image, et **directement pertinent au vu du §6**.

### 3.2 Mécanismes complémentaires

- **Bev Francis Powerhouse Gym** — le couloir d'entrée est **tapissé de photos et de coupures de presse sur des décennies**. → **Le Mur** : grille dense, datée, N&B granuleux. Le mécanisme le plus fort du benchmark hardcore.
- **Gymbox** — **une page par équipement premium**, traité comme du contenu et non comme une liste. Plus un **bloc FAQ massif rédigé en phrases complètes** (optimisation pour les réponses IA).
- **Third Space** — les cours sont des **marques déposées internes** avec URL dédiée. Les clubs sont identifiés par leur **code postal**.
- **Dogpound** (espace conçu par Fabien Baron, DA de Calvin Klein) — murs et sols noirs, **toutes les machines noires et logos retirés**, campagnes de mode aux murs. Pages coachs : photo + **citation personnelle**, jamais un CV.
- **Rogue Fitness** — « **The Index** » : hub éditorial en 9 rubriques (Events, Athletes, Gym Tours, Movement Library, History, Documentary…). *La marque crée l'événement où les champions viennent, plutôt que d'acheter un champion.*
- **Phive Clubs** (SOTD + Developer Award) — **« Schedule a visit » traité comme conversion de premier rang**, avec formulaire dédié. Accent jaune saturé sur premium : valide le pari du rouge #C0392B.
- **Wolverine Worldwide** (SOTD, **par Locomotive**) — titre à points « Make. Every Day. Better. », mur d'images en marquee infini.
- **CR7 Fitness by Crunch** — le mécanisme n'est pas le visage, c'est la promesse : *« Members can use the same equipment that Ronaldo uses. »* **L'ambassadeur légitime le matériel, pas l'inverse.**

### 3.3 Les clichés 2026 à éviter

- La **typographie cinétique partout** : elle triomphe sur Awwwards et n'arrive presque jamais en production, parce qu'elle casse les lecteurs d'écran, gêne l'indexation et génère du layout shift. **À réserver aux H1/H2.** (La V1 respecte déjà cette règle — c'est un point fort à conserver.)
- Le **mobile encore cassé** : >50 % du trafic d'un site de salle, et c'est toujours le point de rupture n°1 du secteur.
- Les **fiches coachs vides** (photo + nom + diplômes) : identifiées comme la plus grosse opportunité manquée du secteur.
- Le **hero surchargé** — une photo forte, un titre, un CTA.
- Les clichés spécifiques fitness : photo stock de fille sur tapis, dégradé bleu-violet, icône haltère en outline, « +5000 membres heureux », trio de cards « Musculation / Cardio / Cours ».
- **Note typo :** Bebas et Anton sont saturés dans la catégorie Sports d'Awwwards. **Teko est le meilleur des trois choix du brief.** À conserver.

---

## 4. LES QUATRE TERRITOIRES CRÉATIFS

### TERRITOIRE 1 — « LA LIGNÉE » ⭐ *recommandé*
*L'institution bodybuilding par la transmission*

**Concept.** Iron Gym n'est pas une salle : c'est une lignée. Un homme a bâti son corps ici en 1992, puis a bâti la salle, puis a bâti son fils, qui est monté sur la même scène trente ans plus tard. Ce qui se transmet chez Iron Gym n'est pas un abonnement — c'est une méthode, un standard, une exigence. **Le site est un livre de famille en fonte.**

**Émotion.** Le frisson de l'héritage. Faire partie de quelque chose qui existait avant vous et continuera après. La fierté d'appartenance locale.

**Palette.** Noir profond `#0A0A0A`, acier brossé (dégradé chrome existant), rouge sang `#C0392B` en accent rare — **et un sépia d'archive** (`#8B6F47`, désaturé) réservé exclusivement aux contenus d'archive. Deux régimes de couleur qui séparent visuellement le passé du présent. C'est le seul ajout au système actuel, et il est structurant.

**Typographie.** Teko Bold conservé en display. **Ajout : une condensée de labeur pour les dates et les repères d'archive** (Oswald 700 en tracking large fait déjà le travail). Corps en DM Sans — mais le manifeste passe en **Teko**, et pas en sans-serif.

**Photographie.** Deux régimes stricts, jamais mélangés :
- **Archive** — grain argentique réel, sépia désaturé, formats d'époque, imperfections conservées. Il faut aller chercher les vraies archives chez Bernard : photos de compétition, coupures de presse locales, plans de la salle en 1992.
- **Aujourd'hui** — noir et blanc contrasté, lumière rasante sur l'acier, gros plans sur les mains, la craie, les stries d'une plaque, la sueur. Le rouge n'apparaît que sur des objets réellement rouges.

**Motion.** Transitions par fondu croisé archive↔présent. Le count-up 1992→2026 devient le pivot narratif de la page. Marquee des noms de chapitre à la Capitolium. **Une séquence signature : le split-screen 1996 / 2024 des deux poses de scène, révélé au scroll.**

**Structure.**
`01 — Le seuil` (hero) → `02 — La lignée` (Bernard→Samuel, plein écran) → `03 — Le Mur` (grille d'archives dense) → `04 — La salle` (fiches machines) → `05 — La méthode` (coaching gratuit) → `06 — Les vôtres` (membres, avis) → `07 — Entrer`

**Force.** Inimitable. Aucune salle de Limoges — aucune salle de France — ne peut copier ça. **Faiblesse.** Dépend entièrement de l'accès aux archives réelles de Bernard, et exige d'arbitrer le §6.

---

### TERRITOIRE 2 — « L'ARSENAL »
*Le club premium performance par l'ingénierie*

**Concept.** Chez Iron Gym, le matériel n'est pas un équipement : c'est une collection. 20+ machines haut de gamme, uniques à Limoges, choisies une par une. Le site traite chaque machine comme Porsche traite un moteur ou Eleiko un rack. **On ne vend pas l'accès à une salle, on vend l'accès à un arsenal.**

**Émotion.** Le désir d'objet. La précision. La sensation d'entrer dans un atelier plutôt que dans un club.

**Palette.** Noir `#0A0A0A`, chrome et acier brossé dominants, rouge en signalétique uniquement (comme une diode, une sérigraphie sur carter). Registre quasi-monochrome. Le rouge devient rare, donc puissant.

**Typographie.** Teko en display + **Oswald en rôle technique** : références, cotes, spécifications, numérotation. Registre « fiche technique » assumé.

**Photographie.** **Le protocole Eleiko, appliqué à la lettre.** Un template verrouillé : même angle (3/4 bas), même éclairage (une source dure rasante + un fill froid), même fond `#0A0A0A`, même focale, pour les 20 machines. Logos constructeur hors champ ou désaturés. La répétition rigoureuse fait l'arsenal.

**Motion.** Rotation lente au scroll sur les machines. Révélation des spécifications en overlay au hover. Transitions latérales, mécaniques, précises — jamais organiques.

**Structure.** Hero sur une machine nommée → `L'Arsenal` (grille des 20 machines, chacune cliquable vers une fiche : nom → chiffres clés → 3 points forts → specs → galerie) → `Les zones` → `La méthode` → `Rejoindre`

**Force.** Directement branché sur l'argument commercial n°1 (« 20+ machines uniques à Limoges »), et c'est un territoire où le SEO explose (une page par machine). **Faiblesse.** Froid. Risque de perdre l'émotion familiale et l'ambiance conviviale que TOUS les avis Google citent en premier. Coûteux en production photo.

---

### TERRITOIRE 3 — « LA FORGE »
*L'underground moderne par le travail brut*

**Concept.** Pas de storytelling, pas de promesse. Le travail. Ici on soulève, on transpire, on revient demain. Iron Gym est un atelier, pas un club — et c'est exactement pour ça qu'on y va. **La contre-proposition frontale au fitness lisse.**

**Émotion.** L'authenticité crue. Le soulagement de trouver un endroit sans marketing.

**Palette.** Noir, béton, rouille (`#8B3A2A`), acier oxydé. Rouge sang en éclats. Textures matérielles réelles : béton, métal griffé, craie.

**Typographie.** Teko Bold + **traitement stencil / pochoir industriel** sur les labels. Chiffres bruts, tracking serré, alignements durs.

**Photographie.** Noir et blanc contrasté, grain lourd, flash direct assumé. Corps en effort, veines, craie, mains. Cadrages serrés, presque documentaires. **Aucune photo posée.**

**Motion.** Sec et brutal. Coupes plutôt que fondus. `--ease-snap` partout. Marquee rapide. Split-text à révélation immédiate, sans easing doux.

**Structure.** Manifeste en premier, plein écran, avant même la présentation → `Ce qu'on fait` → `Ce qu'on ne fait pas` → `Le plateau` → `Les gens` → `Viens`

**Force.** Le plus mémorable, le plus différenciant, parfaitement aligné avec ce que disent les avis Google. **Faiblesse.** Rétrécit l'audience. Iron Gym fait 100+ cours collectifs/mois et vise du débutant au confirmé : ce territoire parle à 20 % de sa cible et fait fuir les 80 % restants. **À écarter en pur, à conserver en assaisonnement.**

---

### TERRITOIRE 4 — « LA MAISON »
*Le lifestyle sportif par l'appartenance*

**Concept.** Iron Gym n'est pas là où on s'entraîne, c'est là où on est de chez soi. Ce que les 8 avis Google racontent tous — l'ambiance, l'accueil, le fait de se sentir à sa place — devient la promesse centrale. **On ne vend pas un abonnement, on vend l'adhésion à un groupe.**

**Émotion.** L'appartenance. La chaleur. « Ma salle. »

**Palette.** Noir chaud, rouge sang plus généreux, ajout d'un ton chaleureux (lumière ambrée) sur les scènes humaines. Moins métallique, plus incarné.

**Typographie.** Teko conservé, mais assoupli par plus d'espace, plus de corps de texte, plus de citations en gros.

**Photographie.** Les gens avant les machines. Visages, sourires, spot entre deux membres, discussions au bar, terrasse. Grain chaud. Beaucoup d'UGC intégré.

**Motion.** Douce, fluide, généreuse. `--ease-soft` dominant. Mur de photos en marquee infini à la Wolverine.

**Structure.** Hero avec visages → `Qui vient ici` → `Ta première séance` → `L'équipe` → `Le mur` (UGC) → `Les espaces` → `Nous rejoindre`

**Force.** Lève directement le frein n°1 (la peur d'être jugé) et convertit le mieux. **Faiblesse.** C'est le territoire le plus fréquenté du secteur. Sans exécution photo exceptionnelle, on retombe sur la salle de quartier sympathique — et on perd toute la puissance.

---

## 5. RECOMMANDATION — LA SYNTHÈSE 1 + 2 + 4

**Territoire principal : LA LIGNÉE.** C'est le seul actif inimitable, le seul qui justifie le prix, le seul qui transforme une salle en institution.

**Renforcé par L'ARSENAL** sur la section matériel : la lignée donne l'émotion, l'arsenal donne la preuve. La transmission a besoin d'un objet à transmettre — les machines sont cet objet.

**Réchauffé par LA MAISON** sur les sections conversion : héritage et arsenal sont intimidants. Chaque point de contact conversionnel (première séance, coaching, essai, FAQ) doit être chaleureux et désintimidant. C'est ce qui évite que « institution » ne devienne « pas pour moi ».

**LA FORGE est écartée en territoire principal**, mais son vocabulaire matériel (grain, béton, acier oxydé, N&B contrasté) alimente la direction photo.

> **La formule :** *l'héritage donne la légitimité, l'arsenal donne la preuve, la chaleur donne la conversion.*

---
---

# PHASE 3 — SYNTHÈSE STRATÉGIQUE V2

## 6. ⚠️ LES TROIS ARBITRAGES PRÉALABLES

Ces trois points doivent être tranchés avec le client **avant** la conception V2. Ils ne sont pas négociables : deux d'entre eux sont des risques juridiques ou réputationnels réels.

### 6.1 Le dossier Samuel Hartman

**Les faits vérifiés.** Samuel Hartman, originaire de Limoges, fils de Bernard : champion du monde **WNBF** 2024 (la classe de poids exacte — « Heavyweight » — n'a pas pu être confirmée par une source ouvrable) ; **IFBB Pro card obtenue le 3 mai 2026** (Ben Weider Worldwide Classic, catégorie Classic Physique) ; **241 000 abonnés Instagram**, ~182 000 sur TikTok (audience YouTube : non trouvée, à ne pas estimer) ; co-fondateur de la marque RetroMuscle ; invité de **« Quelle époque ! » sur France 2 le 20 décembre 2025**.

**Le fait à confirmer par vous-même.** Sur ce plateau, interrogé par Hugo Clément, **il aurait reconnu utiliser des produits dopants**. Le titre du short officiel de l'émission l'indique explicitement et un sujet franceinfo sur la banalisation du dopage le reprend — mais ni la vidéo ni l'article n'ont pu être ouverts pour vérification directe. **C'est le point le plus lourd de tout ce document : visionnez le passage avant d'arbitrer quoi que ce soit.**

**Le problème.** Le site affiche aujourd'hui, mot pour mot : *« WNBF Pro Heavyweight World Champion 2024, IFBB Pro. »* La **WNBF est la fédération de bodybuilding naturel**, à contrôles antidopage stricts. Mettre en avant ce titre sur le site grand public d'une salle de sport, quelques mois après une reconnaissance publique de dopage en prime time, expose Iron Gym à :
- une accusation de communication trompeuse ;
- une association directe entre la salle et le dopage, sur un site qui accueille des mineurs et des débutants ;
- une reprise médiatique locale hostile, facile à écrire.

**Trois options, à faire trancher par le client :**

| Option | Description | Risque | Puissance |
|---|---|---|---|
| **A — Le champion assumé** | Samuel en tête d'affiche, palmarès affiché | **Élevé** | Maximale |
| **B — La lignée sans le titre** ⭐ | On raconte l'histoire — deux générations, même scène, trente ans — **sans mentionner de fédération ni de titre**. Le modèle BXR : « On s'entraîne comme des champions », le champion invoqué sans être certifié | **Faible** | Forte |
| **C — Bernard seul** | Le fondateur, le repreneur, la salle | Nul | Moyenne |

**Recommandation : B.** L'émotion du récit (« le même nom, la même scène, trente ans après ») **ne repose pas sur le titre**. Elle repose sur la répétition. On garde 100 % de la puissance narrative en supprimant 100 % du risque. C'est aussi ce qui permet de conserver Bernard comme figure morale — sa citation de 2018 est un contrepoint parfait :

> *« Il ne faut pas brûler les étapes en tombant dans les excès avec l'utilisation de produits. Il faut aimer la discipline avant d'en aimer le résultat. »*

Utilisée en pull-quote, cette phrase transforme un risque en position de marque.

### 6.2 Le palmarès de Bernard

Le site affirme : « 3 podiums France IFBB », « Grand Prix de Paris 1996 », « 20+ ans de compétition ».

**Vérifiable :** carrière d'haltérophile documentée par la presse locale (champion de France par équipe de mini-haltérophilie à 11 ans, sélections France jusqu'en 1989, records régionaux 137,5 kg à l'arraché / 177,5 kg à l'épaulé-jeté), podium aux championnats de France de culturisme dès sa 2ᵉ année, victoire au Grand Prix de Paris 1996, ouverture du Club 87 en 1988 puis d'Iron Gym en 1992, titulaire du CAPEPS.

**Non vérifiable :** l'affiliation **« IFBB »** n'est établie par aucune source — la presse dit « championnats de France de culturisme » sans nommer la fédération. Le Grand Prix de Paris 1996 n'est confirmé par aucun registre fédéral, uniquement par son témoignage.

**Action :** retirer la mention « IFBB », remplacer par « championnats de France de culturisme ». Faire confirmer les dates et titres par Bernard lui-même, avec si possible une pièce (photo de podium, coupure de presse) — qui devient au passage un asset visuel pour le Mur.

### 6.3 Les incohérences factuelles à faire trancher

| Point | Sur le site | Constaté ailleurs | Action |
|---|---|---|---|
| **Horaires d'accès** | 6h–23h, 7j/7 | 7h30–22h (fiche officielle), 9h30–21h (agrégateurs), « 24/7 » (avis) | Faire confirmer. Le badge « Ouvert/Fermé » en dépend directement. |
| **Avis Google** | 4,5/5 · 105 avis | 4,4/5 · 39 avis (juillet 2026) | **Revérifier sur la fiche avant publication.** Le chiffre n'est aujourd'hui qu'affiché on-page — le JSON-LD ne contient pas d'`aggregateRating` (vérifié). Ne l'y ajouter qu'après vérification : un `aggregateRating` faux est une infraction aux consignes Google. |
| **Aquabike** | Mentionné dans le CLAUDE.md | Attribué à **Lady Fit Zen** (même propriétaire) par la presse de 2019 | Confirmer avant de l'écrire. |
| **Coachs** | Léa, Marc, Inès | **Fictifs** (données d'exemple) | Remplacer par les vrais. Bloquant. |
| **Entité légale** | `ape` et `director` en placeholder | — | Compléter. Bloquant. |
| **Abonnés Samuel** | 237K | 241 000 (Instagram, juillet 2026) | Chiffre déjà périmé. Ne pas afficher de compteur d'abonnés en dur, ou l'arrondir (« +240 000 »). |
| **Domaine** | — | `iron-gym.fr` (403) et `iron-gym-limoges.fr` coexistent ; le second affiche **« MACHA » en title tag** | Consolider sur un domaine unique au lancement. |

---

## 7. VISION V2

> ## « Depuis 1992, Limoges fabrique ses propres champions. Ici. »

**Ce que ça engage.** Le site cesse de décrire une salle et se met à revendiquer un lieu d'origine. Le visiteur ne choisit plus entre des équipements et des tarifs : il choisit entre appartenir à une histoire ou payer un abonnement.

### 7.1 Positionnement

**Iron Gym est l'institution bodybuilding du Limousin.**

Pas la moins chère — Planète Forme est à 9,95 €. Pas la plus grande — Basic-Fit a quatre clubs. **La seule qui produit des compétiteurs, et la seule qui le fait depuis 1992.**

### 7.2 Différenciation — les cinq raisons, par ordre d'impact

1. **C'est la seule salle de Limoges d'où sont sortis des compétiteurs de niveau international, sur deux générations.** Inimitable, non achetable.
2. **Le coaching individuel est gratuit et illimité** — bilan, programme, carnet de bord — là où toutes les autres le facturent 40-60 €/séance. Sur 12 mois, c'est plusieurs centaines d'euros de valeur incluse. **Argument le plus sous-exploité du site actuel.**
3. **20+ machines haut de gamme uniques à Limoges** — à condition de nommer les constructeurs et de les photographier comme des objets.
4. **La seule cage de street workout extérieure de Limoges.** Déjà écrit sur le site, jamais mis en avant.
5. **Sauna privé inclus + 100+ cours collectifs/mois + accès 7j/7**, au prix d'une salle de milieu de gamme.

### 7.3 Architecture idéale de la V2

**Passage obligatoire du mono-page à une architecture multi-pages.** Le mono-page plafonne le SEO local, empêche le double parcours de conversion et interdit les fiches machines. C'est la décision structurelle n°1.

```
/                          Accueil — le récit + la conversion
/la-lignee                 L'histoire Bernard → Samuel + Le Mur
/l-arsenal                 Les 20+ machines
/l-arsenal/[machine]       Une fiche par machine premium  ← SEO massif
/le-coaching               Le coaching gratuit, en détail
/les-cours                 Planning + fiches cours nommés
/tarifs                    Grille + FAQ résiliation
/premiere-seance           Anti-anxiété + réservation      ← page de conversion n°1
/la-salle                  Accès, horaires, parking, vestiaires, FAQ locale
```

#### La home, écran par écran

| # | Écran | Contenu | Rôle |
|---|---|---|---|
| **01** | **Le seuil** | Boucle vidéo muette plein écran (plateau, lumière rasante, mains sur une barre) + IRON GYM en Teko + **phrase-stats inline à la La Huella** : *« Depuis 1992, [34] ans de fonte au centre de Limoges — [20]+ machines, [100]+ cours par mois, ouvert [7] jours sur 7. »* (chiffres en count-up **dans** la phrase) + un CTA : **Réserver ma première séance** | Comprendre + désirer en 5 s |
| **02** | **La lignée** | Split-screen 1996 / 2024 plein écran, révélé au scroll. Le récit en 3 temps, en gros. **Sans mention de fédération.** | L'émotion, remontée de la position 3 à la position 2 |
| **03** | **Ta première séance** | Module anti-anxiété façon Barry's : ce qui se passe, combien de temps, ce qu'il faut apporter, « tu n'as jamais mis les pieds dans une salle ? c'est exactement pour ça qu'on fait un bilan gratuit » + réservation de créneau | Lever le frein n°1 |
| **04** | **L'arsenal** | 20+ machines en grille, protocole photo verrouillé, constructeurs nommés. Marquee du nom de section. | La preuve matérielle |
| **05** | **La méthode** | Le coaching gratuit traité en section pleine : bilan → programme → carnet → suivi. Chiffré (« 50 € la séance ailleurs. Inclus ici. ») | La valeur cachée révélée |
| **06** | **Le Mur** | Grille dense d'archives + membres + coupures de presse locales, datée, N&B granuleux | La légitimité par l'accumulation |
| **07** | **Les vôtres** | Avis Google + visages + UGC Instagram | La preuve sociale |
| **08** | **Entrer** | Tarifs en paliers nommés + FAQ complète (dont résiliation) + réservation + WhatsApp + téléphone | La conversion |

#### Le funnel de conversion — modèle BXR à double porte

```
                        ┌─ PORTE CHAUDE ──────────────────────┐
  Visiteur ─────────────┤  « Réserver ma première séance »    │──→ Créneau réservé
                        │  Créneau réel · confirmation directe │    ──→ Bilan gratuit
                        └──────────────────────────────────────┘    ──→ Abonnement
                        ┌─ PORTE FROIDE ──────────────────────┐
                        │  « Carnet 10 séances — 75 € »       │──→ Achat en ligne
                        │  Sans engagement, achat immédiat     │    ──→ Réactivation
                        └──────────────────────────────────────┘
                        ┌─ PORTE HUMAINE ─────────────────────┐
                        │  WhatsApp · Téléphone (sticky mobile)│──→ Conversation
                        └──────────────────────────────────────┘
```

**CTA principal unique, répété partout : « Réserver ma première séance ».** Jamais « Voir les tarifs », jamais « S'inscrire ».

---

## 8. ROADMAP PRIORISÉE

### P0 — Indispensable *(sans ça, la V2 ne vaut pas mieux que la V1)*

| # | Action | Pourquoi |
|---|---|---|
| **P0-1** | **Arbitrer le dossier Samuel Hartman** avec le client (§6.1). Recommandation : option B | Risque réputationnel et juridique. Conditionne tout le récit |
| **P0-2** | **Retirer la mention « IFBB » du palmarès de Bernard** et faire confirmer dates et titres | Affirmation invérifiable publiée comme un fait |
| **P0-3** | **Refaire toute la photographie**, protocole verrouillé (§ Eleiko) : machines, mains, acier, corps en effort, visages. Supprimer l'image Unsplash du sauna | La photo est le maillon faible n°1. Aucun redesign ne compense des photos plates |
| **P0-4** | **Remonter la lignée en position 2**, plein écran, split-screen 1996/2024 | L'actif n°1 est enterré en position 3 |
| **P0-5** | **Réécrire le hero** : phrase-stats inline avec compteurs, boucle vidéo, un seul CTA | 10 secondes pour justifier 8 € d'écart avec Basic-Fit |
| **P0-6** | **Réservation de créneau réelle** en remplacement du formulaire comme conversion principale | Un formulaire + 48 h d'attente est le pire tunnel possible en 2026 |
| **P0-7** | **Éclater le mono-page éditorial en multi-pages** | Tout le contenu commercial vit sur `/` : ça plafonne le SEO local et interdit les fiches machines |
| **P0-8** | **Résoudre les données factuelles** : horaires, note Google, coachs réels, entité légale, aquabike, abonnés (§6.3) | Bloquant pour la mise en ligne |
| **P0-9** | **Lever le `noindex` aux TROIS endroits** (`vercel.json`, `<meta robots>` dans `Layout.astro`, `robots.txt`) et basculer sur le domaine client | En oublier un suffit à maintenir le site invisible pour Google |

### P1 — Forte valeur

| # | Action |
|---|---|
| **P1-1** | Section « Ta première séance » — module anti-anxiété + copy de désintimidation explicite (débutant, reprise, blessure) |
| **P1-2** | Section « La méthode » — le coaching gratuit chiffré en euros de valeur incluse |
| **P1-3** | **FAQ rédigée en phrases complètes**, incluant frontalement la résiliation. SEO local + réponses IA |
| **P1-4** | **WhatsApp** en canal de contact + **téléphone sticky mobile** |
| **P1-5** | Fiches machines individuelles, structure « fiche technique », constructeurs nommés |
| **P1-6** | **Le Mur** — grille dense d'archives, coupures de presse locales, membres. Nécessite d'aller chercher les archives chez Bernard |
| **P1-7** | Fiches coachs : photo + **citation personnelle** + style de coaching. Jamais un CV |
| **P1-8** | **Manifeste en Teko**, pas en DM Sans. Remplacer le `✦` du marquee. Renommer `GoldButton` |
| **P1-9** | Refonte des sections Programmes et Tarifs — sortir des cards Tailwind (interdit par le brief) |
| **P1-10** | **Dispositif de collecte d'avis Google** — 39-105 avis vs 148-226 chez les concurrents. Meilleur ratio impact/effort de toute la liste, et c'est opérationnel avant d'être digital |
| **P1-11** | Trancher et clarifier l'offre d'essai : **un seul prix affiché** (recommandation : 5 €, un essai payant modique qualifie l'intention) |
| **P1-12** | Nommer les espaces et les cours (« Le mur de fonte » prouve que la salle sait faire) |
| **P1-13** | Reprendre les P1 techniques de `AUDIT.md` : preload fonts, fonts orphelines, clavier planning, annonces de validation, JSON-LD complet, durcissement CSP |

### P2 — Amélioration secondaire

| # | Action |
|---|---|
| **P2-1** | Vidéo scrubbée au scroll sur la section lignée (modèle Capitolium) |
| **P2-2** | Sépia d'archive comme second régime chromatique |
| **P2-3** | Texture d'acier unique répétée en séparateur de section (modèle `marble.svg` de Capitolium) |
| **P2-4** | Achat en ligne du carnet 10 séances |
| **P2-5** | Marquee des noms de chapitre |
| **P2-6** | Intégration du flux Instagram |
| **P2-7** | Numérotation `01 — 08` des sections |
| **P2-8** | Lazy-load du motion non critique (Lenis, SplitText) derrière un `import()` dynamique |
| **P2-9** | Un événement annuel Iron Gym (modèle Rogue Invitational) — devenir le lieu où la chose se passe |
| **P2-10** | Reprendre les P2 techniques de `AUDIT.md` |

---

## 9. CE QU'IL FAUT ABSOLUMENT CONSERVER DE LA V1

Un audit qui ne dit que ce qui va mal est un mauvais audit. Ce socle est excellent et ne doit pas être refait :

- **Le système de tokens et la palette** — cohérent, discipliné, correctement contrasté (AA vérifié)
- **Teko en display** — le meilleur choix des trois options du brief, et le moins saturé du marché
- **Le hero typographique** — la meilleure image du site
- **Le moteur GSAP + Lenis** (674 lignes) — réutilisable tel quel
- **`prefers-reduced-motion`** best-in-class — à préserver absolument
- **`content.ts` comme source unique de contenu** — architecture exemplaire, à étendre au multi-pages
- **Le badge de statut ouvert/fermé en live** — idée juste, rarement faite
- **Le planning généré au runtime** — ne périme jamais
- **Le split accueil / accès badge** — subtilité intelligente que la plupart des salles ratent
- **La séparation honnête des frais d'adhésion** (39 € une fois, jamais présentés en mensualité)
- **Toute la posture perf/a11y/sécurité** — CSP stricte, RGPD propre, fonts self-hostées, CWV verts
- **« Le mur de fonte »** — le meilleur titre du site. La preuve que la salle sait écrire quand elle s'y autorise

---

## 10. LE MOT DE LA FIN

La V1 a été construite en supposant que le travail consistait à faire un beau site de salle de sport. Sur ce cahier des charges, elle réussit — c'est le meilleur site de salle de sport de Limoges, et de loin.

Mais Iron Gym n'est pas une salle de sport avec une histoire. **C'est une histoire qui a une salle de sport.** Un homme construit son corps, gagne des titres, ouvre une salle, la vend, la reprend vingt ans plus tard pour la refaire de fond en comble, et entraîne son fils jusqu'à la même scène — trente ans après lui, sous le même nom.

Aucune chaîne ne peut acheter ça. Aucune salle de Limoges ne peut l'imiter. Et le site actuel le raconte dans un bloc de trois chiffres, en position 3, en dessous du pli.

**La V2 n'a pas besoin d'être plus belle. Elle a besoin de commencer par là.**

---

### Sources

**Benchmark :** [Capitolium](https://www.collabcapitolium.fr) · [La Huella](https://lahuella.club/en) · [Eleiko](https://eleiko.com/en) · [Barry's](https://www.barrys.com/) · [BXR London](https://www.bxrlondon.com/) · [Third Space](https://www.thirdspace.london/) · [Gymbox](https://gymbox.com/) · [Equinox](https://www.equinox.com/) · [Phive](https://phive.pt/en) · [XNRGY](https://xnrgyclub.com/) · [Rogue — The Index](https://www.roguefitness.com/theindex) · [Wolverine (Locomotive)](https://www.wolverineworldwide.com/) · [Dogpound](https://www.highsnobiety.com/p/dogpound-gym-new-york-kirk-myers/) · [David Lloyd](https://www.davidlloyd.co.uk/) · [Eleiko × KeyShot](https://keyshot.com/customers/eleiko) · [Awwwards Sports](https://www.awwwards.com/websites/sports/)

**Dossier Hartman :** [BodyBuildingBros — IFBB Pro card 2026](https://www.bodybuildingbros.com/news/french-golden-child-hartman-earns-pro-card-and-eyes-olympia/) · [France 3 Nouvelle-Aquitaine — portrait Samuel Hartman](https://france3-regions.franceinfo.fr/nouvelle-aquitaine/haute-vienne/limoges/limoges-samuel-hartman-le-monsieur-muscles-made-in-limousin-2315677.html) · [Coulisses TV — « Quelle époque ! » du 20/12/2025](https://www.coulisses-tv.fr/index.php/magazines/item/49863-quelle-%C3%A9poque-samedi-20-d%C3%A9cembre-2025,-les-invit%C3%A9s-re%C3%A7us-par-l%C3%A9a-salam%C3%A9-sur-france-2) · [Info Haute-Vienne — portrait Bernard Hartman (2018)](https://www.limogesinfos87.fr/actualite-17909-une-tete-bien-faite-sur-un-corps-bien-fait.html) · [Info Haute-Vienne — Lady Fit Zen & Iron Gym (2019)](https://www.limogesinfos87.fr/actualite-17951-lady-fit-zen-et-iron-gym-des-salles-qui-se-bougent.html) · [RetroMuscle](https://retromuscle.net/en-en/pages/nos-athletes-samuel-hartman) · [Societe.com — Iron Gym Limoges Sports](https://www.societe.com/societe/iron-gym-limoges-sports-932034580.html) · [Pappers — EURL Iron Gym](https://www.pappers.fr/entreprise/eurl-iron-gym-388173957) · [Archive résultats championnats de France IFBB](http://edouard.repka.free.fr/historique/resultats_championnat_de_france_.htm)

**Concurrence Limoges :** [Fitness Park Limoges](https://www.fitnesspark.fr/club/limoges/) · [L'Orange Bleue Limoges Nord](https://www.lorangebleue.fr/clubs/limoges-nord/) · [Planète Forme](https://www.planeteforme.club/) · [Espace Forme](https://espaceforme.fr/) · [The Box Limoges](https://thebox-limoges.fr/) · [Annuaire salles de sport Limoges](https://sallesdesport.fitness/fr/z/38752-limoges/)

**Sources internes :** `AUDIT.md`, `CLAUDE.md`, `HANDOFF.md`, code source `src/`, déploiement live `iron-gym-v2.vercel.app`
