import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar React Router
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import Services from './Services'; // Página de servicios
import Skills from './Skills'; // Página de habilidades
import Projects from './Projects'; // Página de proyectos
import Contact from './Contact'; // Página de contactos
function App() {
  
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página de inicio */}
        <Route path="/perfil" element={<Profile />} /> {/* Página de perfil */}
        <Route path="/servicios" element={<Services />} /> {/* Página de servicios */}
        <Route path="/habilidades" element={<Skills />} /> {/* Página de habilidades */}
        <Route path="/proyectos" element={<Projects />} /> {/* Página de proyectos */}
        <Route path="/contactos" element={<Contact />} /> {/* Página de contactos */}
      </Routes>
    </Router>
    </>
  )
}

export default App
