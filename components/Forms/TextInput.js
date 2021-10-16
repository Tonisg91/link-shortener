import propTypes from 'prop-types'
import styles from '../../styles/Home.module.css'

function TextInput({ label, name, ...rest }) {
  return (
    <div className={styles.input}>
      <label htmlFor={label}>{label}</label>
      <input type="text" {...rest} name={name} />
    </div>
  )
}

TextInput.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired
}

export default TextInput
