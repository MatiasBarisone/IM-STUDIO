import React from 'react';
import './ProjectCard.css';

function ProjectCard({ imageSrc, title, description, logos, buttonText, link }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-card-image" />
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
      <div className="project-card-logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="project-card-logo"
          />
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-button"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default ProjectCard;
