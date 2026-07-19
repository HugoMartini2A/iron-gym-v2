# IRON GYM V2 — RÉPONSE À LA REVUE DA / UX

**Nature :** réponse point par point à la revue en 24 points. Pour chacun : ma décision, ce qui est **fait maintenant**, ce qui relève du **chantier redesign**, et les **dépendances**.
**Date :** 18 juillet 2026

---

## LE CONSTAT, PARTAGÉ

Tu as raison : aujourd'hui le site est **propre, pas encore mémorable**. Il fait le travail d'un bon site de salle. Il ne fait pas encore dire « cette salle est différente » dans les trois premières secondes.

La cause n'est pas un défaut de finition, c'est un défaut de **rythme et de hiérarchie** : toutes les sections se ressemblent (même gabarit label + titre + texte à gauche), il n'y a ni pièce maîtresse, ni respiration, ni surprise. C'est exactement ce que ta revue attaque, et c'est la bonne cible.

**Ce document classe tes 24 points en trois lots :**

- 🟢 **FAIT** — changements stables, appliqués aujourd'hui *(9 points)*
- 🔵 **REDESIGN** — le gros du travail créatif, séquencé *(12 points)*
- 🟠 **DÉPENDANCE** — bloqué par un asset ou une validation client *(3 points)*

---

## 🟢 CE QUI EST FAIT AUJOURD'HUI

| Point | Demande | Fait |
|---|---|---|
| **1 · Header** | Renommer les intitulés | Nav = **Histoire · La salle · Cours & Coaching · Tarifs · Accès & Contact** |
| **1 · « Plateau »** | Trouver mieux | → **« La salle »**. Voir la note ci-dessous |
| **8 · Histoire** | « Lignée » → « Histoire » | Fait, partout dans la nav |
| **4 · CTA hero** | Appeler + Itinéraire | Hero → **Appeler Iron Gym** (primaire) + **Itinéraire** (Maps). Instrumentés |
| **13 · Coaching** | Supprimer la numérotation 01/02/03/04 | Fait — cartes nettoyées |
| **7 · Ton / citation Bernard** | Éviter le sujet des produits | Citation retirée. Remplacée par une ligne sur la **transmission**, *non attribuée en verbatim* — voir note |
| **12 · Galerie** | Supprimer les indices « 5/7 » | Fait |
| **17 · Avis** | « La preuve se soulève » trop démonstratif | → **« Ce qu'on en dit. »** |
| **18 · Tarifs** | « Entrez dans la famille » forcé | → **« Nous rejoindre. »** |

