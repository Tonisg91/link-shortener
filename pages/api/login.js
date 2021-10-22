import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Login(req, res) {
  try {
    const hasUser = await prisma.user.findFirst({
      where: { firebaseId: req.body.firebaseId }
    })

    if (hasUser) {
      return res.status(200).json({ data: hasUser })
    }

    const user = await prisma.user.create({
      data: { ...req.body }
    })

    return res.status(200).json({ data: user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
