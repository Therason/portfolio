import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.splash}>
        <h1>THOMAS BROADWATER</h1>
        <Image
          className={styles.scrollIcon}
          alt='scroll down icon'
          src='/scroll_down.svg'
          width={160}
          height={113}
        ></Image>
      </section>

      <section className={styles.landing}>
        <div className={styles.landingHeader}>
          <h1>
            <span>FULLSTACK</span>
            <span>DEVELOPER</span>
          </h1>
        </div>
        <div className={styles.landingImg}>
          <div></div>
          <p>Web developer based in Washington, D.C.</p>
        </div>
      </section>
    </main>
  )
}
