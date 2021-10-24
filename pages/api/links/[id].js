import prisma from '../../../prisma'

export default async function clipUrl(req, res) {
  try {
    if (req.method === 'DELETE') {
      await prisma.link.delete({ where: { id: req.query.id } })
      return res.status(200).end()
    }

    if (req.method === 'GET') {
      const link = await prisma.link.findUnique({
        where: { id: req.query.id }
      })
      return res.status(200).json(link)
    }

    return res.sendStatus(400)
  } catch (error) {
    console.error(error)
  }
}
