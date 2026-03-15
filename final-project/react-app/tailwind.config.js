/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#E8F0EC',  /* very light – selected states */
          400: '#B3CDBA',  /* light mint – active nav, secondary buttons */
          500: '#8fa99e',
          600: '#7A9E8F',  /* brand green – logo, CTAs */
          700: '#6b8a7a', /* hover */
        },
        surface: '#F8F7F4',  /* page background */
        card: '#EFF2EC',     /* cards, form areas */
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
