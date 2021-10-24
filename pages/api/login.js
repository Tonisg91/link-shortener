import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Login(req, res) {
  try {
    const { displayName, photoURL, email, uid } = req.body

    const hasUser = await prisma.user.findFirst({
      where: { firebaseId: uid }
    })

    if (hasUser) {
      return res.status(200).json({ data: hasUser })
    }

    const newUser = {
      name: displayName,
      avatar: photoURL,
      email: email,
      firebaseId: uid
    }

    const user = await prisma.user.create({
      data: { ...newUser }
    })

    return res.status(200).json({ data: user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
