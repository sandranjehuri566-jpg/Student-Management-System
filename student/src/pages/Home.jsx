import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-page">
      <h1>Student Management System</h1>
      <p>
        This is a simple application to manage student records for our
        college project. You can view all students, add new ones, and
        update or remove existing records.
      </p>

      <div className="home-buttons">
        <Link to="/students" className="btn btn-blue">View Students</Link>
        <Link to="/add-student" className="btn btn-blue">Add Student</Link>
      </div>
    </div>
  )
}

export default Home