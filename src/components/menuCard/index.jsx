import PropTypes from 'prop-types';
import './index.css';

const MenuCard = ({id, name, description, price, image}) => {
  const { addProduct } = useMenuCard()

  return (
    <>
      <div className='menuCard'>
        <img src={image} alt='menu' />
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
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  category: PropTypes.number.isRequired,
};

export default MenuCard;
