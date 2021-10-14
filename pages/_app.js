import initAuth from '../initAuth'
import '../firebase/client'
import '../styles/globals.css'

initAuth()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
