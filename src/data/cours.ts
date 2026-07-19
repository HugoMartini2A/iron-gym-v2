/**
 * LES COURS — planning hebdomadaire (lot A1).
 * ⚠️ Coachs fictifs : à remplacer avant publication.
 */

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
  intro: "Des cours collectifs tout au long de la semaine, matin, midi et soir. En groupe, au rythme du coach.",
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
