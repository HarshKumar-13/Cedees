import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

const allCourses = [
  { slug: 'zenith-pro', tag: 'NEET MDS', faculty: 'Dr. Sunitha Reddy', title: 'NEET MDS Intensive Preparation Program', desc: 'Focused, structured preparation built around the NEET MDS pattern with adaptive mock series.', duration: '6 Months', mode: 'Online+Offline', price: '₹72,000/yr', img: 'course2' },
  { slug: 'ini-cet-pro', tag: 'INI-CET', faculty: 'Dr. Anil Thomas', title: 'INI-CET Pro — Institution Specific Strategy', desc: 'Targeted INI-CET preparation with institution-specific strategy sessions and mentorship.', duration: '8 Months', mode: 'Hybrid', price: '₹89,000/yr', img: 'course3' },
  { slug: 'aiims-mds', tag: 'AIIMS MDS', faculty: 'Dr. Meena Iyer', title: 'AIIMS MDS Preparation Program', desc: 'Highly focused program targeting AIIMS MDS with case-based learning and specialist mentors.', duration: '6 Months', mode: 'Online', price: '₹55,000/yr', img: 'course4' },
  { slug: 'live-exam', tag: 'Live Exam', faculty: 'CEDEES Exam Cell', title: 'Live Exam Series — National Benchmark', desc: "India's largest live dental exam. 5,000+ students. National ranking and performance analytics.", duration: 'Monthly', mode: 'Online', price: '₹18,000/mo', img: 'course5' },
  { slug: 'foundation', tag: 'Foundation', faculty: 'Dr. Vikram Nair', title: 'BDS Final Year Foundation Track', desc: 'Start your PG preparation while still in BDS final year. Build the right habits early.', duration: '6 Months', mode: 'Online', price: '₹45,000/6mo', img: 'course6' },
  { slug: 'repeat-aspirant', tag: 'Repeat Aspirant', faculty: 'Dr. R. Krishnamurthy', title: "Repeat Aspirant Intensive — Get It Right This Time", desc: "Specifically designed for repeat aspirants. Different approach, different results.", duration: '10 Months', mode: 'Hybrid', price: '₹99,000/yr', img: 'course1' },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link><span>/</span><span>Courses</span>
            </div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>All Programs</span>
            </div>
            <h1 className={styles.heroH1}>Choose the Right<br /><em>Preparation Path</em></h1>
            <p className={styles.heroSub}>Every CEDEES program is built around one goal — getting you the rank you deserve. Find the course that fits your timeline, budget, and target exam.</p>
            <div className={styles.filters}>
              {['All Courses','NEET MDS','INI-CET','AIIMS MDS','Live Exams','Hybrid'].map(f => (
                <button key={f} className={`${styles.filterTab} ${f === 'All Courses' ? styles.filterActive : ''}`}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className={styles.listing}>
        <div className="container">
          {/* Featured */}
          <Link href="/courses/zenith-pro" className={styles.featuredCard}>
            <div className={styles.fcImg}>
              <div className={`${styles.fcImgInner} ${styles.imgCourse1}`} />
              <div className={styles.fcLabel}>⭐ Flagship Program</div>
              <div className={styles.fcPrice}>₹1,20,000 / year</div>
            </div>
            <div className={styles.fcBody}>
              <div className={styles.fcTag}>Most Popular · 500+ Enrolled This Year</div>
              <h2 className={styles.fcTitle}>Zenith Pro — The Highest Impact Dental PG Preparation Program</h2>
              <p className={styles.fcDesc}>Designed for serious aspirants who are committed to securing a top rank. Zenith Pro combines live classes, personalised mentorship, mock exams, and app access into one seamless preparation system.</p>
              <div className={styles.fcPills}>
                {['12 Months','Hybrid','Personal Mentor','NEET + INI-CET + AIIMS'].map(p => <span key={p} className={styles.fcPill}>{p}</span>)}
              </div>
              <div className={styles.fcIncludes}>
                {['Live Classes 5x/week','Monthly Mock Exams','Personal Study Mentor','BDS Next App Access','Satellite Center Access','Performance Analytics'].map(i => (
                  <div key={i} className={styles.fcIncItem}><span className={styles.fcCheck}>✓</span>{i}</div>
                ))}
              </div>
              <div className={styles.fcActions}>
                <span className="btn-primary">See Full Details</span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className={styles.grid}>
            {allCourses.map(c => (
              <Link href={`/courses/${c.slug}`} key={c.slug} className={styles.card}>
                <div className={styles.cardImg}>
                  <div className={`${styles.cardImgInner} ${styles[c.img]}`} />
                  <div className={styles.priceBadge}>{c.price}</div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardTag}>{c.tag}</span>
                    <span className={styles.cardFaculty}>{c.faculty}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardFooterItem}>⏱ {c.duration}</span>
                    <span className={styles.cardFooterItem}>📂 {c.mode}</span>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className={styles.comparison}>
        <div className="container">
          <div className={styles.compHead}>
            <div className="section-eyebrow"><span className="eyebrow-line" />Compare Programs</div>
            <h2 className="section-heading">Not Sure Which Course<br />Is <em>Right for You?</em></h2>
          </div>
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <div className={styles.thCell}>Feature</div>
              <div className={`${styles.thCell} ${styles.featured}`}>Zenith Pro ⭐</div>
              <div className={styles.thCell}>NEET MDS</div>
              <div className={styles.thCell}>INI-CET Pro</div>
              <div className={styles.thCell}>AIIMS MDS</div>
            </div>
            {[
              ['Live Classes', '5x/week', '4x/week', '4x/week', '3x/week'],
              ['Personal Mentor', 'Dedicated', '—', 'Shared', '—'],
              ['Mock Exams', 'Monthly', 'Bi-monthly', 'Monthly', 'Bi-monthly'],
              ['BDS Next App', 'Full Access', 'Full Access', 'Full Access', 'Limited'],
              ['Satellite Center', 'All centers', 'All centers', 'All centers', '—'],
              ['Duration', '12 Months', '6 Months', '8 Months', '6 Months'],
              ['Price', '₹1,20,000/yr', '₹72,000/yr', '₹89,000/yr', '₹55,000/yr'],
            ].map(row => (
              <div key={row[0]} className={styles.tableRow}>
                {row.map((cell, i) => (
                  <div key={i} className={`${styles.tableCell} ${i === 1 ? styles.featured : ''}`}>
                    {cell === '—' ? <span className={styles.no}>—</span> : cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
