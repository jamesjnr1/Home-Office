export interface Service {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: 'Pill',
    title: 'Medicines & Prescriptions',
    desc: 'Prescription and over-the-counter medicines, sourced from leading pharmaceutical organisations and dispensed with clear guidance.',
    features: ['Prescription filling & refills', 'Over-the-counter medicines', 'Quality-assured products'],
  },
  {
    icon: 'MessageCircle',
    title: 'Counselling',
    desc: 'Confidential, personal counselling that treats you as the unique individual you are.',
    features: ['Medication counselling', 'Health & lifestyle counselling', 'Confidential & unhurried'],
  },
  {
    icon: 'Stethoscope',
    title: 'Clinical & Medical Consultation',
    desc: 'Professional medical consultations for everyday health concerns, right here in Buduburam.',
    features: ['Walk-in & scheduled visits', 'Diagnosis & treatment', 'Referrals when needed'],
  },
  {
    icon: 'BookOpen',
    title: 'Health Education',
    desc: 'Practical health education for individuals, schools, churches, and organisations.',
    features: ['One-on-one health talks', 'Group & community sessions', 'Customised to your audience'],
  },
  {
    icon: 'Microscope',
    title: 'Labs & Diagnostic Services',
    desc: 'On-the-spot testing and clinical procedures for early, accurate diagnosis.',
    features: [
      'Haemoglobin test',
      'Blood glucose test',
      'Malaria test',
      'Pregnancy test',
      'Typhoid test',
      'Wound dressing',
      'Obstetric scan',
    ],
  },
  {
    icon: 'Home',
    title: 'Home, Office & Group Service',
    desc: 'True to our name — tailored pharmaceutical and clinical services wherever it is convenient for you.',
    features: ['At your home or office', 'Schools, churches & organisations', 'Scheduled at your convenience'],
  },
];

export const departments = [
  'Medicines & Prescriptions',
  'Counselling',
  'Clinical Consultation',
  'Health Education',
  'Labs & Diagnostic Test',
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
