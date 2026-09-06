import { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { business, buildMapEmbedUrl, buildMapLinkUrl, submitToFormspree } from '@/data/business';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: business.address },
  { icon: Phone, label: 'Call Us', value: business.phoneDisplay },
  { icon: Clock, label: 'Opening Hours', value: business.hours },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { ref, visible } = useReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);

    await submitToFormspree({
      _subject: 'New contact message — Home-Office Pharmacy & Clinic',
      name: form.get('name'),
      phone: form.get('phone'),
      reason: form.get('reason'),
      message: form.get('message'),
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We're Here to Help"
            desc="Have a question, need directions, or want to learn more? Call us or send a message below."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid gap-8 lg:grid-cols-2">
            <div className={`reveal ${visible ? 'is-visible' : ''}`}>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <c.icon className="h-5 w-5 shrink-0 text-brand-600" />
                    <div>
                      <span className="text-sm font-semibold text-ink-900">{c.label}: </span>
                      <span className="text-sm text-ink-600">{c.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100">
                <iframe
                  title="Home-Office Pharmacy & Clinic location"
                  src={buildMapEmbedUrl()}
                  className="h-80 w-full border-0"
                  loading="lazy"
                />
              </div>
              <a
                href={buildMapLinkUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                Get directions
              </a>
            </div>

            <div className={`reveal ${visible ? 'is-visible' : ''} rounded-2xl border border-ink-100 bg-white p-6 sm:p-8`}>
              {submitted ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-10 w-10 text-brand-600" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Message Sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900">Send a Message</h3>
                    <p className="mt-1 text-sm text-ink-500">
                      Fill out the form and we'll get back to you.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">Full Name</label>
                      <input required name="name" type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">Phone</label>
                      <input required name="phone" type="tel" placeholder="055 000 0000" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">How can we help?</label>
                    <select name="reason" className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                      <option>General question</option>
                      <option>Book an appointment</option>
                      <option>Prescription refill</option>
                      <option>Counselling</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">Message</label>
                    <textarea required name="message" rows={5} placeholder="Tell us how we can help..." className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-700 disabled:opacity-70"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">Need immediate assistance?</h2>
          <p className="mt-4 text-lg text-ink-500">For urgent needs, call us directly. For a medical emergency, please go to your nearest hospital.</p>
          <a href={`tel:${business.phoneTel}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-700">
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
