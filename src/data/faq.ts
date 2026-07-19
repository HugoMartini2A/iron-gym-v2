/**
 * FAQ — traitement d'objections + SEO local (lot A1).
 * ----------------------------------------------------------------------------
 * Deux fonctions distinctes, également importantes :
 *
 *  1. LEVER LES FREINS. Le frein n°1 à l'inscription dans une salle de
 *     musculation n'est pas le prix, c'est la peur d'être jugé. Les questions
 *     sont donc posées telles que les gens se les posent réellement
 *     (« je débute », « je suis blessé »), pas telles qu'une salle aimerait
 *     qu'on les pose. Modèle La Huella.
 *
 *  2. CAPTER LA RECHERCHE. Rédigées en phrases complètes et autonomes, ces
 *     réponses captent la longue traîne locale ET sont citables par les
 *     assistants IA. Modèle Gymbox.
 *
 * ⚠️ Les entrées marquées TODO contiennent des données non confirmées
 * (cf. EXECUTION-STATUS.md § bloquants). Elles ne doivent PAS être publiées
 * en l'état.
 */

export interface FaqItem {
  q: string;
  a: string;
  /** Page où l'entrée est rendue. Une entrée peut servir plusieurs pages. */
  pages: string[];
  /** true = donnée à confirmer avec le client avant publication. */
  todo?: boolean;
}

export const faq = {
  label: 'Questions fréquentes',
  title: 'Ce qu\'on nous demande le plus souvent.',

  items: [
    // ── Désintimidation — les vraies questions ──────────────────────────────
    {
      q: 'Je débute complètement. C\'est vraiment pour moi ?',
      a: "Oui, et c'est même le cas de la plupart des gens qui poussent la porte pour la première fois. Personne n'apprend à soulever tout seul. C'est exactement pour ça que la première séance commence par quinze minutes assis avec un coach, avant de toucher la moindre machine.",
      pages: ['premiere-seance', 'tarifs'],
    },
    {
      q: 'Je reprends après des années d\'arrêt. Par où je commence ?',
      a: "Par le bilan. On regarde ensemble ce que vous faisiez avant, ce que votre corps accepte aujourd'hui, et on repart d'un niveau tenable. Reprendre trop fort est la première cause d'abandon au bout de trois semaines.",
      pages: ['premiere-seance', 'le-coaching'],
    },
    {
      q: 'J\'ai une blessure ou une douleur chronique. Je peux venir ?',
      a: "Dites-le en arrivant, c'est l'information la plus utile qu'on puisse avoir. Le programme est construit autour de ce que vous pouvez faire. En revanche, nos coachs ne sont pas des soignants : pour une blessure en cours, l'avis d'un médecin ou d'un kiné passe avant.",
      pages: ['premiere-seance', 'le-coaching'],
    },
    {
      q: 'Est-ce que c\'est une salle réservée aux gros gabarits ?',
      a: "Non. On y croise des compétiteurs et des gens qui n'avaient jamais soulevé un haltère un mois plus tôt. Ce qui revient le plus souvent dans les avis Google, ce n'est pas le matériel, c'est l'ambiance et l'accueil.",
      pages: ['premiere-seance'],
    },
    {
      q: 'Qu\'est-ce que j\'apporte pour la première séance ?',
      a: "Une tenue de sport, des chaussures propres réservées à l'intérieur, une serviette et une bouteille d'eau. Rien d'autre. Le reste est sur place.",
      pages: ['premiere-seance'],
    },

    // ── L'accompagnement ────────────────────────────────────────────────────
    // ⚠️ PRUDENCE : on ne dit pas « gratuit / compris » tant que Bernard n'a pas
    // confirmé. On décrit le service et on renvoie les modalités à l'accueil.
    {
      q: 'Comment se passe l\'accompagnement ?',
      a: "Un coach est présent sur le plateau pour vous accompagner : bilan de départ, programme personnalisé, explication des exercices, corrections techniques et suivi pendant la pratique. Pour les modalités exactes, le plus simple est d'en parler directement à l'accueil.",
      pages: ['le-coaching', 'tarifs'],
    },

    // ── Pratique — longue traîne locale ────────────────────────────────────
    {
      q: 'Quels sont les horaires ?',
      a: "TODO — quatre versions circulent (6h-23h, 7h30-22h, 9h30-21h, 24/7). À confirmer avec Bernard avant publication : le badge de statut en direct et le JSON-LD en dépendent.",
      pages: ['nous-trouver', 'tarifs'],
      todo: true,
    },
    {
      q: 'Où se garer ?',
      a: "TODO — à documenter : stationnement rue François Chénieux, parkings publics à proximité, durée gratuite éventuelle. C'est une requête locale à fort volume.",
      pages: ['nous-trouver'],
      todo: true,
    },
    {
      q: 'Y a-t-il des vestiaires et des douches ?',
      a: 'TODO — à confirmer : nombre, casiers avec ou sans cadenas, douches, sèche-cheveux.',
      pages: ['nous-trouver'],
      todo: true,
    },
    {
      q: 'Est-ce que la salle est bondée aux heures de pointe ?',
      a: "TODO — question systématiquement posée par les pratiquants confirmés. Répondre honnêtement, et en profiter pour orienter vers les créneaux creux.",
      pages: ['nous-trouver', 'le-plateau'],
      todo: true,
    },

    // ── Argent — dont l'objection n°1 des avis négatifs ─────────────────────
    {
      q: 'Comment se passe une résiliation ?',
      a: "TODO — à documenter précisément et à publier tel quel. C'est le grief n°1 des avis négatifs récents : le traiter ouvertement, avec le préavis et la marche à suivre exacts, retourne l'objection en preuve d'honnêteté. Ne pas l'éluder.",
      pages: ['tarifs'],
      todo: true,
    },
    {
      q: 'La première séance est gratuite ou payante ?',
      a: "TODO — trancher. Le site affiche aujourd'hui « Gratuit » ET « ou 5 € », ce qui crée une ambiguïté au moment exact de la décision. Un seul prix doit être affiché.",
      pages: ['premiere-seance', 'tarifs'],
      todo: true,
    },
    {
      q: 'Y a-t-il des frais d\'inscription ?',
      a: "Oui, 39 € de frais d'adhésion, réglés une seule fois à l'inscription. Ce n'est pas une mensualité et ils ne sont jamais reconduits.",
      pages: ['tarifs'],
    },
    {
      q: 'Puis-je m\'abonner sans engagement ?',
      a: "Oui. La formule sans engagement est résiliable à tout moment. L'engagement annuel existe uniquement parce qu'il donne le tarif au mois le plus bas — ce n'est pas un passage obligé.",
      pages: ['tarifs'],
    },
  ] as FaqItem[],
};

/** Retourne les entrées d'une page donnée. */
export function faqFor(page: string): FaqItem[] {
  return faq.items.filter((i) => i.pages.includes(page));
}

/** Entrées encore bloquées par une validation client — utilisé en recette. */
export function faqTodos(): FaqItem[] {
  return faq.items.filter((i) => i.todo);
}
