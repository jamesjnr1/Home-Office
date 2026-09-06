import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  Stethoscope,
  Pill,
  HeartHandshake,
  BookOpen,
  Microscope,
  Home as HomeIcon,
  ArrowRight,
  Clock,
  Users,
  ShieldCheck,
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

const processSteps = [
  { icon: Clock, title: 'Walk In or Call', desc: 'Come by anytime we\'re open, or call ahead so we can prepare for your visit.' },
  { icon: Users, title: 'Talk to Our Team', desc: 'A member of our pharmacy or clinic team listens and takes your needs seriously.' },
  { icon: ShieldCheck, title: 'Get Your Care', desc: 'Consultation, treatment, and medicines — handled in one visit wherever possible.' },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Medicines, Counselling & Clinical Care"
            desc={business.description}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <div
                  key={s.title}
                  className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Visit in Three Simple Steps"
            desc="We've designed every step to be effortless, so you can focus on what matters — your health."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute right-0 top-[3.25rem] hidden h-px w-8 translate-x-full bg-ink-200 md:block" />
                )}
                <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
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
