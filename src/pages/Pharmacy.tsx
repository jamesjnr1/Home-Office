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
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import { business } from '@/data/business';

const features = [
  { icon: Clock, title: 'Extended Hours', desc: `Open ${business.hours.toLowerCase()}.` },
  { icon: Users, title: 'Friendly Walk-In Service', desc: 'No appointment needed — walk in and our pharmacy team will help you right away.' },
  { icon: ShieldCheck, title: 'Verified Medications', desc: 'Genuine, quality-assured medicines dispensed by our pharmacy team.' },
  { icon: PackageCheck, title: 'Refill Reminders', desc: 'Ask us to remind you when it is time to refill.' },
];

const pharmacyServices = [
  { icon: ClipboardList, title: 'Prescription Filling & Refills', desc: 'Bring in your prescription or an existing bottle and we will take it from there.' },
  { icon: Pill, title: 'Medication Counselling', desc: 'Sit down with our pharmacist for guidance on how to take your medicines safely.' },
  { icon: ShieldCheck, title: 'Trusted Suppliers', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
  { icon: CreditCard, title: 'Affordable, Transparent Pricing', desc: 'Clear pricing on every product, with no hidden costs.' },
];

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
      <PageHero
        eyebrow="Our Pharmacy"
        title="A Full-Service Pharmacy You Can Trust"
        desc="Our pharmacy team is here to answer your questions, fill your prescriptions, and make sure you get the right medication at the right time."
      />

      {/* Overview */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink-100">
                <img
                  src="/images/pharmacy-interior.png"
                  alt="Inside Home-Office Pharmacy & Clinic"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-100 sm:left-8 sm:right-auto">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Pill className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink-900">Quality-Assured</p>
                    <p className="text-sm text-ink-500">Trusted suppliers, genuine medicines</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Everything You Need from a Modern Pharmacy
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Whether you are picking up a one-time prescription or managing an
                ongoing medication routine, our team provides clear guidance and
                friendly service every time you visit.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-ink-900">{f.title}</h4>
                    <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/book"
                  className="group flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
                >
                  Book a Visit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-brand-700"
                >
                  <Phone className="h-4 w-4" />
                  Or call {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stock */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Stock"
            title="A Well-Rounded Range, On the Shelf"
            desc="A snapshot of what you will find in store — ask our team if you do not see what you need."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {stockCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm transition-all duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 sm:py-32">
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
                className={`reveal ${servicesVisible ? 'is-visible' : ''} group rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
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
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-600 px-8 py-14 sm:px-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Ready to visit our pharmacy?
                </h2>
                <p className="mt-3 text-brand-100">
                  Walk in anytime we are open, or book ahead — it only takes a few minutes.
                </p>
              </div>
              <Link
                to="/book"
                className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
