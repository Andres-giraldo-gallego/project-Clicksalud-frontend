import '../../blocks/TosProductiva.css';
import Bisolvon from '../../images/bisolvon.png';
import Curatos from '../../images/curatos.png';
import Neboret from '../../images/neboret.png';
import Mucolitico from '../../images/tosconflema.png';

const TosProductiva = () => {
  return (
    <div className='tosproductiva'>
      <h1>Tos productiva</h1>
      <p>
        Informacion sobre la tos con flema y su importancia de atenderla a
        tiempo.
      </p>
      <div className='tosproductiva__container'>
        <div className='tosproductiva__card'>
          <img src={Bisolvon} alt='bisolvon' className='tosproductiva__img' />
          <h2 className='tosproductiva__subtitle'>Bisolvon</h2>
          <p className='tosproductiva__text'>
            Bisolvon es un medicamento utilizado para tratar la tos productiva,
            ayudando a aflojar y expulsar las mucosidades de las vías
            respiratorias.
          </p>
        </div>
        <div className='tosproductiva__card'>
          <img src={Neboret} alt='Neboret' className='tosproductiva__img' />
          <h2 className='tosproductiva__subtitle'>Neboret</h2>
          <p className='tosproductiva__text'>
            Neboret es un medicamento utilizado para tratar la tos productiva,
            ayudando a aflojar y expulsar las mucosidades de las vías
            respiratorias.
          </p>
        </div>
        <div className='tosproductiva__card'>
          <img src={Mucolitico} alt='abrilar' className='tosproductiva__img' />
          <h2 className='tosproductiva__subtitle'>Abrilar</h2>
          <p className='tosproductiva__text'>
            Abrilar es un mucolítico que ayuda a reducir la viscosidad del moco,
            facilitando su expulsión y aliviando la tos productiva.
          </p>
        </div>
        <div className='tosproductiva__card'>
          <img src={Curatos} alt='curatos' className='tosproductiva__img' />
          <h2 className='tosproductiva__subtitle'>Curatos</h2>
          <p className='tosproductiva__text'>
            Curatos es un medicamento utilizado para aliviar la tos productiva y
            persistente. Contiene un antitusígeno que ayuda a reducir la
            irritación de la garganta y a suprimir el reflejo de la tos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TosProductiva;
