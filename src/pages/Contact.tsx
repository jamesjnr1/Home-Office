import { useState } from 'react';
import { Phone, CheckCircle2, Send, Navigation, MessageCircle, AlertCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import { business, buildMapEmbedUrl, buildMapLinkUrl, buildWhatsAppUrl, submitToFormspree } from '@/data/business';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fallbackWhatsAppUrl, setFallbackWhatsAppUrl] = useState('');
  const { ref, visible } = useReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '');
    const phone = String(form.get('phone') || '');
    const reason = String(form.get('reason') || '');
    const message = String(form.get('message') || '');
    const smsConsent = form.get('smsConsent') === 'on';

    const ok = await submitToFormspree({
      _subject: 'New contact message — Home-Office Pharmacy & Clinic',
      name,
      phone,
      reason,
      message,
    });

    setSubmitting(false);
    if (ok) {
      setSubmitted(true);
      if (smsConsent) {
        // Best-effort — the contact submission above already succeeded,
        // so we don't want an SMS-list failure to affect the visitor's
        // experience.
        fetch('/api/contact-consent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone }),
        }).catch(() => {});
      }
    } else {
      setFallbackWhatsAppUrl(
        buildWhatsAppUrl(
          `Hi, my name is ${name} (${phone}). ${reason ? `Reason: ${reason}. ` : ''}${message}`
        )
      );
      setFailed(true);
    }
  };

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Get In Touch"
        title="We're Here to Help"
        desc="Have a question, need directions, or want to learn more? Call us or send a message below."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={ref} className="grid gap-8 lg:grid-cols-2">
            <div className={`reveal ${visible ? 'is-visible' : ''}`}>
              <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
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
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </div>

            <div className={`reveal ${visible ? 'is-visible' : ''} rounded-3xl border border-ink-100 bg-white p-6 shadow-lg sm:p-8`}>
              {submitted ? (
                <div className="flex min-h-[420px] flex-col justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                    <CheckCircle2 className="h-8 w-8 text-brand-600" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Message Sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 self-start rounded-full border-2 border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : failed ? (
                <div className="flex min-h-[420px] flex-col justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                    <AlertCircle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Couldn&rsquo;t Send That</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                    Something went wrong on our end. Please message us on WhatsApp or call us directly instead.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={fallbackWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Message on WhatsApp
                    </a>
                    <a
                      href={`tel:${business.phoneTel}`}
                      className="flex items-center justify-center gap-2 rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      <Phone className="h-4 w-4" />
                      Call {business.phoneDisplay}
                    </a>
                  </div>
                  <button
                    onClick={() => setFailed(false)}
                    className="mt-4 self-start text-sm font-semibold text-ink-500 hover:text-brand-700"
                  >
                    Try the form again
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900">Send a Message</h3>
                    <p className="mt-1 text-sm text-ink-500">
                      Fill out the form and we will get back to you.
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
                  <label className="flex items-start gap-2 text-xs text-ink-500">
                    <input type="checkbox" name="smsConsent" className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-400" />
                    I agree to receive occasional SMS updates from Home-Office Pharmacy & Clinic.
                  </label>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                    {!submitting && <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                  </button>
                  <a
                    href={buildWhatsAppUrl("Hi, I'd like to ask about Home-Office Pharmacy & Clinic.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Or message us on WhatsApp
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Need immediate assistance?
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              For urgent needs, call us directly. For a medical emergency, please go to your nearest hospital.
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
