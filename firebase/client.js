import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, setDoc, getDoc, doc } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDCvMj90xaF4C8vPA2cdMRJF-A9pgmbbVU",
  authDomain: "url-shortener-2b352.firebaseapp.com",
  projectId: "url-shortener-2b352",
  storageBucket: "url-shortener-2b352.appspot.com",
  messagingSenderId: "250794655993",
  appId: "1:250794655993:web:6af7c3728432b81ab82228",
  measurementId: "G-4H7CYGPW7V"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getLink = async (shortUrl) => {
  const docRef = doc(db, 'links', shortUrl)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }

  return null
}

export const addLink = async (linkInstance) => {
  const linkDoc = doc(db, 'links', linkInstance.shortUrl)
  await setDoc(linkDoc, { ...linkInstance })
}