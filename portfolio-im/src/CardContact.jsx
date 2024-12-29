import React, { useState } from 'react';
import './CardContact.css';

function CardContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar el modal

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrorMessage('');
    setIsSubmitted(false);
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrorMessage('Ingrese un correo electrónico válido.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
    setIsModalOpen(true);  // Abrir el modal cuando se envíe el formulario
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Cerrar el modal al hacer clic en el botón OK
    window.location.reload();  // Opcional: recargar la página después de cerrar el modal
  };

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  return (
    <div className="card-contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group name-email">
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Escribe tu nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group name-email">
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Escribe tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button
          type="submit"
          className="submit-button"
          disabled={!isFormValid}
        >
          Enviar Mensaje
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {/* Icono personalizado encima del mensaje */}
            <div className="modal-icon">
              <img src="/images/msjenviado.png" alt="Icono enviado" className="icon-image" />
            </div>
            <h2>¡Gracias por contactarnos!</h2>
            <p>Tu mensaje ha sido enviado con éxito. Te responderemos lo antes posible.</p>
            <button onClick={closeModal} className="ok-button">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardContact;
