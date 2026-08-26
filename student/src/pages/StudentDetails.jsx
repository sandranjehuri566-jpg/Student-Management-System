import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getStudentById } from '../services/studentService'

function StudentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadStudent() {
      try {
        const data = await getStudentById(id)
        setStudent(data)
      } catch (err) {
        setError('Student not found.')
      } finally {
        setLoading(false)
      }
    }
    loadStudent()
  }, [id])

  if (loading) return <p className="status-text">Loading...</p>
  if (error) return <p className="status-text error">{error}</p>

  return (
    <div className="details-page">
      <h2>{student.fullName}</h2>

      <div className="details-card">
        <p><strong>Admission Number:</strong> {student.admissionNumber}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Grade:</strong> {student.grade}%</p>
      </div>

      <div className="details-actions">
        <button className="btn btn-blue" onClick={() => navigate('/students')}>Back</button>
        <Link to={`/edit-student/${student.id}`} className="btn btn-blue">Edit</Link>
      </div>
    </div>
  )
}

export default StudentDetails