import './index.css'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { products } from '../../api/fakeData';

const ProductCard = ({id, name, price, image, quantity}) => {
  const {addToCart, removeFromCart} = useContext(CartContext);

  function addProduct(id) {
    const product = products[id]
    addToCart(product)
  }

  return (
    <div className='productCard'>
      <div className='productInfo'>
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>MX${price}</p>
        </div>
      </div>
      <div className='productController'>
        <button onClick={()=>{removeFromCart(id)}}> - </button>
        <p>{quantity}</p>
        <button onClick={()=>{addProduct(id)}}> + </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default ProductCard;
