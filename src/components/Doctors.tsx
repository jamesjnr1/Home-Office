import { Linkedin, Calendar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    specialty: 'Family Medicine',
    img: 'https://images.pexels.com/photos/33067699/pexels-photo-33067699.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. James Okonkwo',
    role: 'Cardiologist',
    specialty: 'Heart & Vascular',
    img: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Pediatrician',
    specialty: 'Child Health',
    img: 'https://images.pexels.com/photos/5234519/pexels-photo-5234519.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. Anita Patel',
    role: 'Pharmacist-in-Chief',
    specialty: 'Clinical Pharmacy',
    img: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Doctors() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-ink-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Meet Our Team
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Experienced Doctors Who Care
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Our board-certified physicians and pharmacists bring decades of
            combined experience and a shared dedication to your wellbeing.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                {/* Social */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a
                    href="#book"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-600 backdrop-blur transition-colors hover:bg-brand-600 hover:text-white"
                    aria-label="Book with doctor"
                  >
                    <Calendar className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-600 backdrop-blur transition-colors hover:bg-ink-700 hover:text-white"
                    aria-label="Doctor LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink-900">{doc.name}</h3>
                <p className="text-sm font-medium text-brand-600">{doc.role}</p>
                <div className="mt-3 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {doc.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
