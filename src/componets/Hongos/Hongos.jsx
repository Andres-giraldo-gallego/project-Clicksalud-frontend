import '../../blocks/hongos.css';
import Betagen from '../../images/Betagen.jpg';
import Fluconazol from '../../images/Fluconazol.png';
import Ketoconazol from '../../images/Ketoconazol.jpeg';
import Terbinafina from '../../images/Terbinafina.png';

const Hongos = () => {
  return (
    <div className='hongos'>
      <h1>Hongos</h1>
      <p>
        Los hongos son organismos eucariotas que pueden causar diversas
        infecciones en la piel, las uñas y otros tejidos. Estas infecciones
        pueden ser incómodas y, en algunos casos, dolorosas. Es importante
        tratar las infecciones por hongos de manera adecuada para evitar que se
        propaguen y causen más problemas de salud.
      </p>
      <div className='hongos__container'>
        <div className='hongos__card'>
          <img src={Betagen} alt='Betagen' className='hongos__img' />
          <h2 className='hongos__subtitle'>Betagen</h2>
          <p className='hongos__text'>
            Betagen es un medicamento antimicótico que se utiliza para tratar
            infecciones por hongos en la piel y las uñas. Contiene un principio
            activo que actúa contra una amplia variedad de hongos, ayudando a
            eliminar la infección y aliviar los síntomas asociados.
          </p>
        </div>
        <div className='hongos__card'>
          <img src={Fluconazol} alt='Fluconazol' className='hongos__img' />
          <h2 className='hongos__subtitle'>Fluconazol</h2>
          <p className='hongos__text'>
            Fluconazol es un antifúngico que se utiliza para tratar diversas
            infecciones por hongos, incluyendo las que afectan la piel y las
            mucosas. Es eficaz contra una amplia gama de hongos y puede ser
            administrado por vía oral o tópica, dependiendo de la gravedad de la
            infección.
          </p>
        </div>
        <div className='hongos__card'>
          <img src={Ketoconazol} alt='Ketoconazol' className='hongos__img' />
          <h2 className='hongos__subtitle'>Ketoconazol</h2>
          <p className='hongos__text'>
            Ketoconazol es un antifúngico que se utiliza para tratar infecciones
            por hongos en la piel y el cuero cabelludo. Actúa inhibiendo el
            crecimiento de los hongos y aliviando los síntomas como picazón,
            enrojecimiento e inflamación.
          </p>
        </div>
        <div className='hongos__card'>
          <img src={Terbinafina} alt='Terbinafina' className='hongos__img' />
          <h2 className='hongos__subtitle'>Terbinafina</h2>
          <p className='hongos__text'>
            Terbinafina es un medicamento antifúngico que se utiliza para tratar
            infecciones por hongos en la piel y las uñas. Es especialmente
            eficaz contra hongos dermatofitos y puede ayudar a eliminar la
            infección de manera efectiva, promoviendo una recuperación más
            rápida de los síntomas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hongos;
