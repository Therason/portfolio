import Image from 'next/image'
import styles from './landing.module.css'

export function Landing() {
  return (
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
  )
}
