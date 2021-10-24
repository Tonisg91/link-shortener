import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  try {
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
