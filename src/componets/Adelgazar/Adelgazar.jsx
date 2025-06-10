import '../../blocks/Adelgazar.css';
import Angiostat from '../../images/Angiostat.png';
import Disgrasil from '../../images/Disgrasil.png';
import Orlistat from '../../images/Orlistat.png';
import Ozempic from '../../images/Ozempic.png';

const Adelgazar = () => {
  return (
    <div className='Adelgazar'>
      <h1>Adelgazar</h1>
      <p>
        Aquí tienes una lista de medicamentos que pueden ayudar a adelgazar,
        junto con una breve descripción de cada uno:
      </p>
      <div className='Adelgazar__container'>
        <div className='Adelgazar__card'>
          <img src={Angiostat} alt='Angiostat' className='Adelgazar__img' />
          <h2 className='Adelgazar__subtitle'>Angiostat</h2>
          <p className='Adelgazar__text'>
            Angiostat es un medicamento utilizado para tratar la obesidad y
            ayudar a adelgazar. Actúa inhibiendo la absorción de grasas en el
            intestino, lo que puede contribuir a la pérdida de peso cuando se
            combina con una dieta adecuada.
          </p>
        </div>
        <div className='Adelgazar__card'>
          <img src={Disgrasil} alt='Disgrasil' className='Adelgazar__img' />
          <h2 className='Adelgazar__subtitle'>Disgrasil</h2>
          <p className='Adelgazar__text'>
            Disgrasil es un medicamento que se utiliza para tratar la obesidad y
            ayudar a adelgazar. Contiene orlistat, que actúa inhibiendo la
            absorción de grasas en el intestino, lo que puede contribuir a la
            pérdida de peso cuando se combina con una dieta adecuada.
          </p>
        </div>
        <div className='Adelgazar__card'>
          <img src={Orlistat} alt='Orlista' className='Adelgazar__img' />
          <h2 className='Adelgazar__subtitle'>Orlistat</h2>
          <p className='Adelgazar__text'>
            Orlistat es un medicamento utilizado para tratar la obesidad y
            ayudar a adelgazar. Actúa inhibiendo la absorción de grasas en el
            intestino, lo que puede contribuir a la pérdida de peso cuando se
            combina con una dieta adecuada.
          </p>
        </div>
        <div className='Adelgazar__card'>
          <img src={Ozempic} alt='Ozempic' className='Adelgazar__img' />
          <h2 className='Adelgazar__subtitle'>Ozempic</h2>
          <p className='Adelgazar__text'>
            Ozempic es un medicamento utilizado para tratar la diabetes tipo 2,
            pero también se ha utilizado para ayudar a adelgazar. Actúa
            regulando los niveles de azúcar en la sangre y puede contribuir a la
            pérdida de peso cuando se combina con una dieta adecuada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adelgazar;
