import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, skills } from '../data/portfolio.js'
import Footer from '../components/Footer.jsx'
import profileImg from '../assets/11.jpg'
import cvFile from '../assets/Muhammad_Umar.pdf'

export default function Home() {
  const [bars, setBars] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const newBars = {}
      Object.entries(skills).forEach(([k, v]) => { newBars[k] = v.percent })
      setBars(newBars)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page">
      {/* ── Hero ── */}
      <section className="hero grid-bg">
        <div className="hero-left">
          <div className="hero-badge">System.ready()</div>
          <h1 className="hero-title">
            Hello, I'm{' '}
            <span className="cyan">Muhammad </span>
            <span className="purple">Umar</span>
          </h1>
          <p className="hero-subtitle">
            MERN Stack Developer &amp; AI/ML Engineer. Building scalable web
            applications and intelligent systems — from concept to deployment.
            Based in Lahore, Pakistan.
          </p>
          <div className="hero-btns">
            <Link to="/projects" className="btn-primary">View My Work →</Link>
            <a
              href={cvFile}
              download="Muhammad_Umar.pdf"
              className="btn-outline"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-frame">
            <div className="profile-placeholder">
              <img src={profileImg} alt="Muhammad Umar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>

          <div className="code-card">
            <div className="code-card-header">
              <div className="dot dot-red" />
              <div className="dot dot-yellow" />
              <div className="dot dot-green" />
              <span>profile.json</span>
            </div>
            <div className="code-body">
              <span className="brace">{'{'}</span><br />
              &nbsp;&nbsp;<span className="code-key">"name"</span>: <span className="code-str">"Muhammad Umar"</span>,<br />
              &nbsp;&nbsp;<span className="code-key">"role"</span>: <span className="code-str">"MERN + AI/ML"</span>,<br />
              &nbsp;&nbsp;<span className="code-key">"focus"</span>: <span className="code-arr">["Full-Stack", "MLOps"]</span>,<br />
              &nbsp;&nbsp;<span className="code-key">"cgpa"</span>: <span className="code-str">"3.56"</span>,<br />
              &nbsp;&nbsp;<span className="code-key">"status"</span>: <span className="code-str">"Open to work"</span><br />
              <span className="brace">{'}'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="skills-section">
        <div className="section-label">CAPABILITIES</div>
        <h2 className="section-title">My Technical Arsenal</h2>
        <div className="section-divider" />
        <div className="skills-grid">
          {Object.entries(skills).map(([cat, info]) => (
            <div className="skill-card" key={cat}>
              <div className="skill-card-header">
                <span className="skill-icon">{info.icon}</span>
                <span className="skill-cat">{cat}</span>
              </div>
              <div className="skill-primary">
                <span>{info.primary}</span>
                <span className="skill-pct">{info.percent}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${bars[cat] || 0}%` }} />
              </div>
              <div className="skill-tags">
                {info.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
