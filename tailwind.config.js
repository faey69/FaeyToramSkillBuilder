/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './js/**/*.js'],
  theme: {
    extend: {
      spacing: {
        '56px': '56px',
      },
    },
  },
  plugins: [],
};
