import React from 'react';
import './ServicesCard.css';

const ServicesCard = ({ imageUrl, title, description }) => {
  return (
    <div className="cardServices">
      {/* Imagen o logo */}
      <img src={imageUrl} alt={title} className="cardServices-image" />
      
      {/* Contenedor del título y descripción */}
      <div className="cardServices-content">
        <h3 className="cardServices-title">{title}</h3>
        <p className="cardServices-description">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
