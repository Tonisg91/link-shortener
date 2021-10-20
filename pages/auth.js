import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

import styles from '../styles/Home.module.css'
import cardStyle from '../styles/Card.module.css'
import classNames from 'classnames'
import AuthButton from '../components/Common/AuthButton'
import { mdiLogin } from '@mdi/js'
import Icon from '@mdi/react'

const Auth = () => {
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider).then(console.log)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={classNames([cardStyle.wrap, cardStyle.dashboardCard])}>
          <div className={classNames(cardStyle.cardHeader, cardStyle.gradient)}>
            <Icon path={mdiLogin} size={3} color="#fff" />
          </div>
          <div className={cardStyle.cardContent}>
            <AuthButton text="Google" />
            <AuthButton text="Facebook" />
            <AuthButton text="Github" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER
})(Auth)
