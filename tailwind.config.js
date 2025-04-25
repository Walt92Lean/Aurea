module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'the-seasons': ['The Seasons', 'sans-serif'],
        'bricolage-grotesque': ['Bricolage Grotesque', 'sans-serif'],
        'pier-sans': ['Pier Sans', 'sans-serif'],
      },
      colors: {
        'dark-black': '#1d1d1b',
        'light-beige': '#e7decd',
        'soft-gold': '#ac8e60',
      }
    },
  },
  plugins: [],
}
