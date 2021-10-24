import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()

const signToken = (data) =>
  jwt.sign(data, process.env.JWT_PASS, { expiresIn: '7d' })

export default async function Login(req, res) {
  try {
    const { displayName, photoURL, email, uid } = req.body

    const hasUser = await prisma.user.findFirst({
      where: { firebaseId: uid }
    })

    if (hasUser) {
      const token = signToken(hasUser)
      return res.status(200).json({ ...hasUser, token })
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

    return res.status(200).json({ user, token: signToken(user) })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
