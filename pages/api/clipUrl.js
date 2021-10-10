// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Firestore from '../../firebase/Firestore'
import Link from "../../Links/Link"


export default async function clipUrl(req, res) {
  const { url } = req.body
  const shortUrl = Math.random().toString(36).substr(2,5)

  const newLink = new Link(shortUrl, url)
  await Firestore.addLink(newLink)

  res.status(200).send({ url, shortUrl })
}
