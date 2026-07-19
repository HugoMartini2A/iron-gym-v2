/**
 * LA LIGNÉE — manifeste + récit Bernard → Samuel (lot A1).
 * ⚠️ Option B verrouillée : aucune fédération, aucun titre. Cf. BLUEPRINT-V2 §2.
 */
import type { Media } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// 2. MANIFESTE — lignes révélées au scroll (chaque ligne = un masque)
// ─────────────────────────────────────────────────────────────────────────────

export const manifesto = {
  label: 'Le manifeste',
  // Chaque entrée est une ligne masquée révélée séquentiellement.
  // Jet 12 : refonte. Ancrée dans l'histoire concrète (1992, fonte transmise
  // Bernard → Samuel), golden era par le concret — pas de slogan « on ne vend pas X ».
  // Les 2 dernières lignes (index 3-4) passent en or = la chute « Depuis 1992, de père en fils ».
  lines: [
    'Une salle',
    'où la fonte',
    'se transmet.',
    'Depuis 1992,',
    'de père en fils.',
  ],
  body: "Depuis plus de 30 ans, Iron Gym accompagne les passionnés de musculation à Limoges. Un espace complet, du matériel fiable et une équipe présente pour vous aider à atteindre vos objectifs. Ici, chaque séance compte.",
  signature: '— IRON GYM · DEPUIS 1992',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 3. HÉRITAGE — le cœur émotionnel (Bernard → Samuel)
// ─────────────────────────────────────────────────────────────────────────────

export const heritage = {
  label: "L'héritage",
  kicker: 'Une affaire de famille',
  // Trois lignes courtes : aucun glyphe ne doit chevaucher (leading corrigé).
  titleLines: ['Deux générations.', 'Une même scène.'],
  // Compteur count-up déclenché UNE fois à l'entrée dans le viewport : part de
  // l'année de fondation et grimpe jusqu'à l'année courante (calculée au runtime
  // via new Date().getFullYear() — jamais codée en dur, donc juste pour toujours).
  countFrom: 1992,
  sinceLabel: 'Depuis 1992',
  // La légende « {N} ans, … » est assemblée dans le composant à partir de
  // countFrom et de l'année courante → reste exacte sans rebuild.
  countCaptionSuffix: 'et l\'exigence n\'a pas bougé.',
  // Les deux figures.
  figures: [
    {
      name: 'Bernard Hartman',
      role: 'Le fondateur',
      // ⚠️ OPTION B (verrouillée) : aucune fédération, aucun titre. Récit porté
      // par les faits vérifiables (dates, reprise 2018) et la transmission.
      blurb:
        "Haltérophile, puis culturiste. Vingt ans de compétition au plus haut niveau. Il ouvre Iron Gym en 1992, la vend en 2000 — puis revient la chercher dix-huit ans plus tard et la refait de fond en comble, machine par machine.",
      stats: [
        { value: '1992', label: "l'ouverture" },
        { value: '2018', label: 'le retour' },
        { value: '20+', label: 'ans de compétition' },
      ],
      portrait: {
        // Photo réelle de Bernard sur scène (fournie par la famille, jet 6).
        // Légende neutre, AUCUNE date affichée (l'image n'est pas datée de façon
        // fiable → on ne crée pas de fausse info). Duotone appliqué via CSS.
        src: '/images/bernard-scene.webp',
        alt: 'Bernard Hartman, fondateur, en pose sur scène pendant sa carrière de culturiste',
        placeholder: 'ARCHIVE — Bernard sur scène',
        ratio: '4/5',
      } as Media,
    },
    {
      name: 'Samuel Hartman',
      role: 'Le fils',
      // ⚠️ OPTION B : « compétiteur international », jamais de fédération ni de
      // titre. Le récit tient à la répétition (même salle, même entraîneur).
      blurb:
        "Il a grandi sur ce plateau, au milieu des barres de son père. Il est aujourd'hui compétiteur international — et il s'entraîne toujours ici, avec le même entraîneur. Même discipline, même scène, une génération plus tard.",
      stats: [
        { value: 'Pro', label: 'compétiteur international' },
        { value: '+240K', label: 'sur les réseaux' },
        { value: '30 ans', label: "d'écart, même plateau" },
      ],
      portrait: {
        src: '/images/samuel-scene.webp',
        alt: 'Samuel Hartman en pose sur scène (most muscular)',
        placeholder: 'PORTRAIT — Samuel sur scène, posing routine',
        ratio: '4/5',
      } as Media,
    },
  ],
  // Le récit héros — la séquence qui serre la gorge.
  storyLabel: 'La transmission',
  story: [
    {
      year: '1992',
      text: 'Bernard ouvre Iron Gym au 31 rue François Chénieux. Il a vingt-huit ans. Son fils n\'est pas encore né.',
    },
    {
      year: '2018',
      text: "Il avait vendu la salle en 2000. Dix-huit ans plus tard, il revient la chercher et la refait entièrement.",
    },
    {
      year: "Aujourd'hui",
      text: 'Samuel s\'entraîne sur le même plateau. Son entraîneur, c\'est toujours son père. Trente ans après, sous le même nom.',
    },
  ],
  pullQuote: "Ici, nous partageons plus qu'un lieu : une culture de l'effort, de la régularité et du dépassement de soi.",
} as const;
