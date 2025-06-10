import '../../blocks/Vitaminas.css';
import Ensure from '../../images/ensure.png';
import Energol from '../../images/energolCalcio.png';
import Nutren from '../../images/nutren.jpg';
import Glucerna from '../../images/glucerna.png';

const Vitaminas = () => {
  return (
    <div className='vitaminas'>
      <h1>Vitaminas</h1>
      <p>Información sobre vitaminas y su importancia para la salud.</p>
      <div className='vitaminas__container'>
        <div className='vitaminas__card'>
          <img src={Ensure} alt='ensure' className='Vitaminas__img' />
          <h2 className='vitaminas__subtitle'>ENSURE ADVANCE X 850 GRM</h2>
          <p className='vitaminas__text'>
            Suplemento alimenticio que contiene CaHMB, Vitamina D y proteinas.
          </p>
        </div>
        <div className='vitaminas__card'>
          <img src={Energol} alt='energol' className='Vitaminas__img' />
          <h2 className='vitaminas__subtitle'>ENERGOLD CALCIO FRESA</h2>
          <p className='vitaminas__text'>
            Energol es una fórmula ayurvédica que actúa como un tónico y
            revitalizante natural para la salud, ayudando a restaurar el vigor y
            la vitalidad.
          </p>
        </div>
        <div className='vitaminas__card'>
          <img src={Nutren} alt='nutren' className='Vitaminas__img' />
          <h2 className='vitaminas__subtitle'>
            Alimento En Polvo Nutren Senior
          </h2>
          <p className='vitaminas__text'>
            la opción ideal para tener más energía y vitalidad. Nutren® Senior
            ayuda a cubrir la cantidad de nutrientes que tu cuerpo necesita
            diariamente.
          </p>
        </div>
        <div className='vitaminas__card'>
          <img src={Glucerna} alt='glucerna' className='Vitaminas__img' />
          <h2 className='vitaminas__subtitle'>
            GLUCERNA POLVO VAINILLA X 850 GR
          </h2>
          <p className='vitaminas__text'>
            Suplemento nutricional en polvo sabor vainilla para el control de la
            glucosa en personas con diabetes. ¡Disfruta de un delicioso sabor
            mientras cuidas tu salud!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Vitaminas;
