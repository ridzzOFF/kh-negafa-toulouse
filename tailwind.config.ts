import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        'cream-dark': '#F5EFE7',
        gold: '#D4AF37',
        'gold-light': '#E8D5A3',
        'gold-dark': '#B8961E',
        dark: '#1A1A1A',
        'dark-medium': '#3D3D3D',
        'dark-light': '#6B6B6B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.9s ease-out both',
        'slide-in': 'slideIn 0.3s ease-out',
        'ken-burns': 'kenBurns 22s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1)    translateX(0%)    translateY(0%)' },
          '100%': { transform: 'scale(1.08) translateX(-1.5%) translateY(-0.8%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
