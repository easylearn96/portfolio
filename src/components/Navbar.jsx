import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MU_DEV</div>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : ''}>Certifications</NavLink>
        <a href="mailto:mian.umarhafeeq78692@gmail.com" className="hire-btn">Hire Me</a>
      </div>
    </nav>
  )
}
