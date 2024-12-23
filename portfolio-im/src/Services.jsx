import React from "react";
import "./Services.css";
import Navbar from "./navbar";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <>
      <Navbar />
      <div className="services">
        <h1>Lo que podemos hacer por ti</h1>
      </div>
      <p>
        Ofrecemos servicios especializados en diseño, desarrollo y mantenimiento
        de experiencias digitales. Desde creación y rediseño de interfaces hasta
        optimización de usabilidad, prototipos funcionales y gestión de bases de
        datos.
      </p>
      <div class="acerca-de-services">
        <h2>Acerca de Matias</h2>
        <ServicesCard
          imageUrl="/images/Diseñoydesarrolloweb.png"
          title="Diseño y desarrollo web"
          description="Creación de páginas web personalizadas y modernas, optimizadas para dispositivos móviles y de fácil navegación."
        />
        <ServicesCard
          imageUrl="/images/Gestióndebasesdedatos.png"
          title="Gestión de bases de datos"
          description="Diseño, configuración y mantenimiento de bases de datos.                                                                                    
"
        />
      </div>
      <div class="acerca-de-services-fila2">
        <ServicesCard
          imageUrl="/images/Mantenimientoysoporte.png"
          title="Mantenimiento y soporte técnico de sitios web"
          description="Actualización de contenido, resolución de errores y mejoras continuas en sitios existentes."
        />
        <ServicesCard
          imageUrl="/images/Despliegueyalojamiento.png"
          title="Despliegue y alojamiento de proyectos"
          description="Configuración de servidores, despliegue de aplicaciones y gestión de dominios."
        />
      </div>

      <div class="acerca-de-services-fila3">
        <ServicesCard
          imageUrl="/images/esarrollodecomp.png"
          title="Desarrollo de componentes reutilizables"
          description="Creación de bibliotecas de componentes visuales en frameworks como React para agilizar futuros desarrollos.
"
        />
      </div>
      
      <div class="acerca-de-services-ivan">
        <h2>Acerca de Ivan</h2>
        <ServicesCard
          imageUrl="/images/Auditoríauxui.png"
          title="Auditoría UX/UI"
          description="Análisis integral de interfaces y experiencias existentes."
        />
        <ServicesCard
          imageUrl="/images/image 27.png"
          title="Rediseño de Interfaces"
          description="Actualización visual y funcional de productos digitales.                                                                                    
"
        />
      </div>

      <div class="acerca-de-services-ivanfila2">
        <ServicesCard
          imageUrl="/images/OptimizacióndeUsabilidad.png"
          title="Optimización de Usabilidad"
          description="Soluciones para mejorar la experiencia del usuario."
        />
        <ServicesCard
          imageUrl="/images/PrototiposFuncionales.png"
          title="Prototipos Funcionales"
          description="Creación de modelos interactivos listos para pruebas.                                                                                    
"
        />
      </div>
      <div class="acerca-de-services-ivanfila3">
        <ServicesCard
          imageUrl="/images/PruebasdeUsabilidad.png"
          title="Pruebas de Usabilidad"
          description="Validación de productos digitales con usuarios reales."
        />
        <ServicesCard
          imageUrl="/images/InvestigaciónUX.png"
          title="Investigación UX"
          description="Análisis profundo para entender necesidades y problemas.                                                                                    
"
        />
      </div>
      <div class="acerca-de-services-ivanfila4">
        <ServicesCard
          imageUrl="/images/image 32.png"
          title="Mapeo de Experiencias"
          description="Diseño de trayectorias completas de usuario."
        />
        <ServicesCard
          imageUrl="/images/ConsultoríaEstratégica.png"
          title="Consultoría Estratégica"
          description="Guía en la implementación de metodologías UX eficaces.                                                                                    
"
        />
      </div>
    </>
  );
}

export default Services;
