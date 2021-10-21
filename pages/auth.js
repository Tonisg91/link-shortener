import styles from '../styles/Home.module.css'
import cardStyle from '../styles/Card.module.css'
import classNames from 'classnames'
import AuthButton from '../components/Common/AuthButton'
import { mdiLogin } from '@mdi/js'
import Icon from '@mdi/react'

export default function Auth() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={classNames([cardStyle.wrap, cardStyle.dashboardCard])}>
          <div className={classNames(cardStyle.cardHeader, cardStyle.gradient)}>
            <Icon path={mdiLogin} size={3} color="#fff" />
          </div>
          <div className={cardStyle.cardContent}>
            <AuthButton text="Google" />
            <AuthButton text="Facebook" />
            <AuthButton text="Github" />
          </div>
        </div>
      </main>
    </div>
  )
}
