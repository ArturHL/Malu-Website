import './index.css'
import PropTypes from 'prop-types'
import useProductCard from '../../hooks/Component_Hooks/useProductCard'

const ProductCard = ({id, name, price, image}) => {
  const {addProduct, isInCart, productQuantity, removeFromCart} = useProductCard()

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
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default ProductCard;
