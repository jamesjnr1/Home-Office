import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import { services } from '@/data/content';
import { business } from '@/data/business';

const processSteps = [
  { title: 'Walk In or Call', desc: 'Come by anytime we are open, or call ahead so we can prepare for your visit.' },
  { title: 'Talk to Our Team', desc: 'A member of our pharmacy or clinic team listens and takes your needs seriously.' },
  { title: 'Get Your Care', desc: 'Consultation, treatment, and medicines — handled in one visit wherever possible.' },
];

const labTests = [
  'Haemoglobin Test',
  'Blood Glucose Test',
  'Malaria Test',
  'Pregnancy Test',
  'Typhoid Test',
  'Wound Dressing',
  'Obstetric Scan',
];

export default function Services() {
  const { ref, visible } = useReveal();
  const { ref: labRef } = useReveal();

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
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal ${visible ? 'is-visible' : ''} border border-ink-100 bg-white p-7 transition-colors duration-300 hover:border-brand-200`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <h3 className="font-display text-lg font-bold text-ink-900">
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
            ))}
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
          <p ref={labRef} className="mt-10 text-lg leading-relaxed text-ink-700">
            {labTests.map((test, i) => (
              <span key={test}>
                {test}
                {i < labTests.length - 1 && (
                  <span className="mx-3 text-ink-300">·</span>
                )}
              </span>
            ))}
          </p>
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
                  <div className="absolute left-full top-[3.75rem] hidden w-8 border-t-2 border-dashed border-brand-200 md:block" />
                )}
                <div className="relative overflow-hidden border border-ink-100 bg-white p-8">
                  <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-bold text-ink-50">
                    0{i + 1}
                  </span>
                  <h3 className="relative font-display text-xl font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4">
            <Link
              to="/book"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5" />
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
