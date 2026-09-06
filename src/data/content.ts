export interface Service {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: 'Pill',
    title: 'Prescription Dispensing & Refills',
    desc: 'Prescription and over-the-counter medicines, dispensed accurately with clear guidance every time.',
    features: ['Prescription filling & refills', 'Over-the-counter medicines', 'Medication counselling'],
  },
  {
    icon: 'Stethoscope',
    title: 'General Consultations',
    desc: 'Walk-in consultations for everyday illnesses, check-ups, and referrals when specialist care is needed.',
    features: ['Walk-in & same-day visits', 'Common illness treatment', 'Referrals when needed'],
  },
  {
    icon: 'Syringe',
    title: 'Injections & Vaccinations',
    desc: 'Safe, professional administration of injections and vaccines for adults and children.',
    features: ['Immunizations', 'Adult & child vaccines', 'Injectable medication'],
  },
  {
    icon: 'Activity',
    title: 'Health Screening & Testing',
    desc: 'On-the-spot screening to catch problems early and guide the right treatment.',
    features: ['Blood pressure checks', 'Blood sugar testing', 'Malaria & typhoid rapid tests'],
  },
  {
    icon: 'Users',
    title: 'Family Planning',
    desc: 'Confidential family planning counselling and reproductive health products.',
    features: ['Contraceptive counselling', 'Family planning products', 'Confidential advice'],
  },
  {
    icon: 'Plus',
    title: 'Wound Care & First Aid',
    desc: 'Dressing, minor wound treatment, and first aid for everyday injuries.',
    features: ['Wound dressing', 'Minor injury treatment', 'First aid supplies'],
  },
  {
    icon: 'Truck',
    title: 'Home & Office Delivery',
    desc: 'True to our name — we bring your medicines to your home or workplace on request.',
    features: ['Home delivery', 'Office / workplace delivery', 'Call ahead for pickup'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Health & Wellness Products',
    desc: 'Vitamins, supplements, and everyday wellness essentials for the whole family.',
    features: ['Vitamins & supplements', 'Mother & baby care', 'Personal care essentials'],
  },
];

export const departments = [
  'General Consultation',
  'Prescription / Refill',
  'Vaccination & Injection',
  'Health Screening',
  'Family Planning',
  'Wound Care',
  'Other',
];

export const timeSlots = [
  '09:00 AM',
  '11:00 AM',
  '01:00 PM',
  '03:00 PM',
  '05:00 PM',
  '07:00 PM',
];
