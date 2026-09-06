export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  img: string;
  experience: string;
  education: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  img: string;
  readTime: string;
  date: string;
}

export const doctors: Doctor[] = [
  {
    id: 'sarah-mitchell',
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    specialty: 'Family Medicine',
    bio: 'Dr. Mitchell brings over 20 years of experience in family medicine, leading our clinic with a patient-first philosophy and a passion for preventive care.',
    img: 'https://images.pexels.com/photos/32254667/pexels-photo-32254667.jpeg?auto=compress&cs=tinysrgb&w=700',
    experience: '20+ years',
    education: 'MD, Johns Hopkins University',
  },
  {
    id: 'james-okonkwo',
    name: 'Dr. James Okonkwo',
    role: 'Cardiologist',
    specialty: 'Heart & Vascular',
    bio: 'A board-certified cardiologist specializing in preventive cardiology, heart failure management, and advanced diagnostic imaging.',
    img: 'https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&w=700',
    experience: '15+ years',
    education: 'MD, Stanford University',
  },
  {
    id: 'emily-chen',
    name: 'Dr. Emily Chen',
    role: 'Pediatrician',
    specialty: 'Child Health',
    bio: 'Dr. Chen is dedicated to providing compassionate care for children from infancy through adolescence, with expertise in developmental health.',
    img: 'https://images.pexels.com/photos/5234519/pexels-photo-5234519.jpeg?auto=compress&cs=tinysrgb&w=700',
    experience: '12+ years',
    education: 'MD, UCLA School of Medicine',
  },
  {
    id: 'anita-patel',
    name: 'Dr. Anita Patel',
    role: 'Pharmacist-in-Chief',
    specialty: 'Clinical Pharmacy',
    bio: 'Dr. Patel oversees our full-service pharmacy, ensuring medication safety, managing complex prescriptions, and providing expert consultations.',
    img: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=700',
    experience: '14+ years',
    education: 'PharmD, University of Michigan',
  },
  {
    id: 'marcus-webb',
    name: 'Dr. Marcus Webb',
    role: 'Dermatologist',
    specialty: 'Skin Care',
    bio: 'Dr. Webb treats a full range of skin conditions and offers cosmetic dermatology procedures using the latest laser and light technologies.',
    img: 'https://images.pexels.com/photos/29995617/pexels-photo-29995617.jpeg?auto=compress&cs=tinysrgb&w=700',
    experience: '10+ years',
    education: 'MD, Yale University',
  },
  {
    id: 'lena-volkov',
    name: 'Dr. Lena Volkov',
    role: 'Neurologist',
    specialty: 'Brain & Nervous System',
    bio: 'Dr. Volkov specializes in the diagnosis and treatment of neurological disorders, with a focus on headache management and epilepsy.',
    img: 'https://images.pexels.com/photos/15962798/pexels-photo-15962798.jpeg?auto=compress&cs=tinysrgb&w=700',
    experience: '13+ years',
    education: 'MD, Columbia University',
  },
];

