import { getFirestore, doc, setDoc } from 'firebase/firestore'

const db = getFirestore()
class Link {
  constructor({ url, createdBy }) {
    this.shortUrl = Math.random().toString(36).substr(2, 5)
    this.url = url
    this.counter = 0
    this.createdAt = new Date()
    this.createdBy = createdBy
  }

  async storeLink() {
    const linkDoc = doc(db, 'links', this.shortUrl)
    console.log(this)
    await setDoc(linkDoc, { ...this })
  }
}

export default Link
