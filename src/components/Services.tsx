import {
  Stethoscope,
  Pill,
  HeartPulse,
  Syringe,
  Microscope,
  Baby,
  Brain,
  Eye,
  ArrowUpRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: Stethoscope,
    title: 'General Consultations',
    desc: 'Comprehensive check-ups and diagnosis from experienced family doctors.',
  },
  {
    icon: Pill,
    title: 'Pharmacy & Refills',
    desc: 'Full-service dispensary with prescription management and auto-refills.',
  },
  {
    icon: HeartPulse,
    title: 'Cardiology',
    desc: 'Heart health screenings, ECG, and ongoing cardiovascular care.',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    desc: 'Travel vaccines, flu shots, and immunizations for all ages.',
  },
  {
    icon: Microscope,
    title: 'Lab Diagnostics',
    desc: 'On-site blood work, rapid testing, and fast result turnaround.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    desc: 'Gentle, expert care for newborns, children, and adolescents.',
  },
  {
    icon: Brain,
    title: 'Mental Health',
    desc: 'Confidential counselling and psychiatric support services.',
  },
  {
    icon: Eye,
    title: 'Eye Care',
    desc: 'Vision testing, screenings, and referrals to ophthalmology.',
  },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            What We Offer
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Comprehensive Care Under One Roof
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            From routine check-ups to specialist treatments, our integrated team
            is here to support every stage of your health journey.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
