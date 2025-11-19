'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.css'

interface Artwork {
  id: string
  title: string
  description: string
  image: string
  date?: string
}

export default function ArtsSection() {
  const [arts, setArts] = useState<Artwork[]>([])

  useEffect(() => {
    fetch('/arts/artworks.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setArts(data)
        }
      })
      .catch(err => console.error('Failed to load artworks:', err))
  }, [])

  return (
    <section className={styles.section}>
      <h2>Arts & Designs</h2>
      {arts.length === 0 ? (
        <div className={styles.artPlaceholder}>
          <div className={styles.placeholderIcon}>🎨</div>
          <p>Loading artworks...</p>
        </div>
      ) : (
        <div className={styles.artsGrid}>
          {arts.map((art) => (
            <div key={art.id} className={styles.artCard}>
              <div className={styles.artImage}>
                <Image
                  src={`/arts/${art.image}`}
                  alt={art.title}
                  width={350}
                  height={280}
                  className={styles.artImageImg}
                  loading="lazy"
                />
                <div className={styles.artOverlay}>
                  <p>Click to view full size</p>
                </div>
              </div>
              <div className={styles.artInfo}>
                <h3 className={styles.artTitle}>{art.title}</h3>
                <p className={styles.artDescription}>{art.description}</p>
                {art.date && (
                  <span className={styles.artDate}>
                    {new Date(art.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short'
                    })}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

