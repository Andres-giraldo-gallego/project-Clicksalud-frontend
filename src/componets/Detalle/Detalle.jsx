import { useParams } from 'react-router-dom';
import Vitaminas from '../Vitaminas/Vitaminas';
import Tosseca from '../Tosseca/Tosseca';
import TosProductiva from '../TosProductiva/TosProductiva';
import Fiebre from '../Fiebre/Fiebre';
import Adelgazar from '../Adelgazar/Adelgazar';
import Antigripales from '../Antigripales/Antigripales';
import DolorMuscular from '../DolorMuscular/DolorMuscular';
import Hongos from '../Hongos/Hongos';

function ProductoDetalle() {
  const { id } = useParams();
  const componentes = {
    'vitaminas': Vitaminas,
    'tosseca': Tosseca,
    'tosproductiva': TosProductiva,
    'fiebre': Fiebre,
    'adelgazar': Adelgazar,
    'antigripales': Antigripales,
    'dolormuscular': DolorMuscular,
    'hongos': Hongos,
  };
  const Componente = componentes[id?.toLowerCase()];

  return (
    <>
      <Componente />
    </>
  );
}
export default ProductoDetalle;
