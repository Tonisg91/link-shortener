import { init } from 'next-firebase-auth'

const initAuth = () => {
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
        privateKey: process.env.FIREBASE_PRIVATE_KEY
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
