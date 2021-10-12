import { useRouter } from 'next/router'
import styles from '../../styles/Common.module.css'

export default function GetStartedButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/auth')
  }

  return (
    <div className={styles.authBtn} onClick={handleClick}>
      <p>Get started</p>
    </div>
  )
}
