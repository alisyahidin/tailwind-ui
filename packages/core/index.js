const components = require('./dist/styles')
const colors = require('./dist/colors/index')
const themes = require('./dist/colors/themes')
const colorNames = require('./dist/colors/colorNames')
const hex2hsl = require('./dist/colors/hex2hsl')

const mainFunction = ({ addComponents, addBase, config }) => {
  addComponents(components)

  const registeredThemes = new Object()
  function convertThemeColorsToHsl(themeData) {
    if (typeof themeData === 'object' && themeData !== null) {
      let convertedData = {}
      Object.entries(themeData).forEach(([rule, value]) => {
        if (colorNames.hasOwnProperty(rule)) {
          convertedData[colorNames[rule]] = hex2hsl(value)
        } else {
          convertedData[rule] = value
        }
      })
      return convertedData
    }
    return themeData
  }

  // register default themes
  Object.entries(themes).forEach(([theme, _]) => {
    registeredThemes[theme] = convertThemeColorsToHsl(themes[theme])
  });

  // register custom themes
  if (Array.isArray(config('@alisyahidin/core.themes'))) {
    config('@alisyahidin/core.themes').forEach((item, index) => {
      if (typeof item === 'object' && item !== null) {
        Object.entries(item).forEach(([customThemeName, customthemeData]) => {
          registeredThemes[customThemeName] = convertThemeColorsToHsl(customthemeData)
        })
      }
    })
  }

  // register all themes
  Object.entries(registeredThemes).forEach(([theme, value]) => {
    if (theme === 'default') {
      addBase({ ':root': registeredThemes['default'] })
    } else {
      addBase({ [`[data-theme=${theme}]`]: registeredThemes[theme] })
    }
  })
}

let isTailwindInstalled = false;
try {
  require.resolve('tailwindcss/plugin')
  isTailwindInstalled = true
} catch (er) {
  isTailwindInstalled = false
}
if (isTailwindInstalled !== false) {
  module.exports = require("tailwindcss/plugin")(
    mainFunction, { theme: { extend: { colors } } }
  );
} else {
  module.exports = mainFunction;
}