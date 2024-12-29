import './Home.css';
import React, { useEffect, useState } from 'react';
import Navbar from './navbar.jsx';
import Card from './Card.jsx';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Al montar el componente, activamos la clase 'loaded' para animar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Cambiar el estado a 'true' después de un breve retraso
    }, 300); // Tiempo de retraso antes de aplicar la clase
    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  return (
    <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <h1>¡Bienvenido/a!👋</h1>
      <div className="card-container">
        <Card
          title="¡Hola, soy Matias Barisone!"
          description="Soy Técnico Programador con experiencia en desarrollo web y backend. Trabajo con tecnologías como HTML, CSS, JavaScript, MySQL, React, Express y Sequelize. Me especializo en crear aplicaciones funcionales y eficientes, diseñando bases de datos y optimizando procesos para resolver desafíos técnicos."
          image="/images/MATIAS.png"
          link="/cv.pdf"
        />
        <Card
          title="¡Hola, soy Iván Andrade!"
          description="Soy un diseñador UX/UI con experiencia en análisis de usabilidad, diseño centrado en el usuario y rediseño de productos digitales. He desarrollado habilidades en arquitectura de información, creación de user personas, prototipos interactivos y pruebas de usuario. Aplicando heurísticas, leyes UX y metodologías como Lean UX, me especializo en transformar ideas en experiencias digitales intuitivas y funcionales que conectan a las personas con los productos de manera significativa."
          image="/images/IVAN.png"
          link="/portfolio.pdf"
        />
      </div>
    </div>
  );
}

export default Home;
