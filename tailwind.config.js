/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#5F9AD1',
          'blue-dark': '#3D8CD5',
          lime: '#EBFA73',
          navy: '#1E3A5F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(12px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-out 0.2s both',
        blurIn: 'blurIn 0.9s ease-out 0.3s both',
        slideDown: 'slideDown 0.7s ease-out 0.1s both',
        slideUp: 'slideUp 0.9s ease-out 0.8s both',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
