/**
 * IRON GYM LIMOGES — Baril de contenu.
 * ----------------------------------------------------------------------------
 * ⚠️ CE FICHIER NE CONTIENT PLUS DE DONNÉES (lot A1).
 *
 * Le contenu est désormais découpé par domaine dans `src/data/*.ts`. Un fichier
 * unique de 726 lignes était tenable en mono-page ; sur 8 pages il devenait un
 * goulot d'édition et de relecture.
 *
 * Ce baril ne subsiste que pour la compatibilité des composants existants.
 * TOUT NOUVEAU CODE doit importer depuis le module précis :
 *
 *   ❌  import { temple } from '../data/content';
 *   ✅  import { temple } from '../data/plateau';
 *
 * Carte des modules :
 *   types.ts     Media, NavLink, ClassSlot, Review
 *   site.ts      site, legalEntity            → SEO, OG, mentions légales
 *   brand.ts     nav, hero, footer, cta       → marque et navigation
 *   lignee.ts    manifesto, heritage          → le récit (option B : zéro titre)
 *   plateau.ts   temple                       → les espaces
 *   coaching.ts  programs, coaching           → la méthode et son périmètre
 *   cours.ts     schedule                     → le planning
 *   avis.ts      champions                    → la preuve sociale
 *   tarifs.ts    pricing, referral            → l'offre
 *   contact.ts   contact, form                → NAP, horaires, formulaire
 *   faq.ts       faq                          → objections, SEO local
 */

export * from './types';
export * from './site';
export * from './brand';
export * from './lignee';
export * from './plateau';
export * from './coaching';
export * from './cours';
export * from './avis';
export * from './tarifs';
export * from './contact';
export * from './faq';
