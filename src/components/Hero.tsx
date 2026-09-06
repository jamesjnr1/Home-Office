import { ShieldCheck, Clock, Star, ArrowRight, Stethoscope, Pill } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of Care' },
  { value: '40k+', label: 'Patients Served' },
  { value: '12', label: 'Expert Doctors' },
  { value: '4.9', label: 'Patient Rating' },
];

const badges = [
  { icon: ShieldCheck, text: 'Certified & Accredited' },
  { icon: Clock, text: 'Open 7 Days a Week' },
  { icon: Star, text: 'Top-Rated Clinic' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Now accepting new patients
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Your Health,
              <br />
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Our Lifelong Commitment
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500 lg:mx-0">
              From everyday prescriptions to specialist consultations, MediCare
              brings trusted pharmacy and clinical care together under one roof —
              delivered with compassion.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#book"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/30 transition-all duration-300 hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-0.5 sm:w-auto"
              >
                <Stethoscope className="h-5 w-5" />
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700 sm:w-auto"
              >
                Explore Services
              </a>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {badges.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2 text-sm font-medium text-ink-500"
                >
                  <b.icon className="h-4 w-4 text-brand-500" />
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image card */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-300/30 ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/8657287/pexels-photo-8657287.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Pharmacists organizing medicines in a pharmacy"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating card: rating */}
              <div className="absolute -left-4 top-8 animate-float rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-100 backdrop-blur sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-ink-900">4.9 / 5.0</p>
                    <p className="text-xs text-ink-500">2,400+ reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating card: pharmacy */}
              <div className="absolute -right-4 bottom-8 animate-float [animation-delay:2s] rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-100 backdrop-blur sm:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Pill className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">Pharmacy Open</p>
                    <p className="text-xs text-ink-500">8am – 10pm daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-ink-100 sm:mt-20 sm:grid-cols-4 sm:gap-8 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-brand-600 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
