import { Link } from 'react-router-dom';
import {
  Pill,
  Clock,
  Users,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  ArrowRight,
  Phone,
  FileText,
  MessageCircle,
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
  { icon: FileText, title: 'Prescription Filling & Refills', desc: 'Bring in your prescription or an existing bottle and we\'ll take it from there.' },
  { icon: Pill, title: 'Medication Counselling', desc: 'Sit down with our pharmacist for guidance on how to take your medicines safely.' },
  { icon: ShieldCheck, title: 'Trusted Suppliers', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
  { icon: CreditCard, title: 'Affordable, Transparent Pricing', desc: 'Clear pricing on every product, with no hidden costs.' },
];

export default function Pharmacy() {
  const { ref, visible } = useReveal();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
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
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
            <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Everything You Need from a Modern Pharmacy
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Whether you're picking up a one-time prescription or managing
              an ongoing medication routine, our team provides clear
              guidance and friendly service every time you visit.
            </p>
          </div>

          <div className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2`}>
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 hover:border-brand-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/book"
              className="group flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              Transfer Your Prescription
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-brand-700"
            >
              <Phone className="h-5 w-5 text-brand-500" />
              Or call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Pharmacy Services"
            title="More Than Just Prescriptions"
            desc="A full range of pharmacy services designed to make managing your health simpler and more convenient."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {pharmacyServices.map((s, i) => (
              <div
                key={s.title}
                className={`reveal ${visible ? 'is-visible' : ''} flex gap-5 rounded-3xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-lg`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <s.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 to-brand-600 px-8 py-14 sm:px-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Ready to switch your pharmacy?
                </h2>
                <p className="mt-3 text-brand-100">
                  Transfer your prescription today — it only takes a few minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/book"
                  className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
