import './index.css'
import PropTypes from 'prop-types'
import useProductCard from '../../hooks/Component_Hooks/useProductCard'
import ProductDescription from '../productDescription';

const ProductCard = ({id, name, price, image}) => {
  const {editable, handleEditable, addProduct, isInCart, productQuantity, removeProduct} = useProductCard()

  return (
    <>
      <div className='productCard'>
        <div className='productInfo'>

          {/* DESCOMENTAR PARA MOSTRAR IMAGENES EN TARJETAS DE PRODUCTOS */}

          {/* <img src={image} alt="" /> */}
          <div>
            <h4>{name}</h4>
            <p>MX${price}</p>
          </div>
        </div>
        {/* <div className={isInCart(id) ? 'productController' : 'inactive'}>
          <button onClick={()=>{removeProduct(id)}}> - </button>
          <p>{productQuantity(id)}</p>
          <button onClick={()=>{handleEditable(id)}}> + </button>
        </div> */}
        <button className={isInCart(id) ? 'inactive' : 'buttonB'} onClick={()=>{handleEditable(id)}} >Agregar al Carrito</button>
      </div>
      <ProductDescription editable={editable} handleEditable={handleEditable} productId={id} />
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default ProductCard;
