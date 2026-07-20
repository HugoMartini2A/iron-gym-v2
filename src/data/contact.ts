/**
 * CONTACT — NAP, horaires, formulaire (lot A1).
 */

// ─────────────────────────────────────────────────────────────────────────────
// 8. CONTACT / ACCÈS
// ─────────────────────────────────────────────────────────────────────────────

export const contact = {
  label: 'Accès & contact',
  title: 'Venez nous rencontrer.',
  intro: "Prenez contact avec Iron Gym, échangez avec notre équipe ou venez découvrir la salle directement sur place.",
  address: {
    street: '31 rue François Chénieux',
    city: '87000 Limoges',
    // Coordonnées GPS réelles (géocodées) du 31 rue François Chénieux.
    lat: 45.8368766,
    lng: 1.2561097,
    // Requête utilisée pour l'embed Google Maps ET le lien d'itinéraire.
    mapsQuery: 'Iron Gym 31 rue François Chénieux 87000 Limoges',
  },
  phone: {
    display: '05 55 79 74 23',
    tel: '+33555797423',
  },
  // Horaires d'ACCUEIL (staff présent / coaching) — source unique du bloc
  // « Horaires d'accueil ». DISTINCT de l'accès salle ci-dessous. Depuis le jet 10,
  // le statut live du header se base sur `accessHours` (6h–23h), PAS sur l'accueil.
  // index 0 = lundi … 6 = dimanche. Heures en 'HH:MM' (24h, heure de Paris).
  receptionHours: [
    { day: 'Lundi', ranges: [['09:30', '21:00']] },
    { day: 'Mardi', ranges: [['09:30', '21:00']] },
    { day: 'Mercredi', ranges: [['09:30', '21:00']] },
    { day: 'Jeudi', ranges: [['09:30', '21:00']] },
    { day: 'Vendredi', ranges: [['09:30', '21:00']] },
    { day: 'Samedi', ranges: [['09:30', '13:00']] },
    { day: 'Dimanche', ranges: [] },
  ] as { day: string; ranges: [string, string][] }[],
  // Accès SALLE (badge adhérent) — horaire d'OUVERTURE réel : 7j/7, 6h–23h.
  // C'EST la source du statut live « Ouvert / Fermé » du header (jet 10).
  // index 0 = lundi … 6 = dimanche.
  accessHours: [
    { day: 'Lundi', ranges: [['06:00', '23:00']] },
    { day: 'Mardi', ranges: [['06:00', '23:00']] },
    { day: 'Mercredi', ranges: [['06:00', '23:00']] },
    { day: 'Jeudi', ranges: [['06:00', '23:00']] },
    { day: 'Vendredi', ranges: [['06:00', '23:00']] },
    { day: 'Samedi', ranges: [['06:00', '23:00']] },
    { day: 'Dimanche', ranges: [['06:00', '23:00']] },
  ] as { day: string; ranges: [string, string][] }[],
  // Libellé court pour le badge « Accès salle » (affiché distinct de l'accueil).
  accessHoursLabel: '7j/7 · 6h – 23h',
  // Bénéfice adhérent, DISTINCT des horaires d'accueil (pas de « 7/7 » trompeur).
  accessNote: 'Accès libre sur badge pour les adhérents',
  coaching: 'Sur rendez-vous',
  socials: [
    { label: 'Instagram', handle: '@irongymlimogessports', href: 'https://instagram.com/irongymlimogessports' },
    { label: 'Facebook', handle: 'IRONGYMlimoges', href: 'https://facebook.com/IRONGYMlimoges' },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 8bis. FORMULAIRE DE CONTACT
// Envoi via Web3Forms (clé publique inline dans Contact.astro) — POST réel,
// pas de fallback mailto.
// ─────────────────────────────────────────────────────────────────────────────

export const form = {
  title: 'Écrivez-nous',
  intro: "Dites-nous ce que vous cherchez, on vous recontacte sous 24-48 h.",
  objets: [
    { value: 'essai', label: "Réserver une séance d'essai" },
    { value: 'membre', label: 'Devenir membre' },
    { value: 'devis', label: 'Demander un devis' },
    { value: 'autre', label: 'Autre demande' },
  ],
  consentLabel:
    "J'accepte que mes informations soient utilisées pour répondre à ma demande.",
  success: {
    title: 'Message envoyé.',
    body: "Merci, on revient vers vous très vite.",
  },
} as const;
