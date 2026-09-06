import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
}: SectionHeadingProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-lg leading-relaxed text-ink-500">{desc}</p>
      )}
    </div>
  );
}
