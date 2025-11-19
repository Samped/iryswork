'use client'

import Image from 'next/image'
import styles from './Portfolio.module.css'

export default function FeaturedApp() {
  return (
    <section className={styles.section}>
      <h2>Featured App</h2>
      <div className={styles.appCard}>
        <div className={styles.appImage}>
          <Image
            src="/arts/irysleader.png"
            alt="owly"
            width={800}
            height={400}
            className={styles.appImageImg}
            priority
          />
        </div>
        <div className={styles.appInfo}>
          <h3>owly</h3>
          <p className={styles.appDescription}>redefining the job marketplace</p>
          <div className={styles.appTags}>
            <span className={styles.appTag}>In Development</span>
            <span className={styles.appTag}>Irys Network</span>
          </div>
        </div>
      </div>
    </section>
  )
}

