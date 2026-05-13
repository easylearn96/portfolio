import { certifications, education } from '../data/portfolio.js'
import Footer from '../components/Footer.jsx'

export default function Certifications() {
  return (
    <div className="page">
      <section className="certs-page">
        {/* Education */}
        <div className="edu-section">
          <div className="section-label">ACADEMIC</div>
          <h1 className="section-title">Education</h1>
          <div className="section-divider" />
          <div className="edu-grid">
            {education.map((e, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-inst">{e.institution}</div>
                <div className="edu-grade">{e.grade}</div>
                <div className="edu-year">{e.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="section-label">CREDENTIALS</div>
          <h2 className="section-title">Certifications &amp; Courses</h2>
          <div className="section-divider" />
          <div className="certs-grid">
            {certifications.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-name">{c.name}</div>
                <div className="cert-inst">{c.institution}</div>
                <div className="cert-meta">
                  <span className="cert-grade">Grade: {c.grade}</span>
                  <span className="cert-year">{c.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
