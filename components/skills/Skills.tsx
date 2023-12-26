import styles from './skills.module.css'
export function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.skillHeader}>
        <h1>
          <span>FRONT</span>
          <span>END</span>
        </h1>
      </div>
      <ul className={styles.front}>
        <li>
          <h3>Modern Frameworks</h3>
        </li>
        <li>
          <h3>Web Components</h3>
        </li>
        <li>
          <h3>Interactivity</h3>
        </li>
        <li>
          <h3>Accessibility</h3>
        </li>
        <li>
          <h3>Performance and Optimization</h3>
        </li>
        <li>
          <h3>Responsiveness</h3>
        </li>
      </ul>
      <ul className={styles.back}>
        <li>
          <h3></h3>
        </li>
      </ul>
      <ul className={styles.rear}></ul>
    </section>
  )
}
