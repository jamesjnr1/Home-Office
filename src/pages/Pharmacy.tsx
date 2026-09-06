import { Link } from 'react-router-dom';
import {
  Clock,
  Users,
  ShieldCheck,
  PackageCheck,
  Pill,
  ClipboardList,
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { business } from '@/data/business';

const features = [
  { icon: Clock, title: 'Extended Hours', desc: `Open ${business.hours.toLowerCase()}.` },
  { icon: Users, title: 'Friendly Walk-In Service', desc: 'No appointment needed — walk in and our pharmacy team will help you right away.' },
  { icon: ShieldCheck, title: 'Verified Medications', desc: 'Genuine, quality-assured medicines dispensed by our pharmacy team.' },
  { icon: PackageCheck, title: 'Refill Reminders', desc: 'Ask us to remind you when it\'s time to refill.' },
];

const pharmacyServices = [
  { icon: ClipboardList, title: 'Prescription Filling & Refills', desc: 'Bring in your prescription or an existing bottle and we\'ll take it from there.' },
  { icon: Pill, title: 'Medication Counselling', desc: 'Sit down with our pharmacist for guidance on how to take your medicines safely.' },
  { icon: ShieldCheck, title: 'Trusted Suppliers', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
  { icon: CreditCard, title: 'Affordable, Transparent Pricing', desc: 'Clear pricing on every product, with no hidden costs.' },
];

// Categories as labelled on our own shelves in store.
const stockCategories = [
  'Analgesics',
  'Multivitamins',
  'Antibiotics',
  'Anti-Malarials',
  'Cough & Cold',
  'Anti-Allergic',
  'Herbal Products',
];

export default function Pharmacy() {
  const { ref, visible } = useReveal();
  const { ref: servicesRef, visible: servicesVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Pharmacy"
            title="A Full-Service Pharmacy You Can Trust"
            desc="Our pharmacy team is here to answer your questions, fill your prescriptions, and make sure you get the right medication at the right time."
          />
        </div>
      </section>

      {/* Overview */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/pharmacy-interior.png"
                alt="Inside Home-Office Pharmacy & Clinic"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Everything You Need from a Modern Pharmacy
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Whether you're picking up a one-time prescription or managing
                an ongoing medication routine, our team provides clear
                guidance and friendly service every time you visit.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-ink-100 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                  >
                    <f.icon className="h-5 w-5 text-brand-600" />
                    <h4 className="mt-3 text-sm font-semibold text-ink-900">{f.title}</h4>
                    <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/book"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
                >
                  Book a Visit
                </Link>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="text-sm font-semibold text-ink-500 hover:text-brand-700"
                >
                  Or call {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stock */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Stock"
            title="A Well-Rounded Range, On the Shelf"
            desc="A snapshot of what you'll find in store — ask our team if you don't see what you need."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {stockCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition-colors duration-300 hover:border-brand-300 hover:text-brand-700"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Pharmacy Services"
            title="More Than Just Prescriptions"
            desc="A full range of pharmacy services designed to make managing your health simpler and more convenient."
          />

          <div ref={servicesRef} className="mt-14 grid gap-6 sm:grid-cols-2">
            {pharmacyServices.map((s, i) => (
              <div
                key={s.title}
                className={`reveal ${servicesVisible ? 'is-visible' : ''} rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <s.icon className="h-6 w-6 text-brand-600" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-700 px-8 py-14 sm:flex-row sm:items-center sm:px-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to visit our pharmacy?
              </h2>
              <p className="mt-3 text-brand-100">
                Walk in anytime we're open, or book ahead — it only takes a few minutes.
              </p>
            </div>
            <Link
              to="/book"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
