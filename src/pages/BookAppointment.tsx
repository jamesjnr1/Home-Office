import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { departments, timeSlots } from '@/data/content';
import { business, submitToFormspree } from '@/data/business';

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dept, setDept] = useState(departments[0]);
  const [time, setTime] = useState(timeSlots[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);

    await submitToFormspree({
      _subject: 'New appointment request — Home-Office Pharmacy & Clinic',
      name: form.get('name'),
      phone: form.get('phone'),
      reason: dept,
      preferredDate: form.get('date'),
      preferredTime: time,
      notes: form.get('notes'),
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Schedule Your Visit in Minutes"
            desc="Choose a reason for your visit, pick a time that works, and we'll confirm with you by phone."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col gap-3 border-b border-ink-100 pb-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Walk-ins are always welcome too. Open {business.hours.toLowerCase()}.</p>
            <a href={`tel:${business.phoneTel}`} className="font-semibold text-brand-600 hover:text-brand-700">
              Prefer to call? {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-600" />
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">Request Received</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                  Your request for <strong className="text-ink-700">{dept}</strong> at <strong className="text-ink-700">{time}</strong> has been sent. We'll confirm your appointment by phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
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
                    <input required name="name" type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Phone Number</label>
                    <input required name="phone" type="tel" placeholder="055 000 0000" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Preferred Date</label>
                    <input required name="date" type="date" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Preferred Time</label>
                    <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                      {timeSlots.map((slot) => <option key={slot}>{slot}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">Anything we should know? <span className="font-normal text-ink-400">(Optional)</span></label>
                  <textarea name="notes" rows={3} placeholder="Share any details that might help us prepare for your visit..." className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-700 disabled:opacity-70"
                >
                  {submitting ? 'Sending…' : 'Request Appointment'}
                </button>
                <p className="text-center text-xs text-ink-400">
                  This is a request — we'll confirm availability by phone.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
