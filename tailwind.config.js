module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d1d1b',
        secondary: '#e7decd',
        accent: '#ac8e60',
        black: '#000000',
        white: '#ffffff',
        gray: '#808080', // Gris adicional
      },
      fontFamily: {
        'pier-sans': ['Pier Sans', 'sans-serif'],
        'bricolage-grotesque': ['Bricolage Grotesque', 'sans-serif'],
        'the-seasons': ['The Seasons', 'serif'],
      },
    },
  },
  plugins: [],
}
