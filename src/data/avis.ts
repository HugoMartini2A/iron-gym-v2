/**
 * LES AVIS — preuve sociale (lot A1).
 * ⚠️ Note Google à revérifier avant publication.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6. CHAMPIONS / PREUVE SOCIALE
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  /** Nom public tel qu'affiché sur la fiche Google. */
  name: string;
  rating: number;
  /** Ancienneté relative telle qu'affichée sur Google (« il y a 4 mois »). */
  age: string;
  /** Statut Local Guide Google — crédibilise l'avis quand présent. */
  localGuide: boolean;
  text: string;
}

export const champions = {
  label: 'Les avis',
  // Revue DA : « La preuve se soulève » sonnait artificiel/survendu. Les avis
  // Google sont une preuve sociale, ils n'ont pas besoin d'être survendus.
  title: 'Les avis de nos adhérents.',
  intro: "Depuis plus de trente ans, Iron Gym rassemble une communauté de passionnés. Découvrez les retours de celles et ceux qui font vivre la salle au quotidien.",
  reviewsLabel: 'Ce qu\'on en dit',
  // Note globale Google — snapshot PUBLIC de la fiche daté du 20/06/2026.
  // À rafraîchir périodiquement (ou brancher la Places API). Voir README.
  googleRating: {
    score: 4.5,
    count: 105,
    label: 'Avis Google',
    subtext: 'Plus de 30 ans à Limoges',
    // Ouvre la fiche Google Maps de la salle (recherche par nom + adresse).
    url: 'https://www.google.com/maps/search/?api=1&query=Iron%20Gym%2031%20rue%20Fran%C3%A7ois%20Ch%C3%A9nieux%2087000%20Limoges',
  },
  // Avis Google RÉELS de la salle — snapshot public daté du 20/06/2026.
  // Affichés avec attribution (cf. badge « Avis Google »). Ordre : du plus
  // récent au plus ancien. Coquilles évidentes corrigées, sinon fidèles.
  reviews: [
    {
      name: 'Roann',
      rating: 5,
      age: 'il y a un mois',
      localGuide: true,
      text: "Très bonne salle, ambiance old school et vraie atmosphère de sport. On s'y sent bien, ça donne vraiment envie de s'entraîner. Je recommande !",
    },
    {
      name: 'Lucas D.',
      rating: 5,
      age: 'il y a 4 mois',
      localGuide: false,
      text: "J'étais à cette salle il y a quelque temps et c'est vraiment une salle super, old school et avec une ambiance très conviviale. On peut s'y entraîner en étant nous-mêmes tout en respectant le matériel. Je valide cette salle à 100%.",
    },
    {
      name: 'Matthieu G.',
      rating: 5,
      age: 'il y a 4 mois',
      localGuide: false,
      text: "Superbe salle, le matériel est varié et qualitatif, et l'ambiance est incomparable ! Pour tous niveaux de pratique et tous objectifs, vous saurez trouver votre place à Iron Gym :)",
    },
    {
      name: 'Romain P.',
      rating: 5,
      age: 'il y a 4 mois',
      localGuide: false,
      text: "La meilleure salle que j'ai jamais trouvée. Des super machines et également une très bonne ambiance.",
    },
    {
      name: 'Jules',
      rating: 5,
      age: 'il y a 4 mois',
      localGuide: false,
      text: "Très bonne salle de sport à Limoges. Bonne ambiance, bonne salle, matériel au top et équipe sympa. Je recommande !",
    },
    {
      name: 'Lucas G.',
      rating: 5,
      age: 'il y a 4 mois',
      localGuide: false,
      text: "Très bonne salle, la meilleure de Limoges pour celles et ceux à la recherche d'une salle style rétro.",
    },
    {
      name: 'Tab M.',
      rating: 5,
      age: 'il y a 3 ans',
      localGuide: true,
      text: "Très bonne salle. Il y a tout le meilleur équipement, même un espace street workout à l'extérieur. Le personnel est très sympa et plein de bon conseil. L'accès est libre 7 jours sur 7, pour un prix très correct.",
    },
    {
      name: 'Lucas M.',
      rating: 5,
      age: 'il y a 8 ans',
      localGuide: true,
      text: "Très bonne salle de sport surtout si on habite en centre-ville. Personnel très accueillant, on est tout de suite à l'aise et bonne ambiance ! Il y a aussi la possibilité de faire une séance d'essai pour 5€ ou gratuitement si vous vous faites parrainer par un membre.",
    },
  ] as Review[],
} as const;
