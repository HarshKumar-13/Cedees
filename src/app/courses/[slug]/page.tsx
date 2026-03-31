import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function CourseDetailPage() {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.breadcrumb}>
                <Link href="/">Home</Link><span>/</span>
                <Link href="/courses">Courses</Link><span>/</span>
                <span>Zenith Pro</span>
              </div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span>Flagship Program</span>
              </div>
              <h1 className={styles.heroH1}>
                Zenith Pro —<br />The <em>Highest Impact</em><br />PG Preparation
              </h1>
              <p className={styles.heroDesc}>
                Designed for serious aspirants who are committed to securing a top rank. Zenith Pro combines live classes, personalised mentorship, mock exams, and app access into one seamless preparation system.
              </p>
              <div className={styles.heroTags}>
                {['12 Months', 'Hybrid', 'NEET + INI-CET + AIIMS', 'Personal Mentor'].map(t => (
                  <span key={t} className={styles.heroTag}>{t}</span>
                ))}
              </div>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}><div className={styles.heroStatN}>500+</div><div className={styles.heroStatL}>Enrolled This Year</div></div>
                <div className={styles.heroStat}><div className={styles.heroStatN}>AIR 3</div><div className={styles.heroStatL}>Top Rank 2024</div></div>
                <div className={styles.heroStat}><div className={styles.heroStatN}>87%</div><div className={styles.heroStatL}>Students Ranked</div></div>
              </div>
            </div>
            {/* Enroll Card */}
            <div className={styles.enrollCard}>
              <div className={`${styles.enrollImg} ${styles.imgCourse1}`} />
              <div className={styles.enrollBody}>
                <div className={styles.enrollPrice}>₹1,20,000</div>
                <div className={styles.enrollSub}>per year · EMI options available</div>
                <Link href="/contact" className={styles.enrollBtn}>Enroll Now →</Link>
                <Link href="/contact" className={styles.enrollGhost}>Talk to a Counsellor</Link>
                <div className={styles.enrollIncludes}>
                  {['Live Classes 5x/week','Personal Study Mentor','Monthly Mock Exams','BDS Next App — Full Access','All Satellite Centers','Performance Analytics'].map(i => (
                    <div key={i} className={styles.enrollInc}><span className={styles.eiCheck}>✓</span>{i}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className={styles.body}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <div>
              {/* Curriculum */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Course Curriculum</h2>
                {[
                  { title: 'Module 1: Foundations & Anatomy', count: '6 lessons', lessons: ['Introduction to PG Exam Pattern', 'Head & Neck Anatomy — High Yield', 'Oral Histology Essentials', 'General Anatomy Review', 'Module 1 Mock Test'] },
                  { title: 'Module 2: Oral Pathology & Microbiology', count: '8 lessons', lessons: ['Oral Pathology High-Yield Topics', 'Microbiology & Immunology'] },
                  { title: 'Module 3: Prosthodontics & Conservative', count: '10 lessons', lessons: ['Complete Dentures', 'Conservative Dentistry'] },
                  { title: 'Module 4: Orthodontics & Pedodontics', count: '8 lessons', lessons: ['Growth & Development'] },
                  { title: 'Module 5: Surgery & Periodontics', count: '9 lessons', lessons: ['Oral Surgery Essentials'] },
                ].map((mod, i) => (
                  <div key={i} className={styles.currItem}>
                    <details className={styles.currDetails}>
                      <summary className={styles.currSummary}>
                        <span className={styles.currTitle}>{mod.title}</span>
                        <div className={styles.currMeta}>
                          <span className={styles.currBadge}>{mod.count}</span>
                          <span className={styles.currArrow}>▶</span>
                        </div>
                      </summary>
                      <div className={styles.currContent}>
                        {mod.lessons.map(l => <div key={l} className={styles.currLesson}>📄 {l}</div>)}
                      </div>
                    </details>
                  </div>
                ))}
              </div>

              {/* Faculty */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Lead Faculty</h2>
                <div className={styles.facultyCard}>
                  <div className={`${styles.facultyAvatar} ${styles.imgPerson1}`} />
                  <div>
                    <div className={styles.facultyName}>Dr. R. Krishnamurthy</div>
                    <div className={styles.facultyRole}>Founder & Chief Mentor · Oral Pathology</div>
                    <p className={styles.facultyBio}>25+ years of teaching experience. Founder of CEDEES and chief architect of the Zenith Pro program. Personally mentors students aiming for top 10 ranks nationally. Known for breaking down complex topics into high-yield strategies.</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Zenith Pro Results</h2>
                <div className={styles.metricsGrid}>
                  {[
                    { n: '87%', l: 'Students who ranked in their target exam' },
                    { n: 'AIR 3', l: 'Top rank in 2024 by a Zenith Pro student' },
                    { n: '500+', l: 'Students enrolled in the current batch' },
                    { n: '3.2x', l: 'Average rank improvement vs previous attempt' },
                  ].map(m => (
                    <div key={m.n} className={styles.metricCard}>
                      <div className={styles.metricN}>{m.n}</div>
                      <div className={styles.metricL}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className={styles.sideBox}>
                <h3 className={styles.sideBoxTitle}>This course is for you if…</h3>
                <div className={styles.sideList}>
                  {['You are serious about getting a top rank', 'You want structured, mentored preparation', "You're preparing for NEET MDS, INI-CET, or AIIMS", "You've tried other approaches and want results"].map(i => (
                    <div key={i} className={styles.sideItem}><span className={styles.eiCheck}>✓</span>{i}</div>
                  ))}
                </div>
              </div>
              <div className={styles.sideBox} style={{ marginTop: 20 }}>
                <h3 className={styles.sideBoxTitle}>Have Questions?</h3>
                <p className={styles.sidePara}>Our counsellors are available Mon–Sat, 9am–6pm to help you make the right decision.</p>
                <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Talk to a Counsellor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className={styles.related}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-eyebrow"><span className="eyebrow-line" />Other Programs</div>
            <h2 className="section-heading">You Might Also <em>Consider</em></h2>
          </div>
          <div className={styles.relatedGrid}>
            {[
              { slug: 'neet-mds', tag: 'NEET MDS', title: 'NEET MDS Intensive Preparation', duration: '6 Months', price: '₹72,000/yr', img: 'imgCourse2' },
              { slug: 'ini-cet-pro', tag: 'INI-CET', title: 'INI-CET Pro Program', duration: '8 Months', price: '₹89,000/yr', img: 'imgCourse3' },
              { slug: 'live-exam', tag: 'Live Exam', title: 'Live Exam Series — National Benchmark', duration: 'Monthly', price: '₹18,000/mo', img: 'imgCourse5' },
            ].map(c => (
              <Link key={c.slug} href={`/courses/${c.slug}`} className={styles.relCard}>
                <div className={`${styles.relImg} ${styles[c.img]}`} />
                <div className={styles.relBody}>
                  <span className={styles.relTag}>{c.tag}</span>
                  <h3 className={styles.relTitle}>{c.title}</h3>
                  <div className={styles.relFooter}>
                    <span>⏱ {c.duration}</span>
                    <span className={styles.relArrow}>→</span>
                  </div>
                </div>
                <div className={styles.relPrice}>{c.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
