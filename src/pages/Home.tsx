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
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';
import SectionHeading from '@/components/SectionHeading';
import { services, stats, faqs } from '@/data/content';
import { business } from '@/data/business';

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Pill,
  HeartHandshake,
  Stethoscope,
  BookOpen,
  Microscope,
  Home: HomeIcon,
};

const audienceIcons: Record<string, ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Briefcase,
  GraduationCap,
  Users,
};

function StatCard({ stat, visible }: { stat: { value: string; suffix: string; label: string }; visible: boolean }) {
  const num = parseInt(stat.value, 10) || 0;
  const count = useCountUp(num, 1400, visible);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-brand-600 sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-sm text-ink-500">{stat.label}</p>
    </div>
  );
}

export default function Home() {
  const { ref: servicesRef, visible: servicesVisible } = useReveal();
  const { ref: whyRef, visible: whyVisible } = useReveal();
  const { ref: statsRef, visible: statsVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section id="home" className="relative w-full overflow-hidden pt-36 pb-24 sm:pt-48 sm:pb-32 lg:pb-40">
        <img
          src="/images/storefront-1.png"
          alt="Home-Office Pharmacy & Clinic storefront at Buduburam, Estate Junction"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/60 to-brand-950/30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Open now — walk-ins welcome
            </div>
            <h1 className="mt-6 max-w-2xl text-balance font-display text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Care &amp; Medicines are Channels of God&rsquo;s Healing
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              {business.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                to="/book"
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-xl transition-all duration-300 hover:bg-brand-50 hover:-translate-y-0.5"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group flex items-center gap-1.5 text-base font-semibold text-white transition-colors hover:text-brand-200"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Bar ===== */}
      <div ref={statsRef} className="border-b border-ink-100 bg-white py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4 sm:px-8">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} visible={statsVisible} />
          ))}
        </div>
      </div>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Medicines, Counselling & Clinical Care"
            desc="Services that meet you where you are — medically and physically."
          />
          <div ref={servicesRef} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <Link
                  key={s.title}
                  to="/services"
                  className={`reveal ${servicesVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
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
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink-100">
                <img
                  src="/images/storefront-2.png"
                  alt="Home-Office Pharmacy & Clinic entrance"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-100 sm:left-8 sm:right-auto">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink-900">Open Every Day</p>
                    <p className="text-sm text-ink-500">8:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
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
                    className={`reveal ${whyVisible ? 'is-visible' : ''} flex gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 hover:border-brand-200 hover:shadow-md`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Where We Serve"
            title="Care That Comes to You"
            desc="True to our name, we bring pharmaceutical and clinical services to wherever is most convenient for you."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {business.audiences.map((a, i) => {
              const Icon = audienceIcons[a.icon] || Users;
              return (
                <div
                  key={a.label}
                  className={`reveal ${servicesVisible ? 'is-visible' : ''} group rounded-2xl border border-ink-100 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{a.label}</h3>
                </div>
              );
            })}
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
          <div className="mt-10 divide-y divide-ink-200 border-t border-b border-ink-200">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink-900">
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
        <div ref={ctaRef} className={`reveal ${ctaVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-5 sm:px-8`}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-700 px-8 py-14 sm:px-16 sm:py-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to Take the Next Step for Your Health?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-brand-100">
                Book an appointment today, or call us — we are here to help.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/book"
                  className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
                >
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  Call {business.phoneDisplay}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                {['No referral needed', 'Walk-ins welcome', 'Open 7 days a week'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-brand-100">
                    <CheckCircle2 className="h-4 w-4 text-accent-300" />
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
