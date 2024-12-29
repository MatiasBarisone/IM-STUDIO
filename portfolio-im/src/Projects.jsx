import React from 'react'
import './Projects.css'
import Navbar from './navbar'
import ProjectCard	 from './ProjectsCard';

function Projects() {
  const project1Logos = [
    '/images/React.png',
    '/images/html.png',
    '/images/css.png',
    '/images/js.png',

  ];

  const project2Logos = [
    '/images/figma.png',
    '/images/canva.png',
    '/images/maze.png'
  ];

  const project3Logos = [
    '/images/figma.png',
    '/images/canva.png',
    '/images/maze.png',
    '/images/uxtweak.png',
  ];
  
  return (
    <>
    <Navbar/>
    <div className="acerca-de-matias-projects">
        <h1>!Nuestros Proyectos!</h1>
      </div>
      <p className='matias-p'>
        Programador especializado en desarrollo web, con experiencia en crear páginas funcionales, personalizadas y adaptadas a las necesidades de los usuarios. Apasionado por ofrecer soluciones intuitivas y eficientes.
      </p>
      <p className='ivan-p'>
      Me enfoco en crear experiencias digitales excepcionales, diseñando interfaces intuitivas, accesibles y visualmente impactantes. Mi objetivo es garantizar una navegación fluida y un diseño centrado en el usuario, brindando soluciones efectivas y fáciles de usar.
      </p>
      <div class="acerca-de-matias-projects">
        <h2>Proyectos de Matias</h2>
        <ProjectCard
        imageSrc="/images/instafit.png"
        title="InstaFit"
        description="Página web realizada para un gimnasio.
Cuenta con lo básico para que el cliente lo modifique a su gusto."
        logos={project1Logos}
        buttonText="Ver Proyecto"
        link="https://instafitt.netlify.app"
      />
        <ProjectCard
        imageSrc="/images/mayezona.png"
        title="InstaFit"
        description="Página web realizada para un emprendimiento de comida rápida. Cuenta con lo básico para que el cliente lo modifique a su gusto."
        logos={project1Logos}
        buttonText="Ver Proyecto"
        link="https://mayezona.netlify.app"
      />
      </div>
    
     
      <div class="acerca-de-ivan-projects">
        <h2>Proyectos de Ivan</h2>
       
        <ProjectCard
        imageSrc="/images/instafit.png"
        title="ClassLink"
        description="Diseño de una plataforma educativa intuitiva que facilita la experiencia de estudiantes y docentes."
        logos={project2Logos}
        buttonText="Ver Proyecto"
        link="https://www.canva.com/design/DAGPomUVktI/NNdyQGtNPyqlGRiHs5ydGQ/edit"
      />
        <ProjectCard
        imageSrc="/images/mayezona.png"
        title="Mi Argentina"
        description="Rediseño centrado en mejorar la usabilidad y navegación de una plataforma gubernamental, simplificando trámites y servicios."
        logos={project3Logos}
        buttonText="Ver Proyecto"
        link="https://www.canva.com/design/DAGTNd8TBaQ/DGW4jorzKxe7A9e9djoD0g/edit?utm_content=DAGTNd8TBaQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton "
      />
      </div>
    

    
    </>
  )
}

export default Projects