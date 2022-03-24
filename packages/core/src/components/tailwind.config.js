const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      ...colors,
      ...require('../colors')
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      // addBase(require('../../base'))
      addUtilities(require('../../utilities'), { variants: ['responsive'] })
      // addUtilities(require('../../utilities-unstyled'), { variants: ['responsive'] })
      // addUtilities(require('../../utilities-styled'), { variants: ['responsive'] })
    })
  ],
}