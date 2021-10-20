import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

import propTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiGoogle, mdiFacebook, mdiGithub } from '@mdi/js'

import styles from '../../styles/Common.module.css'

function AuthButton({ text, handleClick }) {
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider).then(console.log)
  }

  const buttonData = {
    Google: {
      icon: mdiGoogle,
      action: loginWithGoogle
    },
    Facebook: {
      icon: mdiFacebook,
      action: loginWithGoogle
    },
    Github: {
      icon: mdiGithub,
      action: loginWithGoogle
    }
  }

  const { action, icon } = buttonData[text]

  return (
    <div className={styles.authBtn} onClick={action} name={text}>
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
  },
  handleClick: propTypes.func.isRequired
}

export default AuthButton
