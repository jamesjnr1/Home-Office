import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  ShieldCheck,
  Clock,
  Home as HomeIcon,
  ArrowRight,
  Stethoscope,
  Pill,
  HeartHandshake,
  BookOpen,
  Microscope,
  Users,
  Phone,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/content';
import { business } from '@/data/business';

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Pill,
  HeartHandshake,
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
      {/* ===== HERO — full-bleed photo with a left-to-right gradient for legibility ===== */}
      <section id="home" className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-gradient-to-r from-ink-950 via-brand-950 to-ink-900 pb-16 pt-32 sm:pb-20">
        <img
          src="/images/hero-staff.png"
          alt="Home-Office Pharmacy & Clinic pharmacy team member in scrubs with a stethoscope"
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
          loading="eager"
        />
        <div className="absolute right-0 top-32 bottom-20 hidden lg:block">
          <img
            src="/images/hero-staff.png"
            alt="Home-Office Pharmacy & Clinic pharmacy team member in scrubs with a stethoscope"
            className="h-full w-auto"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/60 to-ink-950/10 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent lg:hidden" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <h1 className="max-w-2xl text-balance font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Care &amp; Medicines are Channels of God&rsquo;s Healing
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {business.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/book"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
            >
              Book an Appointment
            </Link>
            <Link
              to="/shop"
              className="flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              Browse Medicines
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Or call {business.phoneDisplay} to talk to a pharmacist
          </a>
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
          <div ref={servicesRef} className="mt-16 grid border-l border-t border-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <Link
                  key={s.title}
                  to="/services"
                  className={`reveal ${servicesVisible ? 'is-visible' : ''} group border-b border-r border-ink-200 bg-white p-7 transition-colors duration-300 hover:bg-brand-50/40`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <Icon className="h-6 w-6 text-brand-600" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10">
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
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Healthcare That Puts You First"
            desc="Every person is unique, and our services are sensitive to individual needs."
          />
          <div ref={whyRef} className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Registered Pharmacy Team', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
              { icon: Clock, title: 'Open Every Day', desc: `Open ${business.hours.toLowerCase()} — no need to rush before closing time.` },
              { icon: Users, title: 'Individual & Sensitive', desc: 'We understand that each person is unique, so our care is sensitive to your individual needs.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal ${whyVisible ? 'is-visible' : ''} border-t border-ink-300 pt-6`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <item.icon className="h-6 w-6 text-brand-600" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 sm:py-32">
        <div ref={ctaRef} className={`reveal ${ctaVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-5 sm:px-8`}>
          <div className="rounded-3xl bg-ink-950 px-8 py-14 sm:px-16 sm:py-16">
            <h2 className="max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Take the Next Step for Your Health?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-ink-300">
              Book an appointment today, or call us — we are here to help.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/book"
                className="group flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-400 sm:w-auto"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
