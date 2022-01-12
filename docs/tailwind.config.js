module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    require.resolve('@alisyahidin/core').replace('index.js', 'components/**/*.{js,ts,jsx,tsx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@alisyahidin/core')
  ],
}