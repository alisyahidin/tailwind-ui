module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@alisyahidin/core')
  ],
  '@alisyahidin/core': {
    themes: [
      {
        newtheme: {
          primary: "#e71ceb",
          "primary-40": "#c60ec9",
          secondary: "#16cbf0",
          "secondary-40": "#0db6d9",
        }
      }
    ]
  }
}