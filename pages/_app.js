import AuthContextProvider from '../context/AuthContext'
import '../firebase/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
