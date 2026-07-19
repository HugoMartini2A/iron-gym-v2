/**
 * Métadonnées du site + entité juridique (lot A1).
 */

// ─────────────────────────────────────────────────────────────────────────────
// Métadonnées du site (SEO / OG / JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Iron Gym Limoges',
  shortName: 'Iron Gym',
  // <title> : 50–60 caractères.
  title: 'Iron Gym Limoges — Musculation & coaching depuis 1992',
  // <meta description> : 150–160 caractères. Mots-clés locaux, sans affirmer le
  // coaching « inclus » (prudence — cf. §7.3).
  description:
    "Salle de musculation au centre de Limoges depuis 1992. Plateau rénové, 100+ cours collectifs par mois, sauna, accompagnement personnalisé. Séance d'essai.",
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
// Entité juridique (pages légales). Exploitant ACTUEL vérifié via societe.com :
// l'association loi 1901 « IRON GYM LIMOGES SPORTS » (l'ancienne SARL MACHA est
// dissoute). Dénomination / forme / SIREN / SIRET / TVA / date de création =
// réels. Seuls le code APE/NAF et le DIRECTEUR DE PUBLICATION (président de
// l'association, non confirmé) restent en placeholder — ne JAMAIS inventer de nom
// (ne PAS écrire « Bernard Hartman » comme dirigeant de l'entité actuelle).
// Adresse / téléphone / email = coordonnées publiques réelles ; host = hébergeur.
// ─────────────────────────────────────────────────────────────────────────────

export const legalEntity = {
  name: 'IRON GYM LIMOGES SPORTS',
  form: 'Association loi 1901',
  address: '31 rue François Chénieux, 87000 Limoges',
  siren: '932 034 580',
  siret: '932 034 580 00013',
  tva: 'FR85932034580',
  ape: '[À COMPLÉTER À LA SIGNATURE]',
  phone: '05 55 79 74 23',
  director: "[À COMPLÉTER À LA SIGNATURE — président de l'association]",
  email: 'irongymlimogessports@hotmail.com',
  host: 'Vercel Inc., 340 S Lemon Ave, Walnut, CA 91789, USA - vercel.com',
  created: '09/01/2024',
} as const;
