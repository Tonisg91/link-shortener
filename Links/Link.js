import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class Link {
  constructor({ url, name, createdBy }) {
    this.shortUrl = Math.random().toString(36).substr(2, 5)
    this.url = url
    this.name = name
    this.counter = 0
    this.createdBy = createdBy
  }

  async storeLink() {
    await prisma.link.create({ data: this })
  }
}

export default Link
