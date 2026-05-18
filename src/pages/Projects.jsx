import { useState } from 'react'
import { projects } from '../data/portfolio.js'
import Footer from '../components/Footer.jsx'
import styleDash from '../assets/style_dash.PNG'
import aiGlasses from '../assets/AI_glaases.png'
import procteo from '../assets/procteo.png'
import lemoz from '../assets/lemoz.png'
import photoConverter from '../assets/photo_convertor.png'
import bankingApp from '../assets/banking_app.png'
import luxoraImg from '../assets/luxora .png'
import thunderBulls from '../assets/thundar_bulls.png'

const EMOJIS = {
  'ML/AI': '🤖', 'Full Stack': '🌐', 'Frontend': '🖥️'
}

const FILTERS = ['All', 'Full Stack', 'ML/AI', 'Frontend']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="page">
      <section className="projects-page">
        <div className="projects-header">
          <div className="projects-count">0{projects.length} // MORE</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>
            Selected Projects
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Things I've built with passion</p>
        </div>

        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-img">
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
                  <span>{EMOJIS[p.category] || '💡'}</span>
                )}
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.description}</div>
                <div className="project-tags">
                  {p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal box */}
        <div className="terminal-box">
          <div className="terminal-header">
            <div className="dot dot-red" /><div className="dot dot-yellow" /><div className="dot dot-green" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>bash</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">{'> '}</span>system.run("fetch_more_work")</div>
            <div className="out">{'> '} Querying GitHub repositories...</div>
            <div className="out">{'> '} Accessing legacy archives...</div>
            <div className="out">{'> '} Sync complete.</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
