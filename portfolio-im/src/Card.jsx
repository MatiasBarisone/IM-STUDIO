import React from 'react';
import './Card.css';

function Card({ title, description, image, link }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a href={link} download className="btn-download">
        Descargar CV
      </a>
      <img src={image} alt="Imagen de perfil" className="card-image" />
    </div>
  );
}

export default Card;
