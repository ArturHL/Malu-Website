import './index.css'
import PropTypes from 'prop-types'

const ProductCard = ({ title, price, imageUrl }) => {
  return (
    <div className='productCard'>
      <div className='productInfo'>
        <img src={imageUrl} alt="" />
        <div>
          <h4>{title}</h4>
          <p>MX${price}</p>
        </div>
      </div>
      <div className='productController'>
        <button> - </button>
        <p>1</p>
        <button> + </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default ProductCard;
