import './index.css'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { products } from '../../api/fakeData';

const ProductCard = ({id, name, price, image}) => {
  const {cart, addToCart, removeFromCart} = useContext(CartContext);

  function addProduct(id) {
    const product = products[id]
    addToCart(product)
  }

  function isInCart(id) {
    const product = cart.find((product) => product.id === id)
    return product ? true : false
  }

  function productQuantity(id) {
    const product = cart.find((product) => product.id === id)
    return product ? product.quantity : 0
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
      <div className={isInCart(id) ? 'productController' : 'inactive'}>
        <button onClick={()=>{removeFromCart(id)}}> - </button>
        <p>{productQuantity(id)}</p>
        <button onClick={()=>{addProduct(id)}}> + </button>
      </div>
      <button className={isInCart(id) ? 'inactive' : 'buttonB'} onClick={()=>{addProduct(id)}} >Agregar al Carrito</button>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ProductCard;
