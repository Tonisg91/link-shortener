import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE,
  messagingSenderId: process.env.SENDER,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENT
}

initializeApp(firebaseConfig)
