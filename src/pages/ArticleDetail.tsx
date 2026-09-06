import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { articles } from '@/data/content';

export default function ArticleDetail() {
  const { articleId } = useParams();
  const article = articles.find((item) => item.id === articleId) || articles[0];
  const related = articles.filter((item) => item.id !== article.id).slice(0, 2);

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Health Resources
          </Link>
          <div className="mt-8">
            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">{article.category}</span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl">{article.title}</h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-ink-500">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-100">
            <img src={article.img} alt={article.title} className="h-72 w-full object-cover sm:h-[460px]" />
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-xl leading-relaxed text-ink-600">{article.excerpt}</p>
            <div className="mt-8 space-y-5 text-base leading-[1.9] text-ink-600">
              <p>Your health is built through the small choices you make every day. While it is easy to feel overwhelmed by conflicting advice, the most meaningful improvements often come from simple, consistent habits.</p>
              <h2 className="pt-4 font-display text-2xl font-bold text-ink-900">Start with what feels achievable</h2>
              <p>Focus on one change at a time and give it room to become part of your routine. Getting enough rest, staying hydrated, eating a varied diet, and making time for movement are foundational steps that support your overall wellbeing.</p>
              <p>Our team is here to help you make choices that fit your life. If you have questions about medications, nutrition, or preventive care, talk with one of our clinicians or pharmacists at your next visit.</p>
              <div className="rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-5 text-brand-900"><strong>A note from our care team:</strong> Health information is educational and does not replace personalized medical advice. Speak with a qualified professional about your individual needs.</div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-ink-50 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900">Continue Reading</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.id} to={`/resources/${item.id}`} className="group overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img src={item.img} alt={item.title} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-5"><span className="text-xs font-semibold text-brand-600">{item.category}</span><h3 className="mt-2 font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">{item.title}</h3><div className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand-600">Read article <ArrowRight className="h-4 w-4" /></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
