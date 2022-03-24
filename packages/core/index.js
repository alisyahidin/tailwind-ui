const components = require('./components')
const utilities = require('./utilities')
const colors = require('./src/colors/index')
const themes = require('./src/colors/themes')
const colorNames = require('./src/colors/colorNames')
const hex2hsl = require('./src/colors/hex2hsl')

const mainFunction = ({ addComponents, addBase, addUtilities, config }) => {
  // add prefix to class names if specified
  const prefix = config("@alisyahidin/core.prefix")
  let postcssJs, postcssPrefix
  if (prefix) {
    try {
      postcssJs = require("postcss-js")
      postcssPrefix = require('./lib/postcss-prefixer')
    } catch (error) {
      console.error(`Error occurred and prevent applying the "prefix" option:`, error)
    }
  }
  const shouldApplyPrefix = Boolean(prefix && postcssPrefix && postcssJs)
  let listComponents = components
  if (shouldApplyPrefix) {
    listComponents = postcssJs.sync(postcssPrefix({
      prefix: prefix,
      ignore: []
    }))(listComponents)
  }
  addComponents(listComponents)

  let listUtilities = utilities
  if (shouldApplyPrefix) {
    listUtilities = postcssJs.sync(postcssPrefix({
      prefix: prefix,
      ignore: []
    }))(listUtilities)
  }
  addUtilities(listUtilities)

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