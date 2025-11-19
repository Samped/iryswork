'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.css'

const xPostImages = [
  'IMG_8064.PNG', 'IMG_8065.PNG', 'IMG_8066.PNG', 'IMG_8067.PNG', 'IMG_8068.PNG',
  'IMG_8069.PNG', 'IMG_8070.PNG', 'IMG_8071.PNG', 'IMG_8072.PNG', 'IMG_8073.PNG',
  'IMG_8074.PNG', 'IMG_8075.PNG', 'IMG_8076.PNG', 'IMG_8077.PNG', 'IMG_8078.PNG',
  'IMG_8079.PNG', 'IMG_8080.PNG', 'IMG_8081.PNG', 'IMG_8082.PNG', 'IMG_8083.PNG',
  'IMG_8084.PNG', 'IMG_8085.PNG', 'IMG_8086.PNG', 'IMG_8087.PNG', 'IMG_8088.PNG',
  'IMG_8089.PNG'
]

export default function XSlideshow() {
  // Create multiple copies to ensure smooth infinite loop in both directions
  const allImages = [...xPostImages, ...xPostImages, ...xPostImages, ...xPostImages]
  
  return (
    <section className={styles.slideshowSection}>
      <h2>Latest from X</h2>
      <div className={styles.slideshowContainer}>
        <div className={styles.slideshowTrack}>
          {allImages.map((img, index) => (
            <div key={`${img}-${index}`} className={styles.slideshowItem}>
              <Image
                src={`/arts/posts/${img}`}
                alt={`X Post ${index + 1}`}
                width={450}
                height={500}
                className={styles.slideshowImg}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

