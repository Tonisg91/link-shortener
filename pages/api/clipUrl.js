// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Link from '../../Links/Link'

export default async function clipUrl(req, res) {
  const newLink = new Link({ ...req.body })
  await newLink.storeLink()

  res.status(200).json(newLink)
}
