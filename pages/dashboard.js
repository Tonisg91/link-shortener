import classNames from 'classnames'
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'

import Shortener from '../components/Forms/Shortener'
import Firestore from '../firebase/Firestore'

import mainStyles from '../styles/Home.module.css'
import style from '../styles/Card.module.css'
import { useState } from 'react'

function Dashboard({ links = [] }) {
  const { id } = useAuthUser()
  const [userLinks, setUserLinks] = useState(links)

  const getUserLinks = async () =>
    await Firestore.getUserLinks(id).then((links) => setUserLinks(links))

  return (
    <div className={mainStyles.dashboard}>
      <div className={mainStyles.main}>
        <Shortener cb={getUserLinks} />
        <div className={style.cardContent}>
          {userLinks.map((e) => (
            <div key={e.shortUrl}>
              <p>{e.name}</p>
              <p>{e.url}</p>
            </div>
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

export default withAuthUser()(Dashboard)
