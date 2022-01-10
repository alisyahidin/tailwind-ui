module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    require.resolve('@master-ui/core').replace('src/index.js', '**/*.{js,ts,jsx,tsx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@master-ui/core')
  ],
}