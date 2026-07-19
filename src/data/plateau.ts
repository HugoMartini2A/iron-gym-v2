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
  intro: "Un plateau moderne, des machines sélectionnées pour leur qualité et un espace où chaque pratiquant peut s'entraîner dans les meilleures conditions.",
  spaces: [
    {
      tag: 'Plateau musculation',
      title: '20+ machines',
      desc: "Des charges libres aux machines guidées, chaque espace est pensé pour accompagner votre progression et vous aider à atteindre vos objectifs.",
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
      desc: "Un espace dédié aux charges libres. Haltères, bancs et équipements pour construire de solides bases.",
      media: {
        src: '/images/temple-charges.webp',
        alt: 'Mur d\'haltères et bancs devant la pierre apparente, Iron Gym',
        placeholder: 'PHOTO — Charges libres, mur d\'haltères',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Cardio',
      title: '28 postes cardio',
      desc: "Pour l'échauffement, la récupération ou le dépassement de soi. Un plateau complet pour travailler votre endurance dans les meilleures conditions.",
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
      desc: "Cages à squat, barres et anneaux pour travailler les mouvements fondamentaux et progresser en force.",
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
      desc: "La seule salle de Limoges avec une cage extérieure. Tractions, dips et calisthénie au grand air, toute l'année.",
      media: {
        src: '/images/temple-cage.webp',
        alt: 'La cage de street workout extérieure Iron Gym',
        placeholder: 'PHOTO — Cage street workout extérieure',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Récupération',
      title: 'Cabine sauna privée',
      desc: "Un espace de récupération accessible sur réservation, inclus dans votre abonnement. Parce que progresser passe aussi par une bonne récupération.",
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
      desc: "Café, shakers et compléments à disposition. Un espace convivial pour échanger et prolonger le moment après l'entraînement.",
      media: {
        src: '/images/temple-terrasse.webp',
        alt: 'La terrasse extérieure et l\'espace détente Iron Gym',
        placeholder: 'PHOTO — Bar / terrasse, espace détente',
        ratio: '4/5',
      } as Media,
    },
  ],
} as const;
