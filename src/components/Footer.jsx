import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">MU_DEV</div>
      <div className="footer-copy">© 2025 Muhammad Umar // Built with React</div>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
