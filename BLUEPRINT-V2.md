# IRON GYM V2 — CREATIVE BLUEPRINT

**Statut :** cahier des charges. À valider avant toute phase de design ou de développement.
**Base stratégique :** `AUDIT-AAA-V2.md` (validé)
**Date :** 18 juillet 2026

---

## CADRE — LES TROIS CONTRAINTES VERROUILLÉES

Tout ce document en découle. Elles ne sont pas des préférences, ce sont des paramètres.

| # | Décision | Conséquence directe |
|---|---|---|
| **1** | **Vouvoiement sec** — le vous d'un coach qui vous respecte, pas celui d'un commercial | Phrases courtes. Verbes concrets. Aucun conditionnel de politesse. Aucun « n'hésitez pas à » |
| **2** | **Option B — la lignée sans les titres** | **Aucune fédération n'est citée nulle part sur le site. Aucun titre n'est affiché.** Samuel est nommé, présent, qualifié « compétiteur international ». Le récit repose sur la répétition, jamais sur le palmarès |
| **3** | **Aucun shooting photo** | **C'est la contrainte structurante.** Voir encadré ci-dessous |

### ⚠️ Ce que « aucun shooting » impose

Le maillon faible n°1 identifié à l'audit était la photographie. On ne peut pas le réparer par de la photographie. Il faut donc **déplacer la charge de différenciation** :

**La DA V2 repose sur cinq piliers, dans cet ordre de poids :**

1. **La typographie** (40 %) — Teko à l'échelle extrême, le manifeste enfin en display, les chiffres comme images
2. **Le récit** (25 %) — l'histoire porte le site, pas les visuels
3. **Le motion** (15 %) — le moteur GSAP existe déjà, 674 lignes réutilisables
4. **Le retraitement radical de l'existant** (15 %) — voir §5.1, c'est le geste le plus rentable du projet
5. **La texture** (5 %) — grain acier, trame d'archive, séparateur signature

**Et une découverte de production qui change tout :** Samuel Hartman est **créateur de contenu professionnel avec 240 000+ abonnés**. Il possède plusieurs années de photo et de vidéo de qualité professionnelle. La banque d'images existe déjà — elle est sur son téléphone. **On ne shoote pas, on collecte.** C'est la priorité n°1 du plan de production (§7).

> **Le principe qui gouverne toute la DA V2 :** on ne cherche pas à faire croire qu'on a shooté. On assume l'archive, on assume le document, on assume le grain. Une photo basse définition traitée comme une photo contemporaine est un défaut. La même photo traitée comme une **archive datée** devient un actif.

---
---

# 1. BRAND STRATEGY

## 1.1 Essence de marque

> ## LA TRANSMISSION

Pas la force. Pas le dépassement. Pas la performance. **La transmission.**

Ce qui passe d'une personne à une autre : un geste, un standard, une exigence. C'est ce que Bernard a reçu à onze ans en Creuse, ce qu'il a donné à son fils, et ce qu'il donne à chaque personne qui pousse la porte du 31 rue François Chénieux.

C'est aussi, littéralement, le modèle économique de la salle : **le coaching individuel gratuit**. Iron Gym ne vend pas l'accès à des machines. Iron Gym transmet un savoir-faire, et met des machines à disposition pour ça.

L'essence n'est pas une métaphore. C'est une description.

## 1.2 Mission

**Faire en sorte que personne, à Limoges, n'apprenne à soulever tout seul.**

## 1.3 Vision

**Devenir l'endroit dont on dit, dans dix ans, qu'il faut y être passé.**

Pas la plus grande salle du Limousin. Pas la moins chère. L'institution — celle qu'on cite, celle d'où sortent les gens sérieux, celle qui existait avant les chaînes et qui existera après.

## 1.4 Positionnement

**Iron Gym est l'institution bodybuilding du Limousin.**

