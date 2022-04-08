import '../styles/globals.css'
// import '@alisyahidin/react/themes.css'

// for realtime development
import '@alisyahidin/core/components/index.css'
import '@alisyahidin/core/utilities/index.css'

import SideMenu from '../components/SideMenu'

function MyApp({ Component, pageProps }) {
  return <div className="grid-container">
    <SideMenu />
    <main>
      <Component {...pageProps} />
    </main>
  </div>
}

export default MyApp
