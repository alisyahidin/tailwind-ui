module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./src/components/tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      "preset": [
        "default",
        {
          "mergeRules": false,
          "normalizeWhitespace": false,
        }
      ]
    }),
  ]
}
