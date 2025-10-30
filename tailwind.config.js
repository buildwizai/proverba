/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#f97316',
        'accent-light': 'rgba(249, 115, 22, 0.15)',
        text: {
          base: '#e2e8f0',
          muted: '#cbd5f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
