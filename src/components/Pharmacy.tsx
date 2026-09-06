import { Pill, Clock, Truck, ShieldCheck, PackageCheck, CreditCard, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  {
    icon: Clock,
    title: 'Extended Hours',
    desc: 'Pharmacy open 8am – 10pm, every day of the week.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    desc: 'Same-day prescription delivery within 10 km.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Medications',
    desc: 'Fully licensed and quality-assured supplies.',
  },
  {
    icon: PackageCheck,
    title: 'Auto-Refills',
    desc: 'Never run out — we remind and refill for you.',
  },
];

export default function Pharmacy() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="pharmacy"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} relative order-2 lg:order-1`}
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-300/30 ring-1 ring-ink-100">
              <img
                src="https://images.pexels.com/photos/14797855/pexels-photo-14797855.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Pharmacist organizing medication shelves"
                className="h-[400px] w-full object-cover sm:h-[480px]"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-100 sm:left-8 sm:right-auto">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Pill className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-bold text-ink-900">
                    5,000+ medications in stock
                  </p>
                  <p className="text-sm text-ink-500">
                    Prescription & over-the-counter
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className={`reveal ${visible ? 'is-visible' : ''} order-1 lg:order-2`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Our Pharmacy
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              A Full-Service Pharmacy You Can Trust
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Our licensed pharmacists are here to answer your questions, manage
              your prescriptions, and ensure you get the right medication at the
              right time — every time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 hover:border-brand-200 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#book"
                className="group flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
              >
                Transfer Your Prescription
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <CreditCard className="h-5 w-5 text-brand-500" />
                Most insurance plans accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
