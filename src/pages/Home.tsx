import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  ShieldCheck,
  Clock,
  Home as HomeIcon,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Stethoscope,
  Pill,
  MessageCircle,
  BookOpen,
  Microscope,
  Users,
  Truck,
  CheckCircle2,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { LogoTagline } from '@/components/Logo';
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

const audienceIconMap: Record<string, ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Briefcase,
  GraduationCap,
  Users,
};

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
  const { ref: audienceRef, visible: audienceVisible } = useReveal();
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
                {business.description}
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
            </div>

            {/* Real storefront photos */}
            <div className="relative animate-fade-in [animation-delay:200ms]">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-3 overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-300/30 ring-1 ring-ink-100">
                    <img
                      src="/images/storefront-1.jpg"
                      alt="Home-Office Pharmacy & Clinic storefront at Buduburam, Estate Junction"
                      className="h-[380px] w-full object-cover sm:h-[480px]"
                      loading="eager"
                    />
                  </div>
                  <div className="col-span-2 mt-10 overflow-hidden rounded-[2rem] shadow-xl shadow-ink-300/20 ring-1 ring-ink-100">
                    <img
                      src="/images/storefront-2.jpg"
                      alt="Home-Office Pharmacy & Clinic entrance"
                      className="h-[340px] w-full object-cover sm:h-[440px]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-ink-100 sm:mt-20 sm:grid-cols-4 sm:gap-8 sm:p-8">
            {[
              { icon: Clock, label: 'Open 8AM – 10PM' },
              { icon: ShieldCheck, label: 'Licensed Pharmacy & Clinic' },
              { icon: Stethoscope, label: 'Walk-Ins Welcome' },
              { icon: Truck, label: 'Service at Home & Office' },
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
            title="Medicines, Counselling & Clinical Care"
            desc="Services that meet you where you are — medically and physically."
          />

          <div
            ref={servicesRef}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => {
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

      {/* ===== WHEREVER YOU NEED US ===== */}
      <section className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Wherever You Need Us"
            title="Tailored Care at Home, Office, or On-Site"
            desc={business.descriptionExtra}
          />

          <div
            ref={audienceRef}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {business.audiences.map((a, i) => {
              const Icon = audienceIconMap[a.icon] || HomeIcon;
              return (
                <div
                  key={a.label}
                  className={`reveal ${audienceVisible ? 'is-visible' : ''} flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="text-sm font-semibold text-ink-900">{a.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Healthcare That Puts You First"
                desc="Every person is unique, and our services are sensitive to individual needs."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, title: 'Registered Pharmacy Team', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
                  { icon: Clock, title: 'Open Every Day', desc: `Open ${business.hours.toLowerCase()} — no need to rush before closing time.` },
                  { icon: HomeIcon, title: 'Home-Office, by Name and Nature', desc: 'Care that reaches your home, office, school, church, or organisation — wherever is convenient.' },
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

            <div className="relative order-first lg:order-last">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink-100">
                <img
                  src="/images/storefront-1.jpg"
                  alt="Home-Office Pharmacy & Clinic building"
                  className="h-[400px] w-full object-cover sm:h-[480px]"
                  loading="lazy"
                />
              </div>
            </div>
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
                {['Walk-ins welcome', 'Open every day', 'Home & office service'].map((item) => (
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
