/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F0F4FF',
          100: '#E0E7FF',
          500: '#5D5CDE',
          600: '#4C46C7',
          700: '#3B35B0',
          900: '#1E1B4B'
        },
        secondary: {
          400: '#818CF8',
          500: '#6366F1',
        },
        accent: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        dark: {
          50: '#F8FAFC',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.5s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(93, 92, 222, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(93, 92, 222, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#5D5CDE' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}