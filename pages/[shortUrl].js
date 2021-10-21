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
  // const data = await Firestore.getLink(shortUrl)
  // TODO: Cambiar por prisma

  // if (!data) {
  //   // TODO: Return to Error page
  //   return { redirect: { destination: '/' } }
  // }

  return { redirect: { destination: '/' } }
}
