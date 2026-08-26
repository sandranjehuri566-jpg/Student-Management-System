import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App