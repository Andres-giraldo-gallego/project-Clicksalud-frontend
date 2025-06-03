import React from 'react';
import Logo from '../../images/clicksaludfarmacia.png';
import '../../blocks/Footer.css';
import '../../blocks/App.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-grid'>
          <div className='footer-section-logo'>
            <Logo />
            <p className='footer-description'>
              ClickSalud Farmacia Tu farmacia online de confianza, comprometida
              con tu salud y bienestar.
            </p>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
          </div>

          <div>
            <h3 className='footer-section-title'>Enlace rápido</h3>
            <ul className='footer-list'>
              <li>
                <a href='#'>Productos</a>
              </li>
              <li>
                <a href='#'>Servicios</a>
              </li>
              <li>
                <a href='#'>Inicio</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='footer-section-title'>Contacto</h3>
            <ul className='footer-list'>
              <li>
                <a href='#'>📧 info@clicksalud.com</a>
              </li>
              <li>
                <a href='#'> 📞 +57 (304) 5800233</a>
              </li>
              <li>
                <a href='#'>🕒 24/7 Atención Online</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom-border'>
          <div className='footer-bottom-content'>
            <p className='footer-copyright'>Servicio Personalizado</p>
            <div className='footer-payment-methods'>
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
