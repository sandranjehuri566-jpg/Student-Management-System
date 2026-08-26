import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Student Portal</div>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => (isActive ? 'active' : '')}>
          Students
        </NavLink>
        <NavLink to="/add-student" className={({ isActive }) => (isActive ? 'active' : '')}>
          Add Student
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar