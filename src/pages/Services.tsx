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
          <div ref={ref} className="grid border-l border-t border-ink-200 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <div
                  key={s.title}
                  className={`reveal ${visible ? 'is-visible' : ''} border-b border-r border-ink-200 bg-white p-7`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <Icon className="h-6 w-6 text-brand-600" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {s.desc}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-ink-500">
                    {s.features.map((f, i) => (
                      <span key={f}>
                        {f}
                        {i < s.features.length - 1 && (
                          <span className="mx-2 text-ink-300">·</span>
                        )}
                      </span>
                    ))}
                  </p>
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
          <div ref={labRef} className="mt-14 grid grid-cols-2 border-l border-t border-ink-200 sm:grid-cols-3 lg:grid-cols-4">
            {labTests.map((test, i) => (
              <div
                key={test.name}
                className={`reveal ${labVisible ? 'is-visible' : ''} flex flex-col items-center gap-3 border-b border-r border-ink-200 bg-white p-5 text-center`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <test.icon className="h-6 w-6 text-brand-600" strokeWidth={1.5} />
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
          <div className="mt-16 grid border-l border-t border-ink-200 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative overflow-hidden border-b border-r border-ink-200 bg-white p-8">
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-bold text-ink-50">
                  0{i + 1}
                </span>
                <step.icon className="relative h-6 w-6 text-brand-600" strokeWidth={1.5} />
                <h3 className="relative mt-6 font-display text-xl font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500">
                  {step.desc}
                </p>
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