**Note « La salle ».** Retenu contre « Espaces » (froid, corporate) et « Équipements » (technique, l'inverse du but). « La salle » est ce que les gens disent déjà — « je vais à la salle ». C'est moderne par sa simplicité, pas par un anglicisme. Le slug d'URL reste `/le-plateau` pour l'instant *(rien n'est indexé)* ; il passera à `/la-salle` avec le redesign.

**Note citation Bernard.** Je n'ai pas réécrit une nouvelle citation « signée Bernard » : mettre une phrase inventée dans la bouche d'une personne réelle est un risque (et malhonnête). La ligne actuelle est de la **copy de marque** assumée. Si Bernard te donne une vraie formule à lui sur la discipline ou la transmission, on la lui attribuera — ce serait même plus fort.

---

## 🔵 LE CHANTIER REDESIGN — le vrai passage au niveau AAA

C'est ici que se joue le « wow ». Ces douze points ne sont pas des retouches, c'est **une direction artistique par section** et **un système de motion**. Ils se construisent ensemble, pas à la pièce.

### 2 · One-page vs mini-site — **ma décision : mini-site, avec une home cinématique**

Tu me laisses trancher, voici le raisonnement.

Le one-page unique est **incompatible avec deux de tes propres demandes** : tu trouves le one-page « trop long » (point 6), et tu veux que « chaque section ait sa propre identité » (point 15). Un one-page tire toujours vers l'uniformité et la longueur.

**Donc : mini-site.** Chaque page devient un territoire avec son rythme. **Mais la home n'est pas une page de plus** : c'est l'expérience signature — un scroll court et cinématique, une bande-annonce qui envoie vers les pages profondes. Court en hauteur, fort en impact. C'est le modèle des sites Locomotive / Studio Freight que tu cites : home spectaculaire + pages de fond.

Bonus non négligeable : le mini-site est la seule structure qui capte le SEO local (« salle musculation Limoges », « coach Limoges »…) — c'est ce qui fait venir les gens. On garde le wow **et** l'acquisition.

### 3 · Hero — la pièce maîtresse

Ton idée de statue grecque qui tourne est juste sur l'intention (premium, sculptural, l'acier/le marbre). Deux précisions techniques honnêtes :

- **Luxion = KeyShot**, un moteur de rendu *hors-ligne*, pas une techno web. Il ne « tourne » pas dans le navigateur : il sert à **pré-calculer** une rotation, qu'on exporte ensuite en boucle vidéo ou en séquence d'images. C'est d'ailleurs la bonne approche pour ton exigence « zéro lag » : une 3D temps réel d'une statue détaillée est lourde ; une **rotation pré-rendue scrubbée au scroll** est fluide et légère (le procédé exact de Capitolium).
- Il faut un **asset statue** (un modèle 3D à rendre, ou une image). On ne l'a pas encore.

**Ma recommandation en deux temps :**

1. **Hero signature livrable tout de suite, sans nouvel asset :** typographie géante cinétique (déjà le meilleur élément) + une des **vidéos verticales réelles** de la salle, traitée (N&B, grain, lent zoom, masque) et calée à droite pour remplir le vide que tu pointes. Ça règle « à droite il n'y a rien » **et** ça sert le point 9 (montrer que la salle est vivante), avec de la vraie matière.
2. **Statue en upgrade optionnel :** si tu tiens à la statue, on cadre l'asset (modèle 3D ou génération) et on la pré-rend en turntable optimisé. À décider — ça a un coût de production distinct.

### 5 · 6 · 20 · Supprimer les pré-titres + élargir la mise en page

Les petits labels « Le manifeste », « Le temple »… (17 occurrences) dégagent, c'est acté. Je ne les ai **pas** enlevés à la va-vite aujourd'hui : ça laisse un trou là où le label était, et tant que la section n'est pas re-composée, ça dégrade au lieu d'améliorer. **Premier geste du redesign, section par section**, avec la nouvelle mise en page : plus large, plus compacte, moins de hauteur morte, texte justifié où c'est pertinent.

### 10 · 21 · 22 · Motion design + micro-interactions

C'est le cœur du « wow ». Le moteur GSAP/Lenis est déjà là (674 lignes) — il est **sous-exploité**, pas absent. Le plan :

- **Un vocabulaire de reveal par section** (pas le même partout) : masques, entrées latérales hors-écran, split-text ligne par ligne, léger parallaxe, zoom subtil, inertie.
- **Micro-interactions premium** : hover magnétique sur les CTA (déjà codé, à généraliser), hover des cartes avec élévation, transitions de section.
- **Garde-fou non négociable** *(tes points 22-23)* : chaque effet a une version mobile et respecte `prefers-reduced-motion`. **Performance-first** : GPU (`transform`/`opacity` uniquement), zéro reflow, budget strict. Une animation moins spectaculaire mais fluide passe avant un effet qui saccade.

### 11 · Bandeau défilant

Les lettres détourées (contour) ne rendent pas — d'accord. Refonte : soit plein cassé propre, soit un traitement matière (acier), et un **séparateur usiné** à la place du `✦` actuel *(déjà noté au blueprint)*.

### 12 · Galerie éditoriale (desktop)

Le slider dégage sur desktop. Objectif : **composition magazine** — grande image + petite en chevauchement, asymétrie, légères inclinaisons, superpositions. Sur mobile, le slider reste *(c'est le bon format tactile)*. Indices déjà retirés.

### 13 · 14 · 16 · Coaching + Planning

Numérotation coaching : faite. Le **planning** monte en gamme : cartes vivantes, **une icône discrète par discipline** (Tabata, Pilates, Cross Training, Bokwa…), hiérarchie de l'info, **états visuels aujourd'hui / demain / semaine** *(la date est déjà calculée au runtime — on capitalise dessus)*, hover avec élévation, apparition au scroll.

### 15 · Direction artistique générale

Le principe directeur du redesign : **chaque section = une identité, un rythme, un effet de révélation propre**. C'est la réponse de fond à « les sections se ressemblent trop ». Références de niveau *(pour la finition, pas pour copier)* : Awwwards, FWA, GSAP Showcase, Studio Freight, Locomotive, Active Theory — le benchmark est déjà consigné dans `AUDIT-AAA-V2.md §3`.

### 18 · 19 · Cartes tarifs + parrainage

Cartes d'abonnement : hauteurs équilibrées *(fini le vide)*, hiérarchie typo, mise en avant douce de l'offre recommandée, hover premium, apparition au scroll. Parrainage : intégré à la DA globale avec des animations discrètes.

### 20 · Accès & Contact

Pré-titre retiré, titre = **Accès & Contact**. Section enrichie : carte plus élégante, horaires, téléphone, mail, adresse, **CTA Appeler + CTA Itinéraire** en un clic. Texte sur toute la largeur.

---

## 🟠 DÉPENDANCES — je ne peux pas avancer seul

### 9 · Intégration des vidéos — **prêt à démarrer**

J'ai trouvé le dossier et inventorié les 4 vidéos. **Fait :** posters extraits *(voir chat)*. Constat déterminant : elles sont toutes **verticales 9:16** *(tournées au téléphone)*, 45-70 s, ~44 Mo au total. Ça oriente la DA : ce sont des **« reels »**, pas de la matière pour un hero horizontal.

Ce que j'y ai vu — et c'est de l'or :
- **« One of the Most Retro Gym in France »** en surimpression *(le tour salle 2)* : c'est ton positionnement, filmé.
- **Un mur entier de médailles, coupures et trophées** *(le tour salle)* : c'est **« Le Mur »** que je cherchais à documenter. On le tient.
- Le tour par Samuel *(caméra à l'épaule, ambiance)* et le **Halloween** *(« BEWARE », ambiance de communauté)*.

**Intégration prévue** *(pas les unes sous les autres)* : une vidéo **feature** (le tour de Samuel) traitée éditorialement, + un petit **mur de reels** verticaux qui se lancent au survol/clic, un seul à la fois, muets, lazy-loadés. Halloween en accent « la communauté vit ». **Dépendance technique :** transcodage web (compression + trims) — à faire une fois la DA vidéo validée, pour ne pas compresser deux fois.

### 13 · Coaching inclus — **à confirmer avant publication**

Tu le dis toi-même : vérifier que le coaching individuel est bien **inclus dans l'abonnement** avant de l'affirmer. Or c'est aujourd'hui **l'argument n°1 de tout le site**. Je l'ai construit pour être « débranchable » en une ligne, mais **il faut la réponse de Bernard** : bilan systématique ou sur demande ? coach présent sur quels créneaux ? y a-t-il un plafond ? *(la grille est prête dans le `BLUEPRINT-V2 §7.3`)*. Tant que ce n'est pas confirmé, on ne met pas le site en ligne avec cette promesse.

### 24 · Conformité juridique — **audit avant livraison**

À faire en fin de parcours, quand le contenu est figé : mentions légales *(code APE + directeur de publication encore en placeholder)*, politique de confidentialité, **bandeau cookies** *(à vérifier : la carte Google pose des cookies tiers → consentement requis)*, CGV si vente en ligne du carnet, RGPD, accessibilité des infos obligatoires. C'est un lot dédié, pas une case à cocher.

---

## CE QUE J'ATTENDS DE TOI POUR ENCHAÎNER

Trois décisions débloquent tout le redesign :

1. **Le hero.** On part sur la **vidéo traitée** (livrable tout de suite) ou tu veux qu'on cadre la **statue 3D pré-rendue** (asset + coût à part) ?
2. **Le coaching.** Réponse de Bernard sur le périmètre exact *(grille §7.3)* — sinon on ne peut pas assumer la promesse.
3. **L'ordre.** Je propose d'attaquer le redesign **par la home** *(hero + première section)* pour valider la nouvelle direction sur un écran avant de la décliner. OK pour toi ?

---

## SÉQUENCE DU REDESIGN *(une fois ces 3 points tranchés)*

```
R1  Design system — vocabulaire de motion, séparateur usiné, échelle typo
R2  HOME cinématique — hero pièce maîtresse + 1re section (validation DA)
R3  Décliner l'identité par section — pré-titres retirés, reveals propres
R4  Galerie éditoriale desktop + intégration vidéos (mur de reels)
R5  Planning + cartes tarifs premium (icônes, états, hover)
R6  Passe micro-interactions + hover + transitions de section
R7  Passe performance (GPU, CWV, mobile) — non négociable
R8  Audit juridique + mise en ligne
```

Le détail fin de chaque point vit dans ce fichier ; le suivi d'exécution dans `EXECUTION-STATUS.md`.
