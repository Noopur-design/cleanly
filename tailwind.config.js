/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy — footer, dark hero bands, headings
        ink: {
          DEFAULT: '#0A1F44',
          50: '#EAF0F9',
          900: '#071634',
        },
        // Primary bright blue — buttons, accents, links
        brand: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#0B2B72',
        },
        // Light blue tints — section backgrounds, chips
        sky: {
          DEFAULT: '#EAF1FB',
          soft: '#F2F7FE',
        },
        ivory: '#F7F9FC',
        slatey: '#5A6B85',
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(10, 31, 68, 0.12)',
        'card-hover': '0 24px 60px -16px rgba(10, 31, 68, 0.22)',
        soft: '0 4px 20px -8px rgba(10, 31, 68, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', lg: '2rem' },
        screens: { '2xl': '1200px' },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
