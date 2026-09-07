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
  CheckCircle2,
  Activity,
  Droplet,
  Bug,
  Baby,
  Thermometer,
  Bandage,
  Scan,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
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
  { icon: Clock, title: 'Walk In or Call', desc: 'Come by anytime we are open, or call ahead so we can prepare for your visit.' },
  { icon: Users, title: 'Talk to Our Team', desc: 'A member of our pharmacy or clinic team listens and takes your needs seriously.' },
  { icon: ShieldCheck, title: 'Get Your Care', desc: 'Consultation, treatment, and medicines — handled in one visit wherever possible.' },
];

const labTests = [
  { icon: Droplet, name: 'Haemoglobin Test' },
  { icon: Activity, name: 'Blood Glucose Test' },
  { icon: Bug, name: 'Malaria Test' },
  { icon: Baby, name: 'Pregnancy Test' },
  { icon: Thermometer, name: 'Typhoid Test' },
  { icon: Bandage, name: 'Wound Dressing' },
  { icon: Scan, name: 'Obstetric Scan' },
];

export default function Services() {
  const { ref, visible } = useReveal();
  const { ref: labRef, visible: labVisible } = useReveal();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Our Services"
        title="Medicines, Counselling & Clinical Care"
        desc={business.description}
      />

      {/* Services Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <div
                  key={s.title}
                  className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="absolute right-0 top-0 h-28 w-28 -translate-y-10 translate-x-10 rounded-full bg-brand-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Tests Grid */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Labs & Diagnostics"
            title="On-Site Testing, Same Visit"
            desc="No second trip needed — our lab tests and clinical procedures happen right here, so you get answers faster."
          />
          <div ref={labRef} className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {labTests.map((test, i) => (
              <div
                key={test.name}
                className={`reveal ${labVisible ? 'is-visible' : ''} group flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                  <test.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-ink-700">{test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Visit in Three Simple Steps"
            desc="We have designed every step to be effortless, so you can focus on what matters — your health."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute right-0 top-[3.25rem] hidden h-px w-8 translate-x-full bg-ink-200 md:block" />
                )}
                <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white shadow-lg">
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
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <CheckCircle2 className="h-4 w-4 text-brand-500" />
              Walk-ins also welcome — no appointment required
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
