import styles from './navbar.module.css'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <Link href='/'>TGB</Link>
        <div className={styles.right}>
          <Link href='/'>Projects</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
      </nav>
      <div className={styles.bar}></div>
    </div>
  )
}
