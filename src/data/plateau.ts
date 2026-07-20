/**
 * LE PLATEAU — les espaces de la salle (lot A1).
 */
import type { Media } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// 4. LE TEMPLE — l'espace (galerie scroll horizontal)
// ─────────────────────────────────────────────────────────────────────────────

export const temple = {
  label: 'Le temple',
  title: 'Matériel moderne, esprit old school.',
  intro: "Le confort d'équipements modernes, l'authenticité d'une salle de passionnés. Un lieu où l'on vient avant tout pour s'entraîner, progresser et prendre plaisir à revenir.",
  spaces: [
    {
      tag: 'Plateau musculation',
      title: '20+ machines',
      desc: "Un parc d'équipements complet, pensé pour vous permettre de cibler chaque groupe musculaire.",
      media: {
        src: '/images/temple-plateau.webp',
        alt: 'Le plateau de musculation Iron Gym, machines sous la charpente',
        placeholder: 'PHOTO — Plateau muscu, machines',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Charges libres',
      title: 'Le mur de fonte',
      desc: "Ici, pas de superflu. Des charges libres, des bancs et tout ce qu'il faut pour s'entraîner sérieusement et progresser séance après séance.",
      media: {
        src: '/images/temple-charges.webp',
        alt: 'Mur d\'haltères et bancs devant la pierre apparente, Iron Gym',
        placeholder: 'PHOTO — Charges libres, mur d\'haltères',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Cardio',
      title: "L'espace cardio",
      desc: "Que ce soit pour vous échauffer, récupérer ou progresser, notre espace cardio vous accompagne à chaque étape de votre entraînement.",
      media: {
        src: '/images/temple-cardio.webp',
        alt: 'Le pôle cardio Iron Gym, vélos alignés sous la charpente',
        placeholder: 'PHOTO — Pôle cardio, vélos alignés',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Force libre',
      title: 'Cage & racks',
      desc: "Cages à squat, barres et anneaux réunis dans un espace dédié aux mouvements fondamentaux et au développement de votre force.",
      media: {
        src: '/images/temple-force.webp',
        alt: 'Cage à squat et racks de force libre, Iron Gym',
        placeholder: 'PHOTO — Cage à squat, racks',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Extérieur',
      title: 'Cage street workout',
      desc: "Un espace extérieur dédié au poids du corps, avec tractions, dips et exercices de calisthénie pour varier vos entraînements autrement.",
      media: {
        src: '/images/temple-cage.webp',
        alt: 'La cage de street workout extérieure Iron Gym',
        placeholder: 'PHOTO — Cage street workout extérieure',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Récupération',
      title: 'Le sauna',
      desc: "Parce que la progression ne se construit pas uniquement pendant l'entraînement. Un espace dédié à la récupération et au bien-être après l'effort.",
      media: {
        // Photo d'ambiance Unsplash (cabine bois) — JosephAli Music, Unsplash
        // License. Lieu, pas une personne → Unsplash légitime. Duotone en CSS.
        src: '/images/temple-sauna.webp',
        alt: 'Cabine sauna en bois clair, banquettes et poêle à pierres, lumière chaude tamisée',
        placeholder: 'PHOTO — Cabine sauna privée',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Détente',
      title: 'Bar & terrasse',
      desc: "Un espace pour se retrouver après l'entraînement, échanger autour d'un café ou d'un shaker et partager un moment avec la communauté Iron Gym.",
      media: {
        src: '/images/temple-terrasse.webp',
        alt: 'La terrasse extérieure et l\'espace détente Iron Gym',
        placeholder: 'PHOTO — Bar / terrasse, espace détente',
        ratio: '4/5',
      } as Media,
    },
  ],
} as const;
