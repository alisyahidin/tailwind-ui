const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      ...colors,
      ...require('../colors')
    },
    fontSize: {
      '10': '0.625rem',
      '12': '0.75rem',
      '14': '0.875rem',
      '16': '1rem',
      '24': '1.5',
      '28': '1.75rem'
    },
    extend: {
      lineHeight: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '21': '1.313rem',
        '26': '1.625rem',
        '30': '1.875rem',
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      // addBase(require('../../dist/base'))
      addUtilities(require('../../dist/utilities'), { variants: ['responsive'] })
      // addUtilities(require('../../dist/utilities-unstyled'), { variants: ['responsive'] })
      // addUtilities(require('../../dist/utilities-styled'), { variants: ['responsive'] })
    })
  ],
}