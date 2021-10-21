import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Login(req, res) {
  console.log(req.body)
  try {
    const user = await prisma.user.create({
      data: { ...req.body }
    })

    console.log(user)
  } catch (error) {}
}
