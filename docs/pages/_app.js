import '../styles/globals.css'
// import '@alisyahidin/react/themes.css'

// for realtime development
import '@alisyahidin/core/dist/components/index.css'
import '@alisyahidin/core/dist/utilities/index.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
