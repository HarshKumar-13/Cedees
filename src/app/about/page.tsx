import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

const team = [
  { name: 'Dr. R. Krishnamurthy', role: 'Founder & Chief Mentor', initials: 'RK', expertise: 'Oral Pathology | 25+ Years Teaching' },
  { name: 'Dr. Sunitha Reddy', role: 'Academic Director', initials: 'SR', expertise: 'Prosthodontics | 18+ Years' },
  { name: 'Dr. Anil Thomas', role: 'Head of Examinations', initials: 'AT', expertise: 'Orthodontics | 15+ Years' },
  { name: 'Dr. Meena Iyer', role: 'Senior Faculty', initials: 'MI', expertise: 'Periodontics | 12+ Years' },
  { name: 'Dr. Vikram Nair', role: 'Senior Faculty', initials: 'VN', expertise: 'Pedodontics | 10+ Years' },
  { name: 'Dr. Preethi Suresh', role: 'Technology & App Lead', initials: 'PS', expertise: 'Oral Medicine | Innovation' },
]

const milestones = [
  { year: '2003', title: 'Founded in Chennai', desc: 'CEDEES was established with a singular mission — to transform how dentists prepare for PG exams in India.' },
  { year: '2008', title: 'First Satellite Center', desc: 'Expanded beyond Chennai with our first satellite center, bringing structured preparation to more cities.' },
  { year: '2012', title: 'Live Classroom Revolution', desc: 'Pioneered the live classroom model, combining technology and in-person engagement for superior outcomes.' },
  { year: '2017', title: 'India\'s Largest Live Exam', desc: 'Launched the first national live dental exam session, setting the benchmark for real-time performance assessment.' },
  { year: '2021', title: 'BDS Next App Launch', desc: 'Introduced our flagship mobile learning platform, extending preparation beyond classroom walls.' },
  { year: '2024', title: '40,000+ Dentists Trained', desc: 'Crossed a landmark milestone, cementing our position as India\'s most trusted dental PG preparation institute.' },
]

