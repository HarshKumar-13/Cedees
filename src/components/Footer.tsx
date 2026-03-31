import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoText}>CEDEES</span>
                <span className={styles.logoBadge}>Since 2003</span>
              </div>
              <p className={styles.tagline}>
                India's oldest and most trusted Dental PG training institute. 
                Two decades of turning dentists into rankers.
              </p>
              <div className={styles.appLinks}>
                <a href="#" className={styles.appBtn}>
                  <span className={styles.appIcon}>▶</span>
                  <div>
                    <div className={styles.appSmall}>Download on</div>
                    <div className={styles.appBig}>Google Play</div>
                  </div>
                </a>
                <a href="#" className={styles.appBtn}>
                  <span className={styles.appIcon}>🍎</span>
                  <div>
                    <div className={styles.appSmall}>Download on</div>
                    <div className={styles.appBig}>App Store</div>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.colLinks}>
                {['Home', 'Courses & Programs', 'Achievements', 'About Us', 'Legacy', 'Satellite Centers', 'Student Experience', 'Get In Touch'].map(l => (
                  <li key={l}><Link href="/">{l}</Link></li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Courses</h4>
              <ul className={styles.colLinks}>
                {['Zenith Pro', 'NEET MDS Prep', 'INI-CET Program', 'AIIMS Preparation', 'Live Exam Series', 'BDS Next App', 'Satellite Centers', 'Reading Rooms'].map(l => (
                  <li key={l}><Link href="/">{l}</Link></li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact</h4>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <span>Main Campus, Chennai<br />Tamil Nadu, India</span>
                </div>
                <div className={styles.contactItem}>
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className={styles.contactItem}>
                  <span>✉️</span>
                  <span>info@cedees.in</span>
                </div>
                <div className={styles.contactItem}>
                  <span>🕐</span>
                  <span>Mon–Sat: 9am – 6pm</span>
                </div>
              </div>
              <div className={styles.socials}>
                {['Instagram', 'YouTube', 'Facebook', 'WhatsApp'].map(s => (
                  <a key={s} href="#" className={styles.social}>{s[0]}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <p>© 2024 CEDEES. All rights reserved. India's Most Trusted Dental PG Institute.</p>
            <div className={styles.bottomLinks}>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
