import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pattern}></div>
      <div className={styles.links}>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/strategies" className={styles.link}>
          Strategies
        </Link>
        <Link href="/team" className={styles.link}>
          Team
        </Link>
        <Link href="/portfolio" className={styles.link}>
          Portfolio
        </Link>
        <Link href="/news" className={styles.link}>
          News
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
      </div>
      <div className={styles.subfooter}>
        <p>© 2025 Sofinnova Partners</p>
        <div className={styles.socials}>
          <a href="#" className={styles.item}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

