import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
  Stethoscope,
  Pill,
  HeartPulse,
  Syringe,
  Microscope,
  Baby,
  Brain,
  Eye,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { stats, services, doctors, articles } from '@/data/content';

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Stethoscope,
  Pill,
  HeartPulse,
  Syringe,
  Microscope,
  Baby,
  Brain,
  Eye,
};

const badges = [
  { icon: ShieldCheck, text: 'Certified & Accredited' },
  { icon: Clock, text: 'Open 7 Days a Week' },
  { icon: Star, text: 'Top-Rated Clinic' },
];

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
  const { ref: doctorsRef, visible: doctorsVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-20 sm:pt-40 sm:pb-28"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />
          <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-up text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Now accepting new patients
              </div>

              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Your Health,
                <br />
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Our Lifelong Commitment
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500 lg:mx-0">
                From everyday prescriptions to specialist consultations,
                Home-Office Pharmacy & Clinic brings trusted pharmacy and
                clinical care together under one roof — delivered with
                compassion.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/book"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/30 transition-all duration-300 hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-0.5 sm:w-auto"
                >
                  <Stethoscope className="h-5 w-5" />
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700 sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                {badges.map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 text-sm font-medium text-ink-500"
                  >
                    <b.icon className="h-4 w-4 text-brand-500" />
                    {b.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in [animation-delay:200ms]">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-300/30 ring-1 ring-ink-100">
                  <img
                    src="https://images.pexels.com/photos/7108324/pexels-photo-7108324.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Modern clinic interior with teal and white design"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
                </div>

                <div className="absolute -left-4 top-8 animate-float rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-100 backdrop-blur sm:-left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                      <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-ink-900">4.9 / 5.0</p>
                      <p className="text-xs text-ink-500">2,400+ reviews</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-8 animate-float-slow rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-100 backdrop-blur sm:-right-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                      <Pill className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-900">Pharmacy Open</p>
                      <p className="text-xs text-ink-500">8am – 10pm daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-ink-100 sm:mt-20 sm:grid-cols-4 sm:gap-8 sm:p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-brand-600 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Care Under One Roof"
            desc="From routine check-ups to specialist treatments, our integrated team is here to support every stage of your health journey."
          />

          <div
            ref={servicesRef}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.slice(0, 8).map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <Link
                  key={s.title}
                  to="/services"
                  className={`reveal ${servicesVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/39192358/pexels-photo-39192358.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Doctor consulting with patient"
                  className="h-[400px] w-full object-cover sm:h-[480px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-100 sm:left-8 sm:right-auto">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink-900">
                      Same-day appointments
                    </p>
                    <p className="text-sm text-ink-500">
                      Call before noon to be seen today
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Healthcare That Puts You First"
                desc="We combine medical excellence with genuine compassion, so every visit feels personal, efficient, and reassuring."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, title: 'Board-Certified Physicians', desc: 'Every doctor on our team holds top-tier credentials and years of clinical experience.' },
                  { icon: Clock, title: 'Minimal Wait Times', desc: 'Respected scheduling and efficient workflows mean you are seen when your appointment begins.' },
                  { icon: HeartPulse, title: 'Integrated Pharmacy', desc: 'See your doctor and pick up your prescription in the same visit — no extra trip required.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 hover:border-brand-200 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCTORS PREVIEW ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Meet Our Team"
            title="Experienced Doctors Who Care"
            desc="Our board-certified physicians and pharmacists bring decades of combined experience and a shared dedication to your wellbeing."
          />

          <div
            ref={doctorsRef}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {doctors.slice(0, 4).map((doc, i) => (
              <Link
                key={doc.id}
                to="/doctors"
                className={`reveal ${doctorsVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-ink-900">{doc.name}</h3>
                  <p className="text-sm font-medium text-brand-600">{doc.role}</p>
                  <div className="mt-3 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    {doc.specialty}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/doctors"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700"
            >
              Meet All Doctors
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RESOURCES PREVIEW ===== */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Health Resources"
              title="Insights for a Healthier Life"
              desc="Expert articles and tips from our medical team to help you stay informed."
              align="left"
            />
            <Link
              to="/resources"
              className="group flex shrink-0 items-center gap-2 rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700"
            >
              View All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Link
                key={a.id}
                to="/resources"
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-ink-400">{a.date} · {a.readTime}</p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 sm:py-32">
        <div
          ref={ctaRef}
          className={`reveal ${ctaVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-5 sm:px-8`}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 px-8 py-16 sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
            </div>
            <div className="relative text-center">
              <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step for Your Health?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
                Book an appointment today and experience healthcare that truly
                cares about you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/book"
                  className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  <Stethoscope className="h-5 w-5" />
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {['No referral needed', 'Most insurance accepted', 'Same-day visits'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-brand-100">
                    <CheckCircle2 className="h-4 w-4 text-brand-200" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
