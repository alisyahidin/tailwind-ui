const components = require('./dist/components')

const mainFunction = ({ addComponents, config }) => {
  addComponents(components)
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
    mainFunction
  );
} else {
  module.exports = mainFunction;
}