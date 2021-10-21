import classNames from 'classnames'
import { useAuthUser } from 'next-firebase-auth'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import TextInput from './TextInput'

export default function Shortener({ cb }) {
  const AuthUser = useAuthUser()
  console.log(AuthUser)
  const [form, setForm] = useState({
    url: '',
    name: ''
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postUrl(form).then((res) => res && cb(res))
  }

  const postUrl = async (values) => {
    try {
      const response = await fetch('/api/clipUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, createdBy: AuthUser.id })
      })

      if (!response.ok) return // Catch error

      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  // TODO: Check if the db has that short url if typed by user

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextInput
        label="URL"
        name="url"
        value={form.url}
        onChange={handleChange}
      />
      <TextInput
        label="Website name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <button className={classNames([styles.button, styles.gradient])}>
        Clip URL
      </button>
    </form>
  )
}
