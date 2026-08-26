import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Students from '../pages/Students'
import StudentDetails from '../pages/StudentDetails'
import AddStudent from '../pages/AddStudent'
import EditStudent from '../pages/EditStudent'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:id" element={<StudentDetails />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/edit-student/:id" element={<EditStudent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes