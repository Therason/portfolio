import styles from './Name.module.css'
export default function Name() {
  return (
    <div className={styles.container}>
      <span style={{ position: 'relative' }}>
        <p className={styles.first}>thomas</p>
        <p className={styles.mid}>gerritt</p>
        <p className={styles.last}>broadwater</p>
      </span>
    </div>
  )
}