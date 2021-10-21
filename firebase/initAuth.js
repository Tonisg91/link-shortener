import { init } from 'next-firebase-auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDCvMj90xaF4C8vPA2cdMRJF-A9pgmbbVU',
  authDomain: 'url-shortener-2b352.firebaseapp.com',
  projectId: 'url-shortener-2b352',
  storageBucket: 'url-shortener-2b352.appspot.com',
  messagingSenderId: '250794655993',
  appId: '1:250794655993:web:6af7c3728432b81ab82228',
  measurementId: 'G-4H7CYGPW7V'
}

const initAuth = () => {
  initializeApp(firebaseConfig)
  init({
    authPageURL: '/auth',
    appPageURL: '/dashboard',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'url-shortener-2b352',
        clientEmail:
          'firebase-adminsdk-ticb9@url-shortener-2b352.iam.gserviceaccount.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      }
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDCvMj90xaF4C8vPA2cdMRJF-A9pgmbbVU', // required
      authDomain: 'url-shortener-2b352.firebaseapp.com',
      projectId: 'url-shortener-2b352'
    },
    cookies: {
      name: '@urlShortener', // required
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true
    }
  })
}

export default initAuth
