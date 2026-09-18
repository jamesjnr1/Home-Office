import { useReveal } from '@/hooks/useReveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  desc?: string;
}

export default function PageHero({ eyebrow, title, desc }: PageHeroProps) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-7xl px-5 sm:px-8`}
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
