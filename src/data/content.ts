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
    icon: 'HeartHandshake',
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

export const stats = [
  { value: '14', suffix: '+', label: 'Hours Daily' },
  { value: '7', suffix: '', label: 'Days a Week' },
  { value: '6', suffix: '', label: 'Core Services' },
  { value: '7', suffix: '', label: 'Lab Tests On-Site' },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The pharmacist took time to explain every medication. I have never felt so cared for at a pharmacy before.',
    author: 'Abena D.',
    role: 'Patient',
  },
  {
    quote:
      'They came to our school for a health talk and the children loved it. Professional, warm, and genuinely helpful.',
    author: 'Mr. Osei',
    role: 'Headteacher',
  },
  {
    quote:
      'I called in the morning and was seen the same day. The consultation was thorough and the medicines were ready before I left.',
    author: 'Grace M.',
    role: 'Patient',
  },
];

export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  { q: 'What are your opening hours?', a: 'We are open 8:00 AM to 10:00 PM, every single day of the week.' },
  { q: 'Do I need an appointment?', a: 'No — walk-ins are always welcome. Booking ahead just helps us prepare for your visit so you spend less time waiting.' },
  { q: 'Do you visit homes or offices?', a: 'Yes. We provide tailored pharmaceutical and clinical services at home, at your office, or wherever is convenient — including schools, churches, and organisations.' },
  { q: 'Where are you located?', a: 'Buduburam, Estate Junction, Ghana. Walk-ins are welcome any time we are open.' },
  { q: 'What lab tests do you offer?', a: 'Haemoglobin, blood glucose, malaria, pregnancy, and typhoid tests, plus wound dressing and obstetric scans — all on-site.' },
  { q: 'How can I reach you?', a: 'Call us on 055 880 2400, or send a message through our Contact page and we will get back to you quickly.' },
];
