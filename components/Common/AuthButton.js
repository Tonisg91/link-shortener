import PropTypes from 'prop-types'

import Icon from '@mdi/react'
import { mdiGoogle, mdiFacebook, mdiGithub } from '@mdi/js'
import classNames from 'classnames'

import styles from '../../styles/Card.module.css'

function AuthButton({ text }) {
  const iconHM = {
    Google: mdiGoogle,
    Facebook: mdiFacebook,
    Github: mdiGithub
  }

  return (
    <div className={classNames(styles.cardBtn, styles.btnGradient)}>
      <small>Login with {text}</small>
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
  }
}

export default AuthButton
