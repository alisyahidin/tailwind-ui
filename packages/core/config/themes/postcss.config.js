module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./config/themes/tailwind.config.js'),
    require('postcss-nested')({
      "bubble": [
        "screen"
      ]
    }),
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
