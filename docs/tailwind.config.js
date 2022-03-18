module.exports = {
  important: true,
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
          "primary-50": "#044B95",
          "primary-40": "#0958AA",
          primary: "#1178D4",
          "primary-20": "#368BE2",
          "primary-10": "#6CA5E0",
          "secondary-50": "#CC8000",
          "secondary-40": "#DA8D0B",
          secondary: "#F29D0D",
          "secondary-20": "#F0AF42",
          "secondary-10": "#EEC787",
          "secondary2-50": "#BB0000",
          "secondary2-40": "#DC1013",
          secondary2: "#EE2B2E",
          "secondary2-20": "#FD474A",
          "secondary2-10": "#FFEDEE",
          "neutral-70": "#151823",
          "neutral-60": "#434755",
          "neutral-50": "#70727D",
          "neutral-40": "#9C9DA6",
          "neutral-30": "#DCDEE3",
          "neutral-20": "#EFF3F6",
          "neutral-10": "#F8FBFC",
          white: "#ffffff",
          "alert-success": "#EBFFD0",
          "alert-warning": "#FFF0E6",
          "alert-error": "#FFEDEE",
          "support-success": "#8FC742",
          "support-warning": "#FF7D1D",
          "support-error": "#EE2B2E"
        }
      }
    ]
  }
}