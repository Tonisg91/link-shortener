import { useEffect, useState } from "react"
import Firestore from "../firebase/Firestore"

export default function LinkPage({ url }) {
  const [seconds, setSeconds] = useState(5)


  useEffect(() => {
    if (seconds > 0) {
      const countDown = setTimeout(() => setSeconds(seconds - 1), 1000)
      return () => clearTimeout(countDown)
    }
    window.location.assign(url)
  }, [seconds, url])


  return (
    <div>
      <h1>Link page</h1>
      <span>{url}</span>
      <p>Serás redirigido en {seconds} segundos</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { shortUrl } = params
  const data = await Firestore.getLink(shortUrl)

  if (!data) {
    // TODO: Return to Error page
    return { redirect: { destination: '/' } }
  }

  return { props: { url: data.url }}
}