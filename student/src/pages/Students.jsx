import { useState } from 'react'
import useStudents from '../hooks/useStudents'
import useDebounce from '../hooks/useDebounce'
import SearchBar from '../components/SearchBar'
import StudentCard from '../components/StudentCard'
import '../styles/Student.css'

function Students() {
  const { students, loading, error, removeStudent } = useStudents()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const filteredStudents = students.filter((student) => {
    const query = debouncedSearch.toLowerCase()
    return (
      student.fullName.toLowerCase().includes(query) ||
      student.admissionNumber.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query)
    )
  })

  if (loading) return <p className="status-text">Loading students...</p>
  if (error) return <p className="status-text error">{error}</p>

  return (
    <div className="students-page">
      <h2>Student Records</h2>
      <SearchBar value={search} onChange={setSearch} />

      {filteredStudents.length === 0 ? (
        <p className="status-text">No students found.</p>
      ) : (
        <div className="students-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} onDelete={removeStudent} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Students