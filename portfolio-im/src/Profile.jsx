import React from 'react'
import './Profile.css'
import Navbar from './navbar'
import ProfileCard from './ProfileCard.jsx'

function Profile() {
  return (
    <>
    <Navbar/>
    <div className='educacion'>
    <h1>Educación</h1>
    </div>
    <p>Nuestra formación incluye estudios en diseño UX/UI, tanto inicial como avanzado, y desarrollo de software con enfoque en programación. Esta base académica nos permite trabajar en conjunto para ofrecer soluciones completas y bien fundamentadas en cada proyecto.</p>
    <div class="acerca-de-matias">
  <h2>Acerca de Matias</h2>
  <ProfileCard
        title="2024"
        description="Actualmente estoy cursando una Diplomatura en Desarrollo Backend en UNTREF, lo que representa un paso clave en mi formación profesional y mi especialización en esta área."
      />
      <div className='card2'>
        <ProfileCard
        title="2015-2017"
        description="Completé mi formación secundaria en la Escuela Normal Secundaria    N.º 5, donde obtuve el título de Bachiller con orientación en Ciencias Sociales."
      />
</div>
    <div class="contenedor-matias">
    <img
          src="/images/gorrouniv.png"
          alt="Logo Gorro"
          className="profile-logo"
        />
    <div class="circulo"></div>
    <div class="linea-vertical"></div>
    <div class="circulo"></div>
    <div class="linea-vertical"></div>
    <div class="circulo"></div>
    <div class="linea-vertical"></div>
    <div class="circulo"></div>
   
</div>

<div className='card3'>
<ProfileCard
        title="2018-2021"
        description="Obtuve el título de Técnico Programador de Computadoras, formación en la que desarrollé habilidades en análisis, resolución de problemas y atención al detalle, cualidades que aplico actualmente en el diseño y desarrollo de soluciones digitales claras y funcionales."
      />
</div>
</div>



<div class="acerca-de-ivan">
  <h2>Acerca de Ivan</h2>
  <ProfileCard
        title="2024"
        description="Completé un curso inicial y otro avanzado en diseño UX/UI en Coderhouse, lo que marcó el inicio de mi formación profesional en esta área."
      />
      <div className='card4'>
        <ProfileCard
        title="2015-2017"
        description="Completé mi formación secundaria en la Escuela Normal Secundaria    N.º 5, donde obtuve el título de Bachiller con orientación en Ciencias Sociales."
      />
</div>
    <div class="contenedor-ivan">
    <img
          src="/images/gorrouniv.png"
          alt="Logo Gorro"
          className="profile-logo"
        />
    <div class="circulo"></div>
    <div class="linea-vertical"></div>
    <div class="circulo"></div>
    <div class="linea-vertical"></div>
    <div class="circulo"></div>
    <div class="linea-vertical"></div>
    <div class="circulo"></div>
   
</div>

<div className='card5'>
<ProfileCard
        title="2018-2019"
        description="Obtuve el título de Técnico en Seguridad Pública, donde desarrollé habilidades en análisis, resolución de problemas y atención a detalles, que hoy aplico en el diseño de experiencias digitales claras y funcionales."
      />
</div>
</div>











    </>
  )
}

export default Profile