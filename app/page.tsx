import styles from './page.module.css'
import Image from 'next/image'

import { Landing, Skills } from '@/components'

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
      <Skills />
    </main>
  )
}
