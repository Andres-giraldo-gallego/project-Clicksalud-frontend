import '../../blocks/Fiebre.css';
import Ibuprofeno from '../../images/Ibuprofeno.png';
import Acetaminofen from '../../images/Acetaminofen.png';
import Naproxeno from '../../images/Naproxeno.png';
import Novalgina from '../../images/Novalgina.png';

const Fiebre = () => {
  return (
    <div className='fiebre'>
      <h1>Fiebre</h1>
      <p>
        La fiebre es una respuesta del cuerpo a infecciones o enfermedades. Es
        importante monitorearla y tratarla adecuadamente para evitar
        complicaciones.
      </p>
      <div className='fiebre__container'>
        <div className='fiebre__card'>
          <img src={Ibuprofeno} alt='Ibuprofeno' className='fiebre__img' />
          <h2 className='fiebre__subtitle'>Ibuprofeno</h2>
          <p className='fiebre__text'>
            El Ibuprofeno es un medicamento antiinflamatorio no esteroideo
            (AINE) que se utiliza para reducir la fiebre, aliviar el dolor y
            disminuir la inflamación.
          </p>
        </div>
        <div className='fiebre__card'>
          <img src={Acetaminofen} alt='Acetaminofen' className='fiebre__img' />
          <h2 className='fiebre__subtitle'>Acetaminofen</h2>
          <p className='fiebre__text'>
            El Acetaminofen es un analgésico y antipirético que se utiliza para
            reducir la fiebre y aliviar el dolor leve a moderado. Es seguro para
            la mayoría de las personas cuando se usa según las indicaciones.
          </p>
        </div>
        <div className='fiebre__card'>
          <img src={Naproxeno} alt='Naproxeno' className='fiebre__img' />
          <h2 className='fiebre__subtitle'>Naproxeno</h2>
          <p className='fiebre__text'>
            El Naproxeno es otro AINE que se utiliza para tratar la fiebre,
            aliviar el dolor y reducir la inflamación. Es efectivo para
            condiciones como artritis y dolor menstrual.
          </p>
        </div>
        <div className='fiebre__card'>
          <img src={Novalgina} alt='Novalgina' className='fiebre__img' />
          <h2 className='fiebre__subtitle'>Novalgina</h2>
          <p className='fiebre__text'>
            La Novalgina es un medicamento que contiene metamizol sódico, un
            analgésico y antipirético utilizado para tratar fiebre alta y dolor
            intenso. Es importante usarlo bajo supervisión médica debido a sus
            posibles efectos secundarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fiebre;
