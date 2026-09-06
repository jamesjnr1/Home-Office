import { Link } from 'react-router-dom';
import {
  Clock,
  Users,
  ShieldCheck,
  PackageCheck,
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
  { title: 'Prescription Filling & Refills', desc: 'Bring in your prescription or an existing bottle and we\'ll take it from there.' },
  { title: 'Medication Counselling', desc: 'Sit down with our pharmacist for guidance on how to take your medicines safely.' },
  { title: 'Trusted Suppliers', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
  { title: 'Affordable, Transparent Pricing', desc: 'Clear pricing on every product, with no hidden costs.' },
];

export default function Pharmacy() {
  const { ref, visible } = useReveal();

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
                  <div key={f.title} className="flex gap-3">
                    <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <div>
                      <h4 className="text-sm font-semibold text-ink-900">{f.title}</h4>
                      <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/book"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
                >
                  Transfer Your Prescription
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

      {/* Services list */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Pharmacy Services"
            title="More Than Just Prescriptions"
            desc="A full range of pharmacy services designed to make managing your health simpler and more convenient."
          />

          <div className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {pharmacyServices.map((s) => (
              <div key={s.title} className="border-t border-ink-200 pt-5">
                <h3 className="font-display text-lg font-bold text-ink-900">
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
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-700 px-8 py-14 text-center sm:flex-row sm:px-16 sm:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to switch your pharmacy?
              </h2>
              <p className="mt-3 text-brand-100">
                Transfer your prescription today — it only takes a few minutes.
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
