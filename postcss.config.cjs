// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Usa el paquete correcto para PostCSS
    require('autoprefixer'), // Si lo tienes configurado
  ]
}
