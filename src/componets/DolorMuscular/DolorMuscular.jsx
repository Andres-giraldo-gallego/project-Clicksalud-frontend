import '../../blocks/DolorMuscular.css';
import Tizafen from '../../images/Tizafen.jpeg';
import Reladol from '../../images/Reladol.jpeg';
import Meloxicam from '../../images/Meloxicam.png';
import Dorixina from '../../images/Dorixina.jpg';

const DolorMuscular = () => {
  return (
    <div className='DolorMuscular'>
      <h1>DolorMuscular</h1>
      <p>
        Aquí tienes una lista de medicamentos que pueden ayudar a DolorMuscular,
        junto con una breve descripción de cada uno:
      </p>
      <div className='DolorMuscular__container'>
        <div className='DolorMuscular__card'>
          <img src={Tizafen} alt='Tizafen' className='DolorMuscular__img' />
          <h2 className='DolorMuscular__subtitle'>Tizafen</h2>
          <p className='DolorMuscular__text'>
            Tizafen es un medicamento utilizado para tratar el dolor y la
            inflamación. Contiene un principio activo que actúa como analgésico
            y antiinflamatorio, lo que puede ayudar a aliviar el DolorMuscular.
          </p>
        </div>
        <div className='DolorMuscular__card'>
          <img src={Reladol} alt='Reladol' className='DolorMuscular__img' />
          <h2 className='DolorMuscular__subtitle'>Reladol</h2>
          <p className='DolorMuscular__text'>
            Reladol es un medicamento que se utiliza para aliviar el dolor y la
            inflamación. Contiene un principio activo que actúa como analgésico
            y antiinflamatorio, lo que puede ser útil para tratar el
            DolorMuscular.
          </p>
        </div>
        <div className='DolorMuscular__card'>
          <img src={Meloxicam} alt='Meloxicam' className='DolorMuscular__img' />
          <h2 className='DolorMuscular__subtitle'>Meloxicam</h2>
          <p className='DolorMuscular__text'>
            Meloxicam es un medicamento antiinflamatorio no esteroideo (AINE)
            que se utiliza para aliviar el dolor y la inflamación. Es eficaz
            para tratar el DolorMuscular y puede ayudar a reducir la incomodidad
            asociada con esta afección.
          </p>
        </div>
        <div className='DolorMuscular__card'>
          <img src={Dorixina} alt='Dorixina' className='DolorMuscular__img' />
          <h2 className='DolorMuscular__subtitle'>Dorixina relax</h2>
          <p className='DolorMuscular__text'>
            Dorixina relax es un medicamento que combina un analgésico y un
            relajante muscular. Es útil para aliviar el DolorMuscular y reducir
            la tensión muscular, lo que puede ayudar a mejorar la movilidad y el
            bienestar general.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DolorMuscular;
