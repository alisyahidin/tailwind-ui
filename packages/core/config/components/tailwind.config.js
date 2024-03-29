const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      ...colors,
      ...require('../../src/colors')
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(require('../../utilities'), { variants: ['responsive'] })
    })
  ],
}