const values = [
  {
    icon: '🎯',
    title: 'Results First',
    desc: 'Every decision we make — faculty, content, structure — is guided by one question: does this help our students rank better?',
  },
  {
    icon: '🤝',
    title: 'Mentorship Over Instruction',
    desc: 'We believe ranks are produced by mentors who engage directly, guide continuously, and hold students accountable.',
  },
  {
    icon: '🔬',
    title: 'Continuous Innovation',
    desc: 'From live exams to hybrid centers to our app, we evolve our model to meet the changing landscape of PG preparation.',
  },
  {
    icon: '🌐',
    title: 'Accessibility at Scale',
    desc: 'No student should be denied quality preparation due to geography. Our satellite centers and app bring CEDEES everywhere.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Our Story</span>
          </div>
          <h1 className={styles.heroH1}>
            Two Decades.<br />One Purpose.<br /><em>Your Rank.</em>
          </h1>
          <p className={styles.heroSub}>
            Since 2003, CEDEES has been the institution dentists across India trust 
            when they are serious about their PG preparation. Not because we promise 
            the most — but because we deliver consistently.
          </p>
        </div>
        <div className={styles.heroStats}>
          {[
            { num: '20+', label: 'Years of Legacy' },
            { num: '40K+', label: 'Dentists Trained' },
            { num: '5K+', label: 'Live Exam Students' },
            { num: '12+', label: 'Satellite Centers' },
          ].map(s => (
            <div key={s.label} className={styles.heroStat}>
              <div className={styles.heroStatNum}>{s.num}</div>
              <div className={styles.heroStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO / FOUNDER */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Founder's Note
              </div>
              <h2 className="section-heading">
                Built on a<br /><em>Simple Belief</em>
              </h2>
              <blockquote className={styles.founderQuote}>
                "The CEDEES philosophy was built on a core belief: that mentorship 
                is what produces rankers. Our faculty model is built around direct 
                engagement, structured guidance, and accountability at every stage 
                of preparation. Ranks don't happen by accident — they happen by design."
              </blockquote>
              <div className={styles.founderInfo}>
                <div className={styles.founderAvatar}>RK</div>
                <div>
                  <div className={styles.founderName}>Dr. R. Krishnamurthy</div>
                  <div className={styles.founderTitle}>Founder, CEDEES | Oral Pathologist</div>
                </div>
              </div>
            </div>
            <div className={styles.introRight}>
              <div className={styles.introCard}>
                <div className={styles.introCardTop}>
                  <span className={styles.introCardIcon}>🎓</span>
                  <h3 className={styles.introCardTitle}>Our Mission</h3>
                </div>
                <p className={styles.introCardText}>
                  To create the most structured, mentorship-driven, and results-focused 
                  dental PG preparation ecosystem in India — accessible to every serious 
                  aspirant regardless of their geography.
                </p>
              </div>
              <div className={styles.introCard}>
                <div className={styles.introCardTop}>
                  <span className={styles.introCardIcon}>🔭</span>
                  <h3 className={styles.introCardTitle}>Our Vision</h3>
                </div>
                <p className={styles.introCardText}>
                  To be the institution every dentist in India associates with their 
                  biggest academic achievement — the institute that made their rank possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className={styles.timeline}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line" />
              Our Journey
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">Two Decades of <em>Growth</em></h2>
          </div>
          <div className={styles.timelineList}>
            {milestones.map((m, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                  {i < milestones.length - 1 && <div className={styles.timelineTrack} />}
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CEDEES */}
      <section className={styles.why}>
        <div className="container">
          <div className={styles.whyHead}>
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              Why Choose Us
            </div>
            <h2 className="section-heading">
              Why CEDEES?<br /><em>The Answer Is in the Numbers.</em>
            </h2>
            <p className="section-sub" style={{ maxWidth: 520 }}>
              Twenty years of consistency isn't luck. It's the result of a system — 
              built around mentorship, live preparation, and a relentless focus on results.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {[
              {
                num: '20+',
                title: 'Years of Experience',
                desc: 'No dental PG institute in India has a longer, more consistent track record of producing rankers.',
                color: '#1a2e1a',
              },
              {
                num: '40K+',
                title: 'Dentists Trained',
                desc: 'A national alumni network that speaks for the quality of our program — across every major city in India.',
                color: '#2d4a2d',
              },
              {
                num: 'Top Ranks',
                title: 'Every Year',
                desc: 'CEDEES students appear in the top ranks of AIIMS, INI-CET, and NEET MDS, year after year without exception.',
                color: '#a8d530',
                dark: true,
              },
              {
                num: '#1',
                title: 'Live Exam in India',
               desc: "India's Largest Live Dental Exam — real competition, real benchmarking, real preparation.",
                color: '#3d6b3d',
              },
            ].map((w, i) => (
              <div key={i} className={styles.whyCard} style={{ background: w.color }}>
                <div className={`${styles.whyNum} ${w.dark ? styles.whyNumDark : ''}`}>{w.num}</div>
                <div className={`${styles.whyTitle} ${w.dark ? styles.whyTitleDark : ''}`}>{w.title}</div>
                <p className={`${styles.whyDesc} ${w.dark ? styles.whyDescDark : ''}`}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line" />
              What Drives Us
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">Our Core <em>Values</em></h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.teamHead}>
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              Our Faculty
            </div>
            <h2 className="section-heading">The Minds Behind <em>Your Rank</em></h2>
            <p className="section-sub" style={{ maxWidth: 500 }}>
              Our faculty are not just teachers — they are mentors who have dedicated 
              their careers to understanding exactly what it takes to rank at the top.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.initials}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <div className={styles.teamRole}>{member.role}</div>
                <div className={styles.teamExpertise}>{member.expertise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line" />
              Common Questions
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className={styles.faqGrid}>
            {[
              {
                q: 'How long has CEDEES been operating?',
                a: 'CEDEES was founded in 2003, making us over 20 years old and India\'s oldest continuously operating dental PG preparation institute.',
              },
              {
                q: 'What makes CEDEES different from other institutes?',
                a: 'Three things set us apart: our mentorship model (direct engagement, not just lectures), our Live Exam ecosystem (India\'s largest), and our hybrid infrastructure with satellite centers across India.',
              },
              {
                q: 'Do you have centers outside Chennai?',
                a: 'Yes. We have satellite centers across multiple cities in India. Visit our Centers page or contact us to find the nearest location.',
              },
              {
                q: 'Is the BDS Next App included with all courses?',
                a: 'App access is included with most programs. Specific inclusions depend on the course selected. Check individual course pages for details.',
              },
              {
                q: 'How do live exams work?',
                a: 'Our live exams bring together thousands of students simultaneously in a real-time exam environment. You receive performance analytics and national ranking within your cohort.',
              },
              {
                q: 'Can I join if I\'m a repeat aspirant?',
                a: 'Absolutely. Many of our top performers are repeat aspirants who had tried other institutes. Our structured mentorship approach is especially effective for students who need a different approach.',
              },
            ].map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{item.q}</h3>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH2}>Ready to Join 40,000+<br /><em>Successful Dentists?</em></h2>
            <p className={styles.ctaSub}>Speak to a counsellor today about the right program for you.</p>
            <div className={styles.ctaActions}>
              <Link href="/courses" className="btn-primary">Explore Courses</Link>
              <Link href="/contact" className="btn-ghost">Talk to Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
