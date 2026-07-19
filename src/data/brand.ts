/**
 * MARQUE — essence, promesse, navigation, CTA (lot A1).
 * ----------------------------------------------------------------------------
 * 🔒 Les valeurs de `brand` et `cta` sont VERROUILLÉES par BLUEPRINT-V2 §9.
 * Elles ne se modifient pas en cours de développement : toute évolution passe
 * par une mise à jour datée du blueprint.
 */
import type { NavLink } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Socle de marque — verrouillé
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  /** Ce qui se transmet d'une personne à la suivante. Pas « la force ». */
  essence: 'La transmission',

  /** Lève le frein n°1, nomme le différenciateur, résume le récit. */
  promise: 'Vous ne serez jamais seul devant une barre.',

  positioning: 'L\'institution bodybuilding du Limousin',

  /** Le hook narratif. Aucune salle de Limoges ne peut écrire cette phrase. */
  hook: 'Il a vendu cette salle en 2000. Il est revenu la chercher dix-huit ans plus tard.',

  /**
   * 🔒 Formulation verrouillée du différenciateur n°1.
   * « Illimité », « à volonté », « du premier jour au dernier » et
   * « ça ne s'arrête jamais » sont INTERDITS : à 33 €/mois, une heure de coach
   * par adhérent consomme la totalité de l'abonnement. Cf. BLUEPRINT-V2 §7.3.
   */
  // ⚠️ PRUDENCE (revue client) : on ne sait pas encore si l'accompagnement est
  // gratuit ou facturé. On décrit ce que le coach FAIT, jamais le prix ni
  // l'inclusion. Les modalités sont renvoyées à l'accueil. À rouvrir dès que
  // Bernard confirme (grille BLUEPRINT §7.3).
  coachingClaim: 'Un coach est là pour vous accompagner.',
  coachingClaimLong:
    'Un bilan, un programme personnalisé, et quelqu\'un sur le plateau pour corriger vos gestes et suivre votre progression.',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// CTA — un seul libellé principal sur tout le site
// ─────────────────────────────────────────────────────────────────────────────

/**
 * CTA.
 * Revue DA (juillet) — le client veut le contact immédiat en avant : sur une
 * salle locale, l'appel direct convertit mieux qu'un formulaire. `call` et
 * `directions` deviennent les deux actions du hero. « Réserver ma première
 * séance » reste le CTA des pages de conversion (première séance, coaching).
 *
 * ⚠️ Ceci assouplit la règle « un seul libellé » du blueprint §9 : décision
 * client assumée. Le hero passe à l'action téléphone ; le parcours essai reste
 * la porte des pages profondes.
 */
export const cta = {
  // Hero — contact immédiat.
  call: { label: 'Appeler Iron Gym', href: 'tel:+33555797423' },
  directions: {
    label: 'Itinéraire',
    href: 'https://www.google.com/maps/dir/?api=1&destination=Iron%20Gym%2031%20rue%20Fran%C3%A7ois%20Ch%C3%A9nieux%2087000%20Limoges',
  },
  // One-page : conversions vers les sections de la home.
  primary: { label: 'Réserver ma première séance', href: '#contact' },
  secondary: { label: 'Voir la salle', href: '#temple' },
  member: { label: 'Devenir membre', href: '#contact' },
  pack: { label: 'Prendre un carnet de 10 séances', href: '#tarifs' },
  whatsapp: { label: 'Écrire sur WhatsApp', href: '' }, // TODO — numéro à confirmer
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Navigation principale — ONE-PAGE (décision client, juillet).
 * Retour au one-page : les liens pointent vers les SECTIONS de la home via
 * ancres. Le smooth-scroll Lenis (lib/motion.ts) capte les `a[href^="#"]`.
 * Sur les pages légales, Nav.astro préfixe l'ancre par « / » pour revenir à la
 * home puis défiler.
 */
export const nav: NavLink[] = [
  { label: 'Histoire', href: '#heritage' },
  { label: 'La salle', href: '#temple' },
  { label: 'Cours & Coaching', href: '#programmes' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Accès & Contact', href: '#contact' },
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
  sub: "Au 31 rue François Chénieux, en plein centre de Limoges. Musculation, cours collectifs, sauna — et quelqu'un pour vous montrer, dès le premier jour.",
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
