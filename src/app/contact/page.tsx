'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

const centers = [
  { city: 'Chennai', address: 'Main Campus, Anna Nagar, Chennai 600040', phone: '+91 98765 43210', type: 'Main Campus' },
  { city: 'Bangalore', address: 'Satellite Center, Jayanagar, Bangalore 560041', phone: '+91 98765 43211', type: 'Satellite Center' },
  { city: 'Hyderabad', address: 'Satellite Center, Banjara Hills, Hyderabad 500034', phone: '+91 98765 43212', type: 'Satellite Center' },
  { city: 'Mumbai', address: 'Satellite Center, Andheri West, Mumbai 400053', phone: '+91 98765 43213', type: 'Satellite Center' },
  { city: 'Delhi', address: 'Satellite Center, Lajpat Nagar, New Delhi 110024', phone: '+91 98765 43214', type: 'Satellite Center' },
  { city: 'Pune', address: 'Satellite Center, Kothrud, Pune 411038', phone: '+91 98765 43215', type: 'Satellite Center' },
]

const courses = ['Zenith Pro', 'NEET MDS Intensive', 'INI-CET Pro', 'AIIMS MDS Prep', 'Live Exam Only', 'General Enquiry']

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', course: '', city: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            <span>Get In Touch</span>
          </div>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Contact Us</span>
          </div>
          <h1 className={styles.heroH1}>
            We're Here<br />to <em>Help You</em><br />Rank Higher
          </h1>
          <p className={styles.heroSub}>
            Whether you need course details, counselling, or center information — 
            our team is ready to guide you toward the right preparation path.
          </p>
        </div>
        <div className={styles.heroCards}>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>📞</span>
            <div className={styles.heroCardLabel}>Call Us</div>
            <div className={styles.heroCardValue}>+91 98765 43210</div>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>✉️</span>
            <div className={styles.heroCardLabel}>Email Us</div>
            <div className={styles.heroCardValue}>info@cedees.in</div>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>💬</span>
            <div className={styles.heroCardLabel}>WhatsApp</div>
            <div className={styles.heroCardValue}>+91 98765 43210</div>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.heroCardIcon}>🕐</span>
            <div className={styles.heroCardLabel}>Office Hours</div>
            <div className={styles.heroCardValue}>Mon–Sat, 9am–6pm</div>
          </div>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>
            {/* FORM */}
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>
                  Fill in your details and our counselling team will get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Thank You!</h3>
                  <p className={styles.successText}>
                    Your enquiry has been received. Our counselling team will reach out to you within 24 hours.
                  </p>
                  <button
                    className="btn-dark"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', course: '', city: '', message: '' }) }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Dr. Your Name"
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.label}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="+91 00000 00000"
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label}>Course Interest</label>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select a course</option>
                        {courses.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.label}>Your City</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="e.g. Bangalore, Mumbai, Delhi..."
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.label}>Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="Tell us about your preparation journey, specific questions, or anything else..."
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR INFO */}
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Why Students Choose CEDEES</h3>
                <div className={styles.sideList}>
                  {[
                    '20+ years of proven results',
                    'Direct mentorship from expert faculty',
                    'India\'s largest live exam ecosystem',
                    'Hybrid centers across India',
                    'BDS Next App for on-the-go learning',
                    'Personalised preparation roadmap',
                  ].map((item, i) => (
                    <div key={i} className={styles.sideListItem}>
                      <span className={styles.sideCheck}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sideCard} style={{ background: 'var(--lime)' }}>
                <h3 className={styles.sideTitleDark}>Quick Connect</h3>
                <p className={styles.sideTitleDesc}>Prefer to talk? Reach us directly:</p>
                <a href="tel:+919876543210" className={styles.sideContactLink}>
                  📞 +91 98765 43210
                </a>
                <a href="https://wa.me/919876543210" className={styles.sideContactLink}>
                  💬 WhatsApp Us
                </a>
                <a href="mailto:info@cedees.in" className={styles.sideContactLink}>
                  ✉️ info@cedees.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CENTERS */}
      <section className={styles.centers}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line" />
              Find Us
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">CEDEES Is Closer Than <em>You Think</em></h2>
            <p className="section-sub" style={{ maxWidth: 520, margin: '0 auto' }}>
              Our satellite centers bring the CEDEES experience to you — 
              fully equipped and connected to our academic system.
            </p>
          </div>
          <div className={styles.centersGrid}>
            {centers.map((c, i) => (
              <div key={i} className={`${styles.centerCard} ${c.type === 'Main Campus' ? styles.centerCardMain : ''}`}>
                <div className={styles.centerTop}>
                  <span className={styles.centerCity}>{c.city}</span>
                  <span className={styles.centerType}>{c.type}</span>
                </div>
                <p className={styles.centerAddress}>{c.address}</p>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className={styles.centerPhone}>{c.phone}</a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(c.address)}`} target="_blank" rel="noopener noreferrer" className={styles.centerMap}>
                  View on Maps →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ QUICK */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqGrid}>
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Before You Enquire
              </div>
              <h2 className="section-heading">Quick <em>Answers</em></h2>
              <p className="section-sub">
                Most common questions answered. Still need help? Just reach out.
              </p>
            </div>
            <div className={styles.faqList}>
              {[
                {
                  q: 'How quickly will I hear back?',
                  a: 'Our counselling team responds to all enquiries within 24 hours on working days.',
                },
                {
                  q: 'Can I visit a center before enrolling?',
                  a: 'Yes. We welcome visits to any of our satellite centers. Contact the center directly or through this form.',
                },
                {
                  q: 'Are there EMI options available?',
                  a: 'Yes, we offer flexible payment plans. Our counsellors can walk you through the available options during your consultation.',
                },
                {
                  q: 'Do you offer a free demo class?',
                  a: 'Yes. We offer a free orientation session for serious aspirants. Mention this when you contact us.',
                },
              ].map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <div className={styles.faqQ}>{item.q}</div>
                  <div className={styles.faqA}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
