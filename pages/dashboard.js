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
    if (!loading) {
      axios
        .get('api/links', { headers: { authorization: user.id } })
        .then((res) => console.log(res))
    }
  }, [loading, user])

  const addUserLink = async (data) => setUserLinks([...userLinks, data])
  const handleDelete = (shortUrl) => {}
  // Firestore.deleteLink(shortUrl).then(() =>
  //   setUserLinks(userLinks.filter((link) => link.shortUrl !== shortUrl))
  // )
  // const handleLogout = () =>
  //   fetch('api/logout').then((res) => res.ok && AuthUser.signOut())

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
