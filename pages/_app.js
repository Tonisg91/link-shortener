import initAuth from '../firebase/initAuth'
import '../styles/globals.css'

initAuth()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
