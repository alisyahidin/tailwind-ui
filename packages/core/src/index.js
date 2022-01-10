const mainFunction = ({ addComponents }) => {
  addComponents({
    '.card': {
      display: 'flex',
      alignItems: 'center'
    },
    '.btn': {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: 8,
    },
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
    mainFunction
  );
} else {
  module.exports = mainFunction;
}