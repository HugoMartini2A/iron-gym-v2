/**
 * Générateurs JSON-LD par type de page (lot A1).
 * ----------------------------------------------------------------------------
 * La V1 posait un unique `HealthClub` incomplet sur toutes les pages. En
 * multi-pages, chaque URL vise UNE intention de recherche et mérite son propre
 * balisage.
 *
 * ⚠️ RÈGLE ABSOLUE : `aggregateRating` n'est émis nulle part tant que la note
 * Google n'est pas revérifiée (4,5/105 affiché sur le site vs 4,4/39 relevé en
 * juillet 2026). Publier un `aggregateRating` faux est une infraction aux
 * consignes Google et un motif de pénalité manuelle.
 */

import { site, legalEntity } from '../data/site';
import { contact } from '../data/contact';
import type { FaqItem } from '../data/faq';

const abs = (path: string) => new URL(path, site.url).href;

/** Bloc adresse réutilisé par tous les types. */
const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: contact.address.street,
  addressLocality: 'Limoges',
  postalCode: '87000',
  addressCountry: 'FR',
};

/**
 * Horaires d'ouverture pour le JSON-LD.
 * ⚠️ Dérivés de `contact.accessHours`, eux-mêmes NON CONFIRMÉS (quatre versions
 * circulent). Émis uniquement quand `confirmedHours` passe à true — cf.
 * EXECUTION-STATUS.md § bloquants.
 */
const confirmedHours = false;

function openingHours() {
  if (!confirmedHours) return undefined;
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return contact.accessHours.flatMap((d, i) =>
    d.ranges.map(([opens, closes]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days[i],
      opens,
      closes,
    })),
  );
}

/** Retire les clés undefined — un JSON-LD ne doit jamais contenir de trous. */
function clean<T extends Record<string, unknown>>(o: T): T {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as T;
}

/**
 * `HealthClub` — la home, et elle seule.
 * Complété par rapport à la V1 : `openingHoursSpecification` (sous condition),
 * `priceRange` et `image`, qui manquaient (cf. AUDIT.md P1).
 */
export function healthClubSchema() {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    name: site.name,
    legalName: legalEntity.name,
    vatID: legalEntity.tva,
    description: site.description,
    url: site.url,
    telephone: contact.phone.tel,
    foundingDate: '1992',
    priceRange: '€€',
    image: site.ogImage.src ? abs(site.ogImage.src) : undefined,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.address.lat,
      longitude: contact.address.lng,
    },
    areaServed: { '@type': 'City', name: 'Limoges' },
    knowsAbout: [
      'musculation',
      'coaching sportif',
      'cours collectifs',
      'préparation physique',
      'street workout',
      'sauna',
    ],
    openingHoursSpecification: openingHours(),
    sameAs: contact.socials.map((s) => s.href),
    // aggregateRating — volontairement absent. Voir l'avertissement en tête.
  });
}

/**
 * VideoObject — le tour de la salle par Samuel (SEO vidéo, revue #9).
 * Aide Google à indexer/afficher la vidéo. `contentUrl` = fichier self-hosté.
 */
export function videoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Le tour d\'Iron Gym Limoges, par Samuel Hartman',
    description:
      "Visite guidée de la salle Iron Gym au 31 rue François Chénieux à Limoges : plateau de musculation, cardio, cages, sauna et ambiance.",
    thumbnailUrl: [abs('/videos/posters/tour-samuel.jpg')],
    contentUrl: abs('/videos/tour-samuel.mp4'),
    uploadDate: '2026-07-19',
    duration: 'PT1M',
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: abs('/logo-iron-gym.webp') },
    },
  };
}

/** Pages éditoriales sans intention transactionnelle (la lignée). */
export function aboutPageSchema(title: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: title,
    description,
    url: abs(path),
    isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
  };
}

/** Prestation de coaching — vise « coach sportif Limoges ». */
export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: abs(path),
    serviceType: 'Coaching sportif',
    areaServed: { '@type': 'City', name: 'Limoges' },
    provider: { '@type': 'HealthClub', name: site.name, address: postalAddress },
  };
}

/** Première séance — vise « essai salle de sport Limoges ». */
export function offerSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    url: abs(path),
    // price — volontairement absent : l'ambiguïté « gratuit / 5 € » n'est pas
    // tranchée. Un Offer avec un prix faux vaut mieux pas d'Offer du tout.
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'HealthClub', name: site.name, address: postalAddress },
  };
}

/** Inventaire du matériel — vise « salle musculation matériel Limoges ». */
export function itemListSchema(name: string, items: readonly { title: string }[], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: abs(path),
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.title,
    })),
  };
}

/**
 * FAQ — capte la longue traîne locale et les réponses des assistants IA.
 * Les entrées encore marquées `todo` sont EXCLUES du balisage : on ne
 * structure pas une donnée qu'on sait fausse.
 */
export function faqSchema(items: FaqItem[]) {
  const publishable = items.filter((i) => !i.todo);
  if (publishable.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: publishable.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

/** Fil d'Ariane — améliore l'affichage SERP des pages secondaires. */
export function breadcrumbSchema(label: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
      { '@type': 'ListItem', position: 2, name: label, item: abs(path) },
    ],
  };
}
