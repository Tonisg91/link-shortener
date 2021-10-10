class Link {
  constructor(shortUrl, url) {
    this.shortUrl = shortUrl
    this.url = url
    this.counter = 0
    this.createdAt = new Date()
  } 
}

export default Link