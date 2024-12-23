import React from 'react';
import Card from './Card';

function CardContainer() {
  const cardsData = [
    {
      title: '¡Hola, soy Matias Barisone!',
      description:
        'Soy Técnico Programador con experiencia en desarrollo web y backend. Trabajo con tecnologías como HTML, CSS, JavaScript, MySQL, React, Express y Sequelize. Me especializo en crear aplicaciones funcionales y eficientes, diseñando bases de datos y optimizando procesos para resolver desafíos técnicos.',
      image: '/images/MATIAS.png',
      link: '/cv.pdf',
    },
    {
      title: '¡Hola, soy otra persona!',
      description:
        'Soy desarrollador frontend con experiencia en React, CSS avanzado y diseño UI/UX. Me apasiona crear interfaces modernas y accesibles para los usuarios.',
      image: '/images/OTHER_PERSON.png',
      link: '/portfolio.pdf',
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default CardContainer;
