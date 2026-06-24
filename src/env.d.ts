/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Clé publique Web3Forms pour le formulaire de contact. */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
