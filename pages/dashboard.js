import { useEffect, useState } from 'react'

import LinkCard from '../components/Link'
import Shortener from '../components/Forms/Shortener'

import mainStyles from '../styles/Home.module.css'
import Navbar from '../components/Common/Navbar'

import useAuth from '../hooks/useAuth'
import axios from 'axios'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const [userLinks, setUserLinks] = useState([])

  useEffect(() => {
    if (!loading && Boolean(user)) {
      axios
        .get('api/links', { headers: { authorization: user.id } })
        .then((res) => res.status === 200 && setUserLinks(res.data))
    }
  }, [loading, user])

  const addUserLink = async (data) => setUserLinks([...userLinks, data])
  const handleDelete = (id) =>
    axios.delete(`api/links/${id}`).then(() => {
      setUserLinks(userLinks.filter((link) => link.id !== id))
    })

  return (
    <div className={mainStyles.dashboard}>
      <Navbar />
      <div className={mainStyles.main}>
        <Shortener cb={addUserLink} />
        <div className={mainStyles.linksContainer}>
          {userLinks.map((link) => (
            <LinkCard
              key={link.shortUrl}
              data={link}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
