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
    <footer className='footer' id='contacto'>
      <div className='footer__container'>
        <div className='footer__grid'>
          <div className='footer__section-logo'>
            <div className='footer__logo-container'>
              <img src={Logo} alt='ClickSalud Logo' className='footer__logo' />
              <p className='footer__description'>
                ClickSalud Farmacia Tu farmacia online de confianza,
                comprometida con tu salud y bienestar.
              </p>
            </div>

            <div className='footer__social-icons'>
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
            </div>
          </div>
          <div>
            <h3 className='footer__section-title'>Enlace rápido</h3>
            <ul className='footer__list'>
              <li id='Categorías Principales'>
                <a href='#CategoríasPrincipales'>Productos</a>
              </li>
              <li id='Nuestros Servicios'>
                <a href='#NuestrosServicios'>Servicios</a>
              </li>
              <li id='Inicio'>
                <a href='#Inicio'>Inicio</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='footer__section-title'>Contacto</h3>
            <ul className='footer__list'>
              <li>
                <a href='#'>📧info@clicksalud.com</a>
              </li>
              <li>
                <a href='#'>📞+57 (304)5800233</a>
              </li>
              <li>
                <a href='#'>🕒24/7 Atención Online</a>
              </li>
            </ul>
          </div>

          <div className='footer__bottom-border'>
            <div className='footer__bottom-content'>
              <p className='footer__copyright'>Servicio Personalizado</p>
              <div className='footer__payment-methods'>
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
