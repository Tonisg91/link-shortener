import useAuth from '../../hooks/useAuth'
import styles from '../../styles/Common.module.css'

export default function Navbar() {
  const { logout } = useAuth()
  const handleLogout = () => logout()

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
