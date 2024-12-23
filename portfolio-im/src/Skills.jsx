import Navbar from "./navbar";
import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  // Estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState("skills");

  // Manejar clics en los botones
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="skills-container">
          <button
            className={`skills-button ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => handleTabClick("skills")}
          >
            Habilidades
          </button>
          <button
            className={`skills-button ${activeTab === "tools" ? "active" : ""}`}
            onClick={() => handleTabClick("tools")}
          >
            Herramientas
          </button>
        </div>

        <div className="skills-content">
          {activeTab === "skills" && (
            <div id="skills" className="content active-content">
              <div className="acerca-de-matias-skills">
                <h2>Acerca de Matías</h2>
                <div className="matias-skills">
                  <h1>¿Qué incluye mis habilidades de Programador?</h1>
                  <p>
                    Como programador en desarrollo web utilizo HTML, CSS,
                    JavaScript y React para crear interfaces interactivas. En el
                    back-end, trabajo con Node.js, MySQL, MongoDB, etc, para
                    desarrollar aplicaciones escalables y gestionar bases de
                    datos con Sequelize.
                  </p>
                  <div className="iconos-container">
                    <img
                      src="/images/React.png"
                      alt="React"
                      className="skill-icon"
                      title="React"
                    />
                    <img
                      src="/images/nodejs.png"
                      alt="NodeJs"
                      className="skill-icon"
                      title="Node.js"
                    />
                    <img
                      src="/images/html.png"
                      alt="HTML"
                      className="skill-icon"
                      title="HTML"
                    />
                    <img
                      src="/images/css.png"
                      alt="CSS"
                      className="skill-icon"
                      title="CSS"
                    />
                    <img
                      src="/images/js.png"
                      alt="JavaScript"
                      className="skill-icon"
                      title="JavaScript"
                    />
                    <img
                      src="/images/mysql.png"
                      alt="MySQL"
                      className="skill-icon"
                      title="MySQL"
                    />
                    <img
                      src="/images/mongodb.png"
                      alt="MongoDB"
                      className="skill-icon"
                      title="MongoDB"
                    />
                  </div>
                </div>
              </div>

              <div className="acerca-de-ivan-skills">
                <h2>Acerca de Iván</h2>
                <div className="ivan-skills">
                  <h1>¿Qué incluye mis habilidades de Diseñador?</h1>
                  <p>
                    Como diseñador UX/UI, desarrollo experiencias de usuario
                    eficientes e intuitivas, optimizando la navegación y
                    usabilidad de productos digitales. Trabajo con herramientas
                    y metodologías especializadas para garantizar soluciones
                    centradas en el usuario y alineadas con los objetivos del
                    negocio.
                  </p>
                  <div className="iconos-container-ivan">
                    <img
                      src="/images/image 10.png"
                      alt="Icono 1"
                      className="skill-icon-ivan"
                      title="Icono 1"
                    />
                    <img
                      src="/images/ui.png"
                      alt="UI"
                      className="skill-icon"
                      title="UI"
                    />
                    <img
                      src="/images/prototipado.png"
                      alt="Prototipado"
                      className="skill-icon"
                      title="Prototipado"
                    />
                    <img
                      src="/images/investigacion.png"
                      alt="Investigación"
                      className="skill-icon"
                      title="Investigación"
                    />
                    <img
                      src="/images/heuristica.png"
                      alt="Heurística"
                      className="skill-icon"
                      title="Heurística"
                    />
                    <img
                      src="/images/ai.png"
                      alt="IA"
                      className="skill-icon"
                      title="IA"
                    />
                    <img
                      src="/images/wireframing.png"
                      alt="Wireframing"
                      className="skill-icon"
                      title="Wireframing"
                    />
                    <img
                      src="/images/pruebausuario.png"
                      alt="Pruebas de Usuario"
                      className="skill-icon"
                      title="Pruebas de Usuario"
                    />
                    <img
                      src="/images/userpersona.png"
                      alt="User Persona"
                      className="skill-icon"
                      title="User Persona"
                    />
                    <img
                      src="/images/flujousuario.png"
                      alt="Flujo de Usuario"
                      className="skill-icon"
                      title="Flujo de Usuario"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tools" && (
            <div id="tools" className="content active-content">
              <div className="acerca-de-matias-skills">
                <h2>Acerca de Matías</h2>
                <div className="matias-skills">
                  <h1>¿Qué incluye mis habilidades de Programador?</h1>
                  <p>
                    Como programador en desarrollo web utilizo HTML, CSS,
                    JavaScript y React para crear interfaces interactivas. En el
                    back-end, trabajo con Node.js, MySQL, MongoDB, etc, para
                    desarrollar aplicaciones escalables y gestionar bases de
                    datos con Sequelize.
                  </p>
                  <div className="iconos-container-herramientas">
                    <img
                      src="/images/visualcode.png"
                      alt="Visual Studio"
                      className="skill-icon"
                      title="Visual Studio Code"
                    />
                    <img
                      src="/images/git.png"
                      alt="Git"
                      className="skill-icon"
                      title="Git"
                    />
                    <img
                      src="/images/github.png"
                      alt="GitHub"
                      className="skill-icon"
                      title="GitHub"
                    />
                    <img
                      src="/images/netfily.png"
                      alt="Netlify"
                      className="skill-icon"
                      title="Netlify"
                    />
                    <img
                      src="/images/mysqlherramientas.png"
                      alt="MySQL"
                      className="skill-icon"
                      title="MySQL"
                    />
                    <img
                      src="/images/xamp.png"
                      alt="XAMPP"
                      className="skill-icon"
                      title="XAMPP"
                    />
                  </div>
                </div>
              </div>

              <div className="acerca-de-ivan-skills">
                <h2>Acerca de Iván</h2>
                <div className="ivan-skills">
                  <h1>¿Qué incluye mis habilidades de Diseñador?</h1>
                  <p>
                    Como diseñador UX/UI, desarrollo experiencias de usuario
                    eficientes e intuitivas, optimizando la navegación y
                    usabilidad de productos digitales. Trabajo con herramientas
                    y metodologías especializadas para garantizar soluciones
                    centradas en el usuario y alineadas con los objetivos del
                    negocio.
                  </p>
                  <div className="iconos-container-ivan-herramientas">
                    <img
                      src="/images/figma.png"
                      alt="Figma"
                      className="skill-icon-ivan"
                      title="Figma"
                    />
                    <img
                      src="/images/maze.png"
                      alt="Maze"
                      className="skill-icon"
                      title="Maze"
                    />
                    <img
                      src="/images/uxtweak.png"
                      alt="UxTweak"
                      className="skill-icon"
                      title="UxTweak"
                    />
                    <img
                      src="/images/figjam.png"
                      alt="Figjam"
                      className="skill-icon"
                      title="Figjam"
                    />
                    <img
                      src="/images/canva.png"
                      alt="Canva"
                      className="skill-icon"
                      title="Canva"
                    />
                    <img
                      src="/images/maze.png"
                      alt="Maze"
                      className="skill-icon"
                      title="Maze"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
