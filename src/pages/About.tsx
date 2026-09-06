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
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { stats } from '@/data/content';

const values = [
  { icon: HeartHandshake, title: 'Compassion First', desc: 'Every patient is treated with empathy, dignity, and respect — no exceptions.' },
  { icon: Award, title: 'Excellence in Care', desc: 'We hold ourselves to the highest clinical standards and continuously improve.' },
  { icon: Users, title: 'Community Focused', desc: 'Proudly serving our community for over 25 years with accessible healthcare.' },
];

const milestones = [
  { year: '1999', title: 'Founded', desc: 'Opened as a small neighborhood clinic with a vision for accessible care.' },
  { year: '2006', title: 'Pharmacy Added', desc: 'Expanded to include a full-service pharmacy under one roof.' },
  { year: '2015', title: 'New Facility', desc: 'Moved to our current state-of-the-art health center.' },
  { year: '2026', title: 'Today', desc: 'Serving 40,000+ patients with 12 expert doctors and a dedicated team.' },
];

const points = [
  'Board-certified physicians',
  'Same-day appointments',
  'Multilingual staff',
  'Affordable pricing',
  'Modern equipment',
  'Integrated pharmacy',
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
            title="Trusted Healthcare Since 1999"
            desc="Home-Office Pharmacy & Clinic was founded with a simple mission: to provide accessible, high-quality healthcare with a personal touch."
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
                    alt="Healthcare professionals at reception"
                    className="h-64 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
                  <img
                    src="https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern clinic waiting room"
                    className="h-64 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-brand-600 px-8 py-5 text-center shadow-2xl shadow-brand-500/30">
                <p className="font-display text-3xl font-bold text-white">25+</p>
                <p className="text-sm text-brand-100">Years of Excellence</p>
              </div>
            </div>

            <div className={`reveal ${visible ? 'is-visible' : ''}`}>
              <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Our Story
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                What started as a small neighborhood clinic has grown into a
                comprehensive care center — but our commitment to each patient
                has never changed. We believe healthcare should be personal,
                accessible, and delivered with genuine compassion.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Today, we serve over 40,000 patients with a team of 12 expert
                doctors, a full-service pharmacy, and an on-site diagnostic
                laboratory — all under one roof.
              </p>

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
              { icon: Target, title: 'Our Mission', desc: 'To provide accessible, high-quality healthcare with compassion, treating every patient as we would our own family.' },
              { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted healthcare provider in our community, known for excellence, innovation, and genuine care.' },
              { icon: Lightbulb, title: 'Our Approach', desc: 'We combine medical expertise with a personal touch, ensuring every patient feels heard, respected, and well cared for.' },
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

      {/* Timeline */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="25 Years of Growth & Care"
            desc="From a small clinic to a comprehensive healthcare center — here is how we got here."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`reveal ${visible ? 'is-visible' : ''} relative rounded-3xl border border-ink-100 bg-white p-6`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-3xl font-bold text-brand-600">
                  {m.year}
                </div>
                <h3 className="mt-2 text-base font-bold text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {m.desc}
                </p>
                {i < milestones.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-ink-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-600 p-8 sm:grid-cols-4 sm:gap-8 sm:p-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-brand-100">{s.label}</p>
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
