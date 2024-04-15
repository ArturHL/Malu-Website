import CategoryCard from '../../categoryCard';
import ProductCard from '../../productCard';
import { IoIosArrowUp } from "react-icons/io";
import './index.css'
import useProduct from '../../../hooks/useProduct';
import { useEffect } from 'react';

const ProductPage = () => {
  const { product, isLoading, getProductsByCategoryId } = useProduct();
  useEffect(() => {
    getProductsByCategoryId();
  }, []);
  return (
    <section className='productMenuSection'>
      <CategoryCard click={false} title={JSON.parse(sessionStorage.getItem('category')).title} url={JSON.parse(sessionStorage.getItem('category')).url}/>
      {/* {
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
      } */}
      {
        isLoading ? 
          <p>Cargando...</p> 
          : 
          product.map((product, index) => (
            <ProductCard key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>
          ))
      }
      <a className='goBack' href='/menu'><IoIosArrowUp />Volver</a>
    </section>
  );
};

export default ProductPage;
