import '../../blocks/Antigripales.css';
import Congestex from '../../images/Congestex.jpg';
import DolexGripa from '../../images/Dolexgripa.png';
import DolicoxGrip from '../../images/Dolicoxgrip.jpg';
import Zas from '../../images/Zas.png';

const Antigripales = () => {
  return (
    <div className='Antigripales'>
      <h1>Antigripales</h1>
      <p>
        Aquí tienes una lista de medicamentos que pueden ayudar como
        Antigripales, junto con una breve descripción de cada uno:
      </p>
      <div className='Antigripales__container'>
        <div className='Antigripales__card'>
          <img src={Congestex} alt='Congestex' className='Antigripales__img' />
          <h2 className='Antigripales__subtitle'>Congestex</h2>
          <p className='Antigripales__text'>
            Congestex es un medicamento utilizado para aliviar la congestión
            nasal y los síntomas del resfriado. Contiene pseudoefedrina, que
            actúa como descongestionante, y puede ayudar a reducir la
            inflamación de las vías respiratorias.
          </p>
        </div>
        <div className='Antigripales__card'>
          <img
            src={DolexGripa}
            alt='DolexGripal'
            className='Antigripales__img'
          />
          <h2 className='Antigripales__subtitle'>Dolex gripa</h2>
          <p className='Antigripales__text'>
            Dolex gripa es un medicamento utilizado para aliviar los síntomas
            del resfriado y la gripe. Contiene paracetamol, que ayuda a reducir
            la fiebre y el dolor, y puede ser útil para aliviar los síntomas
            asociados con estas afecciones.
          </p>
        </div>
        <div className='Antigripales__card'>
          <img
            src={DolicoxGrip}
            alt='DolicoxGrip'
            className='Antigripales__img'
          />
          <h2 className='Antigripales__subtitle'>Dolicox grip</h2>
          <p className='Antigripales__text'>
            Dolicox grip es un medicamento que combina un analgésico y un
            descongestionante para aliviar los síntomas del resfriado y la
            gripe. Contiene diclofenaco, que ayuda a reducir la inflamación y el
            dolor, y puede ser útil para aliviar los síntomas asociados con
            estas afecciones.
          </p>
        </div>
        <div className='Antigripales__card'>
          <img src={Zas} alt='Zas' className='Antigripales__img' />
          <h2 className='Antigripales__subtitle'>Zas</h2>
          <p className='Antigripales__text'>
            Zas es un medicamento utilizado para aliviar los síntomas del
            resfriado y la gripe. Contiene un antihistamínico, que ayuda a
            reducir la congestión nasal y los estornudos, y puede ser útil para
            aliviar los síntomas asociados con estas afecciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Antigripales;
