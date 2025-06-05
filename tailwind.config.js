/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        teal: {
          50: '#edf7f6',
          100: '#d1e9e7',
          200: '#a3d3d0',
          300: '#75bdb8',
          400: '#47a7a0',
          500: '#3a8680',
          600: '#2f6b67',
          700: '#27504d',
          800: '#1e3533',
          900: '#151a1a',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};