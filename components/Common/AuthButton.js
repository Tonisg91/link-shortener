import propTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiGoogle, mdiFacebook, mdiGithub } from '@mdi/js'

import styles from '../../styles/Common.module.css'

function AuthButton({ text, handleClick }) {
  const iconHM = {
    Google: mdiGoogle,
    Facebook: mdiFacebook,
    Github: mdiGithub
  }

  return (
    <div className={styles.authBtn} onClick={handleClick} name={text}>
      <p>Login with {text}</p>
      <Icon path={iconHM[text]} size={1} />
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
