import { useRef, useState } from "react"
import styles from '../../styles/Home.module.css'

export default function Shortener() {
  const inputRef = useRef()
  const [ shortUrl, setShortUrl ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = inputRef.current.value
    fetch('/api/clipUrl', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({url})
    })
    .then(res => res.json())
    .then(data => {
      setShortUrl(data.shortUrl)
    })
  }


  return (
    <form className={styles.card} onSubmit={handleSubmit} >
      <input ref={inputRef} type="text" className={styles.input} />
      <button className={styles.button}>Clip</button>
      <span className={styles.input}>{shortUrl}</span>
    </form>
  )
}
