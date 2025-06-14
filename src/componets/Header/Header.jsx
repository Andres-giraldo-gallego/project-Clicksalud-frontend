import '../../blocks/Header.css';
import Logo from '../../images/clicksaludfarmacia.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className='header'>
      <Link to='/'>
        <div className='header__logo'>
          <img src={Logo} alt='ClickSalud Logo' className='footer__logo' />
          <p className='header__description'>Clicksalud Farmacia</p>
        </div>
      </Link>
      <div className='header__container'>
        <img
          src={Logo}
          alt='ClickSalud Logo'
          className='footer__logo'
          id='logo__mobiel'
        />
        <button onClick={toggleMenu} className='header__menu-button'>
          <GiHamburgerMenu />
        </button>
        <nav className={`header__nav ${isActive ? 'header__nav-active' : ''}`}>
          <ul className='header__nav-list'>
            <Link to='/'>
              <li className='header__nav-item' href='#Inicio'>
                Inicio
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
