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

function Dashboard({ links }) {
  console.log(links)

  return (
    <div className={mainStyles.main}>
      <div className={style.wrap}>
        <Shortener />
        <div className={style.cardContent}>
          {links.map((e) => (
            <p key={e.shortUrl}>{e.url}</p>
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
