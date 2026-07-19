/**
 * Types partagés du contenu (lot A1).
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Une image du site. Tant que `src` est `null`, un bloc placeholder
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
