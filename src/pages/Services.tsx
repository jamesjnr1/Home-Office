import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  Stethoscope,
  Pill,
  Syringe,
  Activity,
  Users,
  Plus,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/content';

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

const processSteps = [
  { icon: Clock, title: 'Walk In or Call', desc: 'Come by anytime we\'re open, or call ahead so we can prepare for your visit.' },
  { icon: MessageCircle, title: 'Talk to Our Team', desc: 'A member of our pharmacy or clinic team listens and takes your needs seriously.' },
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
            title="Pharmacy & Clinic Care Under One Roof"
            desc="From prescriptions to walk-in consultations, our team supports the everyday health needs of our community."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <div
                  key={s.title}
                  className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-brand-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-8 w-8" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {s.desc}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-ink-600"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
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
              <div
                key={step.title}
                className="relative rounded-3xl border border-ink-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.desc}
                </p>
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
