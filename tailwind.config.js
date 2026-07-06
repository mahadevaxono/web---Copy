/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        teal: {
          DEFAULT: '#2E8BC0',
          50: '#EBF5FB',
          100: '#D5E8F5',
          200: '#AACFEB',
          300: '#7FB6E1',
          400: '#54A3D7',
          500: '#2E8BC0',
          600: '#2471A3',
          700: '#1A5276',
          800: '#154360',
          900: '#0E2D40',
        },
        brand: {
          orange: '#E87427',
          blue: '#2E8BC0',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          150: '#EFEFEF',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
      },
      borderWidth: {
        DEFAULT: '1px',
      },
    },
  },
  plugins: [],
};
