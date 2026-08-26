import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getStudentById, updateStudent } from '../services/studentService'
import '../styles/Form.css'

function EditStudent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStudent() {
      const data = await getStudentById(id)
      setFormData(data)
      setLoading(false)
    }
    loadStudent()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.admissionNumber.trim()) newErrors.admissionNumber = 'Admission number is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.course.trim()) newErrors.course = 'Course is required'
    if (formData.grade === '' || formData.grade < 0 || formData.grade > 100) {
      newErrors.grade = 'Grade must be between 0 and 100'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    await updateStudent(id, {
      ...formData,
      grade: Number(formData.grade),
    })

    navigate(`/students/${id}`)
  }

  if (loading) return <p className="status-text">Loading...</p>

  return (
    <div className="form-page">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <label>Full Name</label>
        <input name="fullName" value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <span className="error-text">{errors.fullName}</span>}

        <label>Admission Number</label>
        <input name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} />
        {errors.admissionNumber && <span className="error-text">{errors.admissionNumber}</span>}

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <label>Course</label>
        <input name="course" value={formData.course} onChange={handleChange} />
        {errors.course && <span className="error-text">{errors.course}</span>}

        <label>Grade</label>
        <input type="number" name="grade" value={formData.grade} onChange={handleChange} />
        {errors.grade && <span className="error-text">{errors.grade}</span>}

        <button type="submit" className="btn btn-blue">Save Changes</button>
      </form>
    </div>
  )
}

export default EditStudent