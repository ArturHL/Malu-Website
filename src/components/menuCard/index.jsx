import PropTypes from 'prop-types';
import './index.css';

const MenuCard = ({ title, price, description, imageUrl }) => {
  return (
    <>
      <div className='menuCard'>
        <img src={imageUrl} alt='menu' />
        <div className='containerUtil'>
          <div className='infoContainer'>
            <h2>{title} <span className='price'>{price}</span></h2>
            <p>
              {description}
            </p>
          </div>
          <div className='callToAction'>
            <button className='buttonA'>Compra en 1 Click</button>
            <button className='buttonB'>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MenuCard;
