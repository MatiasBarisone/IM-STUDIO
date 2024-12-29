import React from "react";
import "./Contact.css";
import Navbar from "./navbar";
import CardContact from "./CardContact";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="acerca-de-matias-contact">
        <h1>¿Tiene algún proyecto? Envíanos un mensaje</h1>
      </div>
      <p className="matias-contact-p">
        Ponte en contacto con nosotros para contarnos cómo podemos colaborar en
        tu proyecto. Completa el formulario y nos comunicaremos contigo a la
        mayor brevedad para ofrecerte la mejor solución.
      </p>
      <div class="profile-section">
        <h2 class="profile-name">Matías</h2>
        <div class="profile-line"></div>
        <div class="profile-icons">
          <a href="https://facebook.com" target="_blank">
            <img src="/images/wpp.png" alt="Facebook" class="social-icon" />
          </a>
          <a href="https://www.instagram.com/ismatidev/" target="_blank">
            <img src="/images/igg.png" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/matiasbarisone/" target="_blank">
            <img src="/images/link.png" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://github.com/MatiasBarisone" target="_blank">
            <img src="/images/github2.png" alt="GitHub" class="social-icon" />
          </a>
        </div>
      </div>
      <div class="profile-section">
        <h2 class="profile-name-ivan">Iván</h2>
        <div class="profile-line"></div>
        <div class="profile-icons">
          <a href="https://facebook.com" target="_blank">
            <img src="/images/wpp.png" alt="Facebook" class="social-icon" />
          </a>
          <a href="https://www.instagram.com/ismatidev/" target="_blank">
            <img src="/images/igg.png" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/matiasbarisone/" target="_blank">
            <img src="/images/link.png" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://github.com/MatiasBarisone" target="_blank">
            <img src="/images/beh.png" alt="GitHub" class="social-icon" />
          </a>
        </div>
      </div>
      <CardContact/>
    </>
  );
}

export default Contact;
