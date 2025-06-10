import '../../blocks/HeroSection.css';
import React from 'react';
import { LiaCarSideSolid } from 'react-icons/lia';
import { MdLockClock } from 'react-icons/md';
import { FcAlarmClock } from 'react-icons/fc';
import Farmaceuta from '../../images/farmaceuta.png';
import { FeatureIcon } from './FeatureIcon';

const HeroSection = () => {
  return (
    <section className='section__hero' id='Inicio'>
      <div className='section__hero-container'>
        <div className='section__container-title'>
          <h1 className='Section__Title'>
            Tu salud, nuestra prioridad en cada
          </h1>
          <h1 className='Section__Title-momento'>momento</h1>
          <p className='section__hero-description'>
            Somos especialistas en productos farmacéuticos de alta calidad con
            entrega rápida y atención personalizada para cuidar lo más
            importante: tu bienestar.
          </p>
          <div className='section__icon-container'>
            <FeatureIcon icon={<MdLockClock />} description={'100%seguro'} />
            <FeatureIcon
              icon={<LiaCarSideSolid />}
              description={'Envio gratis'}
            />
            <FeatureIcon
              icon={<FcAlarmClock />}
              description={'24 / 7 Disponible'}
            />
          </div>
        </div>
        <div className='section__image-container'>
          <img
            src={Farmaceuta}
            alt='Imagen de Bienvenida'
            className='section__hero-image'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
