import { useState } from 'react';
import { CalendarDays, User, Phone, Mail, CheckCircle2, ArrowRight, Stethoscope, ShieldCheck, Clock, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { departments, timeSlots } from '@/data/content';

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [dept, setDept] = useState(departments[0]);
  const [time, setTime] = useState(timeSlots[0]);

  return (
    <div className="page-enter">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Schedule Your Visit in Minutes"
            desc="Choose a department, pick a time that works for you, and our front desk will confirm your appointment within the hour."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
              <img
                src="https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Doctor consulting with a patient"
                className="h-72 w-full object-cover sm:h-96"
                loading="lazy"
              />
            </div>
            <div className="mt-6 space-y-3">
              {[
                { icon: CheckCircle2, text: 'Same-day appointments available' },
                { icon: ShieldCheck, text: 'Your information stays private' },
                { icon: Clock, text: 'Confirmation within one hour' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-ink-600">
                  <item.icon className="h-5 w-5 text-brand-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-lg sm:p-8">
            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50">
                  <CheckCircle2 className="h-10 w-10 text-brand-600" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">Request Received!</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                  We have received your appointment request for <strong className="text-ink-700">{dept}</strong> at <strong className="text-ink-700">{time}</strong>. Our team will call you within the hour to confirm.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-7"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">Appointment Details</h3>
                  <p className="mt-1 text-sm text-ink-500">All fields are required to request your visit.</p>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-ink-700">Select a Department</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {departments.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDept(d)}
                        className={`rounded-xl border px-3 py-3 text-left text-xs font-medium transition-all duration-200 ${dept === d ? 'border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100' : 'border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:bg-brand-50/50'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input required type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    <input required type="email" placeholder="jane@example.com" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Preferred Date</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input required type="date" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full appearance-none rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-10 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                        {timeSlots.map((slot) => <option key={slot}>{slot}</option>)}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">Anything we should know? <span className="font-normal text-ink-400">(Optional)</span></label>
                  <textarea rows={3} placeholder="Share any details that might help us prepare for your visit..." className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                </div>

                <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl">
                  Request Appointment
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="flex items-center justify-center gap-2 text-center text-xs text-ink-400">
                  <Stethoscope className="h-3.5 w-3.5" />
                  This is a request — our team will confirm availability by phone.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
