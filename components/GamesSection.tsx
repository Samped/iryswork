'use client'

import styles from './Portfolio.module.css'

const games = [
  {
    id: 'spritey-desktop',
    title: 'Spritey - Desktop',
    description: 'An engaging game experience optimized for desktop players. Play with keyboard and mouse controls.',
    gameUrl: 'https://spritey.vercel.app/',
    platform: 'desktop'
  },
  {
    id: 'spritey-mobile',
    title: 'Spritey - Mobile',
    description: 'The same great game experience optimized for mobile devices. Play on your phone or tablet.',
    gameUrl: 'https://spritey.vercel.app/',
    platform: 'mobile'
  }
]

export default function GamesSection() {
  return (
    <section className={styles.section}>
      <h2>Games</h2>
      <div className={styles.gamesGrid}>
        {games.map((game) => (
          <div key={game.id} className={`${styles.gameCard} ${game.platform === 'desktop' ? styles.desktopGame : styles.mobileGame}`}>
            <div className={styles.gamePreview}>
              <div className={styles.gameEmbed}>
                <iframe
                  src={game.gameUrl}
                  className={styles.gameIframe}
                  title={game.title}
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.gameInfo}>
              <h3 className={styles.gameTitle}>{game.title}</h3>
              <p className={styles.gameDescription}>{game.description}</p>
              <div className={styles.gameMeta}>
                <span>
                  {game.platform === 'desktop' ? '🖥️ Desktop' : '📱 Mobile'}
                </span>
                <a href={game.gameUrl} target="_blank" rel="noopener noreferrer" className={styles.gameLink}>
                  Play Game →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

