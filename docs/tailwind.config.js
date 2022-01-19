module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
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
          "primary": "#9834eb",
          "secondary": "#34aeeb",
          "neutral": "#f759e0",
          "info": "#e5f759",
          "success": "#59f773",
          "warning": "#ff9d3b",
          "error": "#ff3b3b",
        }
      }
    ]
  }
}