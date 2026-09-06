import { Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const articles = [
  {
    category: 'Wellness',
    title: '10 Daily Habits for a Stronger Immune System',
    excerpt:
      'Simple, evidence-based changes you can make today to keep your immune system resilient year-round.',
    img: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
  },
  {
    category: 'Nutrition',
    title: 'Understanding Your Prescription Labels',
    excerpt:
      'A pharmacist breaks down what every line on your medication label means — and why it matters.',
    img: 'https://images.pexels.com/photos/5622195/pexels-photo-5622195.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min read',
  },
  {
    category: 'Prevention',
    title: 'Flu Season 2026: What You Need to Know',
    excerpt:
      'Stay ahead of cold and flu season with our updated vaccination guide and prevention tips.',
    img: 'https://images.pexels.com/photos/6670739/pexels-photo-6670739.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
  },
];

export default function Resources() {
  const { ref, visible } = useReveal();

  return (
    <section id="resources" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Health Resources
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Insights for a Healthier Life
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Expert articles and tips from our medical team to help you stay
              informed and in control of your health.
            </p>
          </div>
          <a
            href="#"
            className="group flex shrink-0 items-center gap-2 rounded-full border-2 border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`reveal ${visible ? 'is-visible' : ''} group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
                  {a.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-ink-400">
                  <Clock className="h-3.5 w-3.5" />
                  {a.readTime}
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {a.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 sm:p-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Get health tips in your inbox
                </h3>
                <p className="text-sm text-brand-100">
                  Monthly newsletter. No spam, just helpful advice.
                </p>
              </div>
            </div>
            <form
              className="flex w-full max-w-md gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-0 bg-white/95 px-5 py-3 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-300 hover:bg-brand-50 hover:shadow-lg"
              >
                <BookOpen className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
