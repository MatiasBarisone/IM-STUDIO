import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import './navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.jpg" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <Link to="/">Inicio</Link> {/* Redirige a la página principal */}
        <Link to="/perfil">Perfil</Link> {/* Redirige a la página de perfil */}
        <Link to="/servicios">Servicios</Link> {/* Redirige a la página de servicios */}
        <Link to="/habilidades">Habilidades</Link> {/* Redirige a la página de habilidades */}
        <Link to="/proyectos">Proyectos</Link> {/* Redirige a la página de proyectos */}
        <Link to="/contactos">Contactos</Link> {/* Redirige a la página de contactos */}
      </div>
    </nav>
  );
}

export default Navbar;
