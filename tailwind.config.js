/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'stem-blue': '#1FA4E8',
        'stem-light-blue': '#67C7F4',
        'stem-yellow': '#9DE2FF',
        'stem-dark': '#081521',
        'stem-gray': '#60758A',
        'stem-light-gray': '#EEF5FA',
        'stem-navy': '#0A1F36',
        'stem-teal': '#2F7BB4',
        'stem-pink': '#143E6F',
        'stem-purple': '#1D5A99',
        'stem-orange': '#4A8FC2',
        navy: {
          950: '#06131F',
          900: '#081521',
          800: '#0B1D2D',
          700: '#10273D',
        },
        electric: {
          blue: '#1FA4E8',
          cyan: '#67C7F4',
        },
        'electric-blue': '#1FA4E8',
        'electric-cyan': '#67C7F4',
        'neon-green': '#8FD3FF',
        'neon-purple': '#1D5A99',
        'neon-pink': '#143E6F',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
