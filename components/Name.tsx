import styles from './Name.module.css'
export default function Name() {
  return (
    <div className={styles.container}>
      <p className={styles.first}>thomas</p>
      <p className={styles.mid}>gerritt</p>
      <p className={styles.last}>broadwater</p>
    </div>
  )
}