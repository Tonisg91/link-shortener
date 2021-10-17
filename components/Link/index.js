import styles from './LinkCard.module.css'

function LinkCard({ data }) {
  return (
    <div className={styles.container}>
      <h3>{data.name}</h3>
      <div>
        <p>{data.url}</p>
      </div>
      <div className={styles.analytics}>
        <p>{data.counter}</p>
        <p>{new Date(data.createdAt).toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  )
}

LinkCard.propTypes = {}

export default LinkCard
