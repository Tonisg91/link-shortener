import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'
import styles from '../../styles/Common.module.css'

export default function GetStartedButton() {
  const authUser = useAuth()
  const router = useRouter()

  const handleClick = () => {
    const nextRoute = authUser.user ? '/dashboard' : '/auth'
    router.push(nextRoute)
  }

  return (
    <div className={styles.authBtn} onClick={handleClick}>
      <p>Get started</p>
    </div>
  )
}
