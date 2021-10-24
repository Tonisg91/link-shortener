import prisma from '../../../prisma'

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const linkInstance = {
        ...req.body,
        shortUrl: Math.random().toString(36).substr(2, 5)
      }

      const newLink = await prisma.link.create({ data: linkInstance })

      return res.status(200).json(newLink)
    }

    const { authorization } = req.headers

    if (!authorization) return res.sendStatus(401)

    const userLinks = await prisma.link.findMany({
      where: { createdBy: req.headers.authorization }
    })

    return res.status(200).json(userLinks)
  } catch (error) {
    console.error(error)
  }
}
