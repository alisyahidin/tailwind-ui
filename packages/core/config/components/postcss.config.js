module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./config/components/tailwind.config.js'),
    require('autoprefixer'),
    require("postcss-nested")({
      bubble: ["screen"],
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
