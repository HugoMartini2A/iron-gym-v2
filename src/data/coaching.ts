/**
 * LE COACHING — programmes + périmètre de la promesse (lot A1).
 * ----------------------------------------------------------------------------
 * 🔒 « Illimité », « à volonté », « du premier jour au dernier » et
 * « ça ne s'arrête jamais » sont INTERDITS. Cf. BLUEPRINT-V2 §7.3.
 *
 * Raison : à 33 €/mois, une heure de coach par adhérent et par mois consomme
 * la totalité de l'abonnement. Une promesse d'illimité serait intenable, et
 * une promesse non tenue au moment où l'adhérent vient de payer est le premier
 * mécanisme de production d'avis négatifs du secteur.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Le périmètre — section obligatoire de /le-coaching
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Écrire noir sur blanc les limites de son propre argument est contre-intuitif,
 * et c'est précisément ce qui le rend crédible : un site qui ne liste que ce
 * qui est inclus n'est pas vérifiable. Même logique que la FAQ résiliation.
 *
 * ⚠️ `excluded` est à confirmer avec Bernard (ces prestations existent-elles,
 * à quel tarif ?). Si elles existent, elles deviennent une source de revenu
 * additionnel qu'on présente proprement plutôt que de la taire.
 */
export const coaching = {
  label: 'La méthode',
  // ⚠️ PRUDENCE (revue client) : on ne dit ni « gratuit » ni « compris » tant
  // que Bernard ne l'a pas confirmé. On décrit l'accompagnement, pas son prix.
  title: 'Vous n\'êtes jamais seul devant une barre.',
  intro:
    'Bilan de départ, programme personnalisé, corrections sur le plateau : un vrai accompagnement pour progresser, débutant comme confirmé.',

  // Ce que le coach fait AVEC vous (description du service, sans mention de prix).
  doesTitle: 'Ce que le coach fait avec vous',
  does: [
    'Un bilan de départ',
    'Un programme personnalisé',
    'L\'explication des exercices',
    'Les corrections techniques',
    'Le suivi pendant la pratique',
  ],

  // Renvoi prudent des modalités à l'accueil.
  modalities:
    'Les modalités de l\'accompagnement se voient directement à l\'accueil — on vous explique tout lors de la première visite.',

  kicker: 'Chez Iron Gym, on n\'a jamais laissé quelqu\'un apprendre à soulever tout seul.',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 5. PROGRAMMES & COACHING
// ─────────────────────────────────────────────────────────────────────────────

export const programs = {
  label: 'Programmes',
  title: 'De la première séance à la scène compétitive',
  intro: "Débutant ou confirmé, vous êtes suivi pour de vrai : bilan, programme, et un coach qui reste disponible sur le plateau.",
  cards: [
    {
      n: '01',
      title: 'Musculation & prise de masse',
      desc: "Programmation, technique et gestion des charges. Une méthode old school, incarnée et adaptée à votre progression.",
    },
    {
      n: '02',
      title: 'Accompagnement individuel',
      desc: "Bilan de départ, objectifs clairs, programme personnalisé et carnet de bord pour suivre chaque séance.",
    },
    {
      n: '03',
      title: 'Préparation physique',
      desc: "Développer force, explosivité et condition physique. Structurer un corps performant, durable et efficace dans l'effort.",
    },
    {
      n: '04',
      title: '100+ cours collectifs / mois',
      desc: "Tabata, Body Sculpt, Cross Training, Body Shake, Pilates, Bokwa, Crossfit… Un planning large, ouvert à tous les niveaux.",
    },
  ],
  highlight: {
    value: '100+',
    unit: 'cours collectifs par mois',
    note: 'Tabata · Body Sculpt · Cross Training · Body Shake · Pilates · Bokwa · Crossfit',
  },
} as const;
