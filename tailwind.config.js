/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        creamBg: '#f7f4ed',
        sidebarBg: '#eee9df',
        cardBg: '#ffffff',
        burgundy: {
          DEFAULT: '#9b2c2c',
          hover: '#822323',
          light: '#fcf2f2',
          border: '#e6c3c3'
        },
        warmYellow: '#fef3c7',
        warmYellowDark: '#78350f',
        textDark: '#1c1917',
        textMuted: '#686259'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
