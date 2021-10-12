import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider
} from 'firebase/auth'
import { app } from './client'

export const auth = getAuth(app)
auth.languageCode = 'en'

export const firebaseAuth = (method) => {
  switch (method) {
    case 'Facebook':
      return loginWithFacebook()
    case 'Google':
      return loginWithGoogle()
    default:
      return loginWithGoogle()
  }
}

export const loginWithFacebook = () => {
  const facebookAuthProvider = new FacebookAuthProvider()
  return signInWithPopup(auth, facebookAuthProvider)
}

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

export const getUser = (cb) => onAuthStateChanged(auth, cb)
