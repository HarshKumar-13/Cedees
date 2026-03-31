'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/about', label: 'About Us' },
  { href: '/legacy', label: 'Legacy' },
  { href: '/centers', label: 'Centers' },
  { href: '/contact', label: 'Contact' },
]

const darkHeroPages = ['/', '/courses', '/about', '/contact']

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isDarkHero = darkHeroPages.includes(pathname) || (pathname?.startsWith('/courses/') ?? false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = [styles.nav, scrolled ? styles.scrolled : '', !scrolled && isDarkHero ? styles.glass : ''].join(' ')

  return (
    <nav className={navClass}>
      <Link href="/" className={`${styles.logo} ${!scrolled && isDarkHero ? styles.logoLight : ''}`}>
        <span className={styles.logoText}>CEDEES</span>
        <span className={styles.logoBadge}>Since 2003</span>
      </Link>
      <ul className={styles.links}>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href} className={`${styles.link} ${pathname === link.href ? styles.active : ''} ${!scrolled && isDarkHero ? styles.linkLight : ''}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={styles.cta}>Enquire Now</Link>
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? styles.barOpen1 : styles.bar} />
        <span className={menuOpen ? styles.barOpen2 : styles.bar} />
        <span className={menuOpen ? styles.barOpen3 : styles.bar} />
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Enquire Now</Link>
        </div>
      )}
    </nav>
  )
}
