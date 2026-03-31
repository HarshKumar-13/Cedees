import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import Link from 'next/link'

const rankers = [
  { name: 'Dr. Priya Sharma', rank: 'AIR 3', exam: 'NEET MDS 2023', institution: 'AIIMS Delhi' },
  { name: 'Dr. Arjun Mehta', rank: 'AIR 7', exam: 'INI-CET 2023', institution: 'PGI Chandigarh' },
  { name: 'Dr. Kavya Nair', rank: 'AIR 12', exam: 'NEET MDS 2023', institution: 'MAIDS Delhi' },
  { name: 'Dr. Rohit Verma', rank: 'AIR 5', exam: 'AIIMS MDS 2023', institution: 'AIIMS Jodhpur' },
]

const courses = [
  {
    tag: 'Flagship',
    name: 'Zenith Pro',
    desc: 'The highest-impact dental PG preparation program. Designed for serious aspirants who demand the best rank.',
    duration: '12 Months',
    mode: 'Hybrid',
    includes: ['Live Classes', 'Mock Exams', 'Personal Mentor', 'App Access'],
  },
  {
    tag: 'Popular',
    name: 'NEET MDS Intensive',
    desc: 'A focused, structured program built around the NEET MDS pattern with adaptive mock series.',
    duration: '6 Months',
    mode: 'Online + Offline',
    includes: ['Live Classes', 'Weekly Tests', 'QBank', 'Doubt Sessions'],
  },
  {
    tag: 'Comprehensive',
    name: 'INI-CET Pro',
    desc: 'Targeted preparation for INI-CET with institution-specific strategy and mentorship.',
    duration: '8 Months',
    mode: 'Hybrid',
    includes: ['Live Classes', 'INI-CET Mocks', 'Strategy Sessions', 'App Access'],
  },
]

const testimonials = [
  {
    text: "CEDEES transformed my preparation. The live exams gave me real competition experience that no other institute offers. I cracked AIR 3 in NEET MDS.",
    name: "Dr. Priya Sharma",
    detail: "AIR 3, NEET MDS 2023",
    initials: "PS",
  },
  {
    text: "The Zenith Pro program is a masterclass in systematic preparation. My mentor knew exactly where I was going wrong. Highly recommend for serious aspirants.",
    name: "Dr. Arjun Mehta",
    detail: "AIR 7, INI-CET 2023",
    initials: "AM",
  },
  {
    text: "After two unsuccessful attempts elsewhere, CEDEES showed me a completely different approach. The structured study environment at the satellite center was a game changer.",
    name: "Dr. Sneha Rao",
    detail: "AIR 19, NEET MDS 2023",
    initials: "SR",
  },
]

