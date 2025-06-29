import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1959AC',
          dark: '#0546D2',
        },
        secondary: {
          DEFAULT: '#0546D2',
        }
      },
      fontFamily: {
        'heading': ['Roboto Condensed', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading': ['42px', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        'subheading': ['24px', {
          lineHeight: '1.3',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
        'subheading-sm': ['20px', {
          lineHeight: '1.4',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 