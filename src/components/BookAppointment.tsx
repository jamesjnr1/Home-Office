import { useState } from 'react';
import { Stethoscope, CalendarDays, User, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const departments = [
  'General Consultation',
  'Cardiology',
  'Pediatrics',
  'Pharmacy Consult',
  'Lab Diagnostics',
  'Vaccinations',
];

const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

export default function BookAppointment() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [dept, setDept] = useState(departments[0]);

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 py-24 sm:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''}`}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Book an Appointment
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Schedule Your Visit in Minutes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Choose a department, pick a time that works for you, and our front
              desk will confirm your appointment within the hour.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Same-day appointments available',
                'Online or in-person consultations',
                'Friendly reminders before your visit',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-200" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Prefer to call?
                </p>
                <p className="text-sm text-brand-100">+1 (555) 240-8800</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`reveal ${visible ? 'is-visible' : ''} rounded-3xl bg-white p-6 shadow-2xl sm:p-8`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <CheckCircle2 className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-900">
                  Request Received!
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  We'll call you within the hour to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border-2 border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-ink-900">
                  Appointment Details
                </h3>

                {/* Department */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-700">
                    Department
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDept(d)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                          dept === d
                            ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                            : 'bg-ink-50 text-ink-600 hover:bg-brand-50 hover:text-brand-700'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-ink-200 bg-ink-50 py-2.5 pl-10 pr-4 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 555 000 0000"
                        className="w-full rounded-xl border border-ink-200 bg-ink-50 py-2.5 pl-10 pr-4 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input
                        type="email"
                        required
                        placeholder="jane@email.com"
                        className="w-full rounded-xl border border-ink-200 bg-ink-50 py-2.5 pl-10 pr-4 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    <input
                      type="date"
                      required
                      className="w-full rounded-xl border border-ink-200 bg-ink-50 py-2.5 pl-10 pr-4 text-sm text-ink-800 transition-all duration-200 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-700">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className="rounded-xl border border-ink-200 bg-ink-50 py-2 text-xs font-medium text-ink-600 transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Confirm Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
