// Shared button styling so every primary/secondary/outline/ghost CTA across
// the site shares the same padding scale, hover behaviour, and keyboard
// focus ring instead of one-off classes drifting per page.

import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-70';

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const variants: Record<ButtonVariant, string> = {
  // Solid brand blue — the site's default call to action.
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5',
  // Solid white — the primary action when it sits on a photo or brand-colored panel.
  secondary: 'bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5',
  // Translucent/glass — a secondary action over a photo hero or dark panel.
  outline:
    'border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  // Bordered, on light backgrounds — a quiet secondary action.
  ghost:
    'border-2 border-ink-200 text-ink-700 hover:border-brand-300 hover:text-brand-700',
};

function buttonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return [base, sizes[size], variants[variant], className].filter(Boolean).join(' ');
}

interface VariantProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}: LinkProps & VariantProps) {
  return <Link {...props} className={buttonClasses(variant, size, className)} />;
}

export function ButtonAnchor({
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps) {
  return <a {...props} className={buttonClasses(variant, size, className)} />;
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps) {
  return <button {...props} className={buttonClasses(variant, size, className)} />;
}
