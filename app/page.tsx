'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'

// Dynamically import the portfolio component to avoid SSR issues
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false })

export default function Home() {
  return (
    <>
      <Script src="/profile-config.js" strategy="beforeInteractive" />
      <Portfolio />
    </>
  )
}

