import styles from './page.module.css'
import Image from 'next/image'

import { Landing } from '@/components'

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

      <Landing />

      {/* <section className={styles.front}>
        <div className={styles.landingHeader}>
          <h1>
            <span>FRONT</span>
            <span>END</span>
          </h1>
        </div>
      </section>

      <section className={styles.front}>
        <div className={styles.landingHeader}>
          <h1>
            <span>BACK</span>
            <span>END</span>
          </h1>
        </div>
      </section>

      <section className={styles.front}>
        <div className={styles.landingHeader}>
          <h1>
            <span>REAR</span>
            <span>END?</span>
          </h1>
        </div>
      </section> */}
    </main>
  )
}
