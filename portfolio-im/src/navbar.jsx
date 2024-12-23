import React from 'react';
import { NavLink } from 'react-router-dom'; // Usa NavLink para navegación con clase activa
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
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
