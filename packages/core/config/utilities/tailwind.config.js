const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      ...colors,
      ...require('../../src/colors')
    },
  },
  plugins: [],
}