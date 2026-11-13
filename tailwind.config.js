export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}', './constants.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e3ebe5',
          200: '#c5d9c9',
          300: '#9dbfba',
          400: '#84a98c',
          500: '#52796f',
          600: '#354f52',
          700: '#2f3e46',
          800: '#283136',
          900: '#22272a',
        },
        slate: {
          50: '#FDFBF7',
          100: '#F2F0E9',
          200: '#E6E4DD',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
    },
  },
  plugins: [],
};
