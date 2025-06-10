import '../../blocks/VisionMissionSection.css';

const VisionMissionSection = () => {
  return (
    <section className='section__vision-mission'>
      <div className='section__grid-cards-vision-mission'>
        <div className='section__card-vision'>
          <h3 className='section__card-title-vision'>Nuestra Visión</h3>
          <p className='section__card-description'>
            Ser la plataforma líder en asesoría y orientación sobre medicamentos
            y estilo de vida saludable, reconocida por su excelencia profesional
            y de alta calidad. Queremos empoderar al paciente en el cuidado de
            su salud y contribuir al uso responsable de los medicamentos en la
            sociedad.
          </p>
        </div>
        <div className='section__card-mission'>
          <h3 className='section__card-title-mision'>Nuestra Misión</h3>
          <p className='section__card-description'>
            Ofrecer asesoría profesional, ética y confiable en el uso de
            medicamentos, adaptada a cada cliente según su necesidad particular.
            Trabajamos con expertos para garantizar la mejor calidad que nos
            proyecta como una empresa sólida, con reconocimiento nacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
