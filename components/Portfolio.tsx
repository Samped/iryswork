'use client'

import { useEffect, useState } from 'react'
import ProfileSection from './ProfileSection'
import ArtsSection from './ArtsSection'
import GamesSection from './GamesSection'
import FeaturedApp from './FeaturedApp'
import XSlideshow from './XSlideshow'
import styles from './Portfolio.module.css'

declare global {
  interface Window {
    PROFILE_CONFIG?: any
  }
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={styles.loadingOverlay}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <ProfileSection />
      <ArtsSection />
      <GamesSection />
      <FeaturedApp />
      <XSlideshow />
    </div>
  )
}

