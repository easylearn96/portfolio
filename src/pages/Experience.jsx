import { experience } from '../data/portfolio.js'
import Footer from '../components/Footer.jsx'

const badgeClass = { MERN: 'badge-mern', 'ML/AI': 'badge-ml', Other: 'badge-other' }

export default function Experience() {
  return (
    <div className="page">
      <section className="exp-page">
        <div className="section-label">WORK HISTORY</div>
        <h1 className="section-title">Professional Experience</h1>
        <div className="section-divider" />

        <div className="timeline">
          {experience.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className={`exp-type-badge ${badgeClass[exp.type] || 'badge-other'}`}>{exp.type}</span>
                <div className="exp-duration">{exp.duration}</div>
              </div>
              <ul className="exp-points">
                {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
