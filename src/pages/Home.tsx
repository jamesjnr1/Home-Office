import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  ShieldCheck,
  Clock,
  Home as HomeIcon,
  ArrowRight,
  Stethoscope,
  Pill,
  Syringe,
  Activity,
  Users,
  Plus,
  Truck,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { LogoTagline } from '@/components/Logo';
import { services } from '@/data/content';
import { business } from '@/data/business';

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Stethoscope,
  Pill,
  Syringe,
  Activity,
  Users,
  Plus,
  Truck,
  ShieldCheck,
};

const badges = [
  { icon: Clock, text: 'Open 7 Days a Week' },
  { icon: HomeIcon, text: 'Home & Office Delivery' },
  { icon: ShieldCheck, text: 'Licensed Pharmacy' },
];

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
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
                Open now — walk-ins welcome
              </div>

              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Your Health,
                <br />
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Our Lifelong Commitment
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500 lg:mx-0">
                From everyday prescriptions to walk-in consultations,
                Home-Office Pharmacy &amp; Clinic brings trusted pharmacy and
                clinical care together under one roof — delivered with
                compassion, right here in Buduburam.
              </p>

              <LogoTagline className="mx-auto mt-4 max-w-xl text-lg lg:mx-0" />

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
                    src="https://images.pexels.com/photos/8657287/pexels-photo-8657287.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Pharmacist organizing medicines on a shelf"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
                </div>

                <div className="absolute -left-4 top-8 animate-float rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-100 backdrop-blur sm:-left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                      <Clock className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-900">Open Daily</p>
                      <p className="text-xs text-ink-500">{business.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-8 animate-float-slow rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-100 backdrop-blur sm:-right-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
                      <Truck className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-900">Home & Office Delivery</p>
                      <p className="text-xs text-ink-500">Call ahead to arrange</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-ink-100 sm:mt-20 sm:grid-cols-4 sm:gap-8 sm:p-8">
            {[
              { icon: Clock, label: 'Open 8AM – 10PM' },
              { icon: ShieldCheck, label: 'Licensed Pharmacy' },
              { icon: Stethoscope, label: 'Walk-Ins Welcome' },
              { icon: Truck, label: 'Home & Office Delivery' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <s.icon className="h-6 w-6 text-brand-600" />
                <p className="mt-2 text-sm font-semibold text-ink-700">{s.label}</p>
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
            title="Pharmacy & Clinic Care Under One Roof"
            desc="From prescriptions to walk-in consultations, our team is here to support your everyday health needs."
          />

          <div
            ref={servicesRef}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.slice(0, 4).map((s, i) => {
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
                  alt="Clinician consulting with a patient"
                  className="h-[400px] w-full object-cover sm:h-[480px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-100 sm:left-8 sm:right-auto">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <HomeIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink-900">
                      Home-Office, by name and nature
                    </p>
                    <p className="text-sm text-ink-500">
                      Care that reaches your home or workplace
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Healthcare That Puts You First"
                desc="We combine everyday pharmacy essentials with genuine compassion, so every visit feels personal and unhurried."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, title: 'Registered Pharmacy Team', desc: 'Every prescription is handled by a qualified, professional pharmacy team.' },
                  { icon: Clock, title: 'Open Every Day', desc: `Open ${business.hours.toLowerCase()} — no need to rush before closing time.` },
                  { icon: Truck, title: 'Home & Office Delivery', desc: 'Can\'t make it in? We can bring your medicines to you — just call ahead.' },
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

      {/* ===== VISIT US ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="Visit Home-Office Pharmacy & Clinic"
            desc={`${business.address} — open ${business.hours.toLowerCase()}.`}
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${business.phoneTel}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 sm:w-auto"
            >
              Call {business.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-24 sm:pb-32">
        <div
          ref={ctaRef}
          className={`reveal ${ctaVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-5 sm:px-8`}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 px-8 py-16 sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
            </div>
            <div className="relative text-center">
              <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step for Your Health?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
                Book an appointment today and experience pharmacy and clinic
                care that truly cares about you.
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
                {['Walk-ins welcome', 'Open every day', 'Home & office delivery'].map((item) => (
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
