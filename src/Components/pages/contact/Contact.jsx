import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Titulli */}
      <h1 className="contact-title">Kontaktoni me Ne</h1>
      
      {/* Përshkrimi */}
      <p className="contact-description">
        Na kontaktoni nëpërmjet platformave tona sociale ose direkt me WhatsApp për porosi.
      </p>
      
      {/* Rrjetet Sociale */}
      <div className="social-links">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/roulette.pizza/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/383043733795"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link whatsapp"
        >
          <FontAwesomeIcon icon={faWhatsapp} aria-label="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
