/**
 * IRON GYM LIMOGES — Source unique de contenu.
 * ----------------------------------------------------------------------------
 * TOUT le texte, les chiffres, les coordonnées et les références d'images du
 * site vivent ici. Aucun composant ne doit contenir de copy en dur.
 *
 * Pour éditer le site avant le pitch : modifier CE fichier uniquement.
 * Pour remplacer une image : voir le champ `src` des objets `Media` ci-dessous,
 * le manifeste `scripts/process-images.mjs`, et le guide « Remplacer les images »
 * du README.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Une image du site. Tant que `src` est `null`, un bloc placeholder doré
 * étiqueté `placeholder` est rendu à la place — pour que le client voie
 * exactement où poser ses vraies photos d'archives.
 */
export interface Media {
  /** Chemin public de l'image finale, ex: "/images/temple-plateau.webp". `null` = placeholder. */
  src: string | null;
  /** Texte alternatif (SEO + accessibilité). Toujours rempli, même en placeholder. */
  alt: string;
  /** Légende affichée dans le bloc placeholder. Décrit la photo attendue. */
  placeholder: string;
  /** Ratio d'aspect CSS pour réserver la place (évite le CLS). Ex: "4/5". */
  ratio?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Métadonnées du site (SEO / OG / JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Iron Gym Limoges',
  shortName: 'Iron Gym',
  // <title> : 50–60 caractères.
  title: 'Iron Gym Limoges — Musculation & coaching depuis 1992',
  // <meta description> : 150–160 caractères.
  description:
    "Salle de musculation spécialisée au cœur de Limoges depuis plus de 30 ans. Matériel Star Trac, cours collectifs, sauna et coaching personnalisé inclus. Essai offert.",
  url: 'https://iron-gym-v2.vercel.app',
  locale: 'fr_FR',
  lang: 'fr',
  // Image Open Graph 1200×630 (générée par scripts/process-images.mjs).
  ogImage: {
    src: '/images/og.webp' as string | null,
    alt: 'Iron Gym Limoges — le plateau de musculation, ambiance golden era',
  },
  themeColor: '#0A0A0A',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

export const nav: NavLink[] = [
  { label: 'Manifeste', href: '#manifeste' },
  { label: 'Héritage', href: '#heritage' },
  { label: 'Le Temple', href: '#temple' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Avis', href: '#avis' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Accès', href: '#contact' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: 'Limoges · Est. 1992',
  // Titre surdimensionné, en deux blocs pour la mise en page.
  titleTop: 'IRON',
  titleBottom: 'GYM',
  baseline: 'La fonte, depuis 1992.',
  sub: "La salle de culture physique la plus spécialisée de Limoges. Matériel moderne, esprit old school, et le même accueil quel que soit votre niveau.",
  cta: {
    label: "Réserver ma séance d'essai",
    href: '#contact',
    objet: 'essai',
  },
  ctaSecondary: {
    label: 'Visiter la salle',
    href: '#temple',
  },
} as const;

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
  body: "Depuis plus de trente ans, la même exigence : du matériel sérieux, un plateau pensé pour le travail, des coachs qui connaissent chaque adhérent par son prénom. Ici, on progresse sans forcing ni esbroufe, à son rythme et jamais seul. Une salle exigeante, et pourtant ouverte à tous les niveaux.",
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
      role: 'Le fondateur · « Le ponte de la fonte »',
      blurb:
        "Haltérophile, puis culturiste. Vingt ans de compétition au plus haut niveau national, trois podiums aux France IFBB. En 1996, il rafle le Grand Prix de Paris, toutes catégories. Aujourd'hui, il a repris sa salle et l'a refaite de fond en comble.",
      stats: [
        { value: '3', label: 'podiums France IFBB' },
        { value: '1996', label: 'Grand Prix de Paris' },
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
      role: 'Le fils · « The French Golden Child »',
      blurb:
        "WNBF Pro Heavyweight World Champion 2024, IFBB Pro. Il a grandi sur ce plateau, au milieu des barres de son père, avant de reprendre le flambeau de la Golden Era et de cofonder RetroMuscle. Même discipline, même scène, une génération plus tard.",
      stats: [
        { value: '2024', label: 'WNBF World Champion' },
        { value: 'Pro', label: 'IFBB / WNBF' },
        { value: '237K', label: 'abonnés' },
      ],
      portrait: {
        src: '/images/samuel-scene.webp',
        alt: 'Samuel Hartman, IFBB Pro, en pose sur scène (most muscular)',
        placeholder: 'PORTRAIT — Samuel sur scène, posing routine',
        ratio: '4/5',
      } as Media,
    },
  ],
  // Le récit héros — la séquence qui serre la gorge.
  storyLabel: 'La routine de scène',
  story: [
    {
      year: '1996',
      text: 'Grand Prix de Paris, toutes catégories. Bernard monte sur scène, déroule sa routine, et repart avec le titre.',
    },
    {
      year: '2024',
      text: 'Presque trente ans plus tard, Samuel reprend la même routine sur scène. Les mêmes poses, dans le même ordre.',
    },
    {
      year: 'Ce soir-là',
      text: 'Bernard est dans le public. Le même nom, la même scène, trente ans après.',
    },
  ],
  pullQuote: "Ici, on transmet plus qu'une salle : une façon de s'entraîner.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 4. LE TEMPLE — l'espace (galerie scroll horizontal)
// ─────────────────────────────────────────────────────────────────────────────

export const temple = {
  label: 'Le temple',
  title: 'Matériel moderne, esprit old school.',
  intro: "Le plateau a été entièrement réaménagé. Du matériel haut de gamme, de l'espace entre les machines, et un cadre pensé pour les vraies séances.",
  spaces: [
    {
      tag: 'Plateau musculation',
      title: '20+ machines Star Trac',
      desc: "La seule gamme Star Trac de Limoges, entièrement renouvelée. Charges guidées et poids libres pour construire sérieusement, du premier mois à la prépa.",
      media: {
        src: '/images/temple-plateau.webp',
        alt: 'Le plateau de musculation Iron Gym, machines sous la charpente',
        placeholder: 'PHOTO — Plateau muscu, machines Star Trac',
        ratio: '4/5',
      } as Media,
    },
    {
      tag: 'Charges libres',
      title: 'Le mur de fonte',
      desc: "Haltères complets, bancs, pierre apparente. L'espace des gros mouvements et du travail à l'ancienne.",
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
      desc: "Tapis, vélos, elliptiques, rameur : 28 postes au total. De quoi s'échauffer ou tout donner sans jamais attendre une machine.",
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
      desc: "Cage à squat, barres, anneaux. De quoi charger lourd sans faire la queue.",
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
      desc: "Cabine privée incluse dans l'abonnement, sur réservation. La récupération fait partie de l'entraînement.",
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
      desc: "Café, shakers et gamme Eric Favre, avec une terrasse pour prolonger un peu après la séance.",
      media: {
        src: '/images/temple-terrasse.webp',
        alt: 'La terrasse extérieure et l\'espace détente Iron Gym',
        placeholder: 'PHOTO — Bar / terrasse, espace détente',
        ratio: '4/5',
      } as Media,
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 5. PROGRAMMES & COACHING
// ─────────────────────────────────────────────────────────────────────────────

export const programs = {
  label: 'Programmes',
  title: 'Du premier jour au plateau de compétition.',
  intro: "Débutant ou confirmé, vous êtes suivi pour de vrai : bilan, programme, et un coach qui reste disponible. Le coaching individuel est gratuit, là où la plupart des salles le facturent.",
  cards: [
    {
      n: '01',
      title: 'Musculation & prise de masse',
      desc: "Programmation, technique, gestion des charges. La méthode old school transmise directement sur le plateau, à votre rythme.",
    },
    {
      n: '02',
      title: 'Coaching individuel gratuit',
      desc: "Inclus, jamais en option. Bilan de départ, objectifs clairs, programme personnalisé et carnet de bord pour suivre chaque séance.",
    },
    {
      n: '03',
      title: 'Préparation physique',
      desc: "Force, explosivité, condition. Pour performer en compétition comme pour être plus solide au quotidien.",
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

// ─────────────────────────────────────────────────────────────────────────────
// 5bis. PLANNING DES COURS COLLECTIFS
// Grille hebdo récurrente. Les DATES de la semaine sont calculées en JS au
// rendu (composant Schedule) → jamais périmé. Contenu = exemple à remplacer.
// ─────────────────────────────────────────────────────────────────────────────

export interface ClassSlot {
  time: string;
  name: string;
  coach: string;
}

export const schedule = {
  label: 'Le planning',
  title: 'Votre semaine, déjà tracée.',
  intro: "Les mêmes créneaux chaque semaine, matin, midi et soir. La plupart sans réservation : vous posez votre sac et vous entrez en cours.",
  note: 'Planning indicatif — créneaux types, confirmés à l’accueil et sur Instagram.',
  // index 0 = lundi … 5 = samedi (dimanche : libre accès, pas de cours).
  days: [
    {
      slots: [
        { time: '12:15', name: 'Tabata', coach: 'Coach Léa' },
        { time: '18:30', name: 'Body Sculpt', coach: 'Coach Léa' },
        { time: '19:30', name: 'Cross Training', coach: 'Coach Marc' },
      ] as ClassSlot[],
    },
    {
      slots: [
        { time: '09:30', name: 'Pilates', coach: 'Coach Inès' },
        { time: '12:15', name: 'Body Shake', coach: 'Coach Léa' },
        { time: '19:00', name: 'Cross Training', coach: 'Coach Marc' },
      ] as ClassSlot[],
    },
    {
      slots: [
        { time: '12:15', name: 'Bokwa', coach: 'Coach Inès' },
        { time: '18:30', name: 'Tabata', coach: 'Coach Marc' },
        { time: '19:30', name: 'Body Sculpt', coach: 'Coach Léa' },
      ] as ClassSlot[],
    },
    {
      slots: [
        { time: '09:30', name: 'Pilates', coach: 'Coach Inès' },
        { time: '12:15', name: 'Cross Training', coach: 'Coach Marc' },
        { time: '19:00', name: 'Body Sculpt', coach: 'Coach Inès' },
      ] as ClassSlot[],
    },
    {
      slots: [
        { time: '12:15', name: 'Body Shake', coach: 'Coach Léa' },
        { time: '18:00', name: 'Cross Training', coach: 'Coach Marc' },
        { time: '19:00', name: 'Body Sculpt', coach: 'Coach Léa' },
      ] as ClassSlot[],
    },
    {
      slots: [
        { time: '10:00', name: 'Cross Training', coach: 'Coach Marc' },
        { time: '11:00', name: 'Tabata', coach: 'Coach Léa' },
      ] as ClassSlot[],
    },
  ],
} as const;

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
  title: 'La preuve se soulève.',
  intro: "Plus de trente ans d'activité, et des avis Google sans filtre, où l'ambiance et l'accueil reviennent presque à chaque ligne.",
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

// ─────────────────────────────────────────────────────────────────────────────
// 7. ABONNEMENTS & OFFRE
// ─────────────────────────────────────────────────────────────────────────────

export const pricing = {
  label: 'Rejoindre',
  title: 'Entrez dans la famille.',
  intro: "Accès libre 7j/7 de 7h30 à 23h sur badge, coaching individuel et sauna compris. Des tarifs clairs, sans frais caché, et une séance d'essai pour vous faire votre idée.",
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
        'Libre accès 7j/7 · 7h30 – 23h',
        'Coaching individuel gratuit + carnet de bord',
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
        'Libre accès 7j/7 · 7h30 – 23h',
        'Coaching + sauna inclus',
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
        'Libre accès 7j/7 · 7h30 – 23h',
        'Coaching + sauna inclus',
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
    'Accès libre 7j/7, de 7h30 à 23h',
    "Séance d'essai pour découvrir",
    'Coaching individuel gratuit + carnet de bord',
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

// ─────────────────────────────────────────────────────────────────────────────
// 8. CONTACT / ACCÈS
// ─────────────────────────────────────────────────────────────────────────────

export const contact = {
  label: 'Accès & contact',
  title: 'Poussez la porte.',
  intro: "Un message, un appel, ou une visite directement sur place. On vous répond vite.",
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
  // le statut live du header se base sur `accessHours` (7h30–23h), PAS sur l'accueil.
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
  // Accès SALLE (badge adhérent) — horaire d'OUVERTURE réel : 7j/7, 7h30–23h.
  // C'EST la source du statut live « Ouvert / Fermé » du header (jet 10).
  // index 0 = lundi … 6 = dimanche.
  accessHours: [
    { day: 'Lundi', ranges: [['07:30', '23:00']] },
    { day: 'Mardi', ranges: [['07:30', '23:00']] },
    { day: 'Mercredi', ranges: [['07:30', '23:00']] },
    { day: 'Jeudi', ranges: [['07:30', '23:00']] },
    { day: 'Vendredi', ranges: [['07:30', '23:00']] },
    { day: 'Samedi', ranges: [['07:30', '23:00']] },
    { day: 'Dimanche', ranges: [['07:30', '23:00']] },
  ] as { day: string; ranges: [string, string][] }[],
  // Libellé court pour le badge « Accès salle » (affiché distinct de l'accueil).
  accessHoursLabel: '7j/7 · 7h30 – 23h',
  // Bénéfice adhérent, DISTINCT des horaires d'accueil (pas de « 7/7 » trompeur).
  accessNote: 'Accès libre sur badge pour les adhérents',
  coaching: 'Sur rendez-vous',
  // RGPD : passer à `true` pour re-gater la carte Google derrière un consentement
  // (clic « Charger la carte ») → aucun cookie tiers avant action. `false` =
  // carte visible d'emblée (preview pitch). Surchargeable via PUBLIC_MAP_CONSENT_GATE.
  mapConsentGate: false,
  socials: [
    { label: 'Instagram', handle: '@irongymlimogessports', href: 'https://instagram.com/irongymlimogessports' },
    { label: 'Facebook', handle: 'IRONGYMlimoges', href: 'https://facebook.com/IRONGYMlimoges' },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 8bis. FORMULAIRE DE CONTACT
// Envoi via Web3Forms (clé en var d'env WEB3FORMS_ACCESS_KEY, jamais en dur).
// Sans clé : fallback `mailto:` propre. Voir README §formulaire.
// ─────────────────────────────────────────────────────────────────────────────

export const form = {
  title: 'Écrivez-nous',
  intro: "Dites-nous ce que vous cherchez, on vous recontacte sous 24-48 h.",
  // E-mail de repli pour le fallback mailto (boîte officielle de la salle).
  fallbackEmail: 'irongymlimogessports@hotmail.com',
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

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

export const footer = {
  tagline: 'La fonte, depuis 1992.',
  est: 'EST. 1992 · LIMOGES',
  // Pages légales (réelles — voir src/pages/legal/*).
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'CGV', href: '/cgv' },
  ],
  credit: 'Maquette de présentation — non contractuelle.',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Entité juridique (pages légales). AUCUNE entité n'est assertée tant que le
// contrat n'est pas signé : éditeur / forme juridique / SIREN / SIRET / APE /
// directeur de publication = placeholders « [À COMPLÉTER À LA SIGNATURE] ».
// (L'ancienne société exploitante est dissoute/radiée depuis 2025 — ne JAMAIS
// asserter d'entité juridique ni nommer un directeur de publication ici.)
// Adresse / téléphone / email = coordonnées publiques réelles de l'établissement ;
// host = hébergeur factuel.
// ─────────────────────────────────────────────────────────────────────────────

export const legalEntity = {
  name: '[À COMPLÉTER À LA SIGNATURE]',
  form: '[À COMPLÉTER À LA SIGNATURE]',
  address: '31 rue François Chénieux, 87000 Limoges',
  siren: '[À COMPLÉTER À LA SIGNATURE]',
  siret: '[À COMPLÉTER À LA SIGNATURE]',
  ape: '[À COMPLÉTER À LA SIGNATURE]',
  phone: '05 55 79 74 23',
  director: '[À COMPLÉTER À LA SIGNATURE]',
  email: 'irongymlimogessports@hotmail.com',
  host: 'Vercel Inc., 340 S Lemon Ave, Walnut, CA 91789, USA - vercel.com',
} as const;

