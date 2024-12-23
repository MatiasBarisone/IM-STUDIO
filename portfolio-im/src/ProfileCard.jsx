// ProfileCard.jsx
import React from 'react';
import './ProfileCard.css'; // Asegúrate de tener los estilos actualizados

function ProfileCard({ title, description }) {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
      <p className="profile-card-title">{title}</p>
        <p className="profile-card-description">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
