import { getFirestore, doc, setDoc } from 'firebase/firestore'

const db = getFirestore()
class Link {
  constructor({ url, name, createdBy }) {
    this.shortUrl = Math.random().toString(36).substr(2, 5)
    this.url = url
    this.name = name
    this.counter = 0
    this.createdAt = Date.now()
    this.createdBy = createdBy
  }

  async storeLink() {
    const linkDoc = doc(db, 'links', this.shortUrl)

    await setDoc(linkDoc, { ...this })
  }
}

export default Link