export const services: Service[] = [
  {
    icon: 'Stethoscope',
    title: 'General Consultations',
    desc: 'Comprehensive check-ups and diagnosis from experienced family doctors who know you by name.',
    features: ['Annual physicals', 'Urgent care visits', 'Chronic disease management'],
  },
  {
    icon: 'Pill',
    title: 'Pharmacy & Refills',
    desc: 'Full-service dispensary with prescription management, auto-refills, and pharmacist consultations.',
    features: ['Prescription transfer', 'Auto-refill program', 'Medication therapy review'],
  },
  {
    icon: 'HeartPulse',
    title: 'Cardiology',
    desc: 'Heart health screenings, ECG, echocardiography, and ongoing cardiovascular care.',
    features: ['ECG & echocardiogram', 'Blood pressure management', 'Heart risk assessment'],
  },
  {
    icon: 'Syringe',
    title: 'Vaccinations',
    desc: 'Travel vaccines, flu shots, childhood immunizations, and booster shots for all ages.',
    features: ['Flu & seasonal vaccines', 'Travel immunizations', 'Childhood vaccines'],
  },
  {
    icon: 'Microscope',
    title: 'Lab Diagnostics',
    desc: 'On-site blood work, rapid testing, and fast result turnaround — no second trip required.',
    features: ['Blood panel testing', 'Rapid strep & flu tests', 'Same-day results'],
  },
  {
    icon: 'Baby',
    title: 'Pediatrics',
    desc: 'Gentle, expert care for newborns, children, and adolescents in a welcoming environment.',
    features: ['Well-child visits', 'Developmental screenings', 'School physicals'],
  },
  {
    icon: 'Brain',
    title: 'Mental Health',
    desc: 'Confidential counselling, therapy sessions, and psychiatric support services.',
    features: ['Individual therapy', 'Anxiety & depression care', 'Medication management'],
  },
  {
    icon: 'Eye',
    title: 'Dermatology',
    desc: 'Skin condition diagnosis, mole checks, acne treatment, and cosmetic procedures.',
    features: ['Skin cancer screening', 'Acne treatment', 'Laser therapy'],
  },
];

export const articles: Article[] = [
  {
    id: 'immune-system',
    category: 'Wellness',
    title: '10 Daily Habits for a Stronger Immune System',
    excerpt:
      'Simple, evidence-based changes you can make today to keep your immune system resilient year-round — from sleep hygiene to nutrition.',
    img: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    date: 'Aug 28, 2026',
  },
  {
    id: 'prescription-labels',
    category: 'Pharmacy',
    title: 'Understanding Your Prescription Labels',
    excerpt:
      'A pharmacist breaks down what every line on your medication label means — and why understanding it matters for your safety.',
    img: 'https://images.pexels.com/photos/3652750/pexels-photo-3652750.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min read',
    date: 'Aug 15, 2026',
  },
  {
    id: 'flu-season',
    category: 'Prevention',
    title: 'Flu Season 2026: What You Need to Know',
    excerpt:
      'Stay ahead of cold and flu season with our updated vaccination guide, prevention tips, and what to do if you get sick.',
    img: 'https://images.pexels.com/photos/6670739/pexels-photo-6670739.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    date: 'Aug 2, 2026',
  },
  {
    id: 'nutrition-basics',
    category: 'Nutrition',
    title: 'Building a Balanced Plate: Nutrition Basics',
    excerpt:
      'Our nutritionist shares practical tips for building balanced meals that fuel your body and support long-term health.',
    img: 'https://images.pexels.com/photos/5622212/pexels-photo-5622212.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    date: 'Jul 20, 2026',
  },
  {
    id: 'mental-health',
    category: 'Mental Health',
    title: 'Managing Anxiety in a Fast-Paced World',
    excerpt:
      'Practical strategies from our mental health team for managing everyday anxiety and building emotional resilience.',
    img: 'https://images.pexels.com/photos/6668929/pexels-photo-6668929.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
    date: 'Jul 8, 2026',
  },
  {
    id: 'exercise-routine',
    category: 'Fitness',
    title: 'Starting an Exercise Routine at Any Age',
    excerpt:
      'It is never too late to start moving. Learn how to build a safe, sustainable exercise routine that works for your lifestyle.',
    img: 'https://images.pexels.com/photos/11412589/pexels-photo-11412589.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    date: 'Jun 25, 2026',
  },
];

export const stats = [
  { value: '25+', label: 'Years of Care' },
  { value: '40k+', label: 'Patients Served' },
  { value: '12', label: 'Expert Doctors' },
  { value: '4.9', label: 'Patient Rating' },
];

export const departments = [
  'General Consultation',
  'Cardiology',
  'Pediatrics',
  'Pharmacy Consult',
  'Lab Diagnostics',
  'Vaccinations',
  'Dermatology',
  'Mental Health',
];

export const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
];
