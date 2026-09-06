import { Link } from 'react-router-dom';
import {
  Award,
  Users,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
  Clock,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { LogoTagline } from '@/components/Logo';
import { business } from '@/data/business';

const values = [
  { icon: HeartHandshake, title: 'Compassion First', desc: 'Every patient is treated with empathy, dignity, and respect — no exceptions.' },
  { icon: Award, title: 'Excellence in Care', desc: 'We hold ourselves to high standards in every prescription filled and every consultation given.' },
  { icon: Users, title: 'Community Focused', desc: 'Proudly rooted in Buduburam, serving the people who live and work around us.' },
];

const points = [
  'Registered pharmacy team',
  'Walk-ins always welcome',
  'Home & office delivery',
  'Friendly, unhurried service',
  'Open seven days a week',
  'Affordable, transparent pricing',
];

export default function About() {
  const { ref, visible } = useReveal();
  const { ref: missionRef, visible: missionVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="A Community Pharmacy & Clinic You Can Trust"
            desc="Home-Office Pharmacy & Clinic was founded with a simple mission: to provide accessible, personal healthcare to the Buduburam community."
          />
        </div>
      </section>

      {/* Story section */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={`reveal ${visible ? 'is-visible' : ''} relative`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
                  <img
                    src="https://images.pexels.com/photos/7108325/pexels-photo-7108325.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pharmacy reception counter"
                    className="h-64 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
                  <img
                    src="https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Clinic waiting area"
                    className="h-64 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-brand-600 px-8 py-5 text-center shadow-2xl shadow-brand-500/30">
                <p className="font-display text-lg font-bold text-white">Open Every Day</p>
                <p className="text-sm text-brand-100">{business.hours}</p>
              </div>
            </div>

            <div className={`reveal ${visible ? 'is-visible' : ''}`}>
              <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Our Story
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Home-Office Pharmacy &amp; Clinic combines a full-service
                dispensary with a walk-in clinic at Buduburam, Estate
                Junction — so you can see a clinician and get your medicines
                in the same visit. We believe healthcare should be personal,
                accessible, and delivered with genuine compassion.
              </p>
              <LogoTagline className="mt-4 text-xl" />

              <div className="mt-6 grid grid-cols-2 gap-3">
                {points.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-500" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={missionRef} className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To provide accessible, high-quality pharmacy and clinic care with compassion, treating every patient as we would our own family.' },
              { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted healthcare provider in our community, known for reliability, warmth, and genuine care.' },
              { icon: Lightbulb, title: 'Our Approach', desc: 'We combine everyday pharmacy expertise with a personal touch, ensuring every patient feels heard and well cared for.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal ${missionVisible ? 'is-visible' : ''} rounded-3xl border border-ink-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            desc="These principles guide every decision we make and every patient we serve."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal ${visible ? 'is-visible' : ''} group rounded-3xl border border-ink-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-4 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-600 p-8 sm:grid-cols-3 sm:gap-8 sm:p-12">
            {[
              { icon: Clock, label: 'Open Daily', value: business.hours },
              { icon: ShieldCheck, label: 'Licensed Pharmacy', value: business.address },
              { icon: Truck, label: 'Delivery Available', value: 'Home & office, on request' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-7 w-7 text-white" />
                <p className="mt-3 font-display text-lg font-bold text-white">{s.label}</p>
                <p className="mt-1 text-sm text-brand-100">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
