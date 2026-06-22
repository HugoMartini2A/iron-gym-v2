/**
 * Bibliothèque d'easings signature — enregistrée une seule fois.
 * La cohérence des courbes EST la voix de la marque (cf. skill motion).
 * Ne jamais utiliser `power2.out` par défaut ailleurs dans le code.
 */
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export const EASES = {
  soft: '0.25, 1, 0.5, 1', // sorties douces
  snap: '0.76, 0, 0.24, 1', // swaps nets
  swift: '0.45, 0, 0.1, 1', // reveals hero
  enter: '0.16, 1, 0.3, 1', // entrées de section
  exit: '0.7, 0, 0.84, 0', // sorties de section
  overshoot: '0.34, 1.56, 0.64, 1', // pops joueurs
} as const;

let registered = false;

/** Enregistre les CustomEase nommés (idempotent). */
export function registerEases(): void {
  if (registered) return;
  for (const [name, curve] of Object.entries(EASES)) {
    CustomEase.create(name, curve);
  }
  registered = true;
}
