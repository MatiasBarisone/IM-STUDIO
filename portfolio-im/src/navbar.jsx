import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Usa NavLink para navegación con clase activa
import './navbar.css';

function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Al cargar el componente, activamos la clase "loaded"
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Cambiar el estado para aplicar la clase 'loaded'
    }, 100); // Tiempo para esperar antes de aplicar la clase (ajustar según necesidad)
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`navbar ${isLoaded ? 'loaded' : ''}`}>
      <div className="navbar-left">
        <img src="/images/logo.jpg" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <NavLink to="/" exact activeClassName="active">
          Inicio
        </NavLink>
        <NavLink to="/perfil" activeClassName="active">
          Perfil
        </NavLink>
        <NavLink to="/servicios" activeClassName="active">
          Servicios
        </NavLink>
        <NavLink to="/habilidades" activeClassName="active">
          Habilidades
        </NavLink>
        <NavLink to="/proyectos" activeClassName="active">
          Proyectos
        </NavLink>
        <NavLink to="/contactos" activeClassName="active">
          Contactos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
