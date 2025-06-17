import { useEffect, useState } from 'react'; // Importa useState aquí
import Logo from '../../images/clicksaludfarmacia.png';
import '../../blocks/Footer.css';
import '../../blocks/App.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import GetWeatherData from '../../utils/api'; // Tu función para obtener datos del clima

const Footer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSuccess = (res) => {
      setWeatherData(
        res.current.temperature_2m +
          '°C, ' +
          res.current.wind_speed_10m +
          ' km/h'
      );
      setLoading(false);
      setError(null);
    };

    // Función que se ejecutará si GetWeatherData encuentra un error
    const handleError = (errorMessage) => {
      setError(errorMessage);
      setLoading(false);
      setWeatherData(null);
    };

    GetWeatherData(handleSuccess, handleError);
  }, []);

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

              <div className='weather-info-container'>
                {loading && <p>Cargando clima de Palmira...</p>}
                {error && (
                  <p
                    className='weather-error-message'
                    style={{ color: '#D32F2F', fontSize: '0.9em' }}
                  >
                    Error al obtener clima: {error}
                  </p>
                )}
                {weatherData && !loading && !error && (
                  <p>
                    Clima en Palmira: <strong>{weatherData}</strong>
                  </p>
                )}
                {!weatherData && !loading && !error && (
                  <p
                    className='weather-unavailable-message'
                    style={{ fontSize: '0.9em', color: '#666' }}
                  >
                    Clima no disponible.
                  </p>
                )}
              </div>
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
                <a href=' https://wa.me/573045800233?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20productos%20y%20servicios%20de%20tu%20farmacia%20online.%20¿Podrías%20brindarme%20información?'>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
