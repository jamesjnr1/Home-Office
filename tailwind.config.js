/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Poppins', 'system-ui', 'sans-serif'],
        tagline: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Primary blue — sampled directly from the stethoscope in the real
        // Home-Office logo (#198fcc sits at brand-600).
        brand: {
          50: '#ebf4f9',
          100: '#d2e8f3',
          200: '#a7d4eb',
          300: '#75bfe5',
          400: '#37a7e1',
          500: '#1f9ee0',
          600: '#198fcc',
          700: '#1576a8',
          800: '#11628c',
          900: '#0e4f71',
          950: '#09364d',
        },
        // Secondary green — sampled directly from the mortar & pestle in the
        // real Home-Office logo (#00b25e sits at accent-600).
        accent: {
          50: '#cce5d9',
          100: '#b3dfca',
          200: '#85dbb2',
          300: '#4ade98',
          400: '#0fd678',
          500: '#07c56b',
          600: '#00b25e',
          700: '#008948',
          800: '#006b38',
          900: '#004c28',
          950: '#002313',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(17,98,140,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,98,140,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
