import { useState, useEffect, useRef } from 'react'
import { profile, skills, projects, experience, certifications, education } from './data/portfolio.js'
import profileImg from './assets/11.jpg'
import styleDash from './assets/style_dash.PNG'
import aiGlasses from './assets/AI_glaases.png'
import procteo from './assets/procteo.png'
import lemoz from './assets/lemoz.png'
import photoConverter from './assets/photo_convertor.png'
import bankingApp from './assets/banking_app.png'
import luxoraImg from './assets/luxora .png'
import thunderBulls from './assets/thundar_bulls.png'
import cvFile from './assets/Muhammad_Umar.pdf'

/* ── Typewriter Effect ── */
function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBlink(!blink), 500)
    return () => clearTimeout(t)
  }, [blink])

  useEffect(() => {
    if (index === words.length) return

    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), 2000)
      return () => clearTimeout(t)
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 40 : 80)
    return () => clearTimeout(t)
  }, [subIndex, index, reverse, words])

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s', marginLeft: '2px' }}>|</span>
    </span>
  )
}

/* ── Custom Cursor ── */
function CustomCursor() {
  const dotRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-circle" ref={circleRef} />
    </>
  )
}

/* ── Active nav on scroll ── */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 80
      let current = ids[0]
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ids])
  return active
}

/* ── Scroll Progress ── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (height === 0) {
        setProgress(0)
        return
      }
      setProgress((scrollY / height) * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/* ── Animated counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = target / 60
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 20)
        obs.disconnect()
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ── Skill bar ── */
function SkillCard({ cat, info }) {
  const [w, setW] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(info.percent), 200); obs.disconnect() }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [info.percent])
  return (
    <div className="skill-card" ref={ref}>
      <div className="sk-header">
        <span className="sk-icon">{info.icon}</span>
        <span className="sk-cat">{cat}</span>
      </div>
      <div className="sk-primary">
        <span>{info.primary}</span>
        <span className="sk-pct">{info.percent}%</span>
      </div>
      <div className="sk-bar"><div className="sk-fill" style={{ width: `${w}%` }} /></div>
      <div className="sk-tags">{info.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
    </div>
  )
}

const EMOJIS = { 'ML/AI': '🤖', 'Full Stack': '🌐', 'Frontend': '💻' }
const THUMBS = { 'ML/AI': 'ml', 'Full Stack': 'fs', 'Frontend': 'fe' }
const BADGE = { MERN: 'badge-mern', 'ML/AI': 'badge-ml', Other: 'badge-other' }
const CERT_ICONS = ['📜', '🎓', '💡', '🏆', '🖥️', '🎬', '🗣️']

const FILTERS = ['All', 'Full Stack', 'ML/AI', 'Frontend']

const NAV_SECTIONS = ['hero', 'skills', 'experience', 'projects', 'certifications', 'contact']
const NAV_LABELS = { hero: 'Home', skills: 'Skills', experience: 'Experience', projects: 'Projects', certifications: 'Certifications', contact: 'Contact' }

