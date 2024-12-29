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
                    <div className="skill-icon">
                      <img
                        src="/images/React.png"
                        alt="React"
                        className="skill-icon-img"
                        title="React"
                      />
                      <div className="icon-name">React</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/nodejs.png"
                        alt="NodeJs"
                        className="skill-icon-img"
                        title="Node.js"
                      />
                      <div className="icon-name">Node.js</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/html.png"
                        alt="HTML"
                        className="skill-icon-img"
                        title="HTML"
                      />
                      <div className="icon-name">HTML</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/css.png"
                        alt="CSS"
                        className="skill-icon-img"
                        title="CSS"
                      />
                      <div className="icon-name">CSS</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/js.png"
                        alt="JavaScript"
                        className="skill-icon-img"
                        title="JavaScript"
                      />
                      <div className="icon-name">JS</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/mysql.png"
                        alt="MySQL"
                        className="skill-icon-img"
                        title="MySQL"
                      />
                      <div className="icon-name">MySQL</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/mongodb.png"
                        alt="MongoDB"
                        className="skill-icon-img"
                        title="MongoDB"
                      />
                      <div className="icon-name">MongoDB</div>
                    </div>
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
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/image 10.png"
                        alt="Icono 1"
                        className="skill-icon-img"
                        title="Icono 1"
                      />
                      <div className="icon-name">UX</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/ui.png"
                        alt="UI"
                        className="skill-icon-img"
                        title="UI"
                      />
                      <div className="icon-name">UI</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/prototipado.png"
                        alt="Prototipado"
                        className="skill-icon-img"
                        title="Prototipado"
                      />
                      <div className="icon-name">Prototipado</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/investigacion.png"
                        alt="Investigación"
                        className="skill-icon-img"
                        title="Investigación"
                      />
                      <div className="icon-name">Investigación</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/heuristica.png"
                        alt="Heurística"
                        className="skill-icon-img"
                        title="Heurística"
                      />
                      <div className="icon-name">Heurística</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/ai.png"
                        alt="IA"
                        className="skill-icon-img"
                        title="IA"
                      />
                      <div className="icon-name">IA</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/wireframing.png"
                        alt="Wireframing"
                        className="skill-icon-img"
                        title="Wireframing"
                      />
                      <div className="icon-name">Wireframing</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/pruebausuario.png"
                        alt="Pruebas de Usuario"
                        className="skill-icon-img"
                        title="Pruebas de Usuario"
                      />
                      <div className="icon-name">Pruebas de Usuario</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/userpersona.png"
                        alt="User Persona"
                        className="skill-icon-img"
                        title="User Persona"
                      />
                      <div className="icon-name">User Persona</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/flujousuario.png"
                        alt="Flujo de Usuario"
                        className="skill-icon-img"
                        title="Flujo de Usuario"
                      />
                      <div className="icon-name">Flujo de Usuario</div>
                    </div>
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
                    <div className="skill-icon">
                      <img
                        src="/images/visualcode.png"
                        alt="Visual Studio"
                        className="skill-icon-img"
                        title="Visual Studio Code"
                      />
                      <div className="icon-name">Visual Studio Code</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/git.png"
                        alt="Git"
                        className="skill-icon-img"
                        title="Git"
                      />
                      <div className="icon-name">Git</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/github.png"
                        alt="GitHub"
                        className="skill-icon-img"
                        title="GitHub"
                      />
                      <div className="icon-name">GitHub</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/netfily.png"
                        alt="Netlify"
                        className="skill-icon-img"
                        title="Netlify"
                      />
                      <div className="icon-name">Netlify</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/mysql.png"
                        alt="MySQL"
                        className="skill-icon-img"
                        title="MySQL"
                      />
                      <div className="icon-name">MySQL</div>
                    </div>
                    <div className="skill-icon">
                      <img
                        src="/images/xamp.png"
                        alt="XAMPP"
                        className="skill-icon-img"
                        title="XAMPP"
                      />
                      <div className="icon-name">XAMPP</div>
                    </div>
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
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/figma.png"
                        alt="Figma"
                        className="skill-icon-img"
                        title="Figma"
                      />
                      <div className="icon-name">Figma</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/maze.png"
                        alt="Maze"
                        className="skill-icon-img"
                        title="Maze"
                      />
                      <div className="icon-name">Maze</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/uxtweak.png"
                        alt="UxTweak"
                        className="skill-icon-img"
                        title="UxTweak"
                      />
                      <div className="icon-name">UxTweak</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/figjam.png"
                        alt="Figjam"
                        className="skill-icon-img"
                        title="Figjam"
                      />
                      <div className="icon-name">Figjam</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/canva.png"
                        alt="Canva"
                        className="skill-icon-img"
                        title="Canva"
                      />
                      <div className="icon-name">Canva</div>
                    </div>
                    <div className="skill-icon-ivan">
                      <img
                        src="/images/image 21.png"
                        alt="IA"
                        className="skill-icon-img"
                        title="IA"
                      />
                      <div className="icon-name">IA</div>
                    </div>
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
