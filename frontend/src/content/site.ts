/**
 * Site content. Edit this file to change wording without touching components.
 *
 * REVIEW BEFORE LAUNCH: every statement about farm practices below is DRAFT copy.
 * Only keep statements that are true for the farm. Do not claim "organic" or any
 * certification you do not hold (see SRS FR-003).
 */

export interface Testimonial { quote: string; author: string }
export interface PracticeItem { id: string; title: string; body: string }

export const site = {
  name: 'Bonete’s Organic Lechons',
  tagline: 'Responsibly raised pigs and chickens. Lechon made to order.',

  // Leave a value empty to hide it everywhere on the site.
  contact: {
    phone: '',
    email: '',
    address: '',
    hours: '',
    facebook: '',
  },

  // Real customer testimonials only. While empty, the section is hidden.
  testimonials: [] as Testimonial[],

  // List only certifications the farm actually holds, e.g. ['Registered with …'].
  certifications: [] as string[],

  offerings: [
    { id: 'pigs', icon: '🐖', title: 'Live Pigs', text: 'Farm-raised pigs, available by arrangement.' },
    { id: 'chickens', icon: '🐓', title: 'Live Chickens', text: 'Free-range chickens, available by arrangement.' },
    { id: 'lechon-baboy', icon: '🔥', title: 'Lechon Baboy', text: 'Whole roasted pig for fiestas, weddings and family gatherings.' },
    { id: 'lechon-manok', icon: '🍗', title: 'Lechon Manok', text: 'Roasted chicken, ready for pickup or delivery.' },
  ],

  about: {
    story: [
      'Bonete’s Organic Lechons brings together two things we care about: raising animals responsibly and serving food worth gathering around.',
      'From the pen to the roasting pit, we keep the process close to home so we can answer a simple question honestly: where did your lechon come from?',
    ],
    mission: 'To raise livestock with care and prepare lechon that makes every celebration memorable, while being open about how we work.',
    vision: 'To be a trusted name for farm-raised pork and chicken, known for quality, honesty and good service.',
    values: [
      { title: 'Care first', text: 'Animal welfare comes before speed or volume.' },
      { title: 'Honest practices', text: 'We say what we do, and we only claim what we can show.' },
      { title: 'Made to order', text: 'Lechon is prepared for your date, so it arrives fresh.' },
    ],
  },

  practices: [
    { id: 'housing', title: 'Housing', body: 'Our animals are kept in clean pens and coops with shade, ventilation and room to move, and with fresh drinking water available.' },
    { id: 'feeding', title: 'Feeding', body: 'Feeding follows a regular schedule for each batch, and we keep records of what each batch is fed.' },
    { id: 'welfare', title: 'Animal welfare', body: 'We handle animals calmly, watch each batch daily and separate any animal that looks unwell.' },
    { id: 'hygiene', title: 'Farm hygiene', body: 'Pens, feeders and equipment are cleaned on a routine, and visitors follow basic hygiene rules.' },
    { id: 'vet', title: 'Veterinary supervision', body: 'We keep vaccination and treatment records, and consult a veterinarian when health concerns come up.' },
    { id: 'sourcing', title: 'Livestock sourcing', body: 'We record where each batch comes from and when it arrived, so every animal has a known origin.' },
  ] as PracticeItem[],
}
