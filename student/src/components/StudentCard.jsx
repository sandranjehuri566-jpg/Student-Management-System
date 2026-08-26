import { Link } from 'react-router-dom'

function StudentCard({ student, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(`Delete ${student.fullName}?`)
    if (confirmDelete) {
      onDelete(student.id)
    }
  }

  return (
    <div className="student-card">
      <h3>{student.fullName}</h3>
      <p><strong>Admission No:</strong> {student.admissionNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Grade:</strong> {student.grade}%</p>

      <div className="student-card-actions">
        <Link to={`/students/${student.id}`} className="btn btn-blue">View</Link>
        <Link to={`/edit-student/${student.id}`} className="btn btn-blue">Edit</Link>
        <button className="btn btn-red" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default StudentCard