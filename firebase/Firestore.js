import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  query,
  where
} from 'firebase/firestore/lite'
import { app } from './client'

class Firestore {
  constructor() {
    this.db = getFirestore(app)
    this.currentLink = undefined
  }

  async getUserLinks(userId) {
    const linksCol = collection(this.db, 'links')
    const linksQuery = query(linksCol, where('createdBy', '==', userId))

    const linkSnapshot = await getDocs(linksQuery)
    const linkList = linkSnapshot.docs.map((doc) => doc.data())
    return linkList
  }

  async getLink(shortUrl) {
    const docRef = doc(this.db, 'links', shortUrl)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const currentLink = docSnap.data()
      this.incrementClickCounter(currentLink)
      return currentLink
    }

    return null
  }

  async addLink(linkInstance) {
    const linkDoc = doc(this.db, 'links', linkInstance.shortUrl)
    await setDoc(linkDoc, { ...linkInstance })
  }

  async incrementClickCounter(linkInstance) {
    const { counter, shortUrl } = linkInstance
    const linkDoc = doc(this.db, 'links', shortUrl)
    await setDoc(linkDoc, { ...linkInstance, counter: counter + 1 })
  }
}

export default new Firestore()