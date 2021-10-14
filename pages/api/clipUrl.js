// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Link from '../../Links/Link'

export default async function clipUrl(req, res) {
  const { url, createdBy } = req.body
  const shortUrl = Math.random().toString(36).substr(2, 5)
  console.log(req.body)

  const newLink = new Link({ url, createdBy })
  await newLink.storeLink()

  res.status(200).send({ url, shortUrl })
}
