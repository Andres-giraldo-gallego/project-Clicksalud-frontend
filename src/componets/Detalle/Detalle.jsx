import { useParams } from 'react-router-dom';
import Vitaminas from '../Vitaminas/Vitaminas';
import Tosseca from '../Tosseca/Tosseca';
import TosProductiva from '../TosProductiva/TosProductiva';

function ProductoDetalle() {
  const { id } = useParams();
  const componentes = {
    'vitaminas': Vitaminas,
    'tosseca': Tosseca,
    'tosproductiva': TosProductiva,
  };
  const Componente = componentes[id?.toLowerCase()];

  return (
    <>
      <Componente />
    </>
  );
}
export default ProductoDetalle;
