import { useState } from 'react'

import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'

import LinkCard from '../components/Link'
import Shortener from '../components/Forms/Shortener'
import Firestore from '../firebase/Firestore'

import mainStyles from '../styles/Home.module.css'
import Navbar from '../components/Common/Navbar'

function Dashboard({ links = [] }) {
  // const AuthUser = useAuthUser()
  const [userLinks, setUserLinks] = useState(links)

  const addUserLink = async (data) => setUserLinks([...userLinks, data])
  const handleDelete = (shortUrl) =>
    Firestore.deleteLink(shortUrl).then(() =>
      setUserLinks(userLinks.filter((link) => link.shortUrl !== shortUrl))
    )
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

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async (context) => {
  const { AuthUser } = context
  const links = await Firestore.getUserLinks(AuthUser.id)
  return {
    props: { links }
  }
})

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard)
