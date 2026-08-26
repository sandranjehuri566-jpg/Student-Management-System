import { useState, useEffect } from 'react'
import { getAllStudents, deleteStudent } from '../services/studentService'

// Handles loading the student list and deleting a student.
// Pages that need the list just call this hook.
function useStudents() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const data = await getAllStudents()
      setStudents(data)
      setError(null)
    } catch (err) {
      setError('Could not load students. Is json-server running?')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const removeStudent = async (id) => {
    await deleteStudent(id)
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  return { students, loading, error, fetchStudents, removeStudent }
}

export default useStudents