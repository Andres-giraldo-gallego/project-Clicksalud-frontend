import '../../blocks/Header.css';
import Logo from '../../images/clicksaludfarmacia.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='header__logo'>
          <img src={Logo} alt='ClickSalud Logo' className='footer__logo' />
          <p className='header__description'>Clicksalud Farmacia</p>
        </div>
      </Link>
      <div className='header__container'>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <Link to='/'>
              <li className='header__nav-item'>
                <a href='#Inicio'>Inicio</a>
              </li>
            </Link>
            <li className='header__nav-item'>
              <a href='#CategoríasPrincipales'>Productos</a>
            </li>
            <li className='header__nav-item'>
              <a href='#NuestrosServicios'>Servicios</a>
            </li>
            <li className='header__nav-item'>
              <a href='#contacto'>Contacto</a>
            </li>
          </ul>
        </nav>
        <div className='header__bottom-signin'>
          <Link to='/signin'>
            <button className='header__signin-button'>Iniciar Sesión</button>
          </Link>
        </div>

        <div className='header__bottom-signup'>
          <Link to='/signup'>
            <button className='header__signup-button'>Registrarse</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
