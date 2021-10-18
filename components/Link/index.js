import Link from 'next/link'
import {
  mdiClipboardMultipleOutline,
  mdiCursorDefaultClickOutline,
  mdiTrashCanOutline
} from '@mdi/js'
import Icon from '@mdi/react'

import { BASE_URL } from '../../constants'
import styles from './LinkCard.module.css'

function LinkCard({ data, handleDelete }) {
  const fullLink = `${BASE_URL}/${data.shortUrl}`

  const copyToClipboard = () =>
    navigator.clipboard.writeText(fullLink).then(() => alert('Enlace copiado'))

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{data.name}</h3>
        <Icon
          path={mdiTrashCanOutline}
          size={1}
          color="red"
          onClick={() => handleDelete(data.shortUrl)}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={styles.content}>
        <p>{data.url}</p>
        <div className={styles.linkContainer}>
          <Link href={fullLink}>
            <a>{fullLink}</a>
          </Link>
          <Icon
            path={mdiClipboardMultipleOutline}
            size={1}
            onClick={copyToClipboard}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className={styles.analytics}>
        <div>
          <p>{data.counter}</p>
          <Icon path={mdiCursorDefaultClickOutline} size={1} />
        </div>
        <p>{new Date(data.createdAt).toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  )
}

LinkCard.propTypes = {}

export default LinkCard
