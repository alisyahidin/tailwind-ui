const themes = require('./themes').default

const colorNames = Object.keys(themes).reduce((prev, current) => {
  if (!prev[current]) {
    prev[current] = `--tui-${current}`
  }
  return prev
}, {})

module.exports = colorNames