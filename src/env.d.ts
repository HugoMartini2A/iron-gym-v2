/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Clé publique Web3Forms pour le formulaire de contact. */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
  /** Re-gate la carte Google derrière un consentement explicite (RGPD). */
  readonly PUBLIC_MAP_CONSENT_GATE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
