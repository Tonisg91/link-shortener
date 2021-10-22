import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getAuth
} from 'firebase/auth'

import Icon from '@mdi/react'
import { mdiGoogle, mdiFacebook, mdiGithub } from '@mdi/js'

import styles from '../../styles/Common.module.css'
import axios from 'axios'

function AuthButton({ text }) {
  const loginWithFirebase = async (provider) => {
    const response = await signInWithPopup(getAuth(), provider)

    signInWithPopup(getAuth(), provider).then(({ user }) => {
      axios.post('api/login', {
        name: user.displayName,
        avatar: user.photoURL,
        email: user.email,
        firebaseId: user.uid
      })
      // prisma.user.create()
    })
  }

  const buttonData = {
    Google: {
      icon: mdiGoogle,
      provider: new GoogleAuthProvider()
    },
    Facebook: {
      icon: mdiFacebook,
      provider: new FacebookAuthProvider()
    },
    Github: {
      icon: mdiGithub,
      provider: new GithubAuthProvider()
    }
  }

  const { provider, icon } = buttonData[text]

  return (
    <div
      className={styles.authBtn}
      onClick={() => loginWithFirebase(provider)}
      name={text}
    >
      <p>Login with {text}</p>
      <Icon path={icon} size={1} />
    </div>
  )
}

AuthButton.propTypes = {
  text: function (props) {
    if (typeof props.text !== 'string') {
      return new Error('text prop only accept string values')
    }

    const allowedProps = ['Google', 'Facebook', 'Github']

    if (!allowedProps.includes(props.text)) {
      return new Error(
        'text prop only accept one of these values => ' + allowedProps
      )
    }
  }
}

export default AuthButton
