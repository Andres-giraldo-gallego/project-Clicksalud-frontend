import '../../blocks/OurServicesSection.css';
import React from 'react';

const OurServicesSection = () => {
  return (
    <section className='section' id='NuestrosServicios'>
      <div className='section__container'>
        <div className='section__container-title'>
          <h2 className='Section__Title'>Nuestros Servicios</h2>
          <p className='section__description'>
            Cuidamos tu salud con servicios integrales y atención profesional
            personalizada
          </p>
        </div>
        <div className='section__grid'>
          <div className='section__card'>
            <h3 className='section__card-title'>Consultas Médicas Online</h3>
            <p className='section__card-description'>
              Conecta con profesionales de la salud desde la comodidad de tu
              hogar
            </p>
          </div>
          <div className='section__card'>
            <h3 className='section__card-title'>Medicamentos Recetados</h3>
            <p className='section__card-description'>
              Acceso rápido a medicamentos con receta médica verificada
            </p>
          </div>
          <div className='section__card'>
            <h3 className='section__card-title'>Recordatorios de Medicación</h3>
            <p className='section__card-description'>
              Nunca olvides tomar tus medicamentos con nuestros recordatorios
            </p>
          </div>
          <div className='section__card'>
            <h3 className='section__card-title'>Farmacéutico Personal</h3>
            <p className='section__card-description'>
              Asesoramiento personalizado sobre medicamentos y tratamientos
            </p>
          </div>
          <div className='section__card'>
            <h3 className='section__card-title'>Chat 24/7</h3>
            <p className='section__card-description'>
              Atención inmediata para consultas urgentes sobre medicamentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurServicesSection;
