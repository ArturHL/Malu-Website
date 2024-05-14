import PropTypes from 'prop-types';
import './index.css';
import useMenuCard from '../../hooks/Component_Hooks/useMenuCard';

const MenuCard = ({id, name, description, price, image}) => {
  const { addProduct } = useMenuCard()
  // la manera de filtrar productos deberia ser a la hora de hacer
  // fetch para traer solo los productos que tengan available = true
  return (
    <>
      <div className='menuCard'>
        <img src={image} alt={name} />
        <div className='containerUtil'>
          <div className='infoContainer'>
            <h2>{name} <span className='price'>${price}</span></h2>
            <p>
              {description}
            </p>
          </div>
          <div className='callToAction'>
            <button className='buttonA'>Compra en 1 Click</button>
            <button className='buttonB' onClick={()=>{addProduct(id)}}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

MenuCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
};

export default MenuCard;
