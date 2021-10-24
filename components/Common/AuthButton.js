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
import useAuth from '../../hooks/useAuth'

const AuthButton = ({ text }) => {
  const { login } = useAuth()

  const loginWithFirebase = async (provider) => {
    try {
      const providerResponse = await signInWithPopup(getAuth(), provider)

      const { data } = await axios.post('api/login', providerResponse.user)

      login({ ...data })
    } catch (error) {
      console.error(error)
    }
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
