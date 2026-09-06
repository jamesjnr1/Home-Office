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
  ChevronDown,
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

const faqs = [
  { q: 'What are your opening hours?', a: `We're open ${business.hours.toLowerCase()}.` },
  { q: 'Do I need an appointment?', a: 'No — walk-ins are always welcome. Booking ahead just helps us prepare for your visit.' },
  { q: 'Do you visit homes or offices?', a: 'Yes. We provide tailored pharmaceutical and clinical services at home, at your office, or wherever is convenient — including schools, churches, and organisations.' },
  { q: 'Where are you located?', a: business.address },
  { q: 'How can I reach you?', a: `Call us on ${business.phoneDisplay}, or send a message through our Contact page.` },
];

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
  const { ref: whyRef, visible: whyVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO — simple photo with a soft gradient for legibility ===== */}
      <section id="home" className="relative w-full overflow-hidden pt-36 pb-24 sm:pt-48 sm:pb-32 lg:pb-40">
        <img
          src="/images/storefront-1.png"
          alt="Home-Office Pharmacy & Clinic storefront at Buduburam, Estate Junction"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/60 to-brand-950/30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="max-w-2xl text-balance font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Care &amp; Medicines are Channels of God&rsquo;s Healing
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {business.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/book"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50"
            >
              Book an Appointment
            </Link>
            <Link
              to="/services"
              className="text-base font-semibold text-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key facts — plain, no cards or icons */}
      <div className="border-b border-ink-100 bg-white py-6">
        <p className="mx-auto max-w-7xl px-5 text-sm font-medium text-ink-600 sm:px-8">
          Open {business.hours} <span className="mx-2 text-ink-300">·</span>
          Licensed Pharmacy &amp; Clinic <span className="mx-2 text-ink-300">·</span>
          Walk-Ins Welcome
        </p>
      </div>

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
                  className={`reveal ${servicesVisible ? 'is-visible' : ''} group rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {s.desc}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/storefront-2.png"
                alt="Home-Office Pharmacy & Clinic entrance"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Healthcare That Puts You First"
                desc="Every person is unique, and our services are sensitive to individual needs."
              />
              <div ref={whyRef} className="mt-8 space-y-5">
                {[
                  { icon: ShieldCheck, title: 'Registered Pharmacy Team', desc: 'We work with leading organisations in the medical and pharmaceutical industry to provide quality products.' },
                  { icon: Clock, title: 'Open Every Day', desc: `Open ${business.hours.toLowerCase()} — no need to rush before closing time.` },
                  { icon: Users, title: 'Individual & Sensitive', desc: 'We understand that each person is unique, so our care is sensitive to your individual needs.' },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`reveal ${whyVisible ? 'is-visible' : ''} flex gap-4`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
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

      {/* ===== FAQ ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Questions We Hear Often"
          />
          <div className="mt-10 divide-y divide-ink-200 border-t border-ink-200">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900 marker:content-none">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.a}</p>
              </details>
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-700 px-8 py-14 sm:px-16 sm:py-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl" />
            </div>
            <h2 className="relative max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Take the Next Step for Your Health?
            </h2>
            <p className="relative mt-4 max-w-xl text-lg text-brand-100">
              Book an appointment today, or call us — {business.address}.
            </p>
            <div className="relative mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/book"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50 sm:w-auto"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
