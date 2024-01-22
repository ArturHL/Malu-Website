import CategoryCard from '../../categoryCard';
import ProductCard from '../../productCard';
import { IoIosArrowUp } from "react-icons/io";
import './index.css'
import { products } from '../../../api/fakeData';

const ProductPage = () => {
  return (
    <section className='productMenuSection'>
      <CategoryCard  title='Pozole' url='/receta-pozole-sin-carne.jpeg'/>
      {
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          )
        })
      }
      <a className='goBack' href='/menu'><IoIosArrowUp />Volver</a>
    </section>
  );
};

export default ProductPage;
