// The real Home-Office Pharmacy & Clinic logo, cropped from the source
// artwork with a transparent background — see public/logo-lockup.png and
// public/logo-mark.png.

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = 'h-11 w-11' }: LogoMarkProps) {
  return (
    <img
      src="/logo-mark.png"
      alt="Home-Office Pharmacy & Clinic"
      className={`${className} object-contain`}
    />
  );
}

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo-lockup.png"
      alt="Home-Office Pharmacy & Clinic"
      className={`h-10 w-auto object-contain sm:h-11 ${className}`}
    />
  );
}

interface LogoTaglineProps {
  className?: string;
}

export function LogoTagline({ className = '' }: LogoTaglineProps) {
  return (
    <p className={`font-tagline italic text-accent-600 ${className}`}>
      Our Care &amp; Medicines are Channels of God&rsquo;s Healing
    </p>
  );
}