Sur le marché de Limoges (9,95 € chez Planète Forme, 19 € chez Fitness Park, 24,99 € chez Basic-Fit, 45 € à L'Orange Bleue), Iron Gym à ~33 € n'est ni la moins chère ni la plus grande.

C'est **la seule qui forme des compétiteurs, et la seule qui le fait depuis 1992.**

Le positionnement ne se défend pas par le prix. Il se défend par l'antériorité et par la compétence.

## 1.5 Promesse principale

> ## « Vous ne serez jamais seul devant une barre. »

Cette phrase fait trois choses à la fois, et c'est pour ça qu'elle est la bonne :

- Elle **lève le frein n°1** (la peur d'être jugé, de ne pas savoir, d'être le plus faible)
- Elle **nomme le différenciateur commercial** (le coaching individuel compris dans l'abonnement)
- Elle **résume le récit de marque** (la transmission, Bernard → Samuel, trente ans)

Une salle low-cost ne peut pas la prononcer. Une chaîne non plus. C'est une promesse opérationnellement vraie, vérifiable dès la première visite.

## 1.6 Différenciation — l'ordre est stratégique

| Rang | Argument | Pourquoi à cette place |
|---|---|---|
| **1** | **Le coaching individuel est compris dans l'abonnement.** Bilan de départ, programme personnalisé, suivi sur le plateau, corrections. Ailleurs : 40-60 € la séance. 🔒 *Formulation verrouillée — voir §7.3* | Preuve opérationnelle de l'essence de marque. C'est le seul argument à la fois émotionnel, commercial et **tenable dans la durée**. Aujourd'hui traité en card `02` sur 4 |
| **2** | **Trente-quatre ans. Le même homme. Le même plateau.** | L'antériorité justifie le prix. Inimitable, non achetable |
| **3** | **On y forme des compétiteurs de niveau international** | La preuve du niveau, sans jamais citer de titre ni de fédération |
| **4** | **20+ machines choisies une par une**, dont plusieurs uniques à Limoges | La preuve matérielle. À condition de nommer les constructeurs |
| **5** | **La seule cage de street workout extérieure de Limoges** · sauna privé inclus · 100+ cours/mois · 7j/7 | Le confort. Arrive en dernier, jamais en premier |

**Ce qui n'est jamais un argument :** le prix. Iron Gym ne se compare pas à Basic-Fit sur le prix. Elle se compare sur ce que Basic-Fit ne peut pas faire.

## 1.7 Personnalité de marque

Cinq traits. Chacun avec sa traduction opérationnelle.

| Trait | Ce que ça veut dire | Ce que ça interdit |
|---|---|---|
| **Sobre** | On énonce des faits. 1992. 31 rue Chénieux. 137,5 kg. On ne qualifie pas | Aucun superlatif. Aucun point d'exclamation |
| **Compétent** | On sait de quoi on parle et ça se sent à la précision du vocabulaire | Jamais de terme générique quand un terme technique existe |
| **Accueillant** | On s'adresse en priorité à celui qui n'ose pas entrer | Aucun code d'initié non expliqué. Aucune posture |
| **Patient** | Trente-quatre ans. On n'est pas pressé, et vous non plus | Aucune urgence artificielle. Aucun compte à rebours. Aucune promo clignotante |
| **Ancré** | Limoges, la Creuse, la rue Chénieux. Le local est revendiqué, pas subi | Aucun visuel générique, aucune référence américaine |

**L'archétype :** l'entraîneur. Pas le champion, pas le vendeur, pas le coach de vie. **Celui qui corrige votre geste sans hausser la voix, et qui est encore là dix ans après.**

## 1.8 Ton éditorial

**Le vouvoiement sec.** Défini par quatre règles :

1. **Phrases courtes.** Point. Souvent moins de dix mots.
2. **Verbes concrets.** Soulever, corriger, montrer, revenir, durer. Jamais « accompagner dans votre démarche ».
3. **Les faits avant les adjectifs.** Pas « un équipement moderne » mais « vingt-trois machines, dont quatre qu'on ne trouve nulle part ailleurs à Limoges ».
4. **On adresse la personne, pas la cible.** « Vous n'avez jamais soulevé » plutôt que « quel que soit votre niveau ».

**Test de validation d'une phrase :** *est-ce qu'une autre salle de Limoges pourrait écrire exactement cette phrase ?* Si oui, elle est mauvaise. On la réécrit ou on la supprime.

Exemple appliqué :

| ❌ V1 actuelle | ✅ V2 |
|---|---|
| « Profitez d'un équipement moderne, d'une ambiance authentique et d'un accompagnement adapté à tous les niveaux. » | « Vingt-trois machines. Un coach qui vous suit gratuitement. Depuis 1992, au centre de Limoges. » |
| « Un espace complet, du matériel fiable et une équipe présente pour vous aider à atteindre vos objectifs. » | « Bernard a choisi chaque machine. Il peut vous dire pourquoi, une par une. » |
| « Un plateau moderne, des machines sélectionnées pour leur qualité. » | « Il a tout refait en 2018. Machine par machine. » |

## 1.9 Vocabulaire

### À utiliser

**Le matériel et le geste** — la fonte · la barre · le plateau · la charge · la série · la répétition · le geste · l'amplitude · la technique · le rack · la cage · les charges libres

**La transmission** — transmettre · montrer · corriger · apprendre · reprendre · durer · revenir · suivre · le bilan · le programme · le carnet

**L'ancrage** — Limoges · la rue Chénieux · le Limousin · la Creuse · 1992 · trente-quatre ans · le centre-ville

**Les gens** — Bernard · Samuel · les adhérents · les coachs (nommés) · les membres · celui qui débute · celui qui prépare une compétition

**Le concret** — des chiffres, des dates, des noms propres, des marques de machines, des kilos, des horaires

### À éviter — liste noire

**Le fitness générique** — dépassement de soi · votre meilleure version · bien-être · atteindre vos objectifs · relever le défi · repousser vos limites · transformation · votre parcours · votre démarche

**Le marketing interchangeable** — équipement moderne · ambiance authentique · matériel fiable · meilleures conditions · cadre convivial · équipe dynamique · espace complet · tous niveaux · à votre écoute · n'hésitez pas

**Le premium creux** — premium · haut de gamme · exclusif · d'exception · unique en son genre · le meilleur de · l'excellence *(on montre le fait, on ne pose pas l'étiquette)*

**Le hardcore importé** — no pain no gain · beast mode · warrior · grind · hustle · le lion · la meute · toute référence anglo-saxonne de culture salle

**Interdits absolus (option B)** — le nom de toute fédération · « champion du monde » · « champion de France » · « titre » · « palmarès » · toute mention de catégorie de compétition · « naturel » / « natty » / « testé »

---
---

# 2. STORYTELLING FINAL

## 2.1 Principe de construction

Le récit ne cite **aucune fédération, aucun titre, aucune compétition nommée**. Il ne perd rien : sa force ne venait pas des trophées, elle vient de **la répétition et du retour**.

Toutes les briques ci-dessous sont vérifiées par des sources ouvertes (presse locale Haute-Vienne 2018-2019, France 3 Nouvelle-Aquitaine 2021, registres Pappers/Societe.com). **Chaque date est à faire reconfirmer par Bernard en visio** — voir §7.2.

## 2.2 Le récit en six actes

### Acte I — Le gamin de Felletin · 1975

Bernard Hartman a onze ans. Il est au collège de Felletin, en Creuse. Il découvre l'haltérophilie. Il devient champion de France par équipe de mini-haltérophilie.

Il ne s'arrêtera plus.

### Acte II — Quatorze ans de compétition · 1975-1989

Sélections nationales jusqu'en 1989. Records régionaux : **137,5 kg à l'arraché, 177,5 kg à l'épaulé-jeté**. Puis il passe à la musculation et monte sur les podiums nationaux dès sa deuxième année de pratique.

Ce sont des chiffres, pas des titres. Ils sont vérifiables et ils n'engagent aucune fédération.

### Acte III — Le bâtisseur · 1988-1992

En 1988, il ouvre sa première salle : **Le Club 87**. En 1992, il ouvre **Iron Gym**, au 31 rue François Chénieux. Il a vingt-huit ans. Il est titulaire du CAPEPS.

### Acte IV — La perte · 2000

Il vend la salle.

*(Fait de registre : l'EURL Iron Gym, créée le 01/08/1992, est radiée le 21/11/2000.)*

Pendant dix-huit ans, Iron Gym continue sans lui.

### Acte V — Le retour · 2018

**Il revient la chercher.**

Il reprend la salle et la refait de fond en comble. Machine par machine. Il a cinquante-quatre ans.

> **C'est le pivot émotionnel de toute la marque.** Personne ne rachète une salle de sport dix-huit ans plus tard pour des raisons comptables. C'est le seul fait de toute l'histoire qui ne peut s'expliquer que par l'attachement — et c'est le seul que la V1 ne raconte pas du tout.

### Acte VI — La transmission · aujourd'hui

Samuel a grandi entre les barres de son père, sur ce plateau. Il est aujourd'hui compétiteur international. Son entraîneur, c'est son père.

> *« Parfois c'est compliqué d'enlever la casquette de papa et de ne garder que celle d'entraîneur. »*
> — Bernard Hartman

### La chute

Trente-quatre ans après l'ouverture, le même homme est toujours là. Sur le même plateau. À corriger les mêmes gestes. Sauf qu'aujourd'hui, il y a une salle entière derrière lui.

## 2.3 Les trois phrases qui portent tout le site

Elles sont hiérarchisées. La première est la plus importante du site.

1. > **« Il a vendu cette salle en 2000. Il est revenu la chercher dix-huit ans plus tard. »**
   *Le hook narratif. Aucune concurrence à Limoges ne peut écrire une phrase pareille.*

2. > **« Personne n'apprend à soulever tout seul. »**
   *Le manifeste. Vrai pour le débutant comme pour le compétiteur.*

3. > **« Samuel a grandi entre les barres de son père. Aujourd'hui, son entraîneur, c'est toujours lui. »**
   *La transmission, sans un seul titre.*

## 2.4 Le contrepoint moral — l'atout caché

Bernard a déclaré en 2018, à la presse locale :

> *« Il ne faut pas brûler les étapes en tombant dans les excès avec l'utilisation de produits. Il faut aimer la discipline avant d'en aimer le résultat. »*

**Cette citation est un actif stratégique majeur.** Utilisée en pull-quote dans la section Lignée, elle :

- installe une position morale claire sur un sujet où le secteur est muet ;
- **désamorce par anticipation** toute attaque sur le dopage, sans jamais aborder le sujet ;
- résume la promesse de marque en une phrase du fondateur lui-même ;
- fonctionne comme argument de réassurance pour les parents d'adolescents adhérents.

**À faire valider par Bernard avant usage** (§7.2) : c'est une citation de presse, il doit accepter qu'elle devienne un élément de marque.

## 2.5 Ce que le récit ne dit jamais

- Aucun nom de fédération
- Aucun titre, aucun classement, aucun championnat nommé
- Aucun chiffre d'abonnés Instagram (périme en trois mois, et transforme l'institution en compte de créateur)
- Aucune date de compétition de Samuel
- Aucune mention de dopage, ni pour, ni contre, ni pour s'en défendre
- Aucune comparaison nominative avec un concurrent local

---
---

# 3. ARCHITECTURE UX V2

## 3.1 Décision structurelle

**Passage du mono-page éditorial au multi-pages.** Aujourd'hui, tout le contenu commercial vit sur `/` (les 4 autres routes sont légales). C'est le plafond de verre n°1 de l'acquisition : une seule URL ne peut pas se positionner simultanément sur toutes les intentions de recherche locales.

## 3.2 Sitemap final

```
/                                 Accueil — le récit + la conversion
│
├── /premiere-seance              ★ PAGE DE CONVERSION N°1
├── /la-lignee                    L'histoire complète + Le Mur
├── /le-coaching                  La méthode, en détail
├── /le-plateau                   Les espaces + l'index des machines
├── /les-cours                    Planning + fiches cours nommés
├── /tarifs                       Grille + FAQ complète (dont résiliation)
├── /nous-trouver                 Accès, horaires, parking, vestiaires, FAQ locale
│
├── /mentions-legales             (existant)
├── /confidentialite              (existant)
├── /cgv                          (existant)
└── /404                          (existant)
```

**8 pages éditoriales, contre 1 aujourd'hui.**

**Phase 2 (hors scope V2)** : `/le-plateau/[machine]` — une fiche par machine premium. Reporté parce que sans shooting, une fiche machine sans photo dédiée n'a pas de valeur. À rouvrir dès qu'un shooting est budgété.

## 3.3 Rôle de chaque page

| Page | Rôle unique | Intention de recherche visée | Conversion |
|---|---|---|---|
| **`/`** | Faire comprendre en 10 s ce qu'est Iron Gym, et donner envie d'aller voir | « salle de sport Limoges », « salle de musculation Limoges » | Première séance |
| **`/premiere-seance`** ★ | **Lever la peur et faire réserver.** La page la plus importante du site | « essai salle de sport Limoges », « débuter musculation Limoges » | Créneau réservé |
| **`/la-lignee`** | Installer la légitimité. Transformer une salle en institution | « Iron Gym Limoges », marque | Aucune — page de marque |
| **`/le-coaching`** | Révéler la valeur cachée. Chiffrer le gratuit | « coach sportif Limoges », « coach musculation Limoges » | Première séance |
| **`/le-plateau`** | Faire désirer le matériel | « salle musculation matériel Limoges » | Première séance |
| **`/les-cours`** | Capter l'audience cours collectifs (majoritairement féminine, souvent débutante) | « cours collectifs Limoges », « pilates Limoges », « cross training Limoges » | Première séance |
| **`/tarifs`** | Répondre à l'objection prix et à l'objection résiliation | « tarif salle de sport Limoges », « abonnement salle Limoges » | Devenir membre |
| **`/nous-trouver`** | Capter la longue traîne pratique et rassurer le local | « salle de sport centre-ville Limoges », « parking », « ouvert dimanche » | Appel / visite |

## 3.4 Le funnel — modèle à trois portes

Le principe : **on ne force jamais un seul chemin.** Chaque profil a sa porte, et les trois sont visibles en permanence.

```
                    ┌─────────────────────────────────────────────┐
                    │  PORTE 1 — CHAUDE          ★ principale     │
   Visiteur ────────┤  « Réserver ma première séance »            │──→ Créneau
                    │  Créneau réel, confirmation immédiate       │    réservé
                    │  → bilan gratuit → abonnement               │
                    └─────────────────────────────────────────────┘
                    ┌─────────────────────────────────────────────┐
                    │  PORTE 2 — TIÈDE                            │
                    │  « Carnet 10 séances — 75 € »               │──→ Achat
                    │  Sans engagement, achat en ligne immédiat   │    en ligne
                    └─────────────────────────────────────────────┘
                    ┌─────────────────────────────────────────────┐
                    │  PORTE 3 — HUMAINE                          │
                    │  WhatsApp · Téléphone (sticky mobile)       │──→ Conversation
                    │  Pour ceux qui veulent parler à quelqu'un   │
                    └─────────────────────────────────────────────┘
```

**Règle absolue : un seul libellé de CTA principal sur tout le site — « Réserver ma première séance ».** Pas « Essai gratuit », pas « S'inscrire », pas « Nos tarifs ». La V1 en utilise trois variantes différentes ; c'est corrigé.

## 3.4 bis — ⭐ LE PARCOURS DE CONVERSION COMPLET

> **Le site n'est pas l'objectif. C'est la première moitié d'un parcours qui se termine dans la salle.**
> Tout le développement se conçoit autour de cette chaîne — pas autour des pages. Une page qui ne fait pas avancer d'un maillon au suivant n'a pas de raison d'exister.

```
   ┌──────────────────────────────────────────────────────────────┐
   │  EN LIGNE                                                    │
   ├──────────────────────────────────────────────────────────────┤
   │                                                              │
   │   ①  Visiteur                                                │
   │      Google · Instagram · bouche-à-oreille · passage         │
   │              ↓                                               │
   │   ②  « Réserver ma première séance »          ⟵ CTA unique  │
   │              ↓                                               │
   │   ③  Choix du créneau  ─── ou ───  WhatsApp / téléphone      │
   │              ↓                                               │
   │   ④  Confirmation automatique                 ⟵ Growth 3    │
   │      email + WhatsApp · adresse · horaire · quoi apporter    │
   │              ↓                                               │
   │   ⑤  Rappel J-1                               ⟵ Growth 3    │
   │              ↓                                               │
   └──────────────┼───────────────────────────────────────────────┘
                  ↓
   ┌──────────────────────────────────────────────────────────────┐
   │  EN SALLE                                                    │
   ├──────────────────────────────────────────────────────────────┤
   │                                                              │
   │   ⑥  Visite de la salle                                      │
   │              ↓                                               │
   │   ⑦  Bilan avec un coach                                     │
   │      ⚠️  « Comment nous avez-vous connus ? »   ⟵ mesure      │
   │              ↓                                               │
   │   ⑧  Adhésion                                                │
   │              ↓                                               │
   │   ⑨  Demande d'avis à J+30                    ⟵ Growth 1    │
   │              ↓                                               │
   │      ↺ Retour en ① — l'avis alimente le SEO local            │
   │                                                              │
   └──────────────────────────────────────────────────────────────┘
```

### Ce que chaque maillon exige du développement

| Maillon | Exigence technique | Lot |
|---|---|---|
| ① Visiteur | SEO local par page · une intention par URL | A1, A8 |
| ② CTA | **Un libellé unique**, instrumenté avec la section d'origine en propriété | A3, A8 |
| ③ Créneau ou contact | Réservation si le logiciel client le permet · sinon formulaire + `wa.me` + `tel:` en repli | B6 |
| ④ Confirmation | Webhook sortant depuis le formulaire ou la réservation | Growth 3 |
| ⑤ Rappel J-1 | Automatisation externe — **le site doit exposer les données nécessaires** | Growth 3 |
| ⑥ Visite | Hors site — mais `/nous-trouver` doit avoir déjà répondu aux questions pratiques *(parking, accès, vestiaires)* | A1 |
| ⑦ Bilan | Hors site — **la question d'attribution s'y pose** | Opérationnel |
| ⑧ Adhésion | Hors site | Opérationnel |
| ⑨ Avis J+30 | Automatisation externe · le site affiche le résultat | Growth 1 |

### Les deux points de fuite

**Entre ③ et ⑥ — les no-shows.** Une réservation en ligne qui ne se transforme pas en visite est une perte sèche. C'est le rôle des maillons ④ et ⑤. **Sans eux, le funnel a un trou au milieu.**

**Entre ⑦ et la mesure — l'attribution.** Sans la question posée au bilan, on ne saura jamais ce que le site a réellement produit. Voir §8.3.

> **Conséquence de conception :** le formulaire et la réservation doivent, dès le développement, **émettre un webhook exploitable** (nom, téléphone, créneau, source). Même si aucune automatisation n'est branchée au lancement, la plomberie doit exister. Rétro-installer un webhook coûte plus cher que le prévoir.

## 3.5 Parcours débutant

**C'est le parcours majoritaire, et c'est celui que la V1 ignore le plus.**

Profil : n'a jamais mis les pieds dans une salle, ou en revient après des années. Peur d'être jugé, de ne pas savoir se servir des machines, d'être le plus faible.

```
Google « salle de sport Limoges »
   ↓
/ — comprend en 10 s : ancienne, sérieuse, quelqu'un s'occupera de lui
   ↓
§ « Vous n'avez jamais mis les pieds dans une salle » — position 3 de la home
   ↓
/premiere-seance — apprend exactement ce qui va se passer, minute par minute
   ↓ (frein levé)
Réserve un créneau
   ↓
Bilan gratuit sur place → programme → carnet
   ↓
Abonnement
```

**Les cinq freins à lever explicitement, dans cet ordre :**

1. « Je vais avoir l'air ridicule » → *on dit ce qui se passe, minute par minute*
2. « Je ne sais pas me servir des machines » → *c'est exactement le rôle du bilan gratuit*
3. « C'est une salle de gros bras » → *photos de vrais membres ordinaires, citations d'avis Google*
4. « Je ne suis pas assez en forme pour commencer » → *le dire frontalement, en une phrase*
5. « Je vais m'engager et ne pas y aller » → *l'offre sans engagement, et la résiliation expliquée*

## 3.6 Parcours pratiquant confirmé

Profil : sait s'entraîner, cherche du matériel sérieux, arbitre entre Iron Gym et une box CrossFit ou une chaîne. Ne veut pas être materné.

```
Google « salle musculation Limoges » / bouche-à-oreille / Instagram de Samuel
   ↓
/ — repère immédiatement les signaux de sérieux : 1992, l'index des machines, la lignée
   ↓
/le-plateau — vérifie le matériel, marque par marque
   ↓
/la-lignee — comprend à qui il a affaire
   ↓
Réserve une séance OU achète un carnet 10 séances
```

**Ce qu'il cherche, dans l'ordre :** les marques de machines · les charges disponibles · les horaires réels · s'il y a du monde aux heures de pointe · si les coachs savent de quoi ils parlent.

**Piège à éviter :** ne pas surcharger la home de contenu débutant au point de faire fuir ce profil. C'est le rôle du multi-pages — la home reste équilibrée, chaque profil trouve sa page dès le premier clic.

---
---

# 4. HOMEPAGE — WIREFRAME DÉTAILLÉ

10 sections. Ordre pensé pour que **la lignée passe de la position 3 à la position 2**, et pour que **le module anti-anxiété arrive en position 3** (modèle Barry's).

---

### `01` — LE SEUIL

| | |
|---|---|
| **Objectif** | Faire comprendre en 10 secondes qui on est, depuis quand, et ce qu'on fait de différent |
| **Émotion** | Le poids. Quelque chose de lourd, d'ancien, de solide |
| **CTA** | **Réserver ma première séance** (primaire) · Voir la salle (secondaire, → `/le-plateau`) |

**Message.** *Une salle qui existe depuis 1992 au centre de Limoges, et où personne ne vous laissera vous débrouiller seul.*

**Contenu.**
- Eyebrow : `LIMOGES · 31 RUE FRANÇOIS CHÉNIEUX · DEPUIS 1992`
- H1 : **IRON GYM** — Teko, échelle extrême, IRON en rouge / GYM en acier *(conservé de la V1, c'est le meilleur élément du site)*
- **La phrase-stats inline** (modèle La Huella) — les compteurs s'animent **à l'intérieur du texte courant**, pas dans une barre de chiffres :

  > « Depuis **1992**, au centre de Limoges. **23** machines, **100+** cours par mois, ouvert **7** jours sur 7 — et le coaching individuel compris dans l'abonnement. »

- Deux CTA

**Direction artistique.**
Fond `#0A0A0A`. **Suppression du halo radial rouge** de la V1 — c'était un pansement sur un vide. Remplacé par : la typographie occupe réellement la largeur (débord assumé, `overflow-x: clip` déjà en place), et une image de fond retraitée en N&B très contrasté à faible opacité, ancrée au bord droit pour combler le tiers mort. Grain acier sur toute la surface.

**Motion.**
Split-text char-by-char sur IRON GYM *(existe déjà, `motion.ts`)*. Compteurs count-up déclenchés dans la phrase, décalés de 120 ms les uns des autres. Léger parallaxe sur l'image de fond. Aucun preloader.

---

### `02` — LA LIGNÉE *(remontée de la position 3 à la position 2)*

| | |
|---|---|
| **Objectif** | Transformer une salle en institution. C'est la section la plus importante du site |
| **Émotion** | Le frisson de l'héritage. Faire partie de quelque chose qui existait avant vous |
| **CTA** | Lire l'histoire complète → `/la-lignee` |

**Message.** *Il a vendu cette salle. Il est revenu la chercher dix-huit ans plus tard.*

**Contenu.**
- Le hook, en Teko pleine largeur : **« Il a vendu cette salle en 2000. Il est revenu la chercher dix-huit ans plus tard. »**
- Frise en quatre temps : `1992` ouverture · `2000` la vente · `2018` le retour · `aujourd'hui` la transmission
- Le diptyque Bernard / Samuel — **régimes chromatiques différenciés** : Bernard en archive (sépia désaturé, grain lourd, trame), Samuel en présent (N&B contrasté, grain fin)
- Pull-quote Bernard : *« Il faut aimer la discipline avant d'en aimer le résultat. »*
- Compteur `1992 → 2026` *(existe déjà, `Heritage.astro`)*

**Direction artistique.**
**Les deux régimes chromatiques ne se mélangent jamais** — c'est la règle qui structure toute l'identité (§5.3). Le passé est sépia et tramé, le présent est N&B et net. Cadres d'archive avec date en Oswald tracké. Filets acier.

**Motion.**
**Le moment signature du site :** au scroll, le portrait de Bernard passe du régime archive au régime présent, en crossfade scrubbé — puis se dissout dans celui de Samuel. Trente ans en un scroll. Reveal des dates de la frise en séquence.

---

### `03` — VOUS N'AVEZ JAMAIS MIS LES PIEDS DANS UNE SALLE

| | |
|---|---|
| **Objectif** | **Lever le frein n°1.** Module anti-anxiété (modèle Barry's, position 2 chez eux) |
| **Émotion** | Le soulagement. « Ah, en fait ça va. » |
| **CTA** | **Réserver ma première séance** |

**Message.** *C'est le cas d'à peu près tout le monde le premier jour. Voilà exactement ce qui se passe.*

**Contenu.**
Quatre temps, numérotés, ultra-concrets :

1. **Vous arrivez.** Quelqu'un vous accueille. On ne vous met pas devant une machine.
2. **On s'assoit et on parle.** Quinze minutes. Ce que vous voulez, ce que vous pouvez, ce que vous avez déjà fait. C'est compris dans l'abonnement.
3. **On fait un tour.** On vous montre les machines, dans l'ordre où vous vous en servirez.
4. **Vous soulevez.** Avec quelqu'un à côté de vous.

Puis, en encadré, la copy de désintimidation explicite :

> « Vous n'avez jamais soulevé. Vous reprenez après dix ans. Vous avez mal au dos. Vous ne savez pas quoi mettre. **Dites-le en arrivant** — c'est exactement l'information dont on a besoin. »

**Direction artistique.**
**Rupture de régime volontaire.** C'est la section la plus chaleureuse du site : plus d'espace, plus de respiration, corps de texte plus grand. Le rouge devient un accompagnement doux plutôt qu'un accent tranchant. Photos de vrais membres ordinaires, jamais de physiques spectaculaires. **Cette section ne doit pas impressionner. Elle doit rassurer.**

**Motion.**
Volontairement calme. Reveal simple en séquence sur les quatre temps. Aucun effet spectaculaire — la sobriété fait partie du message.

---

### `04` — LA MÉTHODE

| | |
|---|---|
| **Objectif** | Révéler la valeur cachée. Chiffrer le gratuit |
| **Émotion** | La surprise, puis le calcul mental |
| **CTA** | Comment ça marche → `/le-coaching` |

**Message.** *Le coaching individuel est gratuit. Ce n'est pas une promotion, c'est le modèle.*

**Contenu.**
- Titre : **« Le coaching individuel est compris dans l'abonnement. »**
- Le chiffrage, en gros : `40 à 60 €` la séance ailleurs → **compris** ici
- Les quatre livrables : bilan de départ · programme personnalisé · suivi sur le plateau · corrections techniques
- **Le lien vers la page complète, où figure le tableau compris / non compris** *(§7.3)* — la transparence est un argument, pas une note de bas de page
- La ligne qui relie tout : *« C'est la seule chose que Bernard n'a jamais accepté de facturer. »*

**Direction artistique.**
Section pilotée par les chiffres. Oswald à très grande échelle sur le comparatif tarifaire. Traitement quasi-infographique, sobre, sans illustration. **Fonctionne sans aucune photo — c'est délibéré vu la contrainte de production.**

**Motion.**
Count-up sur le comparatif : `60 €` qui descend jusqu'à `0 €`. Simple, lisible, efficace.

---

### `05` — LE PLATEAU

| | |
|---|---|
| **Objectif** | Faire désirer le matériel |
| **Émotion** | Le respect pour l'objet |
| **CTA** | Voir tout le plateau → `/le-plateau` |

**Message.** *Vingt-trois machines. Bernard peut vous dire pourquoi il a choisi chacune.*

**Contenu.**
Galerie horizontale pinnée *(mécanique conservée de la V1, elle est bien codée)* — mais **cartes agrandies et vides latéraux resserrés**. Sept espaces : plateau · charges libres · cardio · cage & racks · street workout extérieur · sauna · bar & terrasse.

**Ajout critique : les marques de machines sont nommées.** C'est ce qui transforme « du bon matériel » en fait vérifiable (modèle David Lloyd). Liste à obtenir en visio (§7.2).

**Direction artistique.**
**Photos existantes retraitées selon le protocole §5.1 :** N&B dur, recadrage agressif, grain. Le duotone rouge actuel est supprimé. Un recadrage serré sur un détail d'acier vaut mieux qu'un plan large mou — et **le recadrage est gratuit**.

**Motion.**
Scroll horizontal pinné *(existant)*. Ajout : marquee du nom de section (`LE PLATEAU · LE PLATEAU ·`) en tête de galerie, modèle Capitolium.

---

### `06` — L'INDEX

| | |
|---|---|
| **Objectif** | La preuve matérielle **sans dépendre de la photographie** |
| **Émotion** | La densité. « Ils ont vraiment tout. » |
| **CTA** | Aucun — section de preuve |

**Message.** *La liste complète. Nom par nom.*

> **C'est l'adaptation directe de L'ARSENAL à la contrainte « aucun shooting ».** Faute de pouvoir photographier vingt-trois machines identiquement, on les traite **typographiquement** : une liste dense, exhaustive, nommée. Le modèle est le bloc d'athlètes de Podium.global — la quantité de noms fait la preuve, sans une seule image.

**Contenu.**
Liste exhaustive du matériel, regroupée par zone, en typographie dense. Marques citées. Charges disponibles. Nombre d'exemplaires quand c'est un argument (le « six exemplaires de chaque machine » de Gold's Venice est un argument à lui seul).

Puis, en pied de section : *« Quatre de ces machines n'existent nulle part ailleurs à Limoges. »* — **à confirmer précisément en visio, et à ne publier que si c'est vrai.**

**Direction artistique.**
**La section la plus typographique du site.** Fond noir, liste en Oswald tracké, filets acier, numérotation. Aucune image. Ça doit ressembler à un inventaire d'atelier ou à une nomenclature technique — un objet graphique en soi.

**Motion.**
Reveal ligne par ligne au scroll, rapide, mécanique. Au survol d'une ligne : la spec s'affiche en incrustation.

---

### `07` — LE MUR

| | |
|---|---|
| **Objectif** | La légitimité par l'accumulation |
| **Émotion** | La densité du temps. Trente-quatre ans de gens |
| **CTA** | Aucun — section de preuve |

**Message.** *Trente-quatre ans de gens.*

**Contenu.**
Grille dense — archives de Bernard, coupures de presse locale, photos de membres, contenus Instagram de la salle et de Samuel. **Chaque élément daté.** Modèle : le couloir d'entrée de Bev Francis Powerhouse, tapissé de photos et de coupures sur des décennies.

> **Dépendance de production critique.** Cette section n'existe que si les archives sont récupérées. C'est **la priorité n°1 du plan de production**. Sans archives, la section est supprimée — on ne la remplace pas par du contenu générique.

**Direction artistique.**
Grille irrégulière, dense, presque saturée. Régime archive dominant (sépia, trame, grain). Dates en Oswald sur chaque élément. **Les basses définitions sont un atout ici** : dans une grille datée, une photo granuleuse de 1996 est un document, pas un défaut.

**Motion.**
Marquee infini vertical ou horizontal (modèle Wolverine × Locomotive). Léger parallaxe différencié entre les colonnes.

---

### `08` — CE QU'ON EN DIT

| | |
|---|---|
| **Objectif** | Preuve sociale |
| **Émotion** | La confirmation par les pairs |
| **CTA** | Voir les avis sur Google |

**Message.** *Ce qui revient le plus souvent, c'est l'ambiance.*

**Contenu.**
Note Google **(chiffre à revérifier avant publication — §7.3)** + avis réels. Angle éditorial : au lieu d'afficher huit avis en vrac, **on nomme ce qui revient** — l'ambiance, l'accueil, le côté old school. C'est plus honnête et plus convaincant qu'une moyenne.

**Direction artistique.**
Carrousel conservé. Ajout : visages de membres réels si autorisation obtenue, sinon typographie seule. Citations traitées en gros, éditorialement — pas en cards.

---

### `09` — ENTRER

| | |
|---|---|
| **Objectif** | Conversion |
| **Émotion** | La simplicité de la décision |
| **CTA** | **Réserver ma première séance** · Devenir membre · WhatsApp |

**Message.** *Il n'y a qu'une façon de savoir.*

**Contenu.**
- Grille tarifaire — **sortie des cards Tailwind** (interdit par le brief, présent dans la V1). Traitement tabulaire éditorial : lignes, filets, chiffres en Oswald à grande échelle
- Frais d'adhésion 39 € clairement séparés *(la V1 le fait déjà bien — à conserver)*
- **Un seul prix d'essai affiché.** L'ambiguïté « Gratuit / ou 5 € » de la V1 est un frein au moment exact de la décision — à trancher (§7.3)
- **FAQ rédigée en phrases complètes**, dont une entrée frontale sur la résiliation *(c'est le grief n°1 des avis négatifs récents — le traiter ouvertement le retourne en preuve d'honnêteté)*
- WhatsApp + téléphone

**Direction artistique.**
Tabulaire, sobre, lisible. Le rouge uniquement sur le plan mis en avant et sur les CTA. Aucune card, aucune ombre, aucun arrondi décoratif.

---

### `10` — PIED DE PAGE

Coordonnées, horaires *(les deux régimes accueil / accès badge, bien distingués dans la V1 — à conserver)*, réseaux, pages légales. Signature : `IRON GYM · 31 RUE FRANÇOIS CHÉNIEUX · LIMOGES · DEPUIS 1992`.

---

## 4.1 Récapitulatif — dépendance photographique par section

Vu la contrainte de production, voici ce qui tient debout sans une seule nouvelle photo :

| Section | Dépendance photo | Statut |
|---|---|---|
| 01 Le seuil | Faible — 1 image de fond retraitée | ✅ Faisable |
| 02 La lignée | **Forte** — les 2 portraits existants + archives | ⚠️ Dépend des archives |
| 03 Première séance | Moyenne — membres ordinaires | ⚠️ Dépend d'autorisations |
| 04 La méthode | **Nulle** | ✅ Typographique |
| 05 Le plateau | Moyenne — 7 photos existantes retraitées | ✅ Faisable |
| 06 L'index | **Nulle** | ✅ Typographique |
| 07 Le mur | **Totale** | 🔴 Sans archives, section supprimée |
| 08 Avis | Faible | ✅ Faisable |
| 09 Entrer | **Nulle** | ✅ Typographique |

**7 sections sur 10 tiennent sans aucun nouvel asset.** C'est la validation que l'architecture résiste à la contrainte.

---
---

# 5. DIRECTION ARTISTIQUE

## 5.1 ⭐ Le geste le plus rentable du projet — le retraitement

**À faire en premier, avant toute maquette.** Coût : quelques heures. Impact : le plus élevé de tout le blueprint.

### Le diagnostic

Les photos actuelles sont traitées en **duotone rouge-brun uniforme**. C'est ce qui les fait paraître bon marché, pour trois raisons :

1. Le duotone **aplatit les valeurs** — plus de vrais noirs, plus de vrais blancs, tout est dans un tiers médian boueux
2. Il **uniformise** les sept images, qui deviennent interchangeables
3. Il **teinte le rouge de la marque** en le diluant partout, ce qui lui retire toute force quand il est vraiment utilisé

### Le protocole de retraitement

**Toutes les photos contemporaines :**

| Paramètre | Consigne |
|---|---|
| **Colorimétrie** | **Noir et blanc dur.** Suppression totale du duotone rouge |
| **Point noir** | Écrasé à `#0A0A0A` — il doit fondre dans le fond du site |
| **Point blanc** | Poussé, hautes lumières franches sur l'acier |
| **Contraste** | Élevé. On veut de la matière, pas de la douceur |
| **Grain** | Ajouté, visible, homogène sur toute la banque |
| **Recadrage** | **Agressif.** Voir ci-dessous |

**Le recadrage est l'outil principal, et il est gratuit.**

Sept plans larges mous → une vingtaine de cadrages serrés porteurs. Sur chaque photo existante, chercher : un rack qui coupe le cadre · une pile de disques · une texture de sol · une poulie · une inscription · une ligne de fuite de machines. **Un détail serré et contrasté vaut mieux qu'un plan large propre**, et un plan large peut en produire quatre.

**Le rouge disparaît des photos et se concentre dans l'interface.** C'est le seul moyen de lui rendre sa puissance.

### Cas particuliers

- **Photo sauna Unsplash** → **à supprimer.** Sur une section qui vend l'authenticité, une image de banque est un mensonge visuel. Remplacer par une vraie photo (une capture smartphone honnête vaut mieux qu'un Unsplash léché), ou traiter la section en typographie seule.
- **Portrait archive de Bernard (basse définition)** → **ne pas essayer de le réparer.** Le traiter en régime archive assumé : sépia désaturé, trame typographique visible, cadre daté. Une photo granuleuse de 1996 encadrée et datée est un document ; la même photo upscalée et débruitée est un défaut.

## 5.2 Photographie — les deux régimes

**La règle qui structure toute l'identité : les deux régimes ne se mélangent jamais dans un même cadre.**

### Régime ARCHIVE — le passé

| | |
|---|---|
| **Colorimétrie** | Sépia désaturé (`#8B6F47` à faible saturation), jamais un sépia chaud « vintage Instagram » |
| **Texture** | Grain argentique lourd + **trame typographique** (halftone) visible |
| **Cadre** | Encadré, avec date en Oswald tracké sous l'image |
| **Défauts** | **Conservés.** Poussières, rayures, basse définition, bords irréguliers |
| **Usage** | Tout ce qui est antérieur à 2018 : Bernard, la salle d'origine, les coupures de presse |

### Régime PRÉSENT — aujourd'hui

| | |
|---|---|
| **Colorimétrie** | Noir et blanc contrasté, point noir écrasé, hautes lumières franches |
| **Texture** | Grain fin, homogène |
| **Cadre** | Plein-bleed ou bord franc, jamais de cadre décoratif |
| **Sujets** | Priorité aux mains, à l'acier, aux textures, aux gestes. **Les visages ordinaires avant les physiques spectaculaires** |
| **Usage** | Tout ce qui est postérieur à 2018 |

### Ce qu'on ne fait jamais

- Mélanger les deux régimes dans un même cadre
- Utiliser du rouge dans une photo *(le rouge appartient à l'interface)*
- Une photo de banque d'images, quelle qu'elle soit
- Un physique spectaculaire dans une section de conversion — **ça intimide exactement la personne qu'on cherche à rassurer**
- Un sourire posé face caméra

### Le brief de collecte (§7.1) — puisqu'on ne shoote pas

**Priorité 1 — Les archives de Bernard.** Photos de compétition, photos de la salle en 1992, coupures de presse, affiches, la licence d'haltérophilie, les diplômes. Numérisation à plat, 600 dpi minimum, **sans aucune retouche à la source** — le retraitement se fait ensuite.

**Priorité 2 — La banque de Samuel.** Il produit du contenu professionnel depuis des années. **C'est la banque d'images du site, elle existe déjà.** Demander l'accès aux fichiers sources, pas aux exports Instagram compressés.

**Priorité 3 — L'Instagram de la salle.** Moissonner les meilleurs contenus. Demander les originaux.

**Priorité 4 — Le complément smartphone.** Un téléphone récent en RAW, lumière du jour, en semaine vers 14h (salle vide, lumière naturelle) suffit pour combler les trous. Protocole détaillé à fournir en phase design.

## 5.3 Design system

### Couleurs

```
── FONDS ──────────────────────────────────────────
ink            #0A0A0A    fond principal            [conservé]
surface        #121214    cartes, blocs             [conservé]
surface-2      #1B1B20    élévation                 [conservé]

── ACCENT ─────────────────────────────────────────
blood          #C0392B    accent principal          [conservé]
blood-hi       #ED5340    texte rouge, hover (AA)   [conservé]
blood-deep     #7E1F14    profondeur                [conservé]

── ACIER ──────────────────────────────────────────
steel          #9CA3AF                              [conservé]
steel-hi       #DFE3E8                              [conservé]
steel-dark     #4B5563                              [conservé]

── TEXTE ──────────────────────────────────────────
haze           #EDEDED                              [conservé]
bone           #F6F6F6                              [conservé]
bronze         #9AA0A8    labels                    [conservé]

── ★ NOUVEAU — RÉGIME ARCHIVE ─────────────────────
archive        #8B6F47    sépia désaturé
archive-paper  #E8E2D6    fond de cadre d'archive
archive-ink    #3A3128    texte sur cadre d'archive
```

**Un seul ajout au système existant : le régime archive.** Il est structurant — c'est lui qui sépare visuellement le passé du présent, et donc qui rend le récit lisible sans un mot.

**Règle d'usage du rouge :** le rouge est **rare**. Il signale l'action (CTA), l'accent typographique et le présent. Il ne teinte jamais une photo. Sa rareté fait sa force.

### Typographies

| Rôle | Police | Usage | Changement V2 |
|---|---|---|---|
| **Display** | **Teko** 500/700 | Tous les H1/H2. **Et désormais le manifeste** | ⚠️ Le manifeste passe de DM Sans à Teko |
| **Technique** | **Oswald** 500/600/700 | Chiffres, dates, labels trackés, l'Index, les specs | Rôle élargi |
| **Corps** | **DM Sans** 400/500/700 | Texte courant uniquement | Rôle restreint |

**Corrections typographiques V2 :**
1. **Le manifeste passe en Teko.** C'est le moment le plus identitaire du site, il ne peut pas parler en sans-serif neutre
2. **Preload des 8 fonts** (6 ne le sont pas aujourd'hui — cause du Speed Index mobile)
3. **Suppression des 79 Ko de woff2 orphelines** livrées inutilement
4. Teko conservé — c'est le meilleur des trois choix du brief, et le moins saturé du marché *(Bebas et Anton sont sur-utilisés dans la catégorie Sports d'Awwwards)*

### Textures

| Texture | Rôle | Statut |
|---|---|---|
| **Grain acier** (`feTurbulence` procédural) | Sur tous les fonds plats | ✅ Existe |
| **Trame d'archive** (halftone) | Régime archive uniquement | ⭐ À créer |
| **Séparateur signature** | Un motif acier unique, répété entre chaque section — le tissu conjonctif du site (modèle `marble.svg` de Capitolium) | ⭐ À créer |
| **Dégradé acier brossé** | Filets, texte métallique | ✅ Existe |

### Composants

**À conserver tels quels :** Nav + burger *(a11y exemplaire)* · badge statut ouvert/fermé live · barre de progression de scroll · marquee *(hors séparateur `✦`)* · galerie horizontale pinnée · compteurs count-up · SectionLabel · formulaire Web3Forms + validation

**À refondre :** cards Programmes → traitement éditorial · cards Pricing → tabulaire · `GoldButton` → **renommer `Button`** *(et l'utiliser aussi dans la Nav, qui l'ignore aujourd'hui)* · séparateur marquee `✦` → glyphe usiné

**À créer :** cadre d'archive daté · l'Index typographique · le Mur (grille dense + marquee) · frise chronologique · accordéon FAQ · bloc WhatsApp · sélecteur de créneau · barre CTA sticky mobile

## 5.4 Motion

**Base :** le moteur existant (`motion.ts`, 674 lignes, GSAP + ScrollTrigger + SplitText + Lenis) est réutilisable tel quel. `prefers-reduced-motion` y est traité à trois niveaux — **c'est best-in-class, à préserver absolument**.

### Les quatre moments signatures

| # | Moment | Où | Description |
|---|---|---|---|
| **1** | **Le passage du temps** ⭐ | § 02 | Le portrait de Bernard passe du régime archive au régime présent en crossfade **scrubbé au scroll**, puis se dissout dans celui de Samuel. Trente ans en un geste. **C'est LE moment du site** |
| **2** | **La phrase qui compte** | § 01 | Les compteurs s'animent **à l'intérieur du texte courant**, décalés de 120 ms. Distinctif — personne ne le fait |
| **3** | **L'index qui se déroule** | § 06 | Reveal ligne par ligne, rapide, mécanique, sur `--ease-snap`. Spec en incrustation au survol |
| **4** | **Le mur qui défile** | § 07 | Marquee infini d'archives, parallaxe différencié entre colonnes |

### Règles de motion

- **Split-text sur H1/H2 uniquement.** Jamais sur le corps de texte *(a11y, indexation, CLS)*. La V1 respecte déjà cette règle
- **Deux vitesses selon le régime :** les sections institutionnelles (lignée, index, plateau) sont sèches, sur `--ease-snap`. Les sections de conversion (première séance, méthode, entrer) sont douces, sur `--ease-soft`. **Le motion porte le changement de registre**
- **Aucun preloader**, aucun compte à rebours, aucune urgence artificielle *(contraire au trait « patient »)*
- Lazy-load du motion non critique derrière un `import()` — 29 Ko inutilisés au premier paint aujourd'hui

---
---

# 6. COPYWRITING — LIGNES ÉDITORIALES

> Registre : **vouvoiement sec.** Phrases courtes. Verbes concrets. Faits avant adjectifs.
> Test de validation : *une autre salle de Limoges pourrait-elle écrire cette phrase ?* Si oui, on la réécrit.

## 6.1 Hero

```
LIMOGES · 31 RUE FRANÇOIS CHÉNIEUX · DEPUIS 1992

IRON
GYM

Depuis 1992, au centre de Limoges. 23 machines, 100+ cours
par mois, ouvert 7 jours sur 7 — et le coaching individuel
compris dans l'abonnement.

[ Réserver ma première séance ]  [ Voir la salle ]
```

*(Les chiffres en gras sont des compteurs animés dans le texte courant.)*

**Baseline de repli, si la phrase-stats est jugée trop longue :**
> « La fonte, depuis 1992. » *(conservée de la V1 — elle est bonne)*

## 6.2 Manifeste

**En Teko, pleine largeur, révélé ligne par ligne :**

```
Personne
n'apprend
à soulever
tout seul.

Quelqu'un,
un jour,
vous montre.
```

**Corps, sous le manifeste :**

> « En 1992, Bernard Hartman a ouvert cette salle parce que quelqu'un lui avait montré, à lui, quand il avait onze ans. Depuis, c'est ce qui se passe ici. Vous arrivez, quelqu'un vous montre. C'est tout le modèle, et c'est pour ça que le coaching n'a jamais été payant. »

**Signature :** `— IRON GYM · LIMOGES · DEPUIS 1992`

> **Pourquoi ce manifeste :** il est vrai pour le débutant total comme pour le compétiteur. Il énonce la promesse, il justifie le coaching gratuit, il annonce le récit père-fils. Sept lignes font le travail de toute une page.

## 6.3 Section 02 — La lignée

**Titre :**
> ## « Il a vendu cette salle en 2000. Il est revenu la chercher dix-huit ans plus tard. »

**Frise :**

```
1992          Bernard Hartman ouvre Iron Gym, 31 rue François Chénieux.
              Il a vingt-huit ans.

2000          Il vend.

2018          Il revient la chercher. Il reprend la salle et la refait
              de fond en comble. Machine par machine.

AUJOURD'HUI   Son fils s'entraîne sur le même plateau. Son entraîneur,
              c'est toujours lui.
```

**Bernard :**
> « Onze ans, un collège de Creuse, et une barre trop lourde. Cinquante ans plus tard, il est encore sur le plateau à corriger des gestes. »

**Samuel :**
> « Il a grandi entre les barres de son père. Il est aujourd'hui compétiteur international. Il s'entraîne toujours ici, et son entraîneur n'a pas changé. »

**Pull-quote :**
> *« Il ne faut pas brûler les étapes en tombant dans les excès avec l'utilisation de produits. Il faut aimer la discipline avant d'en aimer le résultat. »*
> — **Bernard Hartman**

## 6.4 Section 03 — Première séance

**Titre :**
> ## Vous n'avez jamais mis les pieds dans une salle.

**Chapô :**
> « C'est le cas d'à peu près tout le monde le premier jour. Voilà exactement ce qui se passe. »

**Les quatre temps :**

```
01   Vous arrivez.
     Quelqu'un vous accueille. On ne vous met pas devant une machine.

02   On s'assoit et on parle.
     Quinze minutes. Ce que vous voulez, ce que vous pouvez, ce que
     vous avez déjà fait. C'est compris dans l'abonnement.

03   On fait le tour.
     On vous montre les machines, dans l'ordre où vous allez vous
     en servir. Pas les vingt-trois. Les cinq qui vous concernent.

04   Vous soulevez.
     Avec quelqu'un à côté de vous.
```

**Encadré :**
> « Vous n'avez jamais soulevé. Vous reprenez après dix ans d'arrêt. Vous avez mal au dos. Vous ne savez pas quoi mettre. **Dites-le en arrivant.** C'est exactement l'information dont on a besoin pour bien faire notre travail. »

## 6.5 Section 04 — La méthode

**Titre :**
> ## Le coaching individuel est compris dans l'abonnement.

**Corps :**
> « Ailleurs, un suivi individuel se facture entre 40 et 60 € la séance. Ici, un bilan de départ, un programme personnalisé, un suivi sur le plateau et des corrections quand vous en avez besoin sont compris dans votre abonnement.
>
> C'est la seule chose que Bernard n'a jamais accepté de facturer. »

**Lien :** → *Voir exactement ce qui est compris* — vers `/le-coaching`

## 6.6 Section 05 / 06 — Le plateau & l'index

**Titre plateau :**
> ## Vingt-trois machines. Bernard peut vous dire pourquoi il a choisi chacune.

**Titre index :**
> ## La liste complète.

**Chapô index :**
> « Sans photos retouchées et sans adjectifs. Le nom des machines, les charges, le nombre. Vérifiez vous-même. »

## 6.7 Section 07 — Le mur

**Titre :**
> ## Trente-quatre ans de gens.

**Chapô :**
> « Des photos de compétition, des coupures du journal, des adhérents qui sont passés et d'autres qui ne sont jamais partis. »

## 6.8 Section 08 — Avis

**Titre :**
> ## Ce qui revient le plus souvent, c'est l'ambiance.

**Chapô :**
> « On n'a pas choisi les avis. Ils sont sur Google, vous pouvez les lire là-bas. Mais si on devait résumer : les gens parlent de l'accueil avant de parler du matériel. »

## 6.9 Section 09 — Entrer

**Titre :**
> ## Il n'y a qu'une façon de savoir.

**Chapô :**
> « Venez une fois. On s'assoit, on parle quinze minutes, vous soulevez. Ensuite vous déciderez. »

## 6.10 Les CTA — libellés verrouillés

| Contexte | Libellé exact |
|---|---|
| **Principal, partout** | **Réserver ma première séance** |
| Secondaire hero | Voir la salle |
| Adhésion | Devenir membre |
| Sans engagement | Prendre un carnet de 10 séances |
| Contact humain | Écrire sur WhatsApp · Appeler la salle |
| Lecture | Lire l'histoire · Voir tout le plateau · Comment ça marche |

**Le libellé principal ne varie jamais.** La V1 en utilise trois versions différentes ; c'est la première chose à corriger.

## 6.11 Titres de pages

| Page | H1 |
|---|---|
| `/` | IRON GYM |
| `/premiere-seance` | Ce qui se passe le premier jour. |
| `/la-lignee` | Il a vendu cette salle. Il est revenu la chercher. |
| `/le-coaching` | Quelqu'un vous montre. C'est compris. |
| `/le-plateau` | Vingt-trois machines, choisies une par une. |
| `/les-cours` | Cent cours par mois. Vous n'êtes jamais seul non plus. |
| `/tarifs` | Ce que ça coûte, et ce que ça comprend. |
| `/nous-trouver` | 31 rue François Chénieux, Limoges. |

---
---

# 7. PLAN DE PRODUCTION

## 7.1 Assets à obtenir du client

**Classés par criticité. Les 🔴 bloquent des sections entières.**

| # | Asset | Criticité | Sans lui |
|---|---|---|---|
| **1** | **Les archives de Bernard** — photos de compétition, salle en 1992, coupures de presse, affiches, licences, diplômes | 🔴 | **La section « Le Mur » est supprimée**, la Lignée est amputée |
| **2** | **La banque photo/vidéo de Samuel** — fichiers sources, pas les exports Instagram | 🔴 | Le site n'a aucune image contemporaine de qualité |
| **3** | **La liste exacte des machines** avec constructeurs, charges, nombre d'exemplaires | 🔴 | **La section « L'Index » est supprimée** |
| **4** | **Noms, photos et une citation personnelle par coach** | 🟠 | Le planning garde des coachs fictifs = non publiable |
| **5** | Accès aux originaux de l'Instagram de la salle | 🟠 | Le Mur perd sa partie contemporaine |
| **6** | Autorisations droit à l'image (membres photographiés) | 🟠 | Aucun visage sur le site |
| **7** | Logo en vectoriel (SVG/AI) | 🟡 | On reste sur le `.webp` actuel |
| **8** | Photo du sauna réelle | 🟡 | On supprime l'image Unsplash sans remplacement |

## 7.2 Questions pour la visio Bernard / Samuel

> **Cadrage de l'entretien.** Prévoir 60 à 90 minutes. **Enregistrer** (avec accord) — les formulations spontanées de Bernard valent mieux que tout ce qu'on écrira. La citation de 2018 sur les produits est venue d'une interview de presse : le même exercice en produira d'autres.

### A — Le récit *(priorité absolue)*

1. **Pourquoi avoir vendu en 2000 ?** *(On ne publiera peut-être pas la réponse, mais elle détermine le ton de l'acte IV.)*
2. **Pourquoi être revenu la chercher en 2018 ?** ⭐ *C'est la question la plus importante de l'entretien. La réponse est probablement le meilleur texte du site.*
3. Qu'est-ce qui a changé dans la salle entre 1992 et aujourd'hui ? Qu'est-ce qui n'a pas bougé ?
4. Qui vous a montré, à onze ans ?
5. Y a-t-il des adhérents qui sont là depuis les années 1990 ? *(Un adhérent depuis 30 ans est un contenu à lui seul.)*
6. **Confirmez-vous les dates :** 1975 champion de France par équipe mini-haltérophilie · sélections nationales jusqu'en 1989 · records 137,5 / 177,5 kg · Club 87 en 1988 · Iron Gym en 1992 · reprise en 2018 ?
7. **Acceptez-vous que votre phrase de 2018 sur les produits devienne un élément de marque ?**

### B — Samuel

8. Quel est votre premier souvenir de la salle ?
9. À quel moment votre père est-il devenu votre entraîneur ?
10. **Acceptez-vous d'être présenté comme « compétiteur international », sans mention de fédération ni de titre ?** *(Verrou de l'option B — à faire valider explicitement.)*
11. **Pouvez-vous donner accès à vos fichiers photo/vidéo sources ?** *(L'asset le plus précieux du projet.)*
12. Quelle part de vos abonnés est locale ? Des gens viennent-ils à la salle à cause de vous ?

### C — La salle

13. **Combien de machines exactement, et lesquelles ?** Marques, modèles, charges.
14. **Lesquelles n'existent nulle part ailleurs à Limoges ?** *(Ne sera publié que si c'est vérifiable.)*
15. **Les horaires réels d'accès.** Quatre versions circulent : 6h-23h, 7h30-22h, 9h30-21h, 24/7.
16. **L'essai : gratuit ou 5 € ?** Une seule réponse, elle sera affichée telle quelle.
17. Comment se passe concrètement une première séance, minute par minute ?
18. **L'aquabike : Iron Gym ou Lady Fit Zen ?** *(La presse de 2019 l'attribue à Lady Fit Zen.)*
19. Combien d'adhérents aujourd'hui ? Ancienneté moyenne ?
20. **Comment se passe une résiliation ?** *(Grief n°1 des avis négatifs — on le traitera frontalement en FAQ.)*

### D — Juridique et opérationnel

21. Code APE/NAF et président de l'association *(placeholders bloquants)*.
22. Domaine final : `iron-gym.fr` ou `iron-gym-limoges.fr` ?
23. **Qui répond aux demandes de première séance, et sous quel délai réel ?** *(Un système de réservation sans personne derrière est pire que rien.)*
24. Existe-t-il un logiciel de gestion des adhérents ? Lequel ? *(Détermine si on peut brancher une vraie réservation.)*

### E — Business *(dimensionne tout le reste)*

> **Pourquoi ces questions passent avant le design.** Un site qui génère 40 premières séances par mois dans une salle qui ne peut en absorber que 12 ne produit pas de la croissance : il produit des avis négatifs. L'objectif d'acquisition et la capacité opérationnelle doivent être connus **avant** de dimensionner le funnel.

25. **Combien de nouveaux adhérents visez-vous par mois ?** Chiffre précis, pas « le plus possible ».
26. **Combien en signez-vous aujourd'hui, et par quel canal ?** *(Bouche-à-oreille, passage devant la salle, Google, Instagram de Samuel — dans quelles proportions ?)*
27. **Quel est le taux de transformation actuel d'une séance d'essai en abonnement ?** *(S'il n'est pas mesuré, c'est la première chose à mettre en place — voir §8.)*
28. **Quelle est la capacité d'accueil réelle de la salle ?** Combien d'adhérents maximum avant que le plateau soit saturé aux heures de pointe ? Où en êtes-vous par rapport à ce plafond ?
29. **Combien de premières séances pouvez-vous absorber par semaine ?** En tenant compte du fait que chacune mobilise un coach 30 à 45 minutes.
30. **Quelle est la valeur d'un adhérent sur 12 mois, et le taux d'attrition annuel ?** *(Détermine ce que vaut réellement le site, et le budget d'acquisition justifiable.)*
31. **Y a-t-il des créneaux morts à remplir ?** *(Un site peut orienter la demande vers 10h-16h plutôt que 18h-20h — c'est du chiffre d'affaires gratuit.)*
32. **Quel est l'objectif prioritaire : plus d'adhérents, ou de meilleurs adhérents ?** *(Volume vs rétention. Les deux ne se conçoivent pas pareil.)*

## 7.3 ⭐ CADRAGE OPÉRATIONNEL DE LA PROMESSE « COACHING GRATUIT »

> **C'est le point le plus dangereux du blueprint.** La promesse de marque tout entière repose sur cette phrase. Si elle est plus large sur le site que dans la réalité, on ne perd pas seulement un argument : on fabrique de la déception au moment exact où l'adhérent vient de payer. C'est le mécanisme n°1 de production d'avis négatifs dans le secteur.

### Le problème arithmétique

Un coach chargé coûte à la salle entre 20 et 30 € de l'heure. À **33 €/mois**, si chaque adhérent consomme ne serait-ce qu'**une heure de coaching individuel par mois**, la totalité de l'abonnement y passe.

**« Illimité » au sens strict est économiquement impossible et ne doit pas être écrit.** La question n'est donc pas *combien on en donne*, mais **où passe exactement la frontière** — et comment la formuler pour qu'elle reste généreuse sans jamais mentir.

### La grille à remplir en visio

**Aucune formulation ne sera écrite avant que ces neuf lignes soient remplies par Bernard.**

| # | Question | Réponse | Formulation autorisée |
|---|---|---|---|
| 1 | Le bilan de départ dure combien de temps ? | ⬜ | |
| 2 | Est-il systématique pour **tout** nouvel adhérent, ou sur demande ? | ⬜ | |
| 3 | Le programme est-il **écrit et remis** ? Papier, appli, carnet ? | ⬜ | |
| 4 | Est-il **révisé** ? Tous les combien ? À l'initiative de qui ? | ⬜ | |
| 5 | Un coach est-il **présent sur le plateau** ? Quels créneaux exactement ? | ⬜ | |
| 6 | Peut-on l'interpeller librement pendant ces créneaux ? | ⬜ | |
| 7 | Y a-t-il un **plafond** ? *(nombre de RDV/an, durée max, réservation obligatoire ?)* | ⬜ | |
| 8 | Qu'est-ce qui **n'est pas** compris ? *(préparation à une compétition, nutrition, PT dédié en 1-to-1 hebdo…)* | ⬜ | |
| 9 | Ça s'arrête quand ? Après 3 mois ? Jamais ? | ⬜ | |

### 🔒 La formulation verrouillée

**Une seule formulation est autorisée sur tout le site :**

> ## « Le coaching individuel est compris dans l'abonnement. »

**Développée, quand la place le permet :**

> « Un bilan de départ, un programme personnalisé, un suivi sur le plateau et des corrections quand vous en avez besoin sont compris dans votre abonnement. »

**L'angle éditorial — la comparaison fait tout le travail :**

> **Ailleurs :** 40 à 60 € la séance.
> **Ici :** compris.

### ⛔ Vocabulaire interdit — sans exception

| Interdit | Pourquoi |
|---|---|
| coaching **illimité** | Économiquement intenable : à 33 €/mois, une heure de coach par adhérent consomme la totalité de l'abonnement |
| suivi **illimité** | Idem |
| coach disponible **à volonté** | Promet une disponibilité individuelle qu'aucune salle ne peut garantir |
| « du premier jour au dernier » | Sous-entend l'illimité |
| « ça ne s'arrête jamais » | Idem |
| « suivi personnalisé permanent » | Idem |

> **Ce n'est pas un affaiblissement de l'argument, c'est sa consolidation.** Aucune autre salle de Limoges n'inclut le coaching. Dire *« ailleurs c'est 50 € la séance, ici c'est compris »* suffit à gagner l'arbitrage — et reste vrai dans dix ans. Une promesse tenue vaut mieux qu'une promesse spectaculaire : c'est exactement la différence entre une salle commerciale et une institution.

### 🔒 La section obligatoire de `/le-coaching`

**Deux colonnes, explicites, en clair.** On écrit noir sur blanc les limites de son propre argument — c'est contre-intuitif, et c'est précisément ce qui produit la confiance. Même logique que la FAQ résiliation.

| ## Ce qui est compris | ## Ce qui n'est pas compris |
|---|---|
| Le bilan initial | Le coaching privé réservé sur une heure complète |
| Le programme personnalisé | La préparation à une compétition en suivi individuel premium |
| L'explication des exercices | Les prestations de personal training privé |
| Les corrections techniques | |
| Le suivi pendant la pratique | |

**La colonne de droite n'est pas une restriction : c'est la preuve que la colonne de gauche est vraie.** Un site qui ne liste que ce qui est inclus n'est pas crédible. Un site qui liste aussi ce qui ne l'est pas devient vérifiable.

*(Les libellés exacts de la colonne droite sont à confirmer avec Bernard — ces prestations existent-elles, et à quel tarif ? Si elles existent, elles deviennent une source de revenu additionnel qu'on peut présenter proprement plutôt que de la cacher.)*

### Conséquences rédactionnelles — appliquées

Les cinq formulations problématiques du blueprint ont été **réécrites** :

| Emplacement | Avant | Après |
|---|---|---|
| Hero § 6.1 | « un coach qui vous suit gratuitement, du premier jour au dernier » | « et le coaching individuel compris dans l'abonnement » |
| § 04 La méthode | « et ça ne s'arrête jamais » | supprimé |
| § 6.4 temps 02 | « C'est gratuit, et ça ne s'arrête pas » | « C'est compris dans l'abonnement » |
| § 6.5 | « il ne s'arrête pas après la première fois » | « il est compris, comme le reste » |
| § 1.6 | « gratuit, illimité, et il ne s'arrête jamais » | « compris dans l'abonnement » |

## 7.4 À valider avant développement

**Aucune ligne de code avant que ces neuf points soient tranchés.**

| # | Point à valider | Qui tranche |
|---|---|---|
| 1 | **Le dossier France 2** — visionner le passage avant tout arbitrage définitif de l'option B | Vous + client |
| 2 | **Option B confirmée par Samuel lui-même** — il doit accepter de ne pas afficher son palmarès | Samuel |
| 3 | **Suppression de toute mention de fédération** dans `content.ts` | Vous |
| 4 | **Le palmarès de Bernard** — retirer « IFBB », faire reconfirmer chaque date | Bernard |
| 5 | **La note Google réelle** — 4,5/105 affiché vs 4,4/39 relevé. Ne jamais publier de `aggregateRating` non vérifié | Vous |
| 6 | **Les horaires réels** — le badge live en dépend | Bernard |
| 7 | **Le prix de l'essai** — un seul chiffre | Bernard |
| 8 | **Faisabilité de la réservation de créneau** — dépend du logiciel existant | Client |
| 9 | **Budget photo** — si un shooting redevient possible, `/le-plateau/[machine]` rentre dans le scope et la DA se rééquilibre | Vous |
| 10 | **Le cadrage de la promesse coaching** (§7.3) — grille remplie, formulation choisie | Bernard |
| 11 | **L'objectif d'acquisition et la capacité d'accueil** (§7.2-E) — le funnel se dimensionne dessus | Client |

## 7.5 Ce qui bloque vs ce qui avance en parallèle

> **Principe.** La validation client bloque **le contenu**, jamais **le contenant**. L'architecture, le design system et la bibliothèque de composants ne dépendent d'aucune réponse de Bernard : ils peuvent démarrer immédiatement et attendre les assets. Ce qui suit sépare strictement les deux.

### 🟢 VOIE A — Démarre maintenant, ne dépend de personne

| Chantier | Détail | Charge |
|---|---|---|
| **Architecture Astro** | Refonte mono-page → 8 routes, layouts, restructuration de `content.ts` en modules par page, génération du sitemap | 1,5 j |
| **Extension du design system** | Tokens du régime archive · trame halftone · motif séparateur signature · gamme typographique élargie | 1 j |
| **Bibliothèque de composants** | `Button` *(renommage de `GoldButton` + branchement dans la Nav)* · cadre d'archive daté · Index typographique · frise chronologique · accordéon FAQ · bloc WhatsApp · barre CTA sticky mobile · grille du Mur | 2,5 j |
| **⭐ Retraitement photo** | **Les 7 photos du Temple et les 2 portraits sont déjà dans le repo.** Le protocole §5.1 s'applique dès maintenant : N&B dur, recadrages agressifs, grain. 7 plans larges → ~20 cadrages | 0,5 j |
| **Refonte du moteur motion** | Lazy-load derrière `import()` · vitesses différenciées par régime · préparation du crossfade scrubbé | 1 j |
| **Dette technique P1** *(`AUDIT.md`)* | Preload des 8 fonts · suppression des 79 Ko orphelines · clavier sur le carrousel planning · annonces de validation du formulaire · structure JSON-LD · durcissement CSP | 1 j |
| **Charpente SEO** | Métadonnées par page, template JSON-LD, structure des `hreflang`/canonical, plan de balisage local | 0,5 j |
| **Rédaction non dépendante** | Copy de `/premiere-seance`, `/le-coaching` *(structure)*, `/tarifs`, FAQ, 404, pages légales | 1 j |

**≈ 9 jours de production mobilisables immédiatement**, soit environ 60 % du développement total.

### 🔴 VOIE B — Bloqué, en attente client

| Bloqué | Bloqué par | Repli si l'asset n'arrive pas |
|---|---|---|
| **§ 07 Le Mur** | Archives de Bernard | **Section supprimée.** Aucun substitut générique |
| **§ 02 La Lignée** *(copy finale)* | Visio enregistrée | Version courte à partir des sources presse déjà vérifiées |
| **§ 06 L'Index** | Liste des machines + marques | **Section supprimée** |
| **Photos contemporaines** | Banque de Samuel | On reste sur les 9 images retraitées |
| **Planning des cours** | Vrais noms de coachs | **Non publiable** |
| **Fiches coachs** | Photos + citations | Section reportée |
| **Copy « coaching »** | Grille §7.3 remplie | **Formulation prudente par défaut** : « compris dans l'abonnement », sans « illimité » |
| **Réservation de créneau** | Logiciel de gestion du client | **Repli : formulaire + WhatsApp + téléphone.** Dégradé mais fonctionnel |
| **Mise en ligne** | Placeholders légaux, horaires, prix d'essai, note Google | Reste en `noindex` |
| **Dimensionnement du funnel** | Objectif d'acquisition + capacité (§7.2-E) | Funnel générique, non calibré |

### Séquencement réel

```
S1   ├─🟢 VOIE A démarre ────────────────────────────────────────────►
     └─🔴 Visio Bernard/Samuel · demande d'archives · demande banque Samuel

S2   ├─🟢 Architecture + design system + composants + retraitement photo
     └─🔴 Réception des assets · remplissage grille coaching · validations

S3   ├─🟢 Intégration des sections non bloquées (01, 03, 04, 05, 08, 09)
     └─🔴 Arbitrage des formulations coaching · liste machines

S4   ├─🟢 Intégration des sections débloquées (02, 06, 07)
     └─🟢 Pages secondaires · SEO local · mesure (§8)

S5   ├─🟢 Recette · Lighthouse · CWV · a11y
     └─🔴 Complétion légale · levée du noindex ×3 · bascule domaine
```

**Chemin critique : les archives de Bernard et la liste des machines.** Ce sont les deux seuls éléments dont l'absence supprime une section entière. **Ce sont les deux premiers coups de fil à passer** — avant même la visio complète, parce que la numérisation prend du temps côté client.

### 🔵 VOIE C — Hors site, à lancer dès maintenant

> Ne dépend ni du site ni du design. **Meilleur ratio impact/effort de tout le projet.**

**Dispositif de collecte d'avis Google.** Iron Gym affiche 39 à 105 avis contre 148-226 chez les concurrents locaux. C'est une sous-exposition majeure, et elle se corrige en opérationnel, pas en digital : QR code à l'accueil, demande systématique après le bilan gratuit, relance à J+30 pour les nouveaux adhérents.

**À lancer en semaine 1.** Le site mettra 3 à 6 mois à produire du SEO ; les avis produisent de l'effet en trois semaines.

---
---

# 8. MESURE POST-LANCEMENT

> **Pourquoi cette section fait partie du blueprint et pas d'une phase ultérieure.** Les événements à mesurer conditionnent la façon dont les composants sont écrits *(attributs `data-*`, structure des CTA, identifiants de section)*. On ne rétro-instrumente pas un site proprement — on le construit instrumenté.

## 8.1 Choix de l'outil

**Plausible Analytics**, auto-hébergé ou en cloud UE.

| Critère | Pourquoi ça tranche |
|---|---|
| **RGPD** | Sans cookie → **aucune bannière de consentement**. Le site conserve sa posture cookieless actuelle, qui est un de ses points forts |
| **CSP** | Un seul domaine à ajouter en `connect-src`. GA4 exigerait d'ouvrir largement la CSP stricte existante |
| **Poids** | ~1 Ko contre ~45 Ko pour GA4. Le site est à 253 Ko total — GA4 représenterait 18 % du poids de la page |
| **Lisibilité** | Un tableau de bord que le client peut lire seul. GA4 demande une formation |

**Si le client exige GA4** *(agence, habitude, autre prestataire)* : le poser en complément, jamais seul, et prévoir alors une bannière de consentement — ce qui dégrade l'expérience et la performance. **À argumenter contre.**

## 8.2 Les événements à instrumenter

**À câbler pendant le développement, pas après.**

| # | Événement | Déclencheur | Ce qu'il mesure |
|---|---|---|---|
| 1 | `cta_premiere_seance` | Clic sur le CTA principal *(propriété : section d'origine)* | **L'indicateur n°1.** Quelle section convertit |
| 2 | `reservation_complete` | Confirmation de créneau | La conversion réelle |
| 3 | `formulaire_envoye` | Soumission Web3Forms *(propriété : objet choisi)* | Le canal de repli |
| 4 | `whatsapp_clic` | Clic sur le lien `wa.me` | Le canal humain |
| 5 | `telephone_clic` | Clic sur `tel:` *(propriété : mobile/desktop)* | **Sous-estimé — souvent le canal n°1 en local** |
| 6 | `itineraire_clic` | Clic sur Google Maps | Intention de visite physique |
| 7 | `carnet_achat` | Achat du carnet 10 séances | La porte tiède |
| 8 | `faq_ouverture` | Ouverture d'une entrée *(propriété : question)* | **Quelles objections dominent réellement** |
| 9 | `scroll_lignee` | Section 02 vue à 75 % | Le récit est-il lu ? |
| 10 | `scroll_premiere_seance` | Section 03 vue à 75 % | Le module anti-anxiété est-il atteint ? |
| 11 | `avis_google_clic` | Sortie vers la fiche Google | Vérification de la preuve sociale |

## 8.3 🔒 LA MESURE OBLIGATOIRE — « Comment nous avez-vous connus ? »

**Le problème structurel :** une salle de sport convertit sur place. Le site peut générer une visite sans jamais l'enregistrer. **Sans traitement, la majeure partie de la valeur produite par le site est invisible dans l'analytics.**

> **C'est une exigence du projet, pas une recommandation.** Sans elle, on ne pourra ni prouver le ROI du site, ni arbitrer les investissements suivants, ni justifier la maintenance. Elle coûte zéro euro et se met en place en une journée.

### Les cinq réponses — libellés verrouillés

```
Comment nous avez-vous connus ?

  ○  Google
  ○  Le bouche-à-oreille
  ○  Instagram
  ○  Le site web
  ○  Autre  ▸ ________________
```

**Cinq réponses, pas plus.** Une liste longue n'est jamais remplie correctement par un coach entre deux séances.

### Les trois points de collecte

| Où | Comment | Responsable |
|---|---|---|
| **À l'accueil / au bilan** ⭐ | Question posée oralement et notée. **C'est le point le plus fiable et le plus important** | L'équipe |
| **Dans le formulaire du site** | Champ obligatoire, mêmes libellés | Développement — lot A9 |
| **Dans le CRM / logiciel d'adhésion** | Champ dédié, si le logiciel le permet | Client — à vérifier en visio (Q24) |

**Les trois utilisent exactement les mêmes cinq libellés.** Sans quoi le rapprochement est impossible.

### Les deux mesures complémentaires

1. **Un code de réservation** affiché à la confirmation, à mentionner à l'accueil. Relie une réservation en ligne à une personne réelle.
2. **Rapprochement mensuel** entre réservations en ligne et premières séances réellement honorées. **L'écart mesure les no-shows** — c'est l'indicateur qui déclenche Growth 3.

> **À mettre en place dès la semaine 1, avant le lancement du site.** Sans mesure de référence antérieure, on ne pourra pas démontrer l'effet de la V2 — on aura juste des chiffres sans point de comparaison.

## 8.4 KPI et paliers

**Les cibles sont à recalibrer après les réponses au §7.2-E.** Les valeurs ci-dessous sont des ordres de grandeur pour une salle indépendante en centre-ville de préfecture.

### Acquisition

| KPI | Palier bas | Cible | Excellent |
|---|---|---|---|
| Visiteurs uniques / mois | 400 | 900 | 1 800+ |
| Part de trafic organique | 30 % | 50 % | 65 %+ |
| Positions top 3 sur les requêtes locales cibles | 2 | 5 | 8+ |
| Avis Google *(cumulé)* | 60 | 120 | 200+ |

### Conversion — le cœur du dispositif

| KPI | Palier bas | Cible | Excellent |
|---|---|---|---|
| **Taux de clic CTA principal** *(visiteurs → clic)* | 4 % | 8 % | 12 %+ |
| **Réservations de première séance / mois** | 8 | 20 | 40+ |
| **Taux de présence** *(réservations → séances honorées)* | 55 % | 70 % | 85 %+ |
| **Transformation** *(séances → abonnements)* | 25 % | 40 % | 55 %+ |
| **Adhérents issus du site / mois** | 3 | 8 | 18+ |
| Clics WhatsApp / mois | 5 | 15 | 30+ |
| Clics téléphone / mois | 15 | 40 | 80+ |

> **Le seul chiffre qui compte vraiment : les adhérents issus du site par mois.** Tout le reste est un indicateur avancé. À confronter à la réponse de la question 25 (objectif d'acquisition) et à la question 30 (valeur d'un adhérent sur 12 mois) — c'est ce qui permettra de dire, en euros, ce que le site a rapporté.

### Comportement

| KPI | Signal si dégradé |
|---|---|
| Part mobile | Attendu > 60 %. Si l'écart de conversion mobile/desktop dépasse 30 %, le mobile est cassé |
| Profondeur de scroll home | Si < 40 % atteignent la section 03, le hero ne donne pas envie de continuer |
| Taux de rebond | > 65 % sur `/` = problème de hero ou d'intention |
| **Question de FAQ la plus ouverte** | **Indique l'objection dominante réelle — à remonter en page** |
| Temps sur `/la-lignee` | < 40 s = le récit ne prend pas. C'est le pari central du repositionnement |

## 8.5 Rituel de mesure

| Fréquence | Quoi |
|---|---|
| **Hebdo (5 min)** | Réservations · clics WhatsApp/tel · nouveaux avis |
| **Mensuel (30 min)** | Tableau de bord complet · rapprochement en ligne/réel · positions SEO · **« comment nous avez-vous connus ? »** |
| **Trimestriel (2 h)** | Revue de conversion par section · arbitrages de contenu · recalibrage des cibles |

**Point de bascule à surveiller.** Si les réservations dépassent la capacité d'absorption (question 29), **le goulot n'est plus le site mais la salle.** À ce moment-là, on cesse d'optimiser l'acquisition et on bascule sur la rétention et le panier moyen. C'est un bon problème, mais il faut savoir le reconnaître au lieu de continuer à pousser le volume.

---

## 9. CE QUI EST VERROUILLÉ — RÉCAPITULATIF

À relire avant chaque décision de design ou de rédaction.

| | |
|---|---|
| **Essence** | La transmission |
| **Promesse** | « Vous ne serez jamais seul devant une barre. » |
| **Positionnement** | L'institution bodybuilding du Limousin |
| **Différenciateur n°1** | 🔒 **« Le coaching individuel est compris dans l'abonnement. »** — formulation verrouillée. « Illimité » interdit partout (§7.3) |
| **Hook narratif** | « Il a vendu cette salle en 2000. Il est revenu la chercher dix-huit ans plus tard. » |
| **Registre** | Vouvoiement sec |
| **Samuel** | Nommé, présent — **zéro fédération, zéro titre** |
| **CTA unique** | « Réserver ma première séance » |
| **Interdits DA** | Cards Tailwind · duotone rouge sur photo · photo de banque · physique spectaculaire en section conversion · urgence artificielle · superlatif |
| **Interdits copy** | illimité · à volonté · du premier jour au dernier · ça ne s'arrête jamais · toute fédération · tout titre |
| **Piliers DA** | Typographie (40 %) · récit (25 %) · motion (15 %) · retraitement (15 %) · texture (5 %) |
| **Stack** | Astro 6 · Tailwind v4 · GSAP existant · `motion.ts` conservé |
| **Parcours** | Le site s'arrête au maillon ⑤. Le parcours va jusqu'à ⑨ (§3.4 bis) |
| **Mesure obligatoire** | « Comment nous avez-vous connus ? » — 5 libellés, 3 points de collecte (§8.3) |
| **Test de chaque phrase** | *Une autre salle de Limoges pourrait-elle écrire ça ?* Si oui → réécrire |
| **Test de chaque promesse** | *Est-ce tenable tous les jours pendant dix ans ?* Si non → réécrire |
