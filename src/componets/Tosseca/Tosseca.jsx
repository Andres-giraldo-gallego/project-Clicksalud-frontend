import '../../blocks/Tosseca.css';
import Clorferinamina from '../../images/clorferinamina.png';
import Gripalgin from '../../images/gripalgin.png';
import Dihidrocodeina from '../../images/dihidrocodeina.png';
import Curatos from '../../images/curatos.png';

const Tosseca = () => {
  return (
    <div className='tosseca'>
      <h1>Tos seca</h1>
      <p>Información sobre Tos seca y su importancia para la salud.</p>
      <div className='tosseca__container'>
        <div className='tosseca__card'>
          <img
            src={Clorferinamina}
            alt='clorferinamina'
            className='tosseca__img'
          />
          <h2 className='tosseca__subtitle'>Clorferinamina</h2>
          <p className='tosseca__text'>
            La clorfenamina es un antihistamínico utilizado para aliviar los
            síntomas de alergias, como la rinitis alérgica y la urticaria. Actúa
            bloqueando la acción de la histamina en el cuerpo.
          </p>
        </div>
        <div className='tosseca__card'>
          <img src={Gripalgin} alt='Gripalgin' className='tosseca__img' />
          <h2 className='tosseca__subtitle'>Griplagin</h2>
          <p className='tosseca__text'>
            Gripalgin es un medicamento utilizado para aliviar los síntomas de
            la tos seca no productiva.
          </p>
        </div>
        <div className='tosseca__card'>
          <img
            src={Dihidrocodeina}
            alt='dihidrocodeina'
            className='tosseca__img'
          />
          <h2 className='tosseca__subtitle'>Dihidrocodeina</h2>
          <p className='tosseca__text'>
            Se utiliza como antitusígeno para aliviar la tos seca.
          </p>
        </div>
        <div className='tosseca__card'>
          <img src={Curatos} alt='curatos' className='tosseca__img' />
          <h2 className='tosseca__subtitle'>Curatos</h2>
          <p className='tosseca__text'>
            Curatos es un medicamento utilizado para aliviar la tos seca y
            persistente. Contiene un antitusígeno que ayuda a reducir la
            irritación de la garganta y a suprimir el reflejo de la tos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tosseca;
