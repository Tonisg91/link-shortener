import { useAuthUser } from 'next-firebase-auth'
import styles from '../../styles/Common.module.css'

export default function Navbar() {
  const AuthUser = useAuthUser()
  const handleLogout = () =>
    fetch('api/logout').then((res) => res.ok && AuthUser.signOut())

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div onClick={handleLogout} className={styles.authBtn}>
            <p>Logout</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}
