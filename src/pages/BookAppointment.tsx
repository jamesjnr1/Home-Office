import { useState } from 'react';
import { CalendarDays, User, Phone, CheckCircle2, ArrowRight, Stethoscope, ShieldCheck, Clock, ChevronDown, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { departments, timeSlots } from '@/data/content';
import { business, buildWhatsAppLink, submitToFormspree } from '@/data/business';

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dept, setDept] = useState(departments[0]);
  const [time, setTime] = useState(timeSlots[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const phone = form.get('phone');
    const date = form.get('date');
    const notes = form.get('notes');

    await submitToFormspree({
      _subject: 'New appointment request — Home-Office Pharmacy & Clinic',
      name,
      phone,
      reason: dept,
      preferredDate: date,
      preferredTime: time,
      notes,
    });

    const text = [
      `Hello Home-Office Pharmacy & Clinic, I'd like to book an appointment.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Reason: ${dept}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      notes ? `Notes: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(buildWhatsAppLink(text), '_blank');
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Schedule Your Visit in Minutes"
            desc="Choose a reason for your visit, pick a time that works, and we'll confirm with you over WhatsApp or by phone."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { icon: CheckCircle2, text: 'Walk-ins are always welcome too' },
                { icon: ShieldCheck, text: 'Your information stays private' },
                { icon: Clock, text: `Open ${business.hours}` },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-ink-600">
                  <item.icon className="h-5 w-5 shrink-0 text-brand-500" />
                  {item.text}
                </div>
              ))}
            </div>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-900">Prefer to call?</p>
                <p className="text-sm text-ink-500">{business.phoneDisplay}</p>
              </div>
            </a>
          </div>

          <div className="mt-8 rounded-3xl border border-ink-100 bg-white p-6 shadow-lg sm:p-8">
            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50">
                  <MessageCircle className="h-10 w-10 text-brand-600" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">Almost done!</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                  Your request for <strong className="text-ink-700">{dept}</strong> at <strong className="text-ink-700">{time}</strong> has been sent, and we opened WhatsApp with it pre-filled — just tap send there and we'll confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">Appointment Details</h3>
                  <p className="mt-1 text-sm text-ink-500">All fields are required to request your visit.</p>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-ink-700">Reason for Visit</label>
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
                      <input required name="name" type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input required name="phone" type="tel" placeholder="055 000 0000" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Preferred Date</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input required name="date" type="date" className="w-full rounded-xl border border-ink-200 bg-ink-50 py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
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
                  <textarea name="notes" rows={3} placeholder="Share any details that might help us prepare for your visit..." className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  <MessageCircle className="h-5 w-5" />
                  {submitting ? 'Sending…' : 'Request Appointment'}
                  {!submitting && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
                </button>
                <p className="flex items-center justify-center gap-2 text-center text-xs text-ink-400">
                  <Stethoscope className="h-3.5 w-3.5" />
                  This is a request — we'll confirm availability by WhatsApp or phone.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