const stats = [
  { num: '20+', label: 'Years of Excellence' },
  { num: '40K+', label: 'Dentists Trained' },
  { num: '5K+', label: 'Students Per Live Exam' },
  { num: '#1', label: 'Rankers Produced' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            <span>India's Most Trusted Dental PG Institute</span>
          </div>
          <h1 className={styles.heroH1}>
            India's Oldest &<br />
            <em>Most Trusted</em><br />
            Dental PG Institute
          </h1>
          <p className={styles.heroSub}>
            20+ years of producing top rankers. 40,000+ dentists mentored. 
            One unmatched ecosystem for your PG preparation journey.
          </p>
          <div className={styles.heroActions}>
            <Link href="/courses" className="btn-primary">Explore Courses</Link>
            <Link href="/contact" className="btn-ghost">Enquire Now</Link>
          </div>
          <div className={styles.heroStats}>
            {stats.map(s => (
              <div key={s.label} className={styles.heroStat}>
                <div className={styles.heroStatNum}>{s.num}</div>
                <div className={styles.heroStatLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImgGrid}>
            <div className={`${styles.heroTile} ${styles.large}`}>
              <div className={styles.tileGradient} />
              <div className={styles.tileOverlay}>
                <div className={styles.tileBadge}>
                  <span className={styles.tileBadgeDot} />
                  Live Classes
                </div>
              </div>
            </div>
            <div className={styles.heroTile}>
              <div className={styles.tileGradient2} />
            </div>
            <div className={styles.heroTile}>
              <div className={styles.tileGradient3} />
            </div>
          </div>
          <div className={styles.floatBadge}>
            <div className={styles.floatIcon}>🏆</div>
            <div>
              <p className={styles.floatSmall}>Latest Result</p>
              <strong className={styles.floatBig}>AIR 3 — NEET MDS</strong>
            </div>
          </div>
          <div className={styles.floatBadge2}>
            <div className={styles.floatIcon2}>📊</div>
            <div>
              <p className={styles.floatSmall}>Live Exam</p>
              <strong className={styles.floatBig}>5,000+ Students</strong>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(3)].map((_, i) =>
            ['NEET MDS', 'INI-CET', 'AIIMS MDS', 'Zenith Pro', '40,000+ Dentists', 'Live Exams', 'Hybrid Learning', 'Top Ranks'].map(item => (
              <div key={`${item}-${i}`} className={styles.tickerItem}>
                <span className={styles.tickerDot} />
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      {/* LEGACY & NUMBERS */}
      <section className={styles.legacy}>
        <div className="container">
          <div className={styles.legacyGrid}>
            <div className={styles.legacyLeft}>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Our Legacy
              </div>
              <h2 className="section-heading">
                Two Decades of<br />Academic <em>Excellence</em>
              </h2>
              <p className="section-sub">
                What began over 20 years ago as a focused dental training initiative has evolved
                into one of India's most established PG preparation ecosystems — trusted by 
                dentists across the country for its results.
              </p>
              <Link href="/legacy" className={`btn-dark ${styles.legacyCta}`}>Read Our Story</Link>
            </div>
            <div className={styles.legacyRight}>
              <div className={styles.legacyCards}>
                {[
                  { num: '20+', label: 'Years of Consistent\nAcademic Presence', color: '#1a2e1a' },
                  { num: '40K+', label: 'Dentists Mentored\nAcross India', color: '#2d4a2d' },
                  { num: '5K+', label: 'Students Per\nLive Exam Session', color: '#a8d530', dark: false },
                  { num: '#1', label: 'Ranks Across National\nDental Exams', color: '#1a2e1a' },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={styles.legacyCard}
                    style={{ background: card.color }}
                  >
                    <div className={`${styles.legacyNum} ${!card.dark && card.color === '#a8d530' ? styles.legacyNumDark : ''}`}>
                      {card.num}
                    </div>
                    <div className={`${styles.legacyLabel} ${!card.dark && card.color === '#a8d530' ? styles.legacyLabelDark : ''}`}>
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP RANKERS */}
      <section className={styles.rankers}>
        <div className="container">
          <div className={styles.rankersHead}>
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Proven Results
              </div>
              <h2 className="section-heading">Results that <em>Define Us</em></h2>
            </div>
            <Link href="/achievements" className="btn-dark">View All Results</Link>
          </div>
          <div className={styles.rankersGrid}>
            {rankers.map((r, i) => (
              <div key={i} className={styles.rankerCard}>
                <div className={styles.rankerAvatar}>{r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                <div className={styles.rankerInfo}>
                  <div className={styles.rankerBadge}>{r.rank}</div>
                  <div className={styles.rankerName}>{r.name}</div>
                  <div className={styles.rankerDetail}>{r.exam}</div>
                  <div className={styles.rankerInstitution}>→ {r.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className={styles.courses}>
        <div className="container">
          <div className={styles.coursesHead}>
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              Programs
            </div>
            <h2 className={`section-heading ${styles.coursesH2}`}>
              Our Flagship <em>Courses</em>
            </h2>
            <p className="section-sub" style={{ maxWidth: 560 }}>
              Choose the preparation path that matches your goal — every program is designed 
              around the structure and mentorship that produces top ranks.
            </p>
          </div>
          <div className={styles.coursesGrid}>
            {courses.map((c, i) => (
              <div key={i} className={`${styles.courseCard} ${i === 0 ? styles.courseCardFeatured : ''}`}>
                <div className={styles.courseTag}>{c.tag}</div>
                <h3 className={styles.courseName}>{c.name}</h3>
                <p className={styles.courseDesc}>{c.desc}</p>
                <div className={styles.courseMeta}>
                  <span className={styles.coursePill}>{c.duration}</span>
                  <span className={styles.coursePill}>{c.mode}</span>
                </div>
                <ul className={styles.courseIncludes}>
                  {c.includes.map(item => (
                    <li key={item}>
                      <span className={styles.checkIcon}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/courses" className={i === 0 ? 'btn-primary' : 'btn-dark'} style={{ display: 'block', textAlign: 'center', marginTop: 'auto' }}>
                  See Details
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/courses" className="btn-dark">Explore All Courses</Link>
          </div>
        </div>
      </section>

      {/* LIVE EXAMS */}
      <section className={styles.exams}>
        <div className={styles.examsInner}>
          <div className={styles.examsContent}>
            <div className="section-eyebrow" style={{ color: 'rgba(168,213,48,0.9)' }}>
              <span className="eyebrow-line" style={{ background: 'var(--lime)' }} />
              Live Exam Ecosystem
            </div>
            <h2 className={styles.examsH2}>
              India's Largest<br />Live Dental <em>Exam</em>
            </h2>
            <p className={styles.examsSub}>
              Simulating real competition. Measuring real performance. 
              Delivering real clarity on where you stand nationally.
            </p>
            <div className={styles.examsFeatures}>
              {[
                { icon: '👥', text: '5,000+ Participants Per Session' },
                { icon: '🏆', text: 'National Level Ranking Benchmark' },
                { icon: '📊', text: 'Performance Analytics & Reports' },
                { icon: '🔗', text: 'Direct Link to Final Exam Ranks' },
              ].map((f, i) => (
                <div key={i} className={styles.examFeature}>
                  <span>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">Register for Next Exam</Link>
          </div>
          <div className={styles.examsVisual}>
            <div className={styles.examBigNum}>5,000+</div>
            <div className={styles.examBigLabel}>Students compete simultaneously</div>
            <div className={styles.examRings}>
              <div className={styles.examRing1} />
              <div className={styles.examRing2} />
              <div className={styles.examRing3} />
            </div>
          </div>
        </div>
      </section>

      {/* HYBRID INFRASTRUCTURE */}
      <section className={styles.hybrid}>
        <div className="container">
          <div className={styles.hybridGrid}>
            <div className={styles.hybridLeft}>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Infrastructure
              </div>
              <h2 className="section-heading">
                Study Smarter.<br />Study <em>Anywhere.</em>
              </h2>
              <p className="section-sub">
                Our hybrid model goes beyond online learning. With satellite centers across cities 
                and structured Reading Rooms, you get the accountability of a physical environment 
                with the flexibility of digital access.
              </p>
              <div className={styles.hybridFeats}>
                {[
                  { icon: '🏢', title: 'Satellite Centers', desc: 'Across multiple cities, fully equipped and connected to our academic system' },
                  { icon: '📚', title: 'Reading Rooms', desc: 'Dedicated spaces designed specifically for exam preparation (Coming Soon)' },
                  { icon: '📱', title: 'BDS Next App', desc: 'Live faculty discussions, interactive content, and real-time performance tracking' },
                ].map((f, i) => (
                  <div key={i} className={styles.hybridFeat}>
                    <span className={styles.hybridIcon}>{f.icon}</span>
                    <div>
                      <div className={styles.hybridFeatTitle}>{f.title}</div>
                      <div className={styles.hybridFeatDesc}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/centers" className="btn-dark">Find a Center Near You</Link>
            </div>
            <div className={styles.hybridRight}>
              <div className={styles.hybridCard}>
                <div className={styles.hybridCardTop}>
                  <span className={styles.hybridCardIcon}>📱</span>
                  <h3 className={styles.hybridCardTitle}>BDS Next App</h3>
                </div>
                <p className={styles.hybridCardDesc}>
                  Learning that happens between classes. Live faculty discussions, 
                  interactive content, and real-time performance tracking in your pocket.
                </p>
                <div className={styles.hybridAppBtns}>
                  <a href="#" className={styles.hybridAppBtn}>▶ Google Play</a>
                  <a href="#" className={styles.hybridAppBtn}>🍎 App Store</a>
                </div>
                <div className={styles.hybridAppStats}>
                  <div className={styles.hybridAppStat}>
                    <div className={styles.hybridAppStatNum}>4.8★</div>
                    <div className={styles.hybridAppStatLabel}>App Rating</div>
                  </div>
                  <div className={styles.hybridAppStat}>
                    <div className={styles.hybridAppStatNum}>50K+</div>
                    <div className={styles.hybridAppStatLabel}>Downloads</div>
                  </div>
                  <div className={styles.hybridAppStat}>
                    <div className={styles.hybridAppStatNum}>1000+</div>
                    <div className={styles.hybridAppStatLabel}>Questions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line" />
              Student Stories
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">Quality That Speaks <em>For Itself</em></h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.initials}</div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialDetail}>{t.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaBandInner}>
            <div>
              <h2 className={styles.ctaBandH2}>Ready to Start Your<br /><em>Journey to the Top?</em></h2>
              <p className={styles.ctaBandSub}>
                Join thousands of dentists who chose CEDEES and secured top ranks.
              </p>
            </div>
            <div className={styles.ctaBandActions}>
              <Link href="/courses" className="btn-primary">Explore Courses</Link>
              <Link href="/contact" className="btn-ghost">Talk to a Counsellor</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
