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
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { ButtonLink, ButtonAnchor } from '@/components/Button';
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
      {/* ===== HERO — full-height photo, text pinned to the bottom ===== */}
      <section id="home" className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-20">
        <img
          src="/images/storefront-1.png"
          alt="Home-Office Pharmacy & Clinic storefront at Buduburam, Estate Junction"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/50" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Home-Office Pharmacy &amp; Clinic
            </span>
          </div>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Care &amp; Medicines are Channels of God&rsquo;s Healing
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {business.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink to="/book" variant="primary">
              Book an Appointment
            </ButtonLink>
            <ButtonLink to="/services" variant="outline">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Key facts strip */}
      <div className="border-b border-ink-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-ink-100 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            { label: 'Opening Hours', value: business.hours },
            { label: 'What We Are', value: 'Licensed Pharmacy & Clinic' },
            { label: 'Walk-Ins', value: 'Always Welcome' },
          ].map((item) => (
            <div key={item.label} className="py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                {item.label}
              </p>
              <p className="mt-1.5 text-base font-semibold text-ink-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICES PREVIEW — an editorial index, not another card grid ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="What We Offer"
                title="Medicines, Counselling & Clinical Care"
                desc="Services that meet you where you are — medically and physically."
              />
              <div className="mt-8">
                <ButtonLink to="/services" variant="primary" size="md">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div ref={servicesRef} className="border-t border-ink-100">
              {services.map((s, i) => {
                const Icon = iconMap[s.icon] || Stethoscope;
                return (
                  <Link
                    key={s.title}
                    to="/services"
                    className={`reveal ${servicesVisible ? 'is-visible' : ''} group flex items-start gap-5 border-b border-ink-100 py-6 transition-colors duration-300 hover:bg-ink-50/60 sm:-mx-4 sm:px-4`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="mt-0.5 font-display text-sm font-bold text-ink-300 transition-colors duration-300 group-hover:text-brand-500">
                      0{i + 1}
                    </span>
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      strokeWidth={1.75}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {s.desc}
                      </p>
                    </div>
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 -translate-x-1 text-ink-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-brand-600 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>
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
              <ButtonLink to="/book" variant="secondary">
                Book an Appointment
              </ButtonLink>
              <ButtonAnchor href={`tel:${business.phoneTel}`} variant="outline">
                Call {business.phoneDisplay}
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
