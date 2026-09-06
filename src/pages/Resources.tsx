import { Clock, ArrowRight, BookOpen, TrendingUp, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { articles } from '@/data/content';

const categories = ['All', 'Wellness', 'Pharmacy', 'Prevention', 'Nutrition', 'Mental Health', 'Fitness'];

export default function Resources() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = articles.filter((article) => {
    const matchesCategory = category === 'All' || article.category === category;
    const matchesSearch = `${article.title} ${article.excerpt}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-enter">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Health Resources"
            title="Insights for a Healthier Life"
            desc="Expert articles, practical tips, and trusted guidance from our medical team to help you stay informed and in control of your health."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    category === item
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                      : 'bg-ink-50 text-ink-600 hover:bg-brand-50 hover:text-brand-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="relative sm:w-64">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-ink-200 bg-ink-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <article
                key={a.id}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${i === 0 && category === 'All' ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === 0 && category === 'All' ? 'h-64' : 'h-52'}`}>
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
                    <Tag className="h-3 w-3" />
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-ink-400">
                    <Clock className="h-3.5 w-3.5" />
                    {a.date} · {a.readTime}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {a.excerpt}
                  </p>
                  <Link
                    to={`/resources/${a.id}`}
                    className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-ink-300" />
              <p className="mt-4 text-ink-500">No articles match your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 sm:p-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Get health tips in your inbox
                  </h3>
                  <p className="text-sm text-brand-100">
                    Monthly newsletter. No spam, just helpful advice.
                  </p>
                </div>
              </div>
              <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-0 bg-white/95 px-5 py-3 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-300 hover:bg-brand-50 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