export default function App() {
  const [filter, setFilter] = useState('All')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [menuOpen, setMenuOpen] = useState(false)
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const activeSection = useActiveSection(NAV_SECTIONS)
  const scrollProgress = useScrollProgress()

  return (
    <>
      <CustomCursor />
      
      {/* ══ NAVBAR ══ */}
      <nav className="navbar">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        <div className="navbar-left">
          <div className="nav-avatar">
            <img src={profileImg} alt="Umar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="nav-avail">
            <div className="nav-avail-dot" />
            Available for Opportunities
          </div>
        </div>
        <div className={`navbar-links${menuOpen ? ' mobile-open' : ''}`}>
          {NAV_SECTIONS.map(id => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'nav-active' : ''}
               onClick={() => setMenuOpen(false)}>
              {NAV_LABELS[id]}
            </a>
          ))}
        </div>
        <div className="navbar-right">
          <a href={profile.github} target="_blank" rel="noreferrer" className="nav-github" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a href="#contact" className="hire-btn" onClick={() => setMenuOpen(false)}>Hire Me →</a>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span className={menuOpen ? 'ham-open' : ''}></span>
            <span className={menuOpen ? 'ham-open' : ''}></span>
            <span className={menuOpen ? 'ham-open' : ''}></span>
          </button>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      {/* ══ HERO ══ */}
      <section className="hero" id="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <p className="hero-hello">Hello, I'm</p>
          <h1 className="hero-name">Muhammad<br />Umar</h1>
          <p className="hero-role">
            <span className="role-arrow">&gt;&gt;</span>{' '}
            <Typewriter words={['MERN Stack Developer', 'AI / ML Engineer', 'CS Student', 'Problem Solver']} />
          </p>
          <p className="hero-tagline">
            Results-driven <strong>MERN Stack Developer</strong> &amp; <strong>AI/ML Engineer</strong> with
            1+ year of hands-on experience building scalable, production-grade web applications.
            Exploring deep learning and data-driven intelligent systems.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-glow">View My Work ↓</a>
            <a href={cvFile} download="Muhammad_Umar.pdf" className="btn-ghost">Download CV →</a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={`mailto:${profile.email}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            {/* Green dot decorative element */}
            <div className="hero-deco-dot">
              <div className="inner-dot"></div>
            </div>

            {/* Floating badge top-left */}
            <div className="hero-badge-float hero-badge-tl">
              <span className="hbf-icon" style={{color: 'var(--cyan)'}}>🛡️</span>
              <span><strong>7+</strong> Certs</span>
            </div>
            {/* Floating badge top-right */}
            <div className="hero-badge-float hero-badge-tr">
              <span className="hbf-icon" style={{color: '#6e56ff'}}>🎓</span>
              <span>LGU CS 2025</span>
            </div>
            
            {/* Photo frame */}
            <div className="hero-photo-bg"></div>
            <div className="hero-photo-inner">
              <img src={profileImg} alt="Muhammad Umar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>

            {/* Floating badge bottom-left */}
            <div className="hero-badge-float hero-badge-bl">
              <span className="hbf-icon" style={{color: 'var(--text)'}}>⚡</span>
              <div>
                <div style={{fontWeight:700,fontSize:'0.8rem'}}>SmartAI Soft</div>
                <div style={{fontSize:'0.68rem',color:'var(--muted2)'}}>MERN Developer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="section section-alt" id="skills">
        <div className="sec-label">CAPABILITIES</div>
        <h2 className="sec-title">My Technical Arsenal</h2>
        <div className="sec-divider" />
        <div className="skills-grid">
          {Object.entries(skills).map(([cat, info]) => (
            <SkillCard key={cat} cat={cat} info={info} />
          ))}
        </div>
      </section>

      {/* ══ EXPERIENCE & EDUCATION ══ */}
      <section className="section" id="experience">
        <div className="sec-label">BACKGROUND</div>
        <h2 className="sec-title">Experience &amp; Education</h2>
        <div className="sec-divider" />
        <div className="exp-edu-grid">
          {/* Experience */}
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
              // WORK HISTORY
            </h3>
            <div className="timeline">
              {experience.map((exp, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-dot" />
                  <div className="tl-role">
                    {exp.role}
                    <span className={`tl-badge ${BADGE[exp.type] || 'badge-other'}`}>{exp.type}</span>
                  </div>
                  <div className="tl-company">{exp.company}</div>
                  <div className="tl-duration">{exp.duration}</div>
                  <ul className="tl-points">
                    {exp.points.slice(0, 2).map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--purple)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
              // EDUCATION
            </h3>
            <div className="edu-list">
              {education.map((e, i) => (
                <div className="edu-card" key={i}>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-inst">{e.institution}</div>
                  <div className="edu-meta">
                    <span className="edu-grade">{e.grade}</span>
                    <span className="edu-year">{e.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section className="section section-alt" id="projects">
        <div className="sec-label sec-title-center">0{projects.length} // MORE</div>
        <h2 className="sec-title sec-title-center">Selected Projects</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted2)', marginTop: '0.4rem' }}>Things I've built with passion</p>
        <div className="sec-divider sec-divider-center" />
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button key={f} className={`filter-btn${filter === f ? ' active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card" key={i}>
              <div className={`project-thumb ${THUMBS[p.category] || 'fs'}`}>
                {p.title === "Style Dash" ? (
                  <img src={styleDash} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : p.title === "AI Glasses for Visually Impaired" ? (
                  <img src={aiGlasses} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : p.title === "Procteo" ? (
                  <img src={procteo} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : p.title === "Lemoz" ? (
                  <img src={lemoz} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : p.title === "Photo Converter" ? (
                  <img src={photoConverter} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : p.title === "Banking App" ? (
                  <img src={bankingApp} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : p.title === "Luxora.global" ? (
                  <img src={luxoraImg} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : p.title.toLowerCase().includes("thunder") ? (
                  <img src={thunderBulls} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : (
                  <span style={{ position: 'relative', zIndex: 1 }}>{EMOJIS[p.category] || '💡'}</span>
                )}
              </div>
              <div className="proj-body">
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.description}</div>
                <div className="proj-tags">{p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CERTIFICATIONS ══ */}
      <section className="section" id="certifications">
        <div className="sec-label sec-title-center">CREDENTIALS</div>
        <h2 className="sec-title sec-title-center">Certifications</h2>
        <div className="sec-divider sec-divider-center" />
        <div className="certs-grid">
          {certifications.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">{CERT_ICONS[i % CERT_ICONS.length]}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-inst">{c.institution}</div>
              <div className="cert-footer">
                <span className="cert-grade">Grade: {c.grade}</span>
                <span className="cert-year">{c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div className="stats-section">
        <div>
          <div className="stat-num"><Counter target={7} />+</div>
          <div className="stat-label">Projects Built</div>
        </div>
        <div>
          <div className="stat-num"><Counter target={1} />+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div>
          <div className="stat-num"><Counter target={7} /></div>
          <div className="stat-label">Certifications</div>
        </div>
        <div>
          <div className="stat-num"><Counter target={356} />/400</div>
          <div className="stat-label">University CGPA</div>
        </div>
      </div>

      {/* ══ CTA / CONTACT ══ */}
      <section className="cta-section" id="contact">
        <div className="sec-label" style={{ textAlign: 'center', marginBottom: '0.6rem' }}>GET IN TOUCH</div>
        <h2 className="cta-title">Let's Build Something<br /><span>Incredible</span></h2>
        <p className="cta-sub">Open to full-time roles, freelance projects, and collaborations.</p>
        <form
          className="contact-form"
          onSubmit={e => {
            e.preventDefault()
            window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`
          }}
        >
          <div className="form-row">
            <input className="form-input" placeholder="Your Name" value={formData.name}
              onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} required />
            <input className="form-input" placeholder="Email Address" type="email" value={formData.email}
              onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} required />
          </div>
          <textarea className="form-input" placeholder="Tell me about your project..." rows={4}
            value={formData.message}
            onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
            style={{ resize: 'vertical' }} required />
          <button type="submit" className="form-submit">Send Message →</button>
        </form>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="footer-logo">MU_DEV</div>
        <div className="footer-copy">© 2025 Muhammad Umar // Built with React + Vite</div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  )
}
