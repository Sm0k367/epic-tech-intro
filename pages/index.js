// @ts-check
'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Auto-open the intro HTML in a new tab or iframe if possible
    const introUrl = '/epic-tech-intro.html'
    window.open(introUrl, '_blank')
  }, [])

  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#0a0022', color: '#00ffcc', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', textShadow: '0 0 40px #00ffcc' }}>EPIC TECH AI — Welcome</h1>
      <p style={{ fontSize: '1.2rem' }}>Redirecting to the neon intro experience...</p>
      <a href="/epic-tech-intro.html" style={{ color: '#ff00aa', textDecoration: 'none', fontSize: '1.1rem' }}>Click here if not automatic</a>
    </div>
  )
}