import { PrismaClient } from '.prisma/client'
const prisma = new PrismaClient()
export default function LinkPage({ url }) {
  return (
    <div>
      <h1>Link page</h1>
      <span>{url}</span>
      <p>Serás redirigido en segundos</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { shortUrl } = params

  const data = await prisma.link.findUnique({ where: { shortUrl } })

  if (!data) {
    return { redirect: { destination: '/' } }
  }

  return { redirect: { destination: data.url } }
}
