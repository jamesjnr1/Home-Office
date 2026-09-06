import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  ShieldCheck,
  Clock,
  Home as HomeIcon,
  ArrowRight,
  Stethoscope,
  Pill,
  MessageCircle,
  BookOpen,
  Microscope,
  Users,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/content';
import { business } from '@/data/business';

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Pill,
  MessageCircle,
  Stethoscope,
  BookOpen,
  Microscope,
  Home: HomeIcon,
};

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
  const { ref: whyRef, visible: whyVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO — full-bleed photo, gradient overlay ===== */}
      <section id="home" className="relative w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <img
          src="/images/storefront-1.png"
          alt="Home-Office Pharmacy & Clinic storefront at Buduburam, Estate Junction"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent" />

        {/* Wave divider into the next section */}
        <svg
          className="absolute -bottom-px left-0 h-14 w-full text-white sm:h-20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,48 C240,96 480,8 720,32 C960,56 1200,96 1440,40 L1440,100 L0,100 Z"
          />
        </svg>

        <div className="relative z-10 px-5 sm:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="animate-fade-up max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                </span>
                Open now — walk-ins welcome
              </div>

              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Care &amp; Medicines
                <br />
                <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
                  are Channels of God&rsquo;s Healing
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                {business.description}
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  to="/book"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
                >
                  <Stethoscope className="h-5 w-5" />
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip — floats up over the hero/wave seam */}
      <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-5 sm:-mt-14 sm:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-ink-300/20 ring-1 ring-ink-100 sm:grid-cols-4 sm:gap-8 sm:p-8">
          {[
            { icon: Clock, label: 'Open 8AM – 10PM' },
            { icon: ShieldCheck, label: 'Licensed Pharmacy & Clinic' },
            { icon: Stethoscope, label: 'Walk-Ins Welcome' },
            { icon: HeartHandshake, label: 'Personal, Unhurried Care' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <s.icon className="h-6 w-6 text-brand-600" />
              <p className="mt-2 text-sm font-semibold text-ink-700">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Medicines, Counselling & Clinical Care"
            desc="Services that meet you where you are — medically and physically."
          />

          <div
            ref={servicesRef}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              const featured = i === 0;
              return (
                <Link
                  key={s.title}
                  to="/services"
                  className={`reveal ${servicesVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                    featured
                      ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-xl shadow-brand-500/25'
                      : 'border border-ink-100 bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5'
                  } ${!featured && i % 3 === 1 ? 'lg:mt-8' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                      featured
                        ? 'bg-white/15 text-white'
                        : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className={`mt-5 text-lg font-semibold ${featured ? 'text-white' : 'text-ink-900'}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${featured ? 'text-brand-100' : 'text-ink-500'}`}>
                    {s.desc}
                  </p>
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
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Healthcare That Puts You First"
            desc="Every person is unique, and our services are sensitive to individual needs."
          />

          <div ref={whyRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Registered Pharmacy Team', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
              { icon: Clock, title: 'Open Every Day', desc: `Open ${business.hours.toLowerCase()} — no need to rush before closing time.` },
              { icon: Users, title: 'Individual & Sensitive', desc: 'We understand that each person is unique, so our care is sensitive to your individual needs.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal ${whyVisible ? 'is-visible' : ''} flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg ${i === 1 ? 'lg:mt-8' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
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
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 sm:py-32">
        <div
          ref={ctaRef}
          className={`reveal ${ctaVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-5 sm:px-8`}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-accent-700 px-8 py-16 sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
            </div>
            <div className="relative text-center">
              <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step for Your Health?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
                Book an appointment today, or reach us by phone or WhatsApp —
                {' '}{business.address}.
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
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {['Walk-ins welcome', 'Open every day', 'Personal & caring service'].map((item) => (
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
