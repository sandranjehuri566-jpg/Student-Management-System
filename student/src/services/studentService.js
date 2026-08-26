const BASE_URL = 'http://localhost:3001/students'

export async function getAllStudents() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Failed to fetch students')
  return res.json()
}

export async function getStudentById(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('Student not found')
  return res.json()
}

export async function createStudent(student) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  })
  if (!res.ok) throw new Error('Failed to add student')
  return res.json()
}

export async function updateStudent(id, updates) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  })
  if (!res.ok) throw new Error('Failed to update student')
  return res.json()
}

export async function deleteStudent(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Failed to delete student')
}