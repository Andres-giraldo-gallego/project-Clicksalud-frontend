import '../../blocks/MainCategoriesSection.css';
import { CgPill } from 'react-icons/cg';
import { CgSwiss } from 'react-icons/cg';
import { FaScaleBalanced } from 'react-icons/fa6';
import { GiPillDrop } from 'react-icons/gi';
import { TbBucketDroplet } from 'react-icons/tb';
import { GiEyedropper } from 'react-icons/gi';
import { GiDropWeapon } from 'react-icons/gi';
import { FaBottleDroplet } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MainCategoriesSection = () => {
  const Productos = [
    {
      id: 'Vitaminas',
      title: 'Vitaminas',
      to: '/producto/vitaminas',
      icon: <GiDropWeapon />,
    },
    {
      id: 'Tosseca',
      title: 'Tosseca',
      to: '/producto/Tosseca',
      icon: <FaBottleDroplet />,
    },
    {
      id: 'Tosproductiva',
      title: 'Tos productiva',
      to: '/producto/Tosproductiva',
      icon: <TbBucketDroplet />,
    },
    {
      id: 'Fiebre',
      title: 'Fiebre',
      to: '/producto/Fiebre',
      icon: <CgPill />,
    },
    {
      id: 'Adelgazar',
      title: 'Adelgazar',
      to: '/producto/Adelgazar',
      icon: <FaScaleBalanced />,
    },
    {
      id: 'Antigripales',
      title: 'Antigripales',
      to: '/producto/Antigripales',
      icon: <GiPillDrop />,
    },
    {
      id: 'DolorMuscular',
      title: 'Dolor Muscular',
      to: '/producto/DolorMuscular',
      icon: <CgSwiss />,
    },
    {
      id: 'Hongos',
      title: 'Hongos',
      to: '/producto/Hongos',
      icon: <GiEyedropper />,
    },
  ];
  return (
    <section className='section__main-categories' id='CategoríasPrincipales'>
      <div className='section__container'>
        <div className='section__container-title'>
          <h2 className='Section__Title'>Categorías Principales</h2>
          <p className='section__description'>
            Encuentra exactamente lo que necesitas para tu salud y bienestar
          </p>
        </div>
        <div className='section__grid-cards'>
          {Productos.map((producto, index) => {
            return (
              <Link to={producto.to} key={producto.id}>
                <div className={'section__card-' + (index + 1)}>
                  <h3 className='section__card-title'>{producto.title}</h3>
                  {producto.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MainCategoriesSection;
