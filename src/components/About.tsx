import { Award, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const values = [
  {
    icon: HeartHandshake,
    title: 'Compassion First',
    desc: 'Every patient is treated with empathy, dignity, and respect.',
  },
  {
    icon: Award,
    title: 'Excellence in Care',
    desc: 'We hold ourselves to the highest clinical standards.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    desc: 'Proudly serving our community for over 25 years.',
  },
];

const points = [
  'Board-certified physicians',
  'Same-day appointments',
  'Multilingual staff',
  'Affordable pricing',
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image collage */}
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} relative`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/5452247/pexels-photo-5452247.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Medical professionals team"
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Modern clinic room"
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-brand-600 px-8 py-5 text-center shadow-2xl shadow-brand-500/30">
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-sm text-brand-100">Years of Excellence</p>
            </div>
          </div>

          {/* Right: copy */}
          <div className={`reveal ${visible ? 'is-visible' : ''}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About Us
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Trusted Healthcare Since 1999
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              MediCare Pharmacy & Clinic was founded with a simple mission: to
              provide accessible, high-quality healthcare with a personal touch.
              What started as a small neighborhood clinic has grown into a
              comprehensive care center — but our commitment to each patient
              has never changed.
            </p>

            {/* Values */}
            <div className="mt-8 space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 hover:border-brand-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Points */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-ink-700">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
