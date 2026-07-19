/**
 * TARIFS — grille, extras, parrainage (lot A1).
 */

// ─────────────────────────────────────────────────────────────────────────────
// 7. ABONNEMENTS & OFFRE
// ─────────────────────────────────────────────────────────────────────────────

export const pricing = {
  label: 'Rejoindre',
  // Revue DA : « Entrez dans la famille » forcé. Wording plus neutre.
  title: 'Nous rejoindre.',
  intro: "Accès 7j/7 de 6h à 23h sur badge. Séance d'essai disponible.",
  plans: [
    {
      name: 'Essai',
      price: 'Gratuit',
      unit: '',
      cadence: '',
      featured: false,
      note: 'Ou 5 € · sans engagement',
      features: [
        'Séance découverte de la salle',
        'Premier bilan avec un coach',
        "Sans engagement, sans frais d'adhésion",
      ],
      cta: "Réserver ma séance d'essai",
      objet: 'essai',
    },
    {
      name: 'Sans engagement',
      price: '45',
      unit: '€',
      cadence: 'par mois',
      featured: false,
      note: 'Liberté totale · résiliable à tout moment',
      features: [
        'Libre accès 7j/7 · 6h – 23h',
        'Accompagnement individuel + carnet de bord',
        'Cabine sauna incluse',
        '100+ cours collectifs / mois',
      ],
      cta: 'Devenir membre',
      objet: 'membre',
    },
    {
      name: 'Annuel',
      price: '33',
      unit: '€',
      cadence: 'par mois',
      featured: true,
      note: 'Engagement 12 mois · le meilleur tarif',
      features: [
        'Le tarif au mois le plus bas',
        'Libre accès 7j/7 · 6h – 23h',
        'Accompagnement + sauna',
        'Soirées & événements adhérents',
      ],
      cta: 'Devenir membre',
      objet: 'membre',
    },
    {
      name: 'Étudiant',
      price: '30',
      unit: '€',
      cadence: 'par mois',
      featured: false,
      note: 'Engagement annuel · sur justificatif',
      features: [
        'Tarif réduit étudiant',
        'Libre accès 7j/7 · 6h – 23h',
        'Accompagnement + sauna',
        '100+ cours collectifs / mois',
      ],
      cta: 'Devenir membre',
      objet: 'membre',
    },
  ],
  // Formules complémentaires — affichées sous les cartes, jamais en mensualité trompeuse.
  extras: [
    {
      name: 'Duo',
      value: '25 €',
      cadence: '/ mois / pers.',
      note: 'Engagement annuel · même foyer, sur justificatif',
    },
    {
      name: '10 séances',
      value: '75 €',
      cadence: 'le carnet',
      note: 'Sans engagement',
    },
    {
      name: '20 séances',
      value: '120 €',
      cadence: 'le carnet',
      note: 'Sans engagement',
    },
  ],
  // Frais d'ENTRÉE unique — JAMAIS présenté comme une mensualité « X €/mois ».
  membership: {
    name: "Frais d'adhésion",
    value: '39 €',
    note: "Frais d'entrée unique, réglés une seule fois à l'inscription.",
  },
  includedTitle: 'Compris dans chaque abonnement',
  included: [
    'Accès libre 7j/7, de 6h à 23h',
    "Séance d'essai pour découvrir",
    'Accompagnement individuel + carnet de bord',
    'Cabine sauna incluse',
    '100+ cours collectifs / mois',
    'Cage street workout extérieure',
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 7bis. PARRAINAGE (jet 11) — mécanique exacte (NE PAS reformuler en %).
// ─────────────────────────────────────────────────────────────────────────────

export const referral = {
  label: 'Parrainage',
  title: 'Ramenez un ami.',
  intro: "Vous vous entraînez déjà chez Iron Gym ? Ramenez un ami et soyez récompensé.",
  highlight: '1 ami = 1 mois offert · jusqu’à 3 mois / an',
  steps: [
    "1 ami inscrit à l'abonnement annuel = 1 mois offert pour le parrain.",
    'Jusqu’à 3 mois offerts maximum par an.',
    "Condition : souscription de l'ami à un abonnement annuel.",
  ],
  footnote: "L'entraînement est plus motivant à plusieurs : autant en faire profiter vos proches.",
} as const;
