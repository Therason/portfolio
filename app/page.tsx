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
          <div className={styles.illustration}></div>
          <div className={styles.landingImgText}>
            <p>Web developer based in Washington, D.C.</p>
            <p>
              I create fun and interactive sites with the purpose of connecting
              people across the globe.
            </p>
          </div>
        </div>
        <div className={styles.aboutDeco}>
          <Image src='/about.svg' alt='decoration' fill />
        </div>
      </section>

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
