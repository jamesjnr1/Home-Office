import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { business } from '@/data/business';

const principles = [
  {
    title: 'Our Mission',
    desc: "To provide medicines, counselling, and clinical care that serve as channels for God's healing to all who desire lasting solutions to their medical problems.",
  },
  {
    title: 'Our Vision',
    desc: 'To be the most trusted healthcare provider in our community, known for reliability, warmth, and genuine care.',
  },
  {
    title: 'Compassion First',
    desc: 'Every patient is treated with empathy, dignity, and respect — no exceptions.',
  },
  {
    title: 'Individual & Sensitive',
    desc: 'We understand that each person is unique, so our services are sensitive to individual needs.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="A Community Pharmacy & Clinic You Can Trust"
            desc={business.description}
          />
        </div>
      </section>

      {/* Our Story — reflective, text-led */}
      <section className="pb-24 sm:pb-32">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl px-5 sm:px-8`}
        >
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Our Story
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            {business.descriptionExtra}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Whether that means a quiet consultation at home, a visit to our
            counter at Buduburam, Estate Junction, or a health talk arranged
            for your school, church, or organisation — we meet you where you
            are, with the same care and attention every time.
          </p>

          <blockquote className="my-10 border-l-2 border-accent-400 pl-6">
            <p className="font-tagline text-2xl italic leading-snug text-ink-800 sm:text-3xl">
              &ldquo;{business.tagline}&rdquo;
            </p>
          </blockquote>

          <p className="text-lg leading-relaxed text-ink-600">
            We are open every day, {business.hours.toLowerCase()}, with a
            registered pharmacy team and pricing that stays affordable and
            transparent — because trust is built one visit at a time.
          </p>
        </div>
      </section>

      {/* What guides us */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Mission, Vision & Values"
          />

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-ink-200 pt-5">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Visit Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            {business.address} — open {business.hours.toLowerCase()}. Walk-ins
            are always welcome.
          </p>
          <div className="mt-8">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